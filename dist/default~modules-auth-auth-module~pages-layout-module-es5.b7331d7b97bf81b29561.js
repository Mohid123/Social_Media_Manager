(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-auth-auth-module~pages-layout-module"], {
    /***/
    "1PZ1":
    /*!**********************************************************!*\
      !*** ./node_modules/ngx-joyride/fesm2015/ngx-joyride.js ***!
      \**********************************************************/

    /*! exports provided: ARROW_SIZE, DEFAULT_DISTANCE_FROM_MARGIN_LEFT, DEFAULT_DISTANCE_FROM_MARGIN_TOP, DEFAULT_TEXTS, DEFAULT_THEME_COLOR, DEFAULT_TIMEOUT_BETWEEN_STEPS, DISTANCE_FROM_TARGET, DocumentService, DomRefService, EventListenerService, JoyrideArrowComponent, JoyrideBackdropService, JoyrideButtonComponent, JoyrideCloseButtonComponent, JoyrideDirective, JoyrideModule, JoyrideOptionsService, JoyrideService, JoyrideStepComponent, JoyrideStepService, JoyrideStepsContainerService, KEY_CODE, LoggerService, NO_POSITION, ObservableCustomTexts, STEP_DEFAULT_POSITION, Scroll, StepActionType, StepDrawerService, TemplatesService, routerModuleForChild */

    /***/
    function PZ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ARROW_SIZE", function () {
        return ARROW_SIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_DISTANCE_FROM_MARGIN_LEFT", function () {
        return DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_DISTANCE_FROM_MARGIN_TOP", function () {
        return DEFAULT_DISTANCE_FROM_MARGIN_TOP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TEXTS", function () {
        return DEFAULT_TEXTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME_COLOR", function () {
        return DEFAULT_THEME_COLOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT_BETWEEN_STEPS", function () {
        return DEFAULT_TIMEOUT_BETWEEN_STEPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DISTANCE_FROM_TARGET", function () {
        return DISTANCE_FROM_TARGET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return DocumentService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomRefService", function () {
        return DomRefService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListenerService", function () {
        return EventListenerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideArrowComponent", function () {
        return JoyrideArrowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideBackdropService", function () {
        return JoyrideBackdropService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideButtonComponent", function () {
        return JoyrideButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideCloseButtonComponent", function () {
        return JoyrideCloseButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideDirective", function () {
        return JoyrideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideModule", function () {
        return JoyrideModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideOptionsService", function () {
        return JoyrideOptionsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideService", function () {
        return JoyrideService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideStepComponent", function () {
        return JoyrideStepComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideStepService", function () {
        return JoyrideStepService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoyrideStepsContainerService", function () {
        return JoyrideStepsContainerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_CODE", function () {
        return KEY_CODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
        return LoggerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_POSITION", function () {
        return NO_POSITION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObservableCustomTexts", function () {
        return ObservableCustomTexts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STEP_DEFAULT_POSITION", function () {
        return STEP_DEFAULT_POSITION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scroll", function () {
        return Scroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepActionType", function () {
        return StepActionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepDrawerService", function () {
        return StepDrawerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatesService", function () {
        return TemplatesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routerModuleForChild", function () {
        return routerModuleForChild;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _c0 = ["stepHolder"];
      var _c1 = ["stepContainer"];

      function JoyrideStepComponent_joyride_arrow_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "joyride-arrow", 17);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.arrowTopPosition, "px")("left", ctx_r1.arrowLeftPosition, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx_r1.arrowPosition);
        }
      }

      function JoyrideStepComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function JoyrideStepComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.text), " ");
        }
      }

      function JoyrideStepComponent_div_15_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function JoyrideStepComponent_div_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.counter);
        }
      }

      function JoyrideStepComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoyrideStepComponent_div_15_ng_container_1_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoyrideStepComponent_div_15_ng_template_2_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.customCounter ? ctx_r6.customCounter : _r12)("ngTemplateOutletContext", ctx_r6.counterData);
        }
      }

      function JoyrideStepComponent_div_17_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function JoyrideStepComponent_div_17_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "joyride-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r16.themeColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r16.prevText));
        }
      }

      function JoyrideStepComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoyrideStepComponent_div_17_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoyrideStepComponent_div_17_ng_container_1_Template, 1, 0, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoyrideStepComponent_div_17_ng_template_2_Template, 3, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.customPrevButton ? ctx_r7.customPrevButton : _r15);
        }
      }

      function JoyrideStepComponent_div_18_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function JoyrideStepComponent_div_18_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "joyride-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r21.themeColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r21.nextText));
        }
      }

      function JoyrideStepComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoyrideStepComponent_div_18_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoyrideStepComponent_div_18_ng_container_1_Template, 1, 0, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoyrideStepComponent_div_18_ng_template_2_Template, 3, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.customNextButton ? ctx_r8.customNextButton : _r20);
        }
      }

      function JoyrideStepComponent_ng_template_19_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function JoyrideStepComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "joyride-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r26.themeColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r26.doneText));
        }
      }

      function JoyrideStepComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoyrideStepComponent_ng_template_19_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JoyrideStepComponent_ng_template_19_ng_container_1_Template, 1, 0, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoyrideStepComponent_ng_template_19_ng_template_2_Template, 3, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.customDoneButton ? ctx_r10.customDoneButton : _r25);
        }
      }

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "background-color": a0,
          "color": a1,
          "border-color": a2
        };
      };

      var _c3 = ["*"];

      var JoyrideStep = function JoyrideStep() {
        _classCallCheck(this, JoyrideStep);

        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.text = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
      };

      var DEFAULT_THEME_COLOR = '#3b5560';
      var STEP_DEFAULT_POSITION = 'bottom';
      var DEFAULT_TIMEOUT_BETWEEN_STEPS = 1;

      var ObservableCustomTexts = function ObservableCustomTexts() {
        _classCallCheck(this, ObservableCustomTexts);
      };

      var DEFAULT_TEXTS = {
        prev: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('prev'),
        next: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('next'),
        done: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('done'),
        close: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
      };

      var JoyrideOptionsService = /*#__PURE__*/function () {
        function JoyrideOptionsService() {
          _classCallCheck(this, JoyrideOptionsService);

          this.themeColor = DEFAULT_THEME_COLOR;
          this.stepDefaultPosition = STEP_DEFAULT_POSITION;
          this.logsEnabled = false;
          this.showCounter = true;
          this.showPrevButton = true;
          this.stepsOrder = [];
        }

        _createClass(JoyrideOptionsService, [{
          key: "setOptions",
          value: function setOptions(options) {
            this.stepsOrder = options.steps;
            this.stepDefaultPosition = options.stepDefaultPosition ? options.stepDefaultPosition : this.stepDefaultPosition;
            this.logsEnabled = typeof options.logsEnabled !== 'undefined' ? options.logsEnabled : this.logsEnabled;
            this.showCounter = typeof options.showCounter !== 'undefined' ? options.showCounter : this.showCounter;
            this.showPrevButton = typeof options.showPrevButton !== 'undefined' ? options.showPrevButton : this.showPrevButton;
            this.themeColor = options.themeColor ? options.themeColor : this.themeColor;
            this.firstStep = options.startWith;
            this.waitingTime = typeof options.waitingTime !== 'undefined' ? options.waitingTime : DEFAULT_TIMEOUT_BETWEEN_STEPS;
            typeof options.customTexts !== 'undefined' ? this.setCustomText(options.customTexts) : this.setCustomText(DEFAULT_TEXTS);
          }
        }, {
          key: "getBackdropColor",
          value: function getBackdropColor() {
            return this.hexToRgb(this.themeColor);
          }
        }, {
          key: "getThemeColor",
          value: function getThemeColor() {
            return this.themeColor;
          }
        }, {
          key: "getStepDefaultPosition",
          value: function getStepDefaultPosition() {
            return this.stepDefaultPosition;
          }
        }, {
          key: "getStepsOrder",
          value: function getStepsOrder() {
            return this.stepsOrder;
          }
        }, {
          key: "getFirstStep",
          value: function getFirstStep() {
            return this.firstStep;
          }
        }, {
          key: "getWaitingTime",
          value: function getWaitingTime() {
            return this.waitingTime;
          }
        }, {
          key: "areLogsEnabled",
          value: function areLogsEnabled() {
            return this.logsEnabled;
          }
        }, {
          key: "isCounterVisible",
          value: function isCounterVisible() {
            return this.showCounter;
          }
        }, {
          key: "isPrevButtonVisible",
          value: function isPrevButtonVisible() {
            return this.showPrevButton;
          }
        }, {
          key: "getCustomTexts",
          value: function getCustomTexts() {
            return this.customTexts;
          }
        }, {
          key: "setCustomText",
          value: function setCustomText(texts) {
            var prev;
            var next;
            var done;
            var close;
            prev = texts.prev ? texts.prev : DEFAULT_TEXTS.prev;
            next = texts.next ? texts.next : DEFAULT_TEXTS.next;
            done = texts.done ? texts.done : DEFAULT_TEXTS.done;
            close = texts.close ? texts.close : DEFAULT_TEXTS.close;
            this.customTexts = {
              prev: this.toObservable(prev),
              next: this.toObservable(next),
              done: this.toObservable(done),
              close: this.toObservable(close)
            };
          }
        }, {
          key: "toObservable",
          value: function toObservable(value) {
            return value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
          }
        }, {
          key: "hexToRgb",
          value: function hexToRgb(hex) {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
              return r + r + g + g + b + b;
            });
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? "".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16)) : null;
          }
        }]);

        return JoyrideOptionsService;
      }();

      JoyrideOptionsService.ɵfac = function JoyrideOptionsService_Factory(t) {
        return new (t || JoyrideOptionsService)();
      };

      JoyrideOptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JoyrideOptionsService,
        factory: JoyrideOptionsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideOptionsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      var JOYRIDE = 'ngx-joyride:::';

      var LoggerService = /*#__PURE__*/function () {
        function LoggerService(optionService) {
          _classCallCheck(this, LoggerService);

          this.optionService = optionService;
        }

        _createClass(LoggerService, [{
          key: "debug",
          value: function debug(message) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (this.optionService.areLogsEnabled()) {
              console.debug(JOYRIDE + message, data);
            }
          }
        }, {
          key: "info",
          value: function info(message) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (this.optionService.areLogsEnabled()) {
              console.info(JOYRIDE + message, data);
            }
          }
        }, {
          key: "warn",
          value: function warn(message) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (this.optionService.areLogsEnabled()) {
              console.warn(JOYRIDE + message, data);
            }
          }
        }, {
          key: "error",
          value: function error(message) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (this.optionService.areLogsEnabled()) {
              console.error(JOYRIDE + message, data);
            }
          }
        }]);

        return LoggerService;
      }();

      LoggerService.ɵfac = function LoggerService_Factory(t) {
        return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideOptionsService));
      };

      LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoggerService,
        factory: LoggerService.ɵfac
      });

      LoggerService.ctorParameters = function () {
        return [{
          type: JoyrideOptionsService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: JoyrideOptionsService
          }];
        }, null);
      })();

      var JoyrideError = /*#__PURE__*/function (_Error) {
        _inherits(JoyrideError, _Error);

        var _super = _createSuper(JoyrideError);

        function JoyrideError(message) {
          var _this2;

          _classCallCheck(this, JoyrideError);

          _this2 = _super.call(this, message);
          Object.setPrototypeOf(_assertThisInitialized(_this2), JoyrideError.prototype);
          return _this2;
        }

        return JoyrideError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var JoyrideStepDoesNotExist = /*#__PURE__*/function (_Error2) {
        _inherits(JoyrideStepDoesNotExist, _Error2);

        var _super2 = _createSuper(JoyrideStepDoesNotExist);

        function JoyrideStepDoesNotExist(message) {
          var _this3;

          _classCallCheck(this, JoyrideStepDoesNotExist);

          _this3 = _super2.call(this, message);
          Object.setPrototypeOf(_assertThisInitialized(_this3), JoyrideStepDoesNotExist.prototype);
          return _this3;
        }

        return JoyrideStepDoesNotExist;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var JoyrideStepOutOfRange = /*#__PURE__*/function (_Error3) {
        _inherits(JoyrideStepOutOfRange, _Error3);

        var _super3 = _createSuper(JoyrideStepOutOfRange);

        function JoyrideStepOutOfRange(message) {
          var _this4;

          _classCallCheck(this, JoyrideStepOutOfRange);

          _this4 = _super3.call(this, message);
          Object.setPrototypeOf(_assertThisInitialized(_this4), JoyrideStepOutOfRange.prototype);
          return _this4;
        }

        return JoyrideStepOutOfRange;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var ROUTE_SEPARATOR = '@';

      var Step = function Step() {
        _classCallCheck(this, Step);
      };

      var StepActionType;

      (function (StepActionType) {
        StepActionType["NEXT"] = "NEXT";
        StepActionType["PREV"] = "PREV";
      })(StepActionType || (StepActionType = {}));

      var JoyrideStepsContainerService = /*#__PURE__*/function () {
        function JoyrideStepsContainerService(stepOptions, logger) {
          _classCallCheck(this, JoyrideStepsContainerService);

          this.stepOptions = stepOptions;
          this.logger = logger;
          this.tempSteps = [];
          this.currentStepIndex = -2;
          this.stepHasBeenModified = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(JoyrideStepsContainerService, [{
          key: "getFirstStepIndex",
          value: function getFirstStepIndex() {
            var firstStep = this.stepOptions.getFirstStep();
            var stepIds = this.stepOptions.getStepsOrder();
            var index = stepIds.indexOf(firstStep);

            if (index < 0) {
              index = 0;
              if (firstStep !== undefined) this.logger.warn("The step ".concat(firstStep, " does not exist. Check in your step list if it's present."));
            }

            return index;
          }
        }, {
          key: "init",
          value: function init() {
            var _this5 = this;

            this.logger.info('Initializing the steps array.');
            this.steps = [];
            this.currentStepIndex = this.getFirstStepIndex() - 1;
            var stepIds = this.stepOptions.getStepsOrder();
            stepIds.forEach(function (stepId) {
              return _this5.steps.push({
                id: stepId,
                step: null
              });
            });
          }
        }, {
          key: "addStep",
          value: function addStep(stepToAdd) {
            var stepExist = this.tempSteps.filter(function (step) {
              return step.name === stepToAdd.name;
            }).length > 0;

            if (!stepExist) {
              this.logger.info("Adding step ".concat(stepToAdd.name, " to the steps list."));
              this.tempSteps.push(stepToAdd);
            } else {
              var stepIndexToReplace = this.tempSteps.findIndex(function (step) {
                return step.name === stepToAdd.name;
              });
              this.tempSteps[stepIndexToReplace] = stepToAdd;
            }
          }
        }, {
          key: "get",
          value: function get(action) {
            if (action === StepActionType.NEXT) this.currentStepIndex++;else this.currentStepIndex--;
            if (this.currentStepIndex < 0 || this.currentStepIndex >= this.steps.length) throw new JoyrideStepOutOfRange('The first or last step of the tour cannot be found!');
            var stepName = this.getStepName(this.steps[this.currentStepIndex].id);
            var index = this.tempSteps.findIndex(function (step) {
              return step.name === stepName;
            });
            var stepFound = this.tempSteps[index];
            this.steps[this.currentStepIndex].step = stepFound;

            if (stepFound == null) {
              this.logger.warn("Step ".concat(this.steps[this.currentStepIndex].id, " not found in the DOM. Check if it's hidden by *ngIf directive."));
            }

            return stepFound;
          }
        }, {
          key: "getStepRoute",
          value: function getStepRoute(action) {
            var stepID;

            if (action === StepActionType.NEXT) {
              stepID = this.steps[this.currentStepIndex + 1] ? this.steps[this.currentStepIndex + 1].id : null;
            } else {
              stepID = this.steps[this.currentStepIndex - 1] ? this.steps[this.currentStepIndex - 1].id : null;
            }

            var stepRoute = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[1] : '';
            return stepRoute;
          }
        }, {
          key: "updatePosition",
          value: function updatePosition(stepName, position) {
            var index = this.getStepIndex(stepName);

            if (this.steps[index].step) {
              this.steps[index].step.position = position;
              this.stepHasBeenModified.next(this.steps[index].step);
            } else {
              this.logger.warn("Trying to modify the position of ".concat(stepName, " to ").concat(position, ". Step not found!Is this step located in a different route?"));
            }
          }
        }, {
          key: "getStepNumber",
          value: function getStepNumber(stepName) {
            return this.getStepIndex(stepName) + 1;
          }
        }, {
          key: "getStepsCount",
          value: function getStepsCount() {
            var stepsOrder = this.stepOptions.getStepsOrder();
            return stepsOrder.length;
          }
        }, {
          key: "getStepIndex",
          value: function getStepIndex(stepName) {
            var index = this.steps.map(function (step) {
              return step.id.includes(ROUTE_SEPARATOR) ? step.id.split(ROUTE_SEPARATOR)[0] : step.id;
            }).findIndex(function (name) {
              return stepName === name;
            });
            if (index === -1) throw new JoyrideError("The step with name: ".concat(stepName, " does not exist in the step list."));
            return index;
          }
        }, {
          key: "getStepName",
          value: function getStepName(stepID) {
            var stepName = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[0] : stepID;
            return stepName;
          }
        }]);

        return JoyrideStepsContainerService;
      }();

      JoyrideStepsContainerService.ɵfac = function JoyrideStepsContainerService_Factory(t) {
        return new (t || JoyrideStepsContainerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LoggerService));
      };

      JoyrideStepsContainerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JoyrideStepsContainerService,
        factory: JoyrideStepsContainerService.ɵfac
      });

      JoyrideStepsContainerService.ctorParameters = function () {
        return [{
          type: JoyrideOptionsService
        }, {
          type: LoggerService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideStepsContainerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: JoyrideOptionsService
          }, {
            type: LoggerService
          }];
        }, null);
      })();

      var DomRefService = /*#__PURE__*/function () {
        function DomRefService(platformId) {
          _classCallCheck(this, DomRefService);

          this.platformId = platformId;
          this.fakeDocument = {
            body: {},
            documentElement: {}
          };
          this.fakeWindow = {
            document: this.fakeDocument,
            navigator: {}
          };
        }

        _createClass(DomRefService, [{
          key: "getNativeWindow",
          value: function getNativeWindow() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) return window;else return this.fakeWindow;
          }
        }, {
          key: "getNativeDocument",
          value: function getNativeDocument() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) return document;else return this.fakeDocument;
          }
        }]);

        return DomRefService;
      }();

      DomRefService.ɵfac = function DomRefService_Factory(t) {
        return new (t || DomRefService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      DomRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DomRefService,
        factory: DomRefService.ɵfac
      });

      DomRefService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomRefService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();

      var TemplatesService = /*#__PURE__*/function () {
        function TemplatesService() {
          _classCallCheck(this, TemplatesService);
        }

        _createClass(TemplatesService, [{
          key: "setPrevButton",
          value: function setPrevButton(template) {
            this._prevButton = template;
          }
        }, {
          key: "getPrevButton",
          value: function getPrevButton() {
            return this._prevButton;
          }
        }, {
          key: "setNextButton",
          value: function setNextButton(template) {
            this._nextButton = template;
          }
        }, {
          key: "getNextButton",
          value: function getNextButton() {
            return this._nextButton;
          }
        }, {
          key: "setDoneButton",
          value: function setDoneButton(template) {
            this._doneButton = template;
          }
        }, {
          key: "getDoneButton",
          value: function getDoneButton() {
            return this._doneButton;
          }
        }, {
          key: "setCounter",
          value: function setCounter(template) {
            this._counter = template;
          }
        }, {
          key: "getCounter",
          value: function getCounter() {
            return this._counter;
          }
        }]);

        return TemplatesService;
      }();

      TemplatesService.ɵfac = function TemplatesService_Factory(t) {
        return new (t || TemplatesService)();
      };

      TemplatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TemplatesService,
        factory: TemplatesService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var NO_POSITION = 'NO_POSITION';

      var JoyrideDirective = /*#__PURE__*/function () {
        function JoyrideDirective(joyrideStepsContainer, viewContainerRef, domService, router, templateService, platformId) {
          _classCallCheck(this, JoyrideDirective);

          this.joyrideStepsContainer = joyrideStepsContainer;
          this.viewContainerRef = viewContainerRef;
          this.domService = domService;
          this.router = router;
          this.templateService = templateService;
          this.platformId = platformId;
          this.stepPosition = NO_POSITION;
          this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = [];
          this.windowRef = this.domService.getNativeWindow();
          this.step = new JoyrideStep();
        }

        _createClass(JoyrideDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) return;
            if (this.prevTemplate) this.templateService.setPrevButton(this.prevTemplate);
            if (this.nextTemplate) this.templateService.setNextButton(this.nextTemplate);
            if (this.doneTemplate) this.templateService.setDoneButton(this.doneTemplate);
            if (this.counterTemplate) this.templateService.setCounter(this.counterTemplate);
            this.step.position = this.stepPosition;
            this.step.targetViewContainer = this.viewContainerRef;
            this.setAsyncFields(this.step);
            this.step.stepContent = this.stepContent;
            this.step.stepContentParams = this.stepContentParams;
            this.step.nextClicked = this.next;
            this.step.prevCliked = this.prev;
            this.step.tourDone = this.done;
            if (!this.name) throw new JoyrideError("All the steps should have the 'joyrideStep' property set with a custom name.");
            this.step.name = this.name;
            this.step.route = this.router.url.substr(0, 1) === '/' ? this.router.url.substr(1) : this.router.url;
            this.step.transformCssStyle = this.windowRef.getComputedStyle(this.viewContainerRef.element.nativeElement).transform;
            this.step.isElementOrAncestorFixed = this.isElementFixed(this.viewContainerRef.element) || this.isAncestorsFixed(this.viewContainerRef.element.nativeElement.parentElement);
            this.joyrideStepsContainer.addStep(this.step);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['title'] || changes['text']) {
              this.setAsyncFields(this.step);
            }
          }
        }, {
          key: "isElementFixed",
          value: function isElementFixed(element) {
            return this.windowRef.getComputedStyle(element.nativeElement).position === 'fixed';
          }
        }, {
          key: "setAsyncFields",
          value: function setAsyncFields(step) {
            if (this.title instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
              this.subscriptions.push(this.title.subscribe(function (title) {
                step.title.next(title);
              }));
            } else {
              step.title.next(this.title);
            }

            if (this.text instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
              this.subscriptions.push(this.text.subscribe(function (text) {
                step.text.next(text);
              }));
            } else {
              step.text.next(this.text);
            }
          }
        }, {
          key: "isAncestorsFixed",
          value: function isAncestorsFixed(nativeElement) {
            if (!nativeElement || !nativeElement.parentElement) return false;
            var isElementFixed = this.windowRef.getComputedStyle(nativeElement.parentElement).position === 'fixed';

            if (nativeElement.nodeName === 'BODY') {
              return isElementFixed;
            }

            if (isElementFixed) return true;else return this.isAncestorsFixed(nativeElement.parentElement);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sub) {
              sub.unsubscribe();
            });
          }
        }]);

        return JoyrideDirective;
      }();

      JoyrideDirective.ɵfac = function JoyrideDirective_Factory(t) {
        return new (t || JoyrideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      JoyrideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: JoyrideDirective,
        selectors: [["joyrideStep"], ["", "joyrideStep", ""]],
        inputs: {
          stepPosition: "stepPosition",
          name: ["joyrideStep", "name"],
          nextStep: "nextStep",
          title: "title",
          text: "text",
          stepContent: "stepContent",
          stepContentParams: "stepContentParams",
          prevTemplate: "prevTemplate",
          nextTemplate: "nextTemplate",
          doneTemplate: "doneTemplate",
          counterTemplate: "counterTemplate"
        },
        outputs: {
          prev: "prev",
          next: "next",
          done: "done"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      JoyrideDirective.ctorParameters = function () {
        return [{
          type: JoyrideStepsContainerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: DomRefService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: TemplatesService
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      JoyrideDirective.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['joyrideStep']
        }],
        nextStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stepPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stepContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stepContentParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prevTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        doneTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counterTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'joyrideStep, [joyrideStep]'
          }]
        }], function () {
          return [{
            type: JoyrideStepsContainerService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: DomRefService
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: TemplatesService
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          stepPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          prev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          done: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['joyrideStep']
          }],
          nextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stepContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stepContentParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          prevTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          doneTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          counterTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var DocumentService = /*#__PURE__*/function () {
        function DocumentService(DOMService, platformId) {
          _classCallCheck(this, DocumentService);

          this.DOMService = DOMService;

          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            return;
          }

          this.setDocumentHeight();
          var doc = DOMService.getNativeDocument();

          if (doc && !doc.elementsFromPoint) {
            // IE 11 - Edge browsers
            doc.elementsFromPoint = this.elementsFromPoint.bind(this);
          }
        }

        _createClass(DocumentService, [{
          key: "getElementFixedTop",
          value: function getElementFixedTop(elementRef) {
            return elementRef.nativeElement.getBoundingClientRect().top;
          }
        }, {
          key: "getElementFixedLeft",
          value: function getElementFixedLeft(elementRef) {
            return elementRef.nativeElement.getBoundingClientRect().left;
          }
        }, {
          key: "getElementAbsoluteTop",
          value: function getElementAbsoluteTop(elementRef) {
            var scrollOffsets = this.getScrollOffsets();
            return elementRef.nativeElement.getBoundingClientRect().top + scrollOffsets.y;
          }
        }, {
          key: "getElementAbsoluteLeft",
          value: function getElementAbsoluteLeft(elementRef) {
            var scrollOffsets = this.getScrollOffsets();
            return elementRef.nativeElement.getBoundingClientRect().left + scrollOffsets.x;
          }
        }, {
          key: "setDocumentHeight",
          value: function setDocumentHeight() {
            this.documentHeight = this.calculateDocumentHeight();
          }
        }, {
          key: "getDocumentHeight",
          value: function getDocumentHeight() {
            return this.documentHeight;
          }
        }, {
          key: "isParentScrollable",
          value: function isParentScrollable(elementRef) {
            return this.getFirstScrollableParent(elementRef.nativeElement) !== this.DOMService.getNativeDocument().body;
          }
        }, {
          key: "isElementBeyondOthers",
          value: function isElementBeyondOthers(elementRef, isElementFixed, keywordToDiscard) {
            var x1 = isElementFixed ? this.getElementFixedLeft(elementRef) : this.getElementAbsoluteLeft(elementRef);
            var y1 = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
            var x2 = x1 + elementRef.nativeElement.getBoundingClientRect().width - 1;
            var y2 = y1 + elementRef.nativeElement.getBoundingClientRect().height - 1;
            var elements1 = this.DOMService.getNativeDocument().elementsFromPoint(x1, y1);
            var elements2 = this.DOMService.getNativeDocument().elementsFromPoint(x2, y2);
            if (elements1.length === 0 && elements2.length === 0) return 1;

            if (this.getFirstElementWithoutKeyword(elements1, keywordToDiscard) !== elementRef.nativeElement || this.getFirstElementWithoutKeyword(elements2, keywordToDiscard) !== elementRef.nativeElement) {
              return 2;
            }

            return 3;
          }
        }, {
          key: "scrollIntoView",
          value: function scrollIntoView(elementRef, isElementFixed) {
            var firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
            var top = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);

            if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
              if (firstScrollableParent.scrollTo) {
                firstScrollableParent.scrollTo(0, top - 150);
              } else {
                // IE 11 - Edge browsers
                firstScrollableParent.scrollTop = top - 150;
              }
            } else {
              this.DOMService.getNativeWindow().scrollTo(0, top - 150);
            }
          }
        }, {
          key: "scrollToTheTop",
          value: function scrollToTheTop(elementRef) {
            var firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);

            if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
              if (firstScrollableParent.scrollTo) {
                firstScrollableParent.scrollTo(0, 0);
              } else {
                // IE 11 - Edge browsers
                firstScrollableParent.scrollTop = 0;
              }
            } else {
              this.DOMService.getNativeWindow().scrollTo(0, 0);
            }
          }
        }, {
          key: "scrollToTheBottom",
          value: function scrollToTheBottom(elementRef) {
            var firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);

            if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
              if (firstScrollableParent.scrollTo) {
                firstScrollableParent.scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
              } else {
                // IE 11 - Edge browsers
                firstScrollableParent.scrollTop = firstScrollableParent.scrollHeight - firstScrollableParent.clientHeight;
              }
            } else {
              this.DOMService.getNativeWindow().scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
            }
          }
        }, {
          key: "getFirstScrollableParent",
          value: function getFirstScrollableParent(node) {
            var _this6 = this;

            var regex = /(auto|scroll|overlay)/;

            var style = function style(node, prop) {
              return _this6.DOMService.getNativeWindow().getComputedStyle(node, null).getPropertyValue(prop);
            };

            var scroll = function scroll(node) {
              return regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
            };

            var scrollparent = function scrollparent(node) {
              return !node || node === _this6.DOMService.getNativeDocument().body ? _this6.DOMService.getNativeDocument().body : scroll(node) ? node : scrollparent(node.parentNode);
            };

            return scrollparent(node);
          }
        }, {
          key: "calculateDocumentHeight",
          value: function calculateDocumentHeight() {
            var documentRef = this.DOMService.getNativeDocument();
            return Math.max(documentRef.body.scrollHeight, documentRef.documentElement.scrollHeight, documentRef.body.offsetHeight, documentRef.documentElement.offsetHeight, documentRef.body.clientHeight, documentRef.documentElement.clientHeight);
          }
        }, {
          key: "getScrollOffsets",
          value: function getScrollOffsets() {
            var winReference = this.DOMService.getNativeWindow();
            var docReference = this.DOMService.getNativeDocument(); // This works for all browsers except IE versions 8 and before

            if (winReference.pageXOffset != null) return {
              x: winReference.pageXOffset,
              y: winReference.pageYOffset
            }; // For IE (or any browser) in Standards mode

            if (docReference.compatMode == 'CSS1Compat') return {
              x: docReference.documentElement.scrollLeft,
              y: docReference.documentElement.scrollTop
            }; // For browsers in Quirks mode

            return {
              x: docReference.body.scrollLeft,
              y: docReference.body.scrollTop
            };
          }
        }, {
          key: "elementsFromPoint",
          value: function elementsFromPoint(x, y) {
            var parents = [];
            var parent = void 0;

            do {
              var elem = this.DOMService.getNativeDocument().elementFromPoint(x, y);

              if (elem && parent !== elem) {
                parent = elem;
                parents.push(parent);
                parent.style.pointerEvents = 'none';
              } else {
                parent = false;
              }
            } while (parent);

            parents.forEach(function (parent) {
              return parent.style.pointerEvents = 'all';
            });
            return parents;
          }
        }, {
          key: "getFirstElementWithoutKeyword",
          value: function getFirstElementWithoutKeyword(elements, keyword) {
            while (elements[0] && elements[0].classList.toString().includes(keyword)) {
              elements.shift();
            }

            return elements[0];
          }
        }]);

        return DocumentService;
      }();

      DocumentService.ɵfac = function DocumentService_Factory(t) {
        return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DocumentService,
        factory: DocumentService.ɵfac
      });

      DocumentService.ctorParameters = function () {
        return [{
          type: DomRefService
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: DomRefService
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();

      var JoyrideBackdropService = /*#__PURE__*/function () {
        function JoyrideBackdropService(documentService, optionsService, rendererFactory) {
          _classCallCheck(this, JoyrideBackdropService);

          this.documentService = documentService;
          this.optionsService = optionsService;
          this.rendererFactory = rendererFactory;
          this.lastXScroll = 0;
          this.lastYScroll = 0;
          this.setRenderer();
        }

        _createClass(JoyrideBackdropService, [{
          key: "setRenderer",
          value: function setRenderer() {
            this.renderer = this.rendererFactory.createRenderer(null, null);
          }
        }, {
          key: "draw",
          value: function draw(step) {
            this.elementRef = step.targetViewContainer;
            this.targetAbsoluteTop = this.getTargetTotalTop(step);
            this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
            this.currentBackdropContainer = this.renderer.createElement('div');
            this.renderer.addClass(this.currentBackdropContainer, 'backdrop-container');
            this.renderer.setStyle(this.currentBackdropContainer, 'position', 'fixed');
            this.renderer.setStyle(this.currentBackdropContainer, 'top', '0px');
            this.renderer.setStyle(this.currentBackdropContainer, 'left', '0px');
            this.renderer.setStyle(this.currentBackdropContainer, 'width', '100%');
            this.renderer.setStyle(this.currentBackdropContainer, 'height', '100%');
            this.renderer.setStyle(this.currentBackdropContainer, 'z-index', '1000');
            this.renderer.setAttribute(this.currentBackdropContainer, 'id', 'backdrop-' + step.name);
            this.backdropContent = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropContent, 'backdrop-content');
            this.renderer.setStyle(this.backdropContent, 'position', 'relative');
            this.renderer.setStyle(this.backdropContent, 'height', '100%');
            this.renderer.setStyle(this.backdropContent, 'display', 'flex');
            this.renderer.setStyle(this.backdropContent, 'flex-direction', 'column');
            this.renderer.appendChild(this.currentBackdropContainer, this.backdropContent);
            this.backdropTop = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropTop, 'joyride-backdrop');
            this.renderer.addClass(this.backdropTop, 'backdrop-top');
            this.renderer.setStyle(this.backdropTop, 'width', '100%');
            this.renderer.setStyle(this.backdropTop, 'height', this.targetAbsoluteTop - this.lastYScroll + 'px');
            this.renderer.setStyle(this.backdropTop, 'flex-shrink', '0');
            this.renderer.setStyle(this.backdropTop, 'background-color', "rgba(".concat(this.optionsService.getBackdropColor(), ", 0.7)"));
            this.renderer.appendChild(this.backdropContent, this.backdropTop);
            this.backdropMiddleContainer = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropMiddleContainer, 'backdrop-middle-container');
            this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
            this.renderer.setStyle(this.backdropMiddleContainer, 'width', '100%');
            this.renderer.setStyle(this.backdropMiddleContainer, 'flex-shrink', '0');
            this.renderer.appendChild(this.backdropContent, this.backdropMiddleContainer);
            this.backdropMiddleContent = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropMiddleContent, 'backdrop-middle-content');
            this.renderer.setStyle(this.backdropMiddleContent, 'display', 'flex');
            this.renderer.setStyle(this.backdropMiddleContent, 'width', '100%');
            this.renderer.setStyle(this.backdropMiddleContent, 'height', '100%');
            this.renderer.appendChild(this.backdropMiddleContainer, this.backdropMiddleContent);
            this.leftBackdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.leftBackdrop, 'joyride-backdrop');
            this.renderer.addClass(this.leftBackdrop, 'backdrop-left');
            this.renderer.setStyle(this.leftBackdrop, 'flex-shrink', '0');
            this.renderer.setStyle(this.leftBackdrop, 'width', this.targetAbsoluteLeft - this.lastXScroll + 'px');
            this.renderer.setStyle(this.leftBackdrop, 'background-color', "rgba(".concat(this.optionsService.getBackdropColor(), ", 0.7)"));
            this.renderer.appendChild(this.backdropMiddleContent, this.leftBackdrop);
            this.targetBackdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.targetBackdrop, 'backdrop-target');
            this.renderer.setStyle(this.targetBackdrop, 'flex-shrink', '0');
            this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
            this.renderer.appendChild(this.backdropMiddleContent, this.targetBackdrop);
            this.rightBackdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.rightBackdrop, 'joyride-backdrop');
            this.renderer.addClass(this.rightBackdrop, 'backdrop-right');
            this.renderer.setStyle(this.rightBackdrop, 'width', '100%');
            this.renderer.setStyle(this.rightBackdrop, 'background-color', "rgba(".concat(this.optionsService.getBackdropColor(), ", 0.7)"));
            this.renderer.appendChild(this.backdropMiddleContent, this.rightBackdrop);
            this.backdropBottom = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropBottom, 'joyride-backdrop');
            this.renderer.addClass(this.backdropBottom, 'backdrop-bottom');
            this.renderer.setStyle(this.backdropBottom, 'width', '100%');
            this.renderer.setStyle(this.backdropBottom, 'height', '100%');
            this.renderer.setStyle(this.backdropBottom, 'background-color', "rgba(".concat(this.optionsService.getBackdropColor(), ", 0.7)"));
            this.renderer.appendChild(this.backdropContent, this.backdropBottom);
            this.removeLastBackdrop();
            this.drawCurrentBackdrop();
            this.lastBackdropContainer = this.currentBackdropContainer;
          }
        }, {
          key: "remove",
          value: function remove() {
            this.removeLastBackdrop();
          }
        }, {
          key: "redrawTarget",
          value: function redrawTarget(step) {
            this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
            this.targetAbsoluteTop = this.getTargetTotalTop(step);
            this.handleVerticalScroll(step);
            this.handleHorizontalScroll(step);
          }
        }, {
          key: "getTargetTotalTop",
          value: function getTargetTotalTop(step) {
            var targetVC = step.targetViewContainer;
            return step.isElementOrAncestorFixed ? this.documentService.getElementFixedTop(targetVC.element) : this.documentService.getElementAbsoluteTop(targetVC.element);
          }
        }, {
          key: "getTargetTotalLeft",
          value: function getTargetTotalLeft(step) {
            var targetVC = step.targetViewContainer;
            return step.isElementOrAncestorFixed ? this.documentService.getElementFixedLeft(targetVC.element) : this.documentService.getElementAbsoluteLeft(targetVC.element);
          }
        }, {
          key: "redraw",
          value: function redraw(step, scroll) {
            if (this.lastYScroll !== scroll.scrollY) {
              this.lastYScroll = scroll.scrollY;

              if (this.elementRef) {
                this.handleVerticalScroll(step);
              }
            }

            if (this.lastXScroll !== scroll.scrollX) {
              this.lastXScroll = scroll.scrollX;

              if (this.elementRef) {
                this.handleHorizontalScroll(step);
              }
            }
          }
        }, {
          key: "handleHorizontalScroll",
          value: function handleHorizontalScroll(step) {
            var newBackdropLeftWidth = step.isElementOrAncestorFixed ? this.targetAbsoluteLeft : this.targetAbsoluteLeft - this.lastXScroll;

            if (newBackdropLeftWidth >= 0) {
              this.renderer.setStyle(this.leftBackdrop, 'width', newBackdropLeftWidth + 'px');
              this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
            } else {
              this.handleTargetPartialWidth(newBackdropLeftWidth);
            }
          }
        }, {
          key: "handleTargetPartialWidth",
          value: function handleTargetPartialWidth(newBackdropLeftWidth) {
            this.renderer.setStyle(this.leftBackdrop, 'width', 0 + 'px');
            var visibleTargetWidth = this.elementRef.element.nativeElement.offsetWidth + newBackdropLeftWidth;

            if (visibleTargetWidth >= 0) {
              this.renderer.setStyle(this.targetBackdrop, 'width', visibleTargetWidth + 'px');
            } else {
              this.renderer.setStyle(this.targetBackdrop, 'width', 0 + 'px');
            }
          }
        }, {
          key: "handleVerticalScroll",
          value: function handleVerticalScroll(step) {
            var newBackdropTopHeight = step.isElementOrAncestorFixed ? this.targetAbsoluteTop : this.targetAbsoluteTop - this.lastYScroll;

            if (newBackdropTopHeight >= 0) {
              this.renderer.setStyle(this.backdropTop, 'height', newBackdropTopHeight + 'px');
              this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
            } else {
              this.handleTargetPartialHeight(newBackdropTopHeight);
            }
          }
        }, {
          key: "handleTargetPartialHeight",
          value: function handleTargetPartialHeight(newBackdropTopHeight) {
            this.renderer.setStyle(this.backdropTop, 'height', 0 + 'px');
            var visibleTargetHeight = this.elementRef.element.nativeElement.offsetHeight + newBackdropTopHeight;

            if (visibleTargetHeight >= 0) {
              this.renderer.setStyle(this.backdropMiddleContainer, 'height', visibleTargetHeight + 'px');
            } else {
              this.renderer.setStyle(this.backdropMiddleContainer, 'height', 0 + 'px');
            }
          }
        }, {
          key: "removeLastBackdrop",
          value: function removeLastBackdrop() {
            if (this.lastBackdropContainer) {
              this.renderer.removeChild(document.body, this.lastBackdropContainer);
              this.lastBackdropContainer = undefined;
            }
          }
        }, {
          key: "drawCurrentBackdrop",
          value: function drawCurrentBackdrop() {
            this.renderer.appendChild(document.body, this.currentBackdropContainer);
          }
        }]);

        return JoyrideBackdropService;
      }();

      JoyrideBackdropService.ɵfac = function JoyrideBackdropService_Factory(t) {
        return new (t || JoyrideBackdropService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]));
      };

      JoyrideBackdropService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JoyrideBackdropService,
        factory: JoyrideBackdropService.ɵfac
      });

      JoyrideBackdropService.ctorParameters = function () {
        return [{
          type: DocumentService
        }, {
          type: JoyrideOptionsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideBackdropService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: DocumentService
          }, {
            type: JoyrideOptionsService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }];
        }, null);
      })();

      var Scroll = function Scroll() {
        _classCallCheck(this, Scroll);
      };

      var EventListenerService = /*#__PURE__*/function () {
        function EventListenerService(rendererFactory, DOMService) {
          _classCallCheck(this, EventListenerService);

          this.rendererFactory = rendererFactory;
          this.DOMService = DOMService;
          this.scrollEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resizeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.renderer = rendererFactory.createRenderer(null, null);
        }

        _createClass(EventListenerService, [{
          key: "startListeningScrollEvents",
          value: function startListeningScrollEvents() {
            var _this7 = this;

            this.scrollUnlisten = this.renderer.listen('document', 'scroll', function (evt) {
              _this7.scrollEvent.next({
                scrollX: _this7.DOMService.getNativeWindow().pageXOffset,
                scrollY: _this7.DOMService.getNativeWindow().pageYOffset
              });
            });
          }
        }, {
          key: "startListeningResizeEvents",
          value: function startListeningResizeEvents() {
            var _this8 = this;

            this.resizeUnlisten = this.renderer.listen('window', 'resize', function (evt) {
              _this8.resizeEvent.next(evt);
            });
          }
        }, {
          key: "stopListeningScrollEvents",
          value: function stopListeningScrollEvents() {
            this.scrollUnlisten();
          }
        }, {
          key: "stopListeningResizeEvents",
          value: function stopListeningResizeEvents() {
            this.resizeUnlisten();
          }
        }]);

        return EventListenerService;
      }();

      EventListenerService.ɵfac = function EventListenerService_Factory(t) {
        return new (t || EventListenerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomRefService));
      };

      EventListenerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EventListenerService,
        factory: EventListenerService.ɵfac
      });

      EventListenerService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: DomRefService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventListenerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }, {
            type: DomRefService
          }];
        }, null);
      })();

      var STEP_MIN_WIDTH = 200;
      var STEP_MAX_WIDTH = 400;
      var CUSTOM_STEP_MAX_WIDTH_VW = 90;
      var STEP_HEIGHT = 200;
      var ASPECT_RATIO = 1.212;
      var DEFAULT_DISTANCE_FROM_MARGIN_TOP = 2;
      var DEFAULT_DISTANCE_FROM_MARGIN_LEFT = 2;
      var DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM = 5;
      var DEFAULT_DISTANCE_FROM_MARGIN_RIGHT = 5;
      var KEY_CODE;

      (function (KEY_CODE) {
        KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        KEY_CODE[KEY_CODE["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
      })(KEY_CODE || (KEY_CODE = {}));

      var JoyrideStepComponent = /*#__PURE__*/function () {
        function JoyrideStepComponent(injector, stepsContainerService, eventListenerService, documentService, renderer, logger, optionsService, templateService) {
          _classCallCheck(this, JoyrideStepComponent);

          this.injector = injector;
          this.stepsContainerService = stepsContainerService;
          this.eventListenerService = eventListenerService;
          this.documentService = documentService;
          this.renderer = renderer;
          this.logger = logger;
          this.optionsService = optionsService;
          this.templateService = templateService;
          this.stepWidth = STEP_MIN_WIDTH;
          this.stepHeight = STEP_HEIGHT;
          this.showArrow = true;
          this.arrowSize = ARROW_SIZE;
          this.subscriptions = [];
        }

        _createClass(JoyrideStepComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            // Need to Inject here otherwise you will obtain a circular dependency
            this.joyrideStepService = this.injector.get(JoyrideStepService);
            this.documentHeight = this.documentService.getDocumentHeight();
            this.subscriptions.push(this.subscribeToResizeEvents());
            this.title = this.step.title.asObservable();
            this.text = this.step.text.asObservable();
            this.setCustomTemplates();
            this.setCustomTexts();
            this.counter = this.getCounter();
            this.isCounterVisible = this.optionsService.isCounterVisible();
            this.isPrevButtonVisible = this.optionsService.isPrevButtonVisible();
            this.themeColor = this.optionsService.getThemeColor();
            if (this.text) this.text.subscribe(function (val) {
              return _this9.checkRedraw(val);
            });
            if (this.title) this.title.subscribe(function (val) {
              return _this9.checkRedraw(val);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.isCustomized()) {
              this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', CUSTOM_STEP_MAX_WIDTH_VW + 'vw');
              this.updateStepDimensions();
            } else {
              this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', STEP_MAX_WIDTH + 'px');
              var dimensions = this.getDimensionsByAspectRatio(this.stepContainer.nativeElement.clientWidth, this.stepContainer.nativeElement.clientHeight, ASPECT_RATIO);
              dimensions = this.adjustDimensions(dimensions.width, dimensions.height);
              this.stepWidth = dimensions.width;
              this.stepHeight = dimensions.height;
              this.renderer.setStyle(this.stepContainer.nativeElement, 'width', this.stepWidth + 'px');
              this.renderer.setStyle(this.stepContainer.nativeElement, 'height', this.stepHeight + 'px');
            }

            this.drawStep();
          }
        }, {
          key: "checkRedraw",
          value: function checkRedraw(val) {
            var _this10 = this;

            if (val != null) {
              // Need to wait that the change is rendered before redrawing
              setTimeout(function () {
                _this10.redrawStep();
              }, 2);
            }
          }
        }, {
          key: "isCustomized",
          value: function isCustomized() {
            return this.step.stepContent || this.templateService.getCounter() || this.templateService.getPrevButton() || this.templateService.getNextButton() || this.templateService.getDoneButton();
          }
        }, {
          key: "setCustomTexts",
          value: function setCustomTexts() {
            var customeTexts = this.optionsService.getCustomTexts();
            this.prevText = customeTexts.prev;
            this.nextText = customeTexts.next;
            this.doneText = customeTexts.done;
          }
        }, {
          key: "drawStep",
          value: function drawStep() {
            var position = this.step.isElementOrAncestorFixed ? 'fixed' : 'absolute';
            this.renderer.setStyle(this.stepHolder.nativeElement, 'position', position);
            this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', this.step.transformCssStyle);
            this.targetWidth = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().width;
            this.targetHeight = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().height;
            this.targetAbsoluteLeft = position === 'fixed' ? this.documentService.getElementFixedLeft(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteLeft(this.step.targetViewContainer.element);
            this.targetAbsoluteTop = position === 'fixed' ? this.documentService.getElementFixedTop(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteTop(this.step.targetViewContainer.element);
            this.setStepStyle();
          }
        }, {
          key: "getCounter",
          value: function getCounter() {
            var stepPosition = this.stepsContainerService.getStepNumber(this.step.name);
            var numberOfSteps = this.stepsContainerService.getStepsCount();
            this.counterData = {
              step: stepPosition,
              total: numberOfSteps
            };
            return stepPosition + '/' + numberOfSteps;
          }
        }, {
          key: "setCustomTemplates",
          value: function setCustomTemplates() {
            this.customContent = this.step.stepContent;
            this.ctx = this.step.stepContentParams;
            this.customPrevButton = this.templateService.getPrevButton();
            this.customNextButton = this.templateService.getNextButton();
            this.customDoneButton = this.templateService.getDoneButton();
            this.customCounter = this.templateService.getCounter();
          }
        }, {
          key: "keyEvent",
          value: function keyEvent(event) {
            console.log(event);

            if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
              if (this.isLastStep()) {
                this.close();
              } else {
                this.next();
              }
            } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
              this.prev();
            } else if (event.keyCode === KEY_CODE.ESCAPE_KEY) {
              this.close();
            }
          }
        }, {
          key: "prev",
          value: function prev() {
            this.joyrideStepService.prev();
          }
        }, {
          key: "next",
          value: function next() {
            this.joyrideStepService.next();
          }
        }, {
          key: "close",
          value: function close() {
            this.joyrideStepService.close();
          }
        }, {
          key: "isFirstStep",
          value: function isFirstStep() {
            return this.stepsContainerService.getStepNumber(this.step.name) === 1;
          }
        }, {
          key: "isLastStep",
          value: function isLastStep() {
            return this.stepsContainerService.getStepNumber(this.step.name) === this.stepsContainerService.getStepsCount();
          }
        }, {
          key: "setStepStyle",
          value: function setStepStyle() {
            switch (this.step.position) {
              case 'top':
                {
                  this.setStyleTop();
                  break;
                }

              case 'bottom':
                {
                  this.setStyleBottom();
                  break;
                }

              case 'right':
                {
                  this.setStyleRight();
                  break;
                }

              case 'left':
                {
                  this.setStyleLeft();
                  break;
                }

              case 'center':
                {
                  this.setStyleCenter();
                  break;
                }

              default:
                {
                  this.setStyleBottom();
                }
            }
          }
        }, {
          key: "setStyleTop",
          value: function setStyleTop() {
            this.stepsContainerService.updatePosition(this.step.name, 'top');
            this.topPosition = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
            this.stepAbsoluteTop = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
            this.arrowTopPosition = this.stepHeight;
            this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
            this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
            this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
            this.adjustLeftPosition();
            this.adjustRightPosition();
            this.arrowPosition = 'bottom';
            this.autofixTopPosition();
          }
        }, {
          key: "setStyleRight",
          value: function setStyleRight() {
            this.stepsContainerService.updatePosition(this.step.name, 'right');
            this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
            this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
            this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
            this.leftPosition = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
            this.stepAbsoluteLeft = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
            this.arrowLeftPosition = -this.arrowSize;
            this.adjustTopPosition();
            this.adjustBottomPosition();
            this.arrowPosition = 'left';
            this.autofixRightPosition();
          }
        }, {
          key: "setStyleBottom",
          value: function setStyleBottom() {
            this.stepsContainerService.updatePosition(this.step.name, 'bottom');
            this.topPosition = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
            this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
            this.arrowTopPosition = -this.arrowSize;
            this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
            this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
            this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
            this.adjustLeftPosition();
            this.adjustRightPosition();
            this.arrowPosition = 'top';
            this.autofixBottomPosition();
          }
        }, {
          key: "setStyleLeft",
          value: function setStyleLeft() {
            this.stepsContainerService.updatePosition(this.step.name, 'left');
            this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
            this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
            this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
            this.leftPosition = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
            this.stepAbsoluteLeft = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
            this.arrowLeftPosition = this.stepWidth;
            this.adjustTopPosition();
            this.adjustBottomPosition();
            this.arrowPosition = 'right';
            this.autofixLeftPosition();
          }
        }, {
          key: "setStyleCenter",
          value: function setStyleCenter() {
            this.renderer.setStyle(this.stepHolder.nativeElement, 'position', 'fixed');
            this.renderer.setStyle(this.stepHolder.nativeElement, 'top', '50%');
            this.renderer.setStyle(this.stepHolder.nativeElement, 'left', '50%');
            this.updateStepDimensions();
            this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', "translate(-".concat(this.stepWidth / 2, "px, -").concat(this.stepHeight / 2, "px)"));
            this.showArrow = false;
          }
        }, {
          key: "adjustLeftPosition",
          value: function adjustLeftPosition() {
            if (this.leftPosition < 0) {
              this.arrowLeftPosition = this.arrowLeftPosition + this.leftPosition - DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
              this.leftPosition = DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
            }
          }
        }, {
          key: "adjustRightPosition",
          value: function adjustRightPosition() {
            var currentWindowWidth = document.body.clientWidth;

            if (this.stepAbsoluteLeft + this.stepWidth > currentWindowWidth) {
              var newLeftPos = this.leftPosition - (this.stepAbsoluteLeft + this.stepWidth + DEFAULT_DISTANCE_FROM_MARGIN_RIGHT - currentWindowWidth);
              var deltaLeftPosition = newLeftPos - this.leftPosition;
              this.leftPosition = newLeftPos;
              this.arrowLeftPosition = this.arrowLeftPosition - deltaLeftPosition;
            }
          }
        }, {
          key: "adjustTopPosition",
          value: function adjustTopPosition() {
            if (this.stepAbsoluteTop < 0) {
              this.arrowTopPosition = this.arrowTopPosition + this.topPosition - DEFAULT_DISTANCE_FROM_MARGIN_TOP;
              this.topPosition = DEFAULT_DISTANCE_FROM_MARGIN_TOP;
            }
          }
        }, {
          key: "adjustBottomPosition",
          value: function adjustBottomPosition() {
            if (this.stepAbsoluteTop + this.stepHeight > this.documentHeight) {
              var newTopPos = this.topPosition - (this.stepAbsoluteTop + this.stepHeight + DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM - this.documentHeight);
              var deltaTopPosition = newTopPos - this.topPosition;
              this.topPosition = newTopPos;
              this.arrowTopPosition = this.arrowTopPosition - deltaTopPosition;
            }
          }
        }, {
          key: "autofixTopPosition",
          value: function autofixTopPosition() {
            if (this.positionAlreadyFixed) {
              this.logger.warn('No step positions found for this step. The step will be centered.');
            } else if (this.targetAbsoluteTop - this.stepHeight - this.arrowSize < 0) {
              this.positionAlreadyFixed = true;
              this.setStyleRight();
            }
          }
        }, {
          key: "autofixRightPosition",
          value: function autofixRightPosition() {
            if (this.targetAbsoluteLeft + this.targetWidth + this.stepWidth + this.arrowSize > document.body.clientWidth) {
              this.setStyleBottom();
            }
          }
        }, {
          key: "autofixBottomPosition",
          value: function autofixBottomPosition() {
            if (this.targetAbsoluteTop + this.stepHeight + this.arrowSize + this.targetHeight > this.documentHeight) {
              this.setStyleLeft();
            }
          }
        }, {
          key: "autofixLeftPosition",
          value: function autofixLeftPosition() {
            if (this.targetAbsoluteLeft - this.stepWidth - this.arrowSize < 0) {
              this.setStyleTop();
            }
          }
        }, {
          key: "subscribeToResizeEvents",
          value: function subscribeToResizeEvents() {
            var _this11 = this;

            return this.eventListenerService.resizeEvent.subscribe(function () {
              _this11.redrawStep();
            });
          }
        }, {
          key: "redrawStep",
          value: function redrawStep() {
            this.updateStepDimensions();
            this.drawStep();
          }
        }, {
          key: "getDimensionsByAspectRatio",
          value: function getDimensionsByAspectRatio(width, height, aspectRatio) {
            var calcHeight = (width + height) / (1 + aspectRatio);
            var calcWidth = calcHeight * aspectRatio;
            return {
              width: calcWidth,
              height: calcHeight
            };
          }
        }, {
          key: "adjustDimensions",
          value: function adjustDimensions(width, height) {
            var area = width * height;
            var newWidth = width;
            var newHeight = height;

            if (width > STEP_MAX_WIDTH) {
              newWidth = STEP_MAX_WIDTH;
              newHeight = area / newWidth;
            } else if (width < STEP_MIN_WIDTH) {
              newWidth = STEP_MIN_WIDTH;
              newHeight = STEP_MIN_WIDTH / ASPECT_RATIO;
            }

            return {
              width: newWidth,
              height: newHeight
            };
          }
        }, {
          key: "updateStepDimensions",
          value: function updateStepDimensions() {
            this.stepWidth = this.stepContainer.nativeElement.clientWidth;
            this.stepHeight = this.stepContainer.nativeElement.clientHeight;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (subscription) {
              subscription.unsubscribe();
            });
          }
        }]);

        return JoyrideStepComponent;
      }();

      JoyrideStepComponent.ɵfac = function JoyrideStepComponent_Factory(t) {
        return new (t || JoyrideStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EventListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TemplatesService));
      };

      JoyrideStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JoyrideStepComponent,
        selectors: [["joyride-step"]],
        viewQuery: function JoyrideStepComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepHolder = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepContainer = _t.first);
          }
        },
        hostBindings: function JoyrideStepComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function JoyrideStepComponent_keyup_HostBindingHandler($event) {
              return ctx.keyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          step: "step"
        },
        decls: 21,
        vars: 17,
        consts: [[1, "joyride-step__holder", 3, "id"], ["stepHolder", ""], ["class", "joyride-step__arrow", 3, "position", "top", "left", 4, "ngIf"], [1, "joyride-step__container"], ["stepContainer", ""], [1, "joyride-step__close", 3, "click"], [1, "joyride-step__header"], [1, "joyride-step__title"], [1, "joyride-step__body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultContent", ""], [1, "joyride-step__footer"], ["class", "joyride-step__counter-container", 4, "ngIf"], [1, "joyride-step__buttons-container"], ["class", "joyride-step__prev-container joyride-step__button", 3, "click", 4, "ngIf"], ["class", "joyride-step__next-container joyride-step__button", 3, "click", 4, "ngIf", "ngIfElse"], ["doneButton", ""], [1, "joyride-step__arrow", 3, "position"], [1, "joyride-step__counter-container"], ["defaultCounter", ""], [1, "joyride-step__counter"], [1, "joyride-step__prev-container", "joyride-step__button", 3, "click"], [4, "ngTemplateOutlet"], ["defaultPrevButton", ""], [1, "joyride-step__prev-button", 3, "color"], [1, "joyride-step__next-container", "joyride-step__button", 3, "click"], ["defaulNextButton", ""], [3, "color"], [1, "joyride-step__done-container", "joyride-step__button", 3, "click"], ["defaultDoneButton", ""], [1, "joyride-step__done-button", 3, "color"]],
        template: function JoyrideStepComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoyrideStepComponent_joyride_arrow_2_Template, 1, 5, "joyride-arrow", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "joy-close-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoyrideStepComponent_Template_joy_close_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JoyrideStepComponent_ng_container_11_Template, 1, 0, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, JoyrideStepComponent_ng_template_12_Template, 2, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, JoyrideStepComponent_div_15_Template, 4, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JoyrideStepComponent_div_17_Template, 4, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JoyrideStepComponent_div_18_Template, 4, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JoyrideStepComponent_ng_template_19_Template, 4, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.topPosition, "px")("left", ctx.leftPosition, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "joyride-step-" + ctx.step.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.themeColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customContent ? ctx.customContent : _r4)("ngTemplateOutletContext", ctx.ctx);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounterVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPrevButtonVisible && !ctx.isFirstStep());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLastStep())("ngIfElse", _r9);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], JoyrideCloseButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], JoyrideArrowComponent, JoyrideButtonComponent];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]];
        },
        styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container,.joyride-step__footer{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}"],
        encapsulation: 2
      });

      JoyrideStepComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: JoyrideStepsContainerService
        }, {
          type: EventListenerService
        }, {
          type: DocumentService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: LoggerService
        }, {
          type: JoyrideOptionsService
        }, {
          type: TemplatesService
        }];
      };

      JoyrideStepComponent.propDecorators = {
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stepHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['stepHolder', {
            "static": true
          }]
        }],
        stepContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['stepContainer', {
            "static": true
          }]
        }],
        keyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keyup', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideStepComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'joyride-step',
            template: "<div #stepHolder class=\"joyride-step__holder\" [id]=\"'joyride-step-' + step.name\" [style.top.px]=\"topPosition\" [style.left.px]=\"leftPosition\">\r\n    <joyride-arrow *ngIf=\"showArrow\" class=\"joyride-step__arrow\" [position]=\"arrowPosition\" [style.top.px]=\"arrowTopPosition\"\r\n        [style.left.px]=\"arrowLeftPosition\"></joyride-arrow>\r\n    <div #stepContainer class=\"joyride-step__container\">\r\n        <joy-close-button class=\"joyride-step__close\" (click)=\"close()\"></joy-close-button>\r\n        <div class=\"joyride-step__header\">\r\n            <div class=\"joyride-step__title\" [style.color]=\"themeColor\">{{ title | async }}</div>\r\n        </div>\r\n        <div class=\"joyride-step__body\">\r\n            <ng-container *ngTemplateOutlet=\"customContent ? customContent : defaultContent; context: ctx\"></ng-container>\r\n            <ng-template #defaultContent>\r\n                {{ text | async }}\r\n            </ng-template>\r\n        </div>\r\n        <div class=\"joyride-step__footer\">\r\n            <div *ngIf=\"isCounterVisible\" class=\"joyride-step__counter-container\">\r\n                <ng-container *ngTemplateOutlet=\"customCounter ? customCounter : defaultCounter; context: counterData\"></ng-container>\r\n                <ng-template #defaultCounter>\r\n                    <div class=\"joyride-step__counter\">{{ counter }}</div>\r\n                </ng-template>\r\n            </div>\r\n            <div class=\"joyride-step__buttons-container\">\r\n                <div class=\"joyride-step__prev-container joyride-step__button\" *ngIf=\"isPrevButtonVisible && !isFirstStep()\" (click)=\"prev()\">\r\n                    <ng-container *ngTemplateOutlet=\"customPrevButton ? customPrevButton : defaultPrevButton\"></ng-container>\r\n                    <ng-template #defaultPrevButton>\r\n                        <joyride-button class=\"joyride-step__prev-button\" [color]=\"themeColor\">{{ prevText | async }}</joyride-button>\r\n                    </ng-template>\r\n                </div>\r\n                <div class=\"joyride-step__next-container joyride-step__button\" *ngIf=\"!isLastStep(); else doneButton\" (click)=\"next()\">\r\n                    <ng-container *ngTemplateOutlet=\"customNextButton ? customNextButton : defaulNextButton\"></ng-container>\r\n                    <ng-template #defaulNextButton>\r\n                        <joyride-button [color]=\"themeColor\">{{ nextText | async }}</joyride-button>\r\n                    </ng-template>\r\n                </div>\r\n                <ng-template #doneButton>\r\n                    <div class=\"joyride-step__done-container joyride-step__button\" (click)=\"close()\">\r\n                        <ng-container *ngTemplateOutlet=\"customDoneButton ? customDoneButton : defaultDoneButton\"></ng-container>\r\n                        <ng-template #defaultDoneButton>\r\n                            <joyride-button class=\"joyride-step__done-button\" [color]=\"themeColor\">{{ doneText | async }}</joyride-button>\r\n                        </ng-template>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container,.joyride-step__footer{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: JoyrideStepsContainerService
          }, {
            type: EventListenerService
          }, {
            type: DocumentService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: LoggerService
          }, {
            type: JoyrideOptionsService
          }, {
            type: TemplatesService
          }];
        }, {
          keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stepHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepHolder', {
              "static": true
            }]
          }],
          stepContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepContainer', {
              "static": true
            }]
          }]
        });
      })();

      var JoyrideArrowComponent = function JoyrideArrowComponent() {
        _classCallCheck(this, JoyrideArrowComponent);

        this.position = 'top';
      };

      JoyrideArrowComponent.ɵfac = function JoyrideArrowComponent_Factory(t) {
        return new (t || JoyrideArrowComponent)();
      };

      JoyrideArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JoyrideArrowComponent,
        selectors: [["joyride-arrow"]],
        inputs: {
          position: "position"
        },
        decls: 1,
        vars: 8,
        template: function JoyrideArrowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("joyride-arrow__top", ctx.position == "top")("joyride-arrow__bottom", ctx.position == "bottom")("joyride-arrow__left", ctx.position == "left")("joyride-arrow__right", ctx.position == "right");
          }
        },
        styles: [".joyride-arrow__top{border-bottom:11px solid #fff}.joyride-arrow__bottom,.joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent}.joyride-arrow__bottom{border-top:11px solid #fff}.joyride-arrow__right{border-left:11px solid #fff}.joyride-arrow__left,.joyride-arrow__right{border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #fff}"],
        encapsulation: 2
      });
      JoyrideArrowComponent.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideArrowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'joyride-arrow',
            template: "<div [class.joyride-arrow__top]=\"position == 'top'\"\r\n     [class.joyride-arrow__bottom]=\"position == 'bottom'\"\r\n     [class.joyride-arrow__left]=\"position == 'left'\"\r\n     [class.joyride-arrow__right]=\"position == 'right'\">\r\n</div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".joyride-arrow__top{border-bottom:11px solid #fff}.joyride-arrow__bottom,.joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent}.joyride-arrow__bottom{border-top:11px solid #fff}.joyride-arrow__right{border-left:11px solid #fff}.joyride-arrow__left,.joyride-arrow__right{border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #fff}"]
          }]
        }], function () {
          return [];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var JoyrideButtonComponent = /*#__PURE__*/function () {
        function JoyrideButtonComponent() {
          _classCallCheck(this, JoyrideButtonComponent);

          this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(JoyrideButtonComponent, [{
          key: "onClick",
          value: function onClick() {
            this.clicked.emit();
          }
        }]);

        return JoyrideButtonComponent;
      }();

      JoyrideButtonComponent.ɵfac = function JoyrideButtonComponent_Factory(t) {
        return new (t || JoyrideButtonComponent)();
      };

      JoyrideButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JoyrideButtonComponent,
        selectors: [["joyride-button"]],
        inputs: {
          color: "color"
        },
        outputs: {
          clicked: "clicked"
        },
        ngContentSelectors: _c3,
        decls: 2,
        vars: 5,
        consts: [[1, "joyride-button", 3, "ngStyle", "mouseleave", "mouseover", "click"]],
        template: function JoyrideButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function JoyrideButtonComponent_Template_button_mouseleave_0_listener() {
              return ctx.hover = false;
            })("mouseover", function JoyrideButtonComponent_Template_button_mouseover_0_listener() {
              return ctx.hover = true;
            })("click", function JoyrideButtonComponent_Template_button_click_0_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c2, ctx.hover ? "#fff" : ctx.color, ctx.hover ? ctx.color : "#fff", ctx.hover ? ctx.color : "transparent"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".joyride-button[_ngcontent-%COMP%]{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button[_ngcontent-%COMP%]:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
      });
      JoyrideButtonComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'joyride-button',
            template: "<button (mouseleave)=\"hover=false\" (mouseover)=\"hover=true\"\r\n    [ngStyle]=\"{'background-color': hover ? '#fff' : color, \r\n                'color': hover ? color : '#fff',\r\n                'border-color' : hover ? color : 'transparent'}\"\r\n    class=\"joyride-button\" (click)=\"onClick()\">\r\n    <ng-content></ng-content>\r\n</button>",
            styles: [".joyride-button{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
          }]
        }], function () {
          return [];
        }, {
          clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var JoyrideCloseButtonComponent = function JoyrideCloseButtonComponent() {
        _classCallCheck(this, JoyrideCloseButtonComponent);
      };

      JoyrideCloseButtonComponent.ɵfac = function JoyrideCloseButtonComponent_Factory(t) {
        return new (t || JoyrideCloseButtonComponent)();
      };

      JoyrideCloseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JoyrideCloseButtonComponent,
        selectors: [["joy-close-button"]],
        decls: 3,
        vars: 0,
        consts: [["viewBox", "0 0 25 25", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1", "y1", "24", "x2", "24", "y2", "1", "stroke", "black", "stroke-width", "3"], ["x1", "1", "y1", "1", "x2", "24", "y2", "24", "stroke", "black", "stroke-width", "3"]],
        template: function JoyrideCloseButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideCloseButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'joy-close-button',
            template: "<svg viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"1\" y1=\"24\" \n                    x2=\"24\" y2=\"1\" \n                    stroke=\"black\" \n                    stroke-width=\"3\"/>\n                <line x1=\"1\" y1=\"1\" \n                    x2=\"24\" y2=\"24\" \n                    stroke=\"black\" \n                    stroke-width=\"3\"/>\n            </svg>"
          }]
        }], null, null);
      })();

      var StepDrawerService = /*#__PURE__*/function () {
        function StepDrawerService(componentFactoryResolver, appRef, injector) {
          _classCallCheck(this, StepDrawerService);

          this.componentFactoryResolver = componentFactoryResolver;
          this.appRef = appRef;
          this.injector = injector;
          this.refMap = {};
        }

        _createClass(StepDrawerService, [{
          key: "draw",
          value: function draw(step) {
            // 1. Create a component reference from the component
            var ref = this.componentFactoryResolver.resolveComponentFactory(JoyrideStepComponent).create(this.injector); // 2. Attach component to the appRef so that it's inside the ng component tree

            this.appRef.attachView(ref.hostView); // 3. Get DOM element from component

            var domElem = ref.hostView.rootNodes[0]; // 4. Append DOM element to the body

            document.body.appendChild(domElem);
            var instance = ref.instance;
            instance.step = step;
            ref.changeDetectorRef.detectChanges();
            step.stepInstance = instance;
            this.refMap[step.name] = ref;
          }
        }, {
          key: "remove",
          value: function remove(step) {
            this.appRef.detachView(this.refMap[step.name].hostView);
            this.refMap[step.name].destroy();
          }
        }]);

        return StepDrawerService;
      }();

      StepDrawerService.ɵfac = function StepDrawerService_Factory(t) {
        return new (t || StepDrawerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      StepDrawerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StepDrawerService,
        factory: StepDrawerService.ɵfac
      });

      StepDrawerService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepDrawerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();

      var SCROLLBAR_SIZE = 20;
      var DISTANCE_FROM_TARGET = 15;
      var ARROW_SIZE = 10;

      var JoyrideStepService = /*#__PURE__*/function () {
        function JoyrideStepService(backDropService, eventListener, stepsContainerService, documentService, DOMService, stepDrawerService, optionsService, router, logger) {
          _classCallCheck(this, JoyrideStepService);

          this.backDropService = backDropService;
          this.eventListener = eventListener;
          this.stepsContainerService = stepsContainerService;
          this.documentService = documentService;
          this.DOMService = DOMService;
          this.stepDrawerService = stepDrawerService;
          this.optionsService = optionsService;
          this.router = router;
          this.logger = logger;
          this.winTopPosition = 0;
          this.winBottomPosition = 0;
          this.stepsObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.initViewportPositions();
          this.subscribeToScrollEvents();
          this.subscribeToResizeEvents();
        }

        _createClass(JoyrideStepService, [{
          key: "initViewportPositions",
          value: function initViewportPositions() {
            this.winTopPosition = 0;
            this.winBottomPosition = this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
          }
        }, {
          key: "subscribeToScrollEvents",
          value: function subscribeToScrollEvents() {
            var _this12 = this;

            this.eventListener.startListeningScrollEvents();
            this.eventListener.scrollEvent.subscribe(function (scroll) {
              _this12.winTopPosition = scroll.scrollY;
              _this12.winBottomPosition = _this12.winTopPosition + _this12.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
              if (_this12.currentStep) _this12.backDropService.redraw(_this12.currentStep, scroll);
            });
          }
        }, {
          key: "subscribeToResizeEvents",
          value: function subscribeToResizeEvents() {
            var _this13 = this;

            this.eventListener.resizeEvent.subscribe(function () {
              if (_this13.currentStep) _this13.backDropService.redrawTarget(_this13.currentStep);
            });
          }
        }, {
          key: "drawStep",
          value: function drawStep(step) {
            step.position = step.position === NO_POSITION ? this.optionsService.getStepDefaultPosition() : step.position;
            this.stepDrawerService.draw(step);
          }
        }, {
          key: "startTour",
          value: function startTour() {
            this.stepsObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
            this.stepsContainerService.init();
            this.documentService.setDocumentHeight();
            this.tryShowStep(StepActionType.NEXT);
            this.eventListener.startListeningResizeEvents();
            this.subscribeToStepsUpdates();
            return this.stepsObserver.asObservable();
          }
        }, {
          key: "close",
          value: function close() {
            this.removeCurrentStep();
            this.notifyTourIsFinished();
            this.DOMService.getNativeWindow().scrollTo(0, 0);
            this.eventListener.stopListeningResizeEvents();
            this.backDropService.remove();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.removeCurrentStep();
            this.currentStep.prevCliked.emit();
            this.tryShowStep(StepActionType.PREV);
          }
        }, {
          key: "next",
          value: function next() {
            this.removeCurrentStep();
            this.currentStep.nextClicked.emit();
            this.tryShowStep(StepActionType.NEXT);
          }
        }, {
          key: "navigateToStepPage",
          value: function navigateToStepPage(action) {
            var stepRoute = this.stepsContainerService.getStepRoute(action);

            if (stepRoute) {
              this.router.navigate([stepRoute]);
            }
          }
        }, {
          key: "subscribeToStepsUpdates",
          value: function subscribeToStepsUpdates() {
            var _this14 = this;

            this.stepsContainerService.stepHasBeenModified.subscribe(function (updatedStep) {
              if (_this14.currentStep && _this14.currentStep.name === updatedStep.name) {
                _this14.currentStep = updatedStep;
              }
            });
          }
        }, {
          key: "tryShowStep",
          value: function tryShowStep(actionType) {
            var _this15 = this;

            this.navigateToStepPage(actionType);
            var timeout = this.optionsService.getWaitingTime();
            if (timeout > 100) this.backDropService.remove();
            setTimeout(function () {
              try {
                _this15.showStep(actionType);
              } catch (error) {
                if (error instanceof JoyrideStepDoesNotExist) {
                  _this15.tryShowStep(actionType);
                } else if (error instanceof JoyrideStepOutOfRange) {
                  _this15.logger.error('Forcing the tour closure: First or Last step not found in the DOM.');

                  _this15.close();
                } else {
                  throw new Error(error);
                }
              }
            }, timeout);
          }
        }, {
          key: "showStep",
          value: function showStep(actionType) {
            this.currentStep = this.stepsContainerService.get(actionType);
            if (this.currentStep == null) throw new JoyrideStepDoesNotExist(''); // Scroll the element to get it visible if it's in a scrollable element

            this.scrollIfElementBeyondOtherElements();
            this.backDropService.draw(this.currentStep);
            this.drawStep(this.currentStep);
            this.scrollIfStepAndTargetAreNotVisible();
            this.notifyStepClicked(actionType);
          }
        }, {
          key: "notifyStepClicked",
          value: function notifyStepClicked(actionType) {
            var stepInfo = {
              number: this.stepsContainerService.getStepNumber(this.currentStep.name),
              name: this.currentStep.name,
              route: this.currentStep.route,
              actionType: actionType
            };
            this.stepsObserver.next(stepInfo);
          }
        }, {
          key: "notifyTourIsFinished",
          value: function notifyTourIsFinished() {
            if (this.currentStep) this.currentStep.tourDone.emit();
            this.stepsObserver.complete();
          }
        }, {
          key: "removeCurrentStep",
          value: function removeCurrentStep() {
            if (this.currentStep) this.stepDrawerService.remove(this.currentStep);
          }
        }, {
          key: "scrollIfStepAndTargetAreNotVisible",
          value: function scrollIfStepAndTargetAreNotVisible() {
            this.scrollWhenTargetOrStepAreHiddenBottom();
            this.scrollWhenTargetOrStepAreHiddenTop();
          }
        }, {
          key: "scrollWhenTargetOrStepAreHiddenBottom",
          value: function scrollWhenTargetOrStepAreHiddenBottom() {
            var totalTargetBottom = this.getMaxTargetAndStepBottomPosition();

            if (totalTargetBottom > this.winBottomPosition) {
              this.DOMService.getNativeWindow().scrollBy(0, totalTargetBottom - this.winBottomPosition);
            }
          }
        }, {
          key: "scrollWhenTargetOrStepAreHiddenTop",
          value: function scrollWhenTargetOrStepAreHiddenTop() {
            var totalTargetTop = this.getMaxTargetAndStepTopPosition();

            if (totalTargetTop < this.winTopPosition) {
              this.DOMService.getNativeWindow().scrollBy(0, totalTargetTop - this.winTopPosition);
            }
          }
        }, {
          key: "getMaxTargetAndStepBottomPosition",
          value: function getMaxTargetAndStepBottomPosition() {
            var targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);

            if (this.currentStep.position === 'top') {
              return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight;
            } else if (this.currentStep.position === 'bottom') {
              return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight + this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET;
            } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
              return Math.max(targetAbsoluteTop + this.currentStep.stepInstance.targetHeight, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 + this.currentStep.stepInstance.stepHeight / 2);
            }
          }
        }, {
          key: "getMaxTargetAndStepTopPosition",
          value: function getMaxTargetAndStepTopPosition() {
            var targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);

            if (this.currentStep.position === 'top') {
              return targetAbsoluteTop - (this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET);
            } else if (this.currentStep.position === 'bottom') {
              return targetAbsoluteTop;
            } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
              return Math.min(targetAbsoluteTop, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 - this.currentStep.stepInstance.stepHeight / 2);
            }
          }
        }, {
          key: "scrollIfElementBeyondOtherElements",
          value: function scrollIfElementBeyondOtherElements() {
            if (this.isElementBeyondOthers() === 2) {
              this.documentService.scrollToTheTop(this.currentStep.targetViewContainer.element);
            }

            if (this.isElementBeyondOthers() === 2) {
              this.documentService.scrollToTheBottom(this.currentStep.targetViewContainer.element);
            }

            if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
              this.documentService.scrollIntoView(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed);
            }

            if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
              this.currentStep.targetViewContainer.element.nativeElement.scrollIntoView();
            }
          }
        }, {
          key: "isElementBeyondOthers",
          value: function isElementBeyondOthers() {
            return this.documentService.isElementBeyondOthers(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed, 'backdrop');
          }
        }]);

        return JoyrideStepService;
      }();

      JoyrideStepService.ɵfac = function JoyrideStepService_Factory(t) {
        return new (t || JoyrideStepService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EventListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StepDrawerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LoggerService));
      };

      JoyrideStepService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JoyrideStepService,
        factory: JoyrideStepService.ɵfac
      });

      JoyrideStepService.ctorParameters = function () {
        return [{
          type: JoyrideBackdropService
        }, {
          type: EventListenerService
        }, {
          type: JoyrideStepsContainerService
        }, {
          type: DocumentService
        }, {
          type: DomRefService
        }, {
          type: StepDrawerService
        }, {
          type: JoyrideOptionsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: LoggerService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideStepService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: JoyrideBackdropService
          }, {
            type: EventListenerService
          }, {
            type: JoyrideStepsContainerService
          }, {
            type: DocumentService
          }, {
            type: DomRefService
          }, {
            type: StepDrawerService
          }, {
            type: JoyrideOptionsService
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: LoggerService
          }];
        }, null);
      })();

      var JoyrideStepInfo = function JoyrideStepInfo() {
        _classCallCheck(this, JoyrideStepInfo);
      };

      var JoyrideService = /*#__PURE__*/function () {
        function JoyrideService(platformId, stepService, optionsService) {
          _classCallCheck(this, JoyrideService);

          this.platformId = platformId;
          this.stepService = stepService;
          this.optionsService = optionsService;
          this.tourInProgress = false;
        }

        _createClass(JoyrideService, [{
          key: "startTour",
          value: function startTour(options) {
            var _this16 = this;

            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new JoyrideStepInfo());
            }

            if (!this.tourInProgress) {
              this.tourInProgress = true;

              if (options) {
                this.optionsService.setOptions(options);
              }

              this.tour$ = this.stepService.startTour().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                return _this16.tourInProgress = false;
              }));
              this.tour$.subscribe();
            }

            return this.tour$;
          }
        }, {
          key: "closeTour",
          value: function closeTour() {
            if (this.isTourInProgress()) this.stepService.close();
          }
        }, {
          key: "isTourInProgress",
          value: function isTourInProgress() {
            return this.tourInProgress;
          }
        }]);

        return JoyrideService;
      }();

      JoyrideService.ɵfac = function JoyrideService_Factory(t) {
        return new (t || JoyrideService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideStepService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JoyrideOptionsService));
      };

      JoyrideService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JoyrideService,
        factory: JoyrideService.ɵfac
      });

      JoyrideService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: JoyrideStepService
        }, {
          type: JoyrideOptionsService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: JoyrideStepService
          }, {
            type: JoyrideOptionsService
          }];
        }, null);
      })();

      var routerModuleForChild = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([]);

      var JoyrideModule = /*#__PURE__*/function () {
        function JoyrideModule() {
          _classCallCheck(this, JoyrideModule);
        }

        _createClass(JoyrideModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: JoyrideModule,
              providers: [JoyrideService, JoyrideStepService, JoyrideStepsContainerService, JoyrideBackdropService, EventListenerService, DocumentService, JoyrideOptionsService, StepDrawerService, DomRefService, LoggerService, TemplatesService]
            };
          }
        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: JoyrideModule,
              providers: []
            };
          }
        }]);

        return JoyrideModule;
      }();

      JoyrideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: JoyrideModule
      });
      JoyrideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function JoyrideModule_Factory(t) {
          return new (t || JoyrideModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], routerModuleForChild]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JoyrideModule, {
          declarations: function declarations() {
            return [JoyrideDirective, JoyrideStepComponent, JoyrideArrowComponent, JoyrideButtonComponent, JoyrideCloseButtonComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]];
          },
          exports: function exports() {
            return [JoyrideDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoyrideModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], routerModuleForChild],
            declarations: [JoyrideDirective, JoyrideStepComponent, JoyrideArrowComponent, JoyrideButtonComponent, JoyrideCloseButtonComponent],
            exports: [JoyrideDirective]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-joyride
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-joyride.js.map

      /***/

    },

    /***/
    "7g+E":
    /*!**********************************************************!*\
      !*** ./node_modules/ngx-spinner/fesm2015/ngx-spinner.js ***!
      \**********************************************************/

    /*! exports provided: DEFAULTS, LOADERS, NgxSpinner, NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService, PRIMARY_SPINNER, ɵa */

    /***/
    function gE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULTS", function () {
        return DEFAULTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOADERS", function () {
        return LOADERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinner", function () {
        return NgxSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function () {
        return NgxSpinnerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function () {
        return NgxSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function () {
        return NgxSpinnerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PRIMARY_SPINNER", function () {
        return PRIMARY_SPINNER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var _c0 = ["overlay"];

      function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.spinner["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.spinner.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinner.divArray);
        }
      }

      function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NgxSpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
        }
      }

      var _c1 = ["*"];
      var LOADERS = {
        'ball-8bits': 16,
        'ball-atom': 4,
        'ball-beat': 3,
        'ball-circus': 5,
        'ball-climbing-dot': 4,
        'ball-clip-rotate': 1,
        'ball-clip-rotate-multiple': 2,
        'ball-clip-rotate-pulse': 2,
        'ball-elastic-dots': 5,
        'ball-fall': 3,
        'ball-fussion': 4,
        'ball-grid-beat': 9,
        'ball-grid-pulse': 9,
        'ball-newton-cradle': 4,
        'ball-pulse': 3,
        'ball-pulse-rise': 5,
        'ball-pulse-sync': 3,
        'ball-rotate': 1,
        'ball-running-dots': 5,
        'ball-scale': 1,
        'ball-scale-multiple': 3,
        'ball-scale-pulse': 2,
        'ball-scale-ripple': 1,
        'ball-scale-ripple-multiple': 3,
        'ball-spin': 8,
        'ball-spin-clockwise': 8,
        'ball-spin-clockwise-fade': 8,
        'ball-spin-clockwise-fade-rotating': 8,
        'ball-spin-fade': 8,
        'ball-spin-fade-rotating': 8,
        'ball-spin-rotate': 2,
        'ball-square-clockwise-spin': 8,
        'ball-square-spin': 8,
        'ball-triangle-path': 3,
        'ball-zig-zag': 2,
        'ball-zig-zag-deflect': 2,
        'cog': 1,
        'cube-transition': 2,
        'fire': 3,
        'line-scale': 5,
        'line-scale-party': 5,
        'line-scale-pulse-out': 5,
        'line-scale-pulse-out-rapid': 5,
        'line-spin-clockwise-fade': 8,
        'line-spin-clockwise-fade-rotating': 8,
        'line-spin-fade': 8,
        'line-spin-fade-rotating': 8,
        'pacman': 6,
        'square-jelly-box': 2,
        'square-loader': 1,
        'square-spin': 1,
        'timer': 1,
        'triangle-skew-spin': 1
      };
      var DEFAULTS = {
        BD_COLOR: 'rgba(51,51,51,0.8)',
        SPINNER_COLOR: '#fff',
        SPINNER_TYPE: 'ball-scale-multiple',
        Z_INDEX: 99999
      };
      var PRIMARY_SPINNER = 'primary';

      var NgxSpinner = function NgxSpinner(init) {
        _classCallCheck(this, NgxSpinner);

        Object.assign(this, init);
      };

      var NgxSpinnerService = /*#__PURE__*/function () {
        /**
         * Creates an instance of NgxSpinnerService.
         * @memberof NgxSpinnerService
         */
        function NgxSpinnerService() {
          _classCallCheck(this, NgxSpinnerService);

          /**
           * Spinner observable
           *
           * @memberof NgxSpinnerService
           */
          // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
          this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }
        /**
        * Get subscription of desired spinner
        * @memberof NgxSpinnerService
        **/


        _createClass(NgxSpinnerService, [{
          key: "getSpinner",
          value: function getSpinner(name) {
            return this.spinnerObservable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
              return x && x.name === name;
            }));
          }
          /**
           * To show spinner
           *
           * @memberof NgxSpinnerService
           */

        }, {
          key: "show",
          value: function show() {
            var _this17 = this;

            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRIMARY_SPINNER;
            var spinner = arguments.length > 1 ? arguments[1] : undefined;
            return new Promise(function (resolve, _reject) {
              setTimeout(function () {
                if (spinner && Object.keys(spinner).length) {
                  spinner['name'] = name;

                  _this17.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), {
                    show: true
                  })));

                  resolve(true);
                } else {
                  _this17.spinnerObservable.next(new NgxSpinner({
                    name: name,
                    show: true
                  }));

                  resolve(true);
                }
              }, 10);
            });
          }
          /**
          * To hide spinner
          *
          * @memberof NgxSpinnerService
          */

        }, {
          key: "hide",
          value: function hide() {
            var _this18 = this;

            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRIMARY_SPINNER;
            var debounce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            return new Promise(function (resolve, _reject) {
              setTimeout(function () {
                _this18.spinnerObservable.next(new NgxSpinner({
                  name: name,
                  show: false
                }));

                resolve(true);
              }, debounce);
            });
          }
        }]);

        return NgxSpinnerService;
      }();

      NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) {
        return new (t || NgxSpinnerService)();
      };

      NgxSpinnerService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgxSpinnerService_Factory() {
          return new NgxSpinnerService();
        },
        token: NgxSpinnerService,
        providedIn: "root"
      });

      NgxSpinnerService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var NgxSpinnerComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of NgxSpinnerComponent.
         *
         * @memberof NgxSpinnerComponent
         */
        function NgxSpinnerComponent(spinnerService, changeDetector) {
          var _this19 = this;

          _classCallCheck(this, NgxSpinnerComponent);

          this.spinnerService = spinnerService;
          this.changeDetector = changeDetector;
          /**
           * To enable/disable animation
           *
           * @type {boolean}
           * @memberof NgxSpinnerComponent
           */

          this.disableAnimation = false;
          /**
           * Spinner Object
           *
           * @memberof NgxSpinnerComponent
           */

          this.spinner = new NgxSpinner();
          /**
           * Unsubscribe from spinner's observable
           *
           * @memberof NgxSpinnerComponent
          **/

          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /**
           * To set default ngx-spinner options
           *
           * @memberof NgxSpinnerComponent
           */

          this.setDefaultOptions = function () {
            _this19.spinner = new NgxSpinner({
              name: _this19.name,
              bdColor: _this19.bdColor,
              size: _this19.size,
              color: _this19.color,
              type: _this19.type,
              fullScreen: _this19.fullScreen,
              divArray: _this19.divArray,
              divCount: _this19.divCount,
              show: _this19.show,
              zIndex: _this19.zIndex,
              template: _this19.template,
              showSpinner: _this19.showSpinner
            });
          };

          this.bdColor = DEFAULTS.BD_COLOR;
          this.zIndex = DEFAULTS.Z_INDEX;
          this.color = DEFAULTS.SPINNER_COLOR;
          this.type = DEFAULTS.SPINNER_TYPE;
          this.size = 'large';
          this.fullScreen = true;
          this.name = PRIMARY_SPINNER;
          this.template = null;
          this.showSpinner = false;
          this.divArray = [];
          this.divCount = 0;
          this.show = false;
        }

        _createClass(NgxSpinnerComponent, [{
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
              event.returnValue = false;
              event.preventDefault();
            }
          }
          /**
           * Initialization method
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.setDefaultOptions();
            this.spinnerService.getSpinner(this.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (spinner) {
              _this20.setDefaultOptions();

              Object.assign(_this20.spinner, spinner);

              if (spinner.show) {
                _this20.onInputChange();
              }

              _this20.changeDetector.detectChanges();
            });
          }
          /**
           * On changes event for input variables
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var propName in changes) {
              if (propName) {
                var changedProp = changes[propName];

                if (changedProp.isFirstChange()) {
                  return;
                } else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
                  if (changedProp.currentValue !== '') {
                    this.spinner[propName] = changedProp.currentValue;

                    if (propName === 'showSpinner') {
                      if (changedProp.currentValue) {
                        this.spinnerService.show(this.spinner.name, this.spinner);
                      } else {
                        this.spinnerService.hide(this.spinner.name);
                      }
                    }
                  }
                }
              }
            }
          }
          /**
           * To get class for spinner
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "getClass",
          value: function getClass(type, size) {
            this.spinner.divCount = LOADERS[type];
            this.spinner.divArray = Array(this.spinner.divCount).fill(0).map(function (x, i) {
              return i;
            });
            var sizeClass = '';

            switch (size.toLowerCase()) {
              case 'small':
                sizeClass = 'la-sm';
                break;

              case 'medium':
                sizeClass = 'la-2x';
                break;

              case 'large':
                sizeClass = 'la-3x';
                break;

              default:
                break;
            }

            return 'la-' + type + ' ' + sizeClass;
          }
          /**
           * Check if input variables have changed
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.spinner["class"] = this.getClass(this.spinner.type, this.spinner.size);
          }
          /**
           * Component destroy event
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return NgxSpinnerComponent;
      }();

      NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) {
        return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      NgxSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxSpinnerComponent,
        selectors: [["ngx-spinner"]],
        viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spinnerDOM = _t.first);
          }
        },
        hostBindings: function NgxSpinnerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxSpinnerComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyboardEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          disableAnimation: "disableAnimation",
          bdColor: "bdColor",
          zIndex: "zIndex",
          color: "color",
          type: "type",
          size: "size",
          fullScreen: "fullScreen",
          name: "name",
          template: "template",
          showSpinner: "showSpinner"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 1,
        consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
        template: function NgxSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner.show);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]];
        },
        pipes: function pipes() {
          return [SafeHtmlPipe];
        },
        styles: [".la-ball-8bits[_ngcontent-%COMP%], .la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-8bits[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-8bits.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-8bits[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;transform:translate(100%,100%);-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:-100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:-100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:-33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:0;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){top:100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){top:100%;left:-33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){top:33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){top:0;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){top:-33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-8bits.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:2px}.la-ball-8bits.la-2x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-8bits.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-8bits.la-3x[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-8bits.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom[_ngcontent-%COMP%], .la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-atom[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-atom.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-atom[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){position:absolute;left:0;z-index:0;width:100%;height:100%;background:none;-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-atom.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-atom.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-atom.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat[_ngcontent-%COMP%], .la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-beat[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus[_ngcontent-%COMP%], .la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-circus[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-circus.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-circus[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:-100%;display:block;width:16px;width:100%;height:16px;height:100%;border-radius:100%;opacity:.5;-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm[_ngcontent-%COMP%], .la-ball-circus.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-circus.la-2x[_ngcontent-%COMP%], .la-ball-circus.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-circus.la-3x[_ngcontent-%COMP%], .la-ball-circus.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot[_ngcontent-%COMP%], .la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-climbing-dot[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-climbing-dot.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-climbing-dot[_ngcontent-%COMP%]{width:42px;height:32px}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;transform-origin:center bottom;-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;transform:translate(60%);-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:6px;height:6px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:6px;height:1px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%]{width:84px;height:64px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:28px;height:28px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:28px;height:4px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%]{width:126px;height:96px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:42px;height:42px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%], .la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;background:transparent;border-style:solid;border-width:2px;border-radius:100%;-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%], .la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;background:transparent;border-bottom-style:solid;border-top-style:solid;border-bottom-width:2px;border-top-width:2px;border-right:2px solid transparent;border-left:2px solid transparent;-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate[_ngcontent-%COMP%], .la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-clip-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px;background:transparent;border-width:2px;border-bottom-color:transparent;border-radius:100%;-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots[_ngcontent-%COMP%], .la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-elastic-dots[_ngcontent-%COMP%]{display:block;color:#fff}.la-ball-elastic-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:none;background-color:currentColor;border:0 solid}.la-ball-elastic-dots[_ngcontent-%COMP%]{width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%]{width:60px;height:4px}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%]{width:240px;height:20px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%]{width:360px;height:30px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall[_ngcontent-%COMP%], .la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fall[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fall[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-fall.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-fall.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-fall.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion[_ngcontent-%COMP%], .la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fussion[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-fussion.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fussion[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:12px;height:12px;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:50%;z-index:1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-fussion.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-fussion.la-2x[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-fussion.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-ball-fussion.la-3x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-fussion.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat[_ngcontent-%COMP%], .la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-grid-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-beat[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8), .la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse[_ngcontent-%COMP%], .la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-grid-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-pulse[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8), .la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle[_ngcontent-%COMP%], .la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-newton-cradle[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-newton-cradle.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-newton-cradle[_ngcontent-%COMP%]{width:40px;height:10px}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{transform:translateX(0)}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%]{width:20px;height:4px}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%]{width:80px;height:20px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%]{width:120px;height:30px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}.la-ball-pulse-rise[_ngcontent-%COMP%], .la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-rise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse-rise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-rise[_ngcontent-%COMP%]{width:70px;height:14px}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%]{width:34px;height:6px}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%]{width:140px;height:28px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%]{width:210px;height:42px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync[_ngcontent-%COMP%], .la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-sync[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse-sync.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-sync[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse[_ngcontent-%COMP%], .la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse[_ngcontent-%COMP%]{width:54px;height:18px}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite}.la-ball-pulse.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:0;left:-150%}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{top:0;left:150%}.la-ball-rotate.la-sm[_ngcontent-%COMP%], .la-ball-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-rotate.la-2x[_ngcontent-%COMP%], .la-ball-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-rotate.la-3x[_ngcontent-%COMP%], .la-ball-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots[_ngcontent-%COMP%], .la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-running-dots[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-running-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-running-dots[_ngcontent-%COMP%]{width:10px;height:10px}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-running-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%]{width:30px;height:30px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple[_ngcontent-%COMP%], .la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm[_ngcontent-%COMP%], .la-ball-scale-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-multiple.la-2x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-multiple.la-3x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse[_ngcontent-%COMP%], .la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-pulse[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm[_ngcontent-%COMP%], .la-ball-scale-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-pulse.la-2x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-pulse.la-3x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%], .la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-ripple-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple[_ngcontent-%COMP%], .la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale-ripple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;opacity:0;-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite}.la-ball-scale.la-sm[_ngcontent-%COMP%], .la-ball-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale.la-2x[_ngcontent-%COMP%], .la-ball-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale.la-3x[_ngcontent-%COMP%], .la-ball-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise[_ngcontent-%COMP%], .la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade[_ngcontent-%COMP%], .la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate[_ngcontent-%COMP%], .la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-rotate[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin[_ngcontent-%COMP%], .la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin[_ngcontent-%COMP%], .la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-square-clockwise-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{width:26px;height:26px}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin[_ngcontent-%COMP%], .la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-spin[_ngcontent-%COMP%]{width:26px;height:26px}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path[_ngcontent-%COMP%], .la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-triangle-path[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-triangle-path.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-triangle-path[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect[_ngcontent-%COMP%], .la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-zig-zag-deflect.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag[_ngcontent-%COMP%], .la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-zig-zag[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-ball-zig-zag.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag[_ngcontent-%COMP%]{position:relative;width:32px;height:32px}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog[_ngcontent-%COMP%], .la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cog[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-cog.la-dark[_ngcontent-%COMP%]{color:#333}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cog[_ngcontent-%COMP%]{width:31px;height:31px}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:transparent;border-style:dashed;border-width:2px;border-radius:100%;-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid;border-radius:100%}.la-cog.la-sm[_ngcontent-%COMP%]{width:15px;height:15px}.la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:1px}.la-cog.la-2x[_ngcontent-%COMP%]{width:61px;height:61px}.la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:4px}.la-cog.la-3x[_ngcontent-%COMP%]{width:91px;height:91px}.la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition[_ngcontent-%COMP%], .la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cube-transition[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-cube-transition.la-dark[_ngcontent-%COMP%]{color:#333}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cube-transition[_ngcontent-%COMP%]{width:32px;height:32px}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-cube-transition.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-cube-transition.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-cube-transition.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}.la-fire[_ngcontent-%COMP%], .la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-fire[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-fire.la-dark[_ngcontent-%COMP%]{color:#333}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-fire[_ngcontent-%COMP%]{width:32px;height:32px}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:0;border-radius:2px;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-fire.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-fire.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-fire.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px}.la-fire.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-fire.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party[_ngcontent-%COMP%], .la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-party[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-party.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-party[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-party.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-party.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-party.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%], .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out-rapid.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out[_ngcontent-%COMP%], .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale[_ngcontent-%COMP%], .la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale[_ngcontent-%COMP%]{width:40px;height:32px}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade[_ngcontent-%COMP%], .la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating[_ngcontent-%COMP%], .la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade[_ngcontent-%COMP%], .la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-line-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade[_ngcontent-%COMP%]{width:32px;height:32px}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman[_ngcontent-%COMP%], .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-pacman[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-pacman.la-dark[_ngcontent-%COMP%]{color:#333}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-pacman[_ngcontent-%COMP%]{width:32px;height:32px}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:0;height:0;background:transparent;border-style:solid;border-right:solid transparent;border-width:16px;border-radius:100%;-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;position:absolute}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:4px;height:4px}.la-pacman.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:16px;height:16px}.la-pacman.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box[_ngcontent-%COMP%], .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-jelly-box[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-jelly-box.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-jelly-box[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite}.la-square-jelly-box.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-jelly-box.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-jelly-box.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader[_ngcontent-%COMP%], .la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-loader[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-loader.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-loader[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border-width:2px;border-radius:0;-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite}.la-square-loader.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-loader.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-square-loader.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-loader.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-square-loader.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-square-loader.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin[_ngcontent-%COMP%], .la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-spin[_ngcontent-%COMP%]{width:32px;height:32px}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:0;-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-square-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-timer[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-timer.la-dark[_ngcontent-%COMP%]{color:#333}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:transparent;border-width:2px;border-radius:100%}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;transform-origin:1px 1px 0;-webkit-animation:timer-loader 1.25s linear infinite;animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation-delay:-625ms}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:12px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm[_ngcontent-%COMP%], .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;transform-origin:.5px .5px 0}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:6px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:4px}.la-timer.la-2x[_ngcontent-%COMP%], .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;transform-origin:2px 2px 0}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:24px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:16px}.la-timer.la-3x[_ngcontent-%COMP%], .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;transform-origin:3px 3px 0}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:36px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin[_ngcontent-%COMP%], .la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-triangle-skew-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff}.la-triangle-skew-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-triangle-skew-spin[_ngcontent-%COMP%]{width:32px;height:16px}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:0;height:0;background:transparent;border-left:none;border-right:none;border-color:currentcolor transparent;border-style:solid;border-width:0 16px 16px;-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:8px}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:32px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:48px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          })))])]
        },
        changeDetection: 0
      });

      NgxSpinnerComponent.ctorParameters = function () {
        return [{
          type: NgxSpinnerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      NgxSpinnerComponent.propDecorators = {
        bdColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fullScreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSpinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        spinnerDOM: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['overlay']
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-spinner',
            template: "<div [@.disabled]=\"disableAnimation\" [@fadeIn]=\"'in'\" *ngIf=\"spinner.show\" class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\" [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\" #overlay>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0
            })))])],
            styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{position:relative;box-sizing:border-box}.la-ball-8bits{display:block;font-size:0;color:#fff}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-8bits{width:12px;height:12px}.la-ball-8bits>div{position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;transform:translate(100%,100%);-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite}.la-ball-8bits>div:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits>div:first-child{top:-100%;left:0}.la-ball-8bits>div:nth-child(2){top:-100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(3){top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(4){top:-33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(5){top:0;left:100%}.la-ball-8bits>div:nth-child(6){top:33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(7){top:66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(8){top:100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(9){top:100%;left:0}.la-ball-8bits>div:nth-child(10){top:100%;left:-33.3333333333%}.la-ball-8bits>div:nth-child(11){top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(12){top:33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(13){top:0;left:-100%}.la-ball-8bits>div:nth-child(14){top:-33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(15){top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(16){top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm{width:6px;height:6px}.la-ball-8bits.la-sm>div{width:2px;height:2px}.la-ball-8bits.la-2x{width:24px;height:24px}.la-ball-8bits.la-2x>div{width:8px;height:8px}.la-ball-8bits.la-3x{width:36px;height:36px}.la-ball-8bits.la-3x>div{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{position:relative;box-sizing:border-box}.la-ball-atom{display:block;font-size:0;color:#fff}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-atom{width:32px;height:32px}.la-ball-atom>div:first-child{position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite}.la-ball-atom>div:not(:first-child){position:absolute;left:0;z-index:0;width:100%;height:100%;background:none;-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite}.la-ball-atom>div:not(:first-child):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm{width:16px;height:16px}.la-ball-atom.la-sm>div:not(:first-child):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x{width:64px;height:64px}.la-ball-atom.la-2x>div:not(:first-child):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x{width:96px;height:96px}.la-ball-atom.la-3x>div:not(:first-child):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat,.la-ball-beat>div{position:relative;box-sizing:border-box}.la-ball-beat{display:block;font-size:0;color:#fff}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-beat{width:54px;height:18px}.la-ball-beat>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{width:26px;height:8px}.la-ball-beat.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x{width:108px;height:36px}.la-ball-beat.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x{width:162px;height:54px}.la-ball-beat.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{position:relative;box-sizing:border-box}.la-ball-circus{display:block;font-size:0;color:#fff}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-circus{width:16px;height:16px}.la-ball-circus>div{position:absolute;top:0;left:-100%;display:block;width:16px;width:100%;height:16px;height:100%;border-radius:100%;opacity:.5;-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite}.la-ball-circus>div:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{width:8px;height:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{width:32px;height:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{position:relative;box-sizing:border-box}.la-ball-climbing-dot{display:block;font-size:0;color:#fff}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-climbing-dot{width:42px;height:32px}.la-ball-climbing-dot>div:first-child{position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;transform-origin:center bottom;-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite}.la-ball-climbing-dot>div:not(:first-child){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;transform:translate(60%);-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite}.la-ball-climbing-dot>div:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot>div:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{width:20px;height:16px}.la-ball-climbing-dot.la-sm>div:first-child{width:6px;height:6px}.la-ball-climbing-dot.la-sm>div:not(:first-child){width:6px;height:1px}.la-ball-climbing-dot.la-2x{width:84px;height:64px}.la-ball-climbing-dot.la-2x>div:first-child{width:28px;height:28px}.la-ball-climbing-dot.la-2x>div:not(:first-child){width:28px;height:4px}.la-ball-climbing-dot.la-3x{width:126px;height:96px}.la-ball-climbing-dot.la-3x>div:first-child{width:42px;height:42px}.la-ball-climbing-dot.la-3x>div:not(:first-child){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}to{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-multiple{width:32px;height:32px}.la-ball-clip-rotate-multiple>div{position:absolute;top:50%;left:50%;background:transparent;border-style:solid;border-width:2px;border-radius:100%;-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite}.la-ball-clip-rotate-multiple>div:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple>div:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse{display:block;font-size:0;color:#fff}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate-pulse{width:32px;height:32px}.la-ball-clip-rotate-pulse>div{position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse>div:first-child{position:absolute;width:32px;height:32px;background:transparent;border-bottom-style:solid;border-top-style:solid;border-bottom-width:2px;border-top-width:2px;border-right:2px solid transparent;border-left:2px solid transparent;-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse>div:last-child{width:16px;height:16px;-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite}.la-ball-clip-rotate-pulse.la-sm{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate{display:block;font-size:0;color:#fff}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-clip-rotate{width:32px;height:32px}.la-ball-clip-rotate>div{width:32px;height:32px;background:transparent;border-width:2px;border-bottom-color:transparent;border-radius:100%;-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite}.la-ball-clip-rotate.la-sm{width:16px;height:16px}.la-ball-clip-rotate.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x{width:64px;height:64px}.la-ball-clip-rotate.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x{width:96px;height:96px}.la-ball-clip-rotate.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{position:relative;box-sizing:border-box}.la-ball-elastic-dots{display:block;color:#fff}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{float:none;background-color:currentColor;border:0 solid}.la-ball-elastic-dots{width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots>div{display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite}.la-ball-elastic-dots.la-sm{width:60px;height:4px}.la-ball-elastic-dots.la-sm>div{width:4px;height:4px}.la-ball-elastic-dots.la-2x{width:240px;height:20px}.la-ball-elastic-dots.la-2x>div{width:20px;height:20px}.la-ball-elastic-dots.la-3x{width:360px;height:30px}.la-ball-elastic-dots.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fall{width:54px;height:18px}.la-ball-fall>div{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{position:relative;box-sizing:border-box}.la-ball-fussion{display:block;font-size:0;color:#fff}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-fussion{width:8px;height:8px}.la-ball-fussion>div{position:absolute;width:12px;height:12px;border-radius:100%;transform:translate(-50%,-50%);-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite}.la-ball-fussion>div:first-child{top:0;left:50%;z-index:1}.la-ball-fussion>div:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion>div:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion>div:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm{width:4px;height:4px}.la-ball-fussion.la-sm>div{width:6px;height:6px}.la-ball-fussion.la-2x{width:16px;height:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{width:24px;height:24px}.la-ball-fussion.la-3x>div{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}to{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}to{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}to{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}to{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat,.la-ball-grid-beat>div{position:relative;box-sizing:border-box}.la-ball-grid-beat{display:block;font-size:0;color:#fff}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-beat{width:36px;height:36px}.la-ball-grid-beat>div{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat>div:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s}.la-ball-grid-beat>div:nth-child(8),.la-ball-grid-beat>div:nth-child(9){-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s}.la-ball-grid-beat.la-sm{width:18px;height:18px}.la-ball-grid-beat.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x{width:72px;height:72px}.la-ball-grid-beat.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x{width:108px;height:108px}.la-ball-grid-beat.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{position:relative;box-sizing:border-box}.la-ball-grid-pulse{display:block;font-size:0;color:#fff}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-grid-pulse{width:36px;height:36px}.la-ball-grid-pulse>div{width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse>div:first-child{-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s}.la-ball-grid-pulse>div:nth-child(8),.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s}.la-ball-grid-pulse.la-sm{width:18px;height:18px}.la-ball-grid-pulse.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x{width:72px;height:72px}.la-ball-grid-pulse.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x{width:108px;height:108px}.la-ball-grid-pulse.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{position:relative;box-sizing:border-box}.la-ball-newton-cradle{display:block;font-size:0;color:#fff}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-newton-cradle{width:40px;height:10px}.la-ball-newton-cradle>div{width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle>div:first-child{-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite}.la-ball-newton-cradle>div:first-child,.la-ball-newton-cradle>div:last-child{transform:translateX(0)}.la-ball-newton-cradle>div:last-child{-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite}.la-ball-newton-cradle.la-sm{width:20px;height:4px}.la-ball-newton-cradle.la-sm>div{width:4px;height:4px}.la-ball-newton-cradle.la-2x{width:80px;height:20px}.la-ball-newton-cradle.la-2x>div{width:20px;height:20px}.la-ball-newton-cradle.la-3x{width:120px;height:30px}.la-ball-newton-cradle.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:translateX(0)}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{position:relative;box-sizing:border-box}.la-ball-pulse-rise{display:block;font-size:0;color:#fff}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-rise{width:70px;height:14px}.la-ball-pulse-rise>div{width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{width:34px;height:6px}.la-ball-pulse-rise.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x{width:140px;height:28px}.la-ball-pulse-rise.la-2x>div{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x{width:210px;height:42px}.la-ball-pulse-rise.la-3x>div{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{position:relative;box-sizing:border-box}.la-ball-pulse-sync{display:block;font-size:0;color:#fff}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse-sync{width:54px;height:18px}.la-ball-pulse-sync>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite}.la-ball-pulse-sync>div:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{width:26px;height:8px}.la-ball-pulse-sync.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x{width:108px;height:36px}.la-ball-pulse-sync.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x{width:162px;height:54px}.la-ball-pulse-sync.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{position:relative;box-sizing:border-box}.la-ball-pulse{display:block;font-size:0;color:#fff}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-pulse{width:54px;height:18px}.la-ball-pulse>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse>div{width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite}.la-ball-pulse.la-sm{width:26px;height:8px}.la-ball-pulse.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x{width:108px;height:36px}.la-ball-pulse.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x{width:162px;height:54px}.la-ball-pulse.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{position:relative;box-sizing:border-box}.la-ball-rotate{display:block;font-size:0;color:#fff}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-rotate,.la-ball-rotate>div{width:10px;height:10px}.la-ball-rotate>div{border-radius:100%;-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite}.la-ball-rotate>div:after,.la-ball-rotate>div:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate>div:before{top:0;left:-150%}.la-ball-rotate>div:after{top:0;left:150%}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{width:4px;height:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{width:20px;height:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots,.la-ball-running-dots>div{position:relative;box-sizing:border-box}.la-ball-running-dots{display:block;font-size:0;color:#fff}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-running-dots{width:10px;height:10px}.la-ball-running-dots>div{position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite}.la-ball-running-dots>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{width:4px;height:4px}.la-ball-running-dots.la-sm>div{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x{width:20px;height:20px}.la-ball-running-dots.la-2x>div{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x{width:30px;height:30px}.la-ball-running-dots.la-3x>div{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,to{width:100%;height:100%;transform:translateY(0) translateX(500%)}80%{transform:translateY(0) translateX(0)}85%{width:100%;height:100%;transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-multiple{display:block;font-size:0;color:#fff}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-multiple{width:32px;height:32px}.la-ball-scale-multiple>div{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{width:16px;height:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{width:64px;height:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{position:relative;box-sizing:border-box}.la-ball-scale-pulse{display:block;font-size:0;color:#fff}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-pulse{width:32px;height:32px}.la-ball-scale-pulse>div{position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{width:16px;height:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{width:64px;height:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple{display:block;font-size:0;color:#fff}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple-multiple{width:32px;height:32px}.la-ball-scale-ripple-multiple>div{position:absolute;top:0;left:0;width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple-multiple>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple{display:block;font-size:0;color:#fff}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale-ripple{width:32px;height:32px}.la-ball-scale-ripple>div{width:32px;height:32px;background:transparent;border-width:2px;border-radius:100%;opacity:0;-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite}.la-ball-scale-ripple.la-sm{width:16px;height:16px}.la-ball-scale-ripple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x{width:64px;height:64px}.la-ball-scale-ripple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x{width:96px;height:96px}.la-ball-scale-ripple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale,.la-ball-scale>div{position:relative;box-sizing:border-box}.la-ball-scale{display:block;font-size:0;color:#fff}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-scale,.la-ball-scale>div{width:32px;height:32px}.la-ball-scale>div{border-radius:100%;opacity:0;-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{width:16px;height:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{width:64px;height:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-ball-spin-clockwise-fade-rotating>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite}.la-ball-spin-clockwise-fade-rotating>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise-fade{width:32px;height:32px}.la-ball-spin-clockwise-fade>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite}.la-ball-spin-clockwise-fade>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-clockwise{width:32px;height:32px}.la-ball-spin-clockwise>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite}.la-ball-spin-clockwise>div:first-child{top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm{width:16px;height:16px}.la-ball-spin-clockwise.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x{width:64px;height:64px}.la-ball-spin-clockwise.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x{width:96px;height:96px}.la-ball-spin-clockwise.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating{display:block;font-size:0;color:#fff}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite}.la-ball-spin-fade-rotating>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade-rotating>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade,.la-ball-spin-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-fade{display:block;font-size:0;color:#fff}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-fade{width:32px;height:32px}.la-ball-spin-fade>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite}.la-ball-spin-fade>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm{width:16px;height:16px}.la-ball-spin-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x{width:64px;height:64px}.la-ball-spin-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x{width:96px;height:96px}.la-ball-spin-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{position:relative;box-sizing:border-box}.la-ball-spin-rotate{display:block;font-size:0;color:#fff}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin-rotate{width:32px;height:32px;-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite}.la-ball-spin-rotate>div{position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite}.la-ball-spin-rotate>div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm{width:16px;height:16px}.la-ball-spin-rotate.la-2x{width:64px;height:64px}.la-ball-spin-rotate.la-3x{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{position:relative;box-sizing:border-box}.la-ball-spin{display:block;font-size:0;color:#fff}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-spin{width:32px;height:32px}.la-ball-spin>div{position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite}.la-ball-spin>div:first-child{top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm{width:16px;height:16px}.la-ball-spin.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x{width:64px;height:64px}.la-ball-spin.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x{width:96px;height:96px}.la-ball-spin.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin{display:block;font-size:0;color:#fff}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-clockwise-spin{width:26px;height:26px}.la-ball-square-clockwise-spin>div{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite}.la-ball-square-clockwise-spin>div:first-child{top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{position:relative;box-sizing:border-box}.la-ball-square-spin{display:block;font-size:0;color:#fff}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-square-spin{width:26px;height:26px}.la-ball-square-spin>div{position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite}.la-ball-square-spin>div:first-child{top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm{width:12px;height:12px}.la-ball-square-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x{width:52px;height:52px}.la-ball-square-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x{width:78px;height:78px}.la-ball-square-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{position:relative;box-sizing:border-box}.la-ball-triangle-path{display:block;font-size:0;color:#fff}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-triangle-path{width:32px;height:32px}.la-ball-triangle-path>div{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path>div:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm{width:16px;height:16px}.la-ball-triangle-path.la-sm>div{width:4px;height:4px}.la-ball-triangle-path.la-2x{width:64px;height:64px}.la-ball-triangle-path.la-2x>div{width:20px;height:20px}.la-ball-triangle-path.la-3x{width:96px;height:96px}.la-ball-triangle-path.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{position:relative;box-sizing:border-box}.la-ball-zig-zag-deflect{display:block;font-size:0;color:#fff}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag-deflect{position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect>div{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{position:relative;box-sizing:border-box}.la-ball-zig-zag{display:block;font-size:0;color:#fff}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-ball-zig-zag{position:relative;width:32px;height:32px}.la-ball-zig-zag>div{position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag>div:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag>div:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm{width:16px;height:16px}.la-ball-zig-zag.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x{width:64px;height:64px}.la-ball-zig-zag.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x{width:96px;height:96px}.la-ball-zig-zag.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog,.la-cog>div{position:relative;box-sizing:border-box}.la-cog{display:block;font-size:0;color:#fff}.la-cog.la-dark{color:#333}.la-cog>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cog{width:31px;height:31px}.la-cog>div{width:100%;height:100%;background-color:transparent;border-style:dashed;border-width:2px;border-radius:100%;-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite}.la-cog>div:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid;border-radius:100%}.la-cog.la-sm{width:15px;height:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{width:61px;height:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{width:91px;height:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition,.la-cube-transition>div{position:relative;box-sizing:border-box}.la-cube-transition{display:block;font-size:0;color:#fff}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-cube-transition{width:32px;height:32px}.la-cube-transition>div{position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{width:16px;height:16px}.la-cube-transition.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x{width:64px;height:64px}.la-cube-transition.la-2x>div{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x{width:96px;height:96px}.la-cube-transition.la-3x>div{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{top:0;left:100%;transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;transform:scale(.5) rotate(-270deg)}to{top:0;left:0;transform:scale(1) rotate(-1turn)}}.la-fire,.la-fire>div{position:relative;box-sizing:border-box}.la-fire{display:block;font-size:0;color:#fff}.la-fire.la-dark{color:#333}.la-fire>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-fire{width:32px;height:32px}.la-fire>div{position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:0;border-radius:2px;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite}.la-fire>div:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{width:16px;height:16px}.la-fire.la-sm>div{width:6px;height:6px}.la-fire.la-2x{width:64px;height:64px}.la-fire.la-2x>div{width:24px;height:24px}.la-fire.la-3x{width:96px;height:96px}.la-fire.la-3x>div{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{position:relative;box-sizing:border-box}.la-line-scale-party{display:block;font-size:0;color:#fff}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-party{width:40px;height:32px}.la-line-scale-party>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party>div:first-child{-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm{width:20px;height:16px}.la-line-scale-party.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x{width:80px;height:64px}.la-line-scale-party.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x{width:120px;height:96px}.la-line-scale-party.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out-rapid{width:40px;height:32px}.la-line-scale-pulse-out-rapid>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:first-child,.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out{display:block;font-size:0;color:#fff}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale-pulse-out{width:40px;height:32px}.la-line-scale-pulse-out>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:first-child,.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{width:20px;height:16px}.la-line-scale-pulse-out.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x{width:80px;height:64px}.la-line-scale-pulse-out.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x{width:120px;height:96px}.la-line-scale-pulse-out.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale,.la-line-scale>div{position:relative;box-sizing:border-box}.la-line-scale{display:block;font-size:0;color:#fff}.la-line-scale.la-dark{color:#333}.la-line-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-scale{width:40px;height:32px}.la-line-scale>div{width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite}.la-line-scale>div:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{width:20px;height:16px}.la-line-scale.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x{width:80px;height:64px}.la-line-scale.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x{width:120px;height:96px}.la-line-scale.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade-rotating{width:32px;height:32px;-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite}.la-line-spin-clockwise-fade-rotating>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite}.la-line-spin-clockwise-fade-rotating>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade{display:block;font-size:0;color:#fff}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-clockwise-fade{width:32px;height:32px}.la-line-spin-clockwise-fade>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite}.la-line-spin-clockwise-fade>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating{display:block;font-size:0;color:#fff}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade-rotating{width:32px;height:32px;-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite}.la-line-spin-fade-rotating>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite}.la-line-spin-fade-rotating>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{position:relative;box-sizing:border-box}.la-line-spin-fade{display:block;font-size:0;color:#fff}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-line-spin-fade{width:32px;height:32px}.la-line-spin-fade>div{position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite}.la-line-spin-fade>div:first-child{top:15%;left:50%;transform:rotate(0deg);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade>div:nth-child(3){top:50%;left:85%;transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm{width:16px;height:16px}.la-line-spin-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x{width:64px;height:64px}.la-line-spin-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x{width:96px;height:96px}.la-line-spin-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman,.la-pacman>div{position:relative;box-sizing:border-box}.la-pacman{display:block;font-size:0;color:#fff}.la-pacman.la-dark{color:#333}.la-pacman>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-pacman{width:32px;height:32px}.la-pacman>div:first-child,.la-pacman>div:nth-child(2){width:0;height:0;background:transparent;border-style:solid;border-right:solid transparent;border-width:16px;border-radius:100%;-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;position:absolute}.la-pacman>div:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{width:16px;height:16px}.la-pacman.la-sm>div:first-child,.la-pacman.la-sm>div:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm>div:nth-child(2){top:0}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){width:4px;height:4px}.la-pacman.la-2x{width:64px;height:64px}.la-pacman.la-2x>div:first-child,.la-pacman.la-2x>div:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x>div:nth-child(2){top:0}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){width:16px;height:16px}.la-pacman.la-3x{width:96px;height:96px}.la-pacman.la-3x>div:first-child,.la-pacman.la-3x>div:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x>div:nth-child(2){top:0}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{position:relative;box-sizing:border-box}.la-square-jelly-box{display:block;font-size:0;color:#fff}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-jelly-box{width:32px;height:32px}.la-square-jelly-box>div:first-child,.la-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box>div:first-child{top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite}.la-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite}.la-square-jelly-box.la-sm{width:16px;height:16px}.la-square-jelly-box.la-2x{width:64px;height:64px}.la-square-jelly-box.la-3x{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader,.la-square-loader>div{position:relative;box-sizing:border-box}.la-square-loader{display:block;font-size:0;color:#fff}.la-square-loader.la-dark{color:#333}.la-square-loader>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-loader{width:32px;height:32px}.la-square-loader>div{width:100%;height:100%;background:transparent;border-width:2px;border-radius:0;-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite}.la-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite}.la-square-loader.la-sm{width:16px;height:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{width:64px;height:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{width:96px;height:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin,.la-square-spin>div{position:relative;box-sizing:border-box}.la-square-spin{display:block;font-size:0;color:#fff}.la-square-spin.la-dark{color:#333}.la-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-square-spin{width:32px;height:32px}.la-square-spin>div{width:100%;height:100%;border-radius:0;-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-square-spin.la-sm{width:16px;height:16px}.la-square-spin.la-2x{width:64px;height:64px}.la-square-spin.la-3x{width:96px;height:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer,.la-timer>div{position:relative;box-sizing:border-box}.la-timer{display:block;font-size:0;color:#fff}.la-timer.la-dark{color:#333}.la-timer>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-timer,.la-timer>div{width:32px;height:32px}.la-timer>div{background:transparent;border-width:2px;border-radius:100%}.la-timer>div:after,.la-timer>div:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;transform-origin:1px 1px 0;-webkit-animation:timer-loader 1.25s linear infinite;animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation-delay:-625ms}.la-timer>div:before{height:12px}.la-timer>div:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm,.la-timer.la-sm>div{width:16px;height:16px}.la-timer.la-sm>div{border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;transform-origin:.5px .5px 0}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x,.la-timer.la-2x>div{width:64px;height:64px}.la-timer.la-2x>div{border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;transform-origin:2px 2px 0}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x,.la-timer.la-3x>div{width:96px;height:96px}.la-timer.la-3x>div{border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;transform-origin:3px 3px 0}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{position:relative;box-sizing:border-box}.la-triangle-skew-spin{display:block;font-size:0;color:#fff}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid}.la-triangle-skew-spin{width:32px;height:16px}.la-triangle-skew-spin>div{width:0;height:0;background:transparent;border-left:none;border-right:none;border-color:currentcolor transparent;border-style:solid;border-width:0 16px 16px;-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite}.la-triangle-skew-spin.la-sm{width:16px;height:8px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{width:64px;height:32px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{width:96px;height:48px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"]
          }]
        }], function () {
          return [{
            type: NgxSpinnerService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bdColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }],
          spinnerDOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['overlay']
          }]
        });
      })();

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(_sanitizer) {
          _classCallCheck(this, SafeHtmlPipe);

          this._sanitizer = _sanitizer;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(v) {
            if (v) {
              return this._sanitizer.bypassSecurityTrustHtml(v);
            }
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
      };

      SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: SafeHtmlPipe,
        pure: true
      });

      SafeHtmlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safeHtml'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }];
        }, null);
      })();

      var NgxSpinnerModule = function NgxSpinnerModule() {
        _classCallCheck(this, NgxSpinnerModule);
      };

      NgxSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxSpinnerModule
      });
      NgxSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxSpinnerModule_Factory(t) {
          return new (t || NgxSpinnerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxSpinnerModule, {
          declarations: function declarations() {
            return [NgxSpinnerComponent, SafeHtmlPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [NgxSpinnerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [NgxSpinnerComponent, SafeHtmlPipe],
            exports: [NgxSpinnerComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-spinner
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-spinner.js.map

      /***/

    },

    /***/
    "Q2Ze":
    /*!***************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/form-field.js ***!
      \***************************************************************/

    /*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function Q2Ze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function () {
        return MAT_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function () {
        return MAT_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function () {
        return MAT_SUFFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function () {
        return _MAT_HINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Injection token that can be used to reference instances of `MatError`. It serves as
       * alternative token to the actual `MatError` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
      /** Single error message to be shown underneath the form field. */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_ERROR,
          useExisting: MatError
        }])]
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            },
            providers: [{
              provide: MAT_ERROR,
              useExisting: MatError
            }]
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the MatFormField.
       * @docs-private
       */


      var matFormFieldAnimations = {
        /** Animation that transitions the form field's error and hint messages. */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-5px)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** An interface which allows a control to work inside of a `MatFormField`. */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /** @docs-private */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /** @docs-private */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `MatHint`. It serves as
       * alternative token to the actual `MatHint` class which could cause unnecessary
       * retention of the class and its directive metadata.
       *
       * *Note*: This is not part of the public API as the MDC-based form-field will not
       * need a lightweight token for `MatHint` and we want to reduce breaking changes.
       */

      var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
      /** Hint text to be shown underneath the form field control. */


      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _MAT_HINT,
          useExisting: MatHint
        }])]
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-form-field-hint-end]': 'align === "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            },
            providers: [{
              provide: _MAT_HINT,
              useExisting: MatHint
            }]
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The floating label for a `mat-form-field`. */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * @breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatPrefix`. It serves as
       * alternative token to the actual `MatPrefix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
      /** Prefix to be placed in front of the form field. */

      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_PREFIX,
          useExisting: MatPrefix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]',
            providers: [{
              provide: MAT_PREFIX,
              useExisting: MatPrefix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatSuffix`. It serves as
       * alternative token to the actual `MatSuffix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
      /** Suffix to be placed at the end of the form field. */

      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SUFFIX,
          useExisting: MatSuffix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]',
            providers: [{
              provide: MAT_SUFFIX,
              useExisting: MatSuffix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$2 = 0;
      var floatingLabelScale = 0.75;
      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * @docs-private
       */

      var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * @docs-private
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /** Container for form controls that applies Material Design styling and behavior. */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super4 = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef,
        /**
         * @deprecated `_labelOptions` parameter no longer being used. To be removed.
         * @breaking-change 12.0.0
         */
        // Use `ElementRef` here so Angular has something to inject.
        _labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this21;

          _classCallCheck(this, MatFormField);

          _this21 = _super4.call(this, _elementRef);
          _this21._elementRef = _elementRef;
          _this21._changeDetectorRef = _changeDetectorRef;
          _this21._dir = _dir;
          _this21._defaults = _defaults;
          _this21._platform = _platform;
          _this21._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this21._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this21._outlineGapCalculationNeededOnStable = false;
          _this21._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this21._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this21._subscriptAnimationState = '';
          _this21._hintLabel = ''; // Unique id for the hint label.

          _this21._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

          _this21._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this21.floatLabel = _this21._getDefaultFloatLabelState();
          _this21._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this21.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this21._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this21;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the floating label should always float or not. */

        }, {
          key: "_shouldAlwaysFloat",
          value: function _shouldAlwaysFloat() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          value: function _canLabelFloat() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
          /**
           * Gets the id of the label element. If no label is present, returns `null`.
           */

        }, {
          key: "getLabelId",
          value: function getLabelId() {
            return this._hasFloatingLabel() ? this._labelId : null;
          }
          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this22 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this22._validatePlaceholders();

              _this22._syncDescribedByIds();

              _this22._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this22._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this22._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this22._destroyed)).subscribe(function () {
                if (_this22._outlineGapCalculationNeededOnStable) {
                  _this22.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this22._outlineGapCalculationNeededOnStable = true;

              _this22._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this22._processHints();

              _this22._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this22._syncDescribedByIds();

              _this22._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this22._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this22.updateOutlineGap();
                    });
                  });
                } else {
                  _this22.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!(this._labelChildNonStatic || this._labelChildStatic);
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this23 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat()) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this23._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this24 = this;

            if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this24.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

              if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
                ids.push.apply(ids, _toConsumableArray(this._control.userAriaDescribedBy.split(' ')));
              }

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids.push.apply(ids, _toConsumableArray(this._errorChildren.map(function (error) {
                  return error.id;
                })));
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i2 = 0; _i2 < startEls.length; _i2++) {
              startEls[_i2].style.width = "".concat(startWidth, "px");
            }

            for (var _i3 = 0; _i3 < gapEls.length; _i3++) {
              gapEls[_i3].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 40,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_ERROR, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_MAT_HINT, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_PREFIX, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_SUFFIX, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat()',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "aLe/":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js ***!
      \******************************************************************************/

    /*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */

    /***/
    function aLe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geometry", function () {
        return Geometry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function () {
        return PERFECT_SCROLLBAR_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function () {
        return PerfectScrollbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function () {
        return PerfectScrollbarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function () {
        return PerfectScrollbarDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function () {
        return PerfectScrollbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Position", function () {
        return Position;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "bdgK");

      function PerfectScrollbarComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
        }
      }

      var _c0 = ["*"];
      var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');

      var Geometry = function Geometry(x, y, w, h) {
        _classCallCheck(this, Geometry);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
      };

      var Position = function Position(x, y) {
        _classCallCheck(this, Position);

        this.x = x;
        this.y = y;
      };

      var PerfectScrollbarEvents = ['psScrollY', 'psScrollX', 'psScrollUp', 'psScrollDown', 'psScrollLeft', 'psScrollRight', 'psYReachEnd', 'psYReachStart', 'psXReachEnd', 'psXReachStart'];

      var PerfectScrollbarConfig = /*#__PURE__*/function () {
        function PerfectScrollbarConfig() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, PerfectScrollbarConfig);

          this.assign(config);
        }

        _createClass(PerfectScrollbarConfig, [{
          key: "assign",
          value: function assign() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            for (var key in config) {
              this[key] = config[key];
            }
          }
        }]);

        return PerfectScrollbarConfig;
      }();

      var PerfectScrollbarDirective = /*#__PURE__*/function () {
        function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
          _classCallCheck(this, PerfectScrollbarDirective);

          this.zone = zone;
          this.differs = differs;
          this.elementRef = elementRef;
          this.platformId = platformId;
          this.defaults = defaults;
          this.instance = null;
          this.ro = null;
          this.timeout = null;
          this.animation = null;
          this.configDiff = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.disabled = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(PerfectScrollbarDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              var config = new PerfectScrollbarConfig(this.defaults);
              config.assign(this.config); // Custom configuration

              this.zone.runOutsideAngular(function () {
                _this25.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](_this25.elementRef.nativeElement, config);
              });

              if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
              }

              this.zone.runOutsideAngular(function () {
                _this25.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__["default"](function () {
                  _this25.update();
                });

                if (_this25.elementRef.nativeElement.children[0]) {
                  _this25.ro.observe(_this25.elementRef.nativeElement.children[0]);
                }

                _this25.ro.observe(_this25.elementRef.nativeElement);
              });
              this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                  var eventType = eventName.replace(/([A-Z])/g, function (c) {
                    return "-".concat(c.toLowerCase());
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(_this25.elementRef.nativeElement, eventType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this25.ngDestroy)).subscribe(function (event) {
                    _this25[eventName].emit(event);
                  });
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this26 = this;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              this.ngDestroy.next();
              this.ngDestroy.complete();

              if (this.ro) {
                this.ro.disconnect();
              }

              if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
              }

              this.zone.runOutsideAngular(function () {
                if (_this26.instance) {
                  _this26.instance.destroy();
                }
              });
              this.instance = null;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              var changes = this.configDiff.diff(this.config || {});

              if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
              }
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                  this.ngOnDestroy();
                } else if (changes['disabled'].currentValue === false) {
                  this.ngOnInit();
                }
              }
            }
          }
        }, {
          key: "ps",
          value: function ps() {
            return this.instance;
          }
        }, {
          key: "update",
          value: function update() {
            var _this27 = this;

            if (typeof window !== 'undefined') {
              if (this.timeout) {
                window.clearTimeout(this.timeout);
              }

              this.timeout = window.setTimeout(function () {
                if (!_this27.disabled && _this27.configDiff) {
                  try {
                    _this27.zone.runOutsideAngular(function () {
                      if (_this27.instance) {
                        _this27.instance.update();
                      }
                    });
                  } catch (error) {// Update can be finished after destroy so catch errors
                  }
                }
              }, 0);
            }
          }
        }, {
          key: "geometry",
          value: function geometry() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'scroll';
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
          }
        }, {
          key: "position",
          value: function position() {
            var absolute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!absolute && this.instance) {
              return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            } else {
              return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
          }
        }, {
          key: "scrollable",
          value: function scrollable() {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'any';
            var element = this.elementRef.nativeElement;

            if (direction === 'any') {
              return element.classList.contains('ps--active-x') || element.classList.contains('ps--active-y');
            } else if (direction === 'both') {
              return element.classList.contains('ps--active-x') && element.classList.contains('ps--active-y');
            } else {
              return element.classList.contains('ps--active-' + direction);
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(x, y, speed) {
            if (!this.disabled) {
              if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
              } else {
                if (x != null) {
                  this.animateScrolling('scrollLeft', x, speed);
                }

                if (y != null) {
                  this.animateScrolling('scrollTop', y, speed);
                }
              }
            }
          }
        }, {
          key: "scrollToX",
          value: function scrollToX(x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
          }
        }, {
          key: "scrollToY",
          value: function scrollToY(y, speed) {
            this.animateScrolling('scrollTop', y, speed);
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop(offset, speed) {
            this.animateScrolling('scrollTop', offset || 0, speed);
          }
        }, {
          key: "scrollToLeft",
          value: function scrollToLeft(offset, speed) {
            this.animateScrolling('scrollLeft', offset || 0, speed);
          }
        }, {
          key: "scrollToRight",
          value: function scrollToRight(offset, speed) {
            var left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom(offset, speed) {
            var top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
          }
        }, {
          key: "scrollToElement",
          value: function scrollToElement(qs, offset, speed) {
            var element = this.elementRef.nativeElement.querySelector(qs);

            if (element) {
              var elementPos = element.getBoundingClientRect();
              var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

              if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
              }

              if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var _currentPos = this.elementRef.nativeElement['scrollTop'];

                var _position = elementPos.top - scrollerPos.top + _currentPos;

                this.animateScrolling('scrollTop', _position + (offset || 0), speed);
              }
            }
          }
        }, {
          key: "animateScrolling",
          value: function animateScrolling(target, value, speed) {
            var _this28 = this;

            if (this.animation) {
              window.cancelAnimationFrame(this.animation);
              this.animation = null;
            }

            if (!speed || typeof window === 'undefined') {
              this.elementRef.nativeElement[target] = value;
            } else if (value !== this.elementRef.nativeElement[target]) {
              var newValue = 0;
              var scrollCount = 0;
              var oldTimestamp = performance.now();
              var oldValue = this.elementRef.nativeElement[target];
              var cosParameter = (oldValue - value) / 2;

              var step = function step(newTimestamp) {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount)); // Only continue animation if scroll position has not changed

                if (_this28.elementRef.nativeElement[target] === oldValue) {
                  if (scrollCount >= Math.PI) {
                    _this28.animateScrolling(target, value, 0);
                  } else {
                    _this28.elementRef.nativeElement[target] = newValue; // On a zoomed out page the resulting offset may differ

                    oldValue = _this28.elementRef.nativeElement[target];
                    oldTimestamp = newTimestamp;
                    _this28.animation = window.requestAnimationFrame(step);
                  }
                }
              };

              window.requestAnimationFrame(step);
            }
          }
        }]);

        return PerfectScrollbarDirective;
      }();

      PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) {
        return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](PERFECT_SCROLLBAR_CONFIG, 8));
      };

      PerfectScrollbarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: PerfectScrollbarDirective,
        selectors: [["", "perfectScrollbar", ""]],
        inputs: {
          disabled: "disabled",
          config: ["perfectScrollbar", "config"]
        },
        outputs: {
          psScrollY: "psScrollY",
          psScrollX: "psScrollX",
          psScrollUp: "psScrollUp",
          psScrollDown: "psScrollDown",
          psScrollLeft: "psScrollLeft",
          psScrollRight: "psScrollRight",
          psYReachEnd: "psYReachEnd",
          psYReachStart: "psYReachStart",
          psXReachEnd: "psXReachEnd",
          psXReachStart: "psXReachStart"
        },
        exportAs: ["ngxPerfectScrollbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      PerfectScrollbarDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [PERFECT_SCROLLBAR_CONFIG]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarDirective.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('perfectScrollbar')], PerfectScrollbarDirective.prototype, "config", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
      PerfectScrollbarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(PERFECT_SCROLLBAR_CONFIG))], PerfectScrollbarDirective);

      var PerfectScrollbarComponent = /*#__PURE__*/function () {
        function PerfectScrollbarComponent(zone, cdRef, platformId) {
          _classCallCheck(this, PerfectScrollbarComponent);

          this.zone = zone;
          this.cdRef = cdRef;
          this.platformId = platformId;
          this.states = {};
          this.indicatorX = false;
          this.indicatorY = false;
          this.interaction = false;
          this.scrollPositionX = 0;
          this.scrollPositionY = 0;
          this.scrollDirectionX = 0;
          this.scrollDirectionY = 0;
          this.usePropagationX = false;
          this.usePropagationY = false;
          this.allowPropagationX = false;
          this.allowPropagationY = false;
          this.stateTimeout = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.disabled = false;
          this.usePSClass = true;
          this.autoPropagation = false;
          this.scrollIndicators = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(PerfectScrollbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              this.stateUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
                return a === b && !_this29.stateTimeout;
              })).subscribe(function (state) {
                if (_this29.stateTimeout && typeof window !== 'undefined') {
                  window.clearTimeout(_this29.stateTimeout);
                  _this29.stateTimeout = null;
                }

                if (state === 'x' || state === 'y') {
                  _this29.interaction = false;

                  if (state === 'x') {
                    _this29.indicatorX = false;
                    _this29.states.left = false;
                    _this29.states.right = false;

                    if (_this29.autoPropagation && _this29.usePropagationX) {
                      _this29.allowPropagationX = false;
                    }
                  } else if (state === 'y') {
                    _this29.indicatorY = false;
                    _this29.states.top = false;
                    _this29.states.bottom = false;

                    if (_this29.autoPropagation && _this29.usePropagationY) {
                      _this29.allowPropagationY = false;
                    }
                  }
                } else {
                  if (state === 'left' || state === 'right') {
                    _this29.states.left = false;
                    _this29.states.right = false;
                    _this29.states[state] = true;

                    if (_this29.autoPropagation && _this29.usePropagationX) {
                      _this29.indicatorX = true;
                    }
                  } else if (state === 'top' || state === 'bottom') {
                    _this29.states.top = false;
                    _this29.states.bottom = false;
                    _this29.states[state] = true;

                    if (_this29.autoPropagation && _this29.usePropagationY) {
                      _this29.indicatorY = true;
                    }
                  }

                  if (_this29.autoPropagation && typeof window !== 'undefined') {
                    _this29.stateTimeout = window.setTimeout(function () {
                      _this29.indicatorX = false;
                      _this29.indicatorY = false;
                      _this29.stateTimeout = null;

                      if (_this29.interaction && (_this29.states.left || _this29.states.right)) {
                        _this29.allowPropagationX = true;
                      }

                      if (_this29.interaction && (_this29.states.top || _this29.states.bottom)) {
                        _this29.allowPropagationY = true;
                      }

                      _this29.cdRef.markForCheck();
                    }, 500);
                  }
                }

                _this29.cdRef.markForCheck();

                _this29.cdRef.detectChanges();
              });
              this.zone.runOutsideAngular(function () {
                if (_this29.directiveRef) {
                  var element = _this29.directiveRef.elementRef.nativeElement;
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this29.ngDestroy)).subscribe(function (event) {
                    if (!_this29.disabled && _this29.autoPropagation) {
                      var scrollDeltaX = event.deltaX;
                      var scrollDeltaY = event.deltaY;

                      _this29.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                    }
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this29.ngDestroy)).subscribe(function (event) {
                    if (!_this29.disabled && _this29.autoPropagation) {
                      var scrollPositionX = event.touches[0].clientX;
                      var scrollPositionY = event.touches[0].clientY;
                      var scrollDeltaX = scrollPositionX - _this29.scrollPositionX;
                      var scrollDeltaY = scrollPositionY - _this29.scrollPositionY;

                      _this29.checkPropagation(event, scrollDeltaX, scrollDeltaY);

                      _this29.scrollPositionX = scrollPositionX;
                      _this29.scrollPositionY = scrollPositionY;
                    }
                  });
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-x').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-y').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('top'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this29.ngDestroy)).subscribe(function (state) {
                    if (!_this29.disabled && (_this29.autoPropagation || _this29.scrollIndicators)) {
                      _this29.stateUpdate.next(state);
                    }
                  });
                }
              });
              window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                  if (_this29.directiveRef) {
                    _this29.directiveRef[eventName] = _this29[eventName];
                  }
                });
              }, 0);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              this.ngDestroy.next();
              this.ngDestroy.unsubscribe();

              if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
              }
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
              }
            }
          }
        }, {
          key: "checkPropagation",
          value: function checkPropagation(event, deltaX, deltaY) {
            this.interaction = true;
            var scrollDirectionX = deltaX < 0 ? -1 : 1;
            var scrollDirectionY = deltaY < 0 ? -1 : 1;

            if (this.usePropagationX && this.usePropagationY || this.usePropagationX && (!this.allowPropagationX || this.scrollDirectionX !== scrollDirectionX) || this.usePropagationY && (!this.allowPropagationY || this.scrollDirectionY !== scrollDirectionY)) {
              event.preventDefault();
              event.stopPropagation();
            }

            if (!!deltaX) {
              this.scrollDirectionX = scrollDirectionX;
            }

            if (!!deltaY) {
              this.scrollDirectionY = scrollDirectionY;
            }

            this.stateUpdate.next('interaction');
            this.cdRef.detectChanges();
          }
        }]);

        return PerfectScrollbarComponent;
      }();

      PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) {
        return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
      };

      PerfectScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: PerfectScrollbarComponent,
        selectors: [["perfect-scrollbar"]],
        viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](PerfectScrollbarDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
          }
        },
        inputs: {
          disabled: "disabled",
          usePSClass: "usePSClass",
          autoPropagation: "autoPropagation",
          scrollIndicators: "scrollIndicators",
          config: "config"
        },
        outputs: {
          psScrollY: "psScrollY",
          psScrollX: "psScrollX",
          psScrollUp: "psScrollUp",
          psScrollDown: "psScrollDown",
          psScrollLeft: "psScrollLeft",
          psScrollRight: "psScrollRight",
          psYReachEnd: "psYReachEnd",
          psYReachStart: "psYReachStart",
          psXReachEnd: "psXReachEnd",
          psXReachStart: "psXReachStart"
        },
        exportAs: ["ngxPerfectScrollbar"],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 5,
        consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]],
        template: function PerfectScrollbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps", ctx.usePSClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollIndicators);
          }
        },
        directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"],
        encapsulation: 2
      });

      PerfectScrollbarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-limits'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-active'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "config", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(PerfectScrollbarDirective, {
        "static": true
      })], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
      PerfectScrollbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]))], PerfectScrollbarComponent);

      var PerfectScrollbarModule = function PerfectScrollbarModule() {
        _classCallCheck(this, PerfectScrollbarModule);
      };

      PerfectScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: PerfectScrollbarModule
      });
      PerfectScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function PerfectScrollbarModule_Factory(t) {
          return new (t || PerfectScrollbarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[perfectScrollbar]',
            exportAs: 'ngxPerfectScrollbar'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [PERFECT_SCROLLBAR_CONFIG]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['perfectScrollbar']
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'perfect-scrollbar',
            exportAs: 'ngxPerfectScrollbar',
            template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ps-show-limits']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ps-show-active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [PerfectScrollbarDirective, {
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PerfectScrollbarModule, {
          declarations: function declarations() {
            return [PerfectScrollbarComponent, PerfectScrollbarDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-perfect-scrollbar.js.map

      /***/

    },

    /***/
    "bdgK":
    /*!*************************************************************************!*\
      !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bdgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * A collection of shims that provide minimal functionality of the ES6 collections.
       *
       * These implementations are not meant to be used outside of the ResizeObserver
       * modules as they cover only a limited range of use cases.
       */

      /* eslint-disable require-jsdoc, valid-jsdoc */


      var MapShim = function () {
        if (typeof Map !== 'undefined') {
          return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */


        function getIndex(arr, key) {
          var result = -1;
          arr.some(function (entry, index) {
            if (entry[0] === key) {
              result = index;
              return true;
            }

            return false;
          });
          return result;
        }

        return (
          /** @class */
          function () {
            function class_1() {
              this.__entries__ = [];
            }

            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function get() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */

            class_1.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */


            class_1.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                this.__entries__[index][1] = value;
              } else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype["delete"] = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */


            class_1.prototype.clear = function () {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */


            class_1.prototype.forEach = function (callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }

              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };

            return class_1;
          }()
        );
      }();
      /**
       * Detects whether window and document objects are available in current environment.
       */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

      var global$1 = function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
        } // eslint-disable-next-line no-new-func


        return Function('return this')();
      }();
      /**
       * A shim for the requestAnimationFrame which falls back to the setTimeout if
       * first one is not supported.
       *
       * @returns {number} Requests' identifier.
       */


      var requestAnimationFrame$1 = function () {
        if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
        }

        return function (callback) {
          return setTimeout(function () {
            return callback(Date.now());
          }, 1000 / 60);
        };
      }(); // Defines minimum timeout before adding a trailing call.


      var trailingTimeout = 2;
      /**
       * Creates a wrapper function which ensures that provided callback will be
       * invoked only once during the specified delay period.
       *
       * @param {Function} callback - Function to be invoked after the delay period.
       * @param {number} delay - Delay after which to invoke callback.
       * @returns {Function}
       */

      function throttle(callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */

        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }

          if (trailingCall) {
            proxy();
          }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */


        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */


        function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            } // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.


            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
        }

        return proxy;
      } // Minimum delay before invoking the update of observers.


      var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
      // might affect dimensions of observed elements.

      var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

      var mutationObserverSupported = typeof MutationObserver !== 'undefined';
      /**
       * Singleton controller class which handles updates of ResizeObserver instances.
       */

      var ResizeObserverController =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
          /**
           * Indicates whether DOM listeners have been added.
           *
           * @private {boolean}
           */
          this.connected_ = false;
          /**
           * Tells that controller has subscribed for Mutation Events.
           *
           * @private {boolean}
           */

          this.mutationEventsAdded_ = false;
          /**
           * Keeps reference to the instance of MutationObserver.
           *
           * @private {MutationObserver}
           */

          this.mutationsObserver_ = null;
          /**
           * A list of connected observers.
           *
           * @private {Array<ResizeObserverSPI>}
           */

          this.observers_ = [];
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */


        ResizeObserverController.prototype.addObserver = function (observer) {
          if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
          } // Add listeners if they haven't been added yet.


          if (!this.connected_) {
            this.connect_();
          }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */


        ResizeObserverController.prototype.removeObserver = function (observer) {
          var observers = this.observers_;
          var index = observers.indexOf(observer); // Remove observer if it's present in registry.

          if (~index) {
            observers.splice(index, 1);
          } // Remove listeners if controller has no connected observers.


          if (!observers.length && this.connected_) {
            this.disconnect_();
          }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */


        ResizeObserverController.prototype.refresh = function () {
          var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
          // be future ones caused by CSS transitions.

          if (changesDetected) {
            this.refresh();
          }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */


        ResizeObserverController.prototype.updateObservers_ = function () {
          // Collect observers that have active observations.
          var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
          }); // Deliver notifications in a separate cycle in order to avoid any
          // collisions between observers, e.g. when multiple instances of
          // ResizeObserver are tracking the same element and the callback of one
          // of them changes content dimensions of the observed target. Sometimes
          // this may result in notifications being blocked for the rest of observers.

          activeObservers.forEach(function (observer) {
            return observer.broadcastActive();
          });
          return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.connect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already added.
          if (!isBrowser || this.connected_) {
            return;
          } // Subscription to the "Transitionend" event is used as a workaround for
          // delayed transitions. This way it's possible to capture at least the
          // final state of an element.


          document.addEventListener('transitionend', this.onTransitionEnd_);
          window.addEventListener('resize', this.refresh);

          if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
          }

          this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.disconnect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already removed.
          if (!isBrowser || !this.connected_) {
            return;
          }

          document.removeEventListener('transitionend', this.onTransitionEnd_);
          window.removeEventListener('resize', this.refresh);

          if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
          }

          if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
          }

          this.mutationsObserver_ = null;
          this.mutationEventsAdded_ = false;
          this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */


        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
          var _b = _a.propertyName,
              propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

          var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
          });

          if (isReflowProperty) {
            this.refresh();
          }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */


        ResizeObserverController.getInstance = function () {
          if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
          }

          return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */


        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
      }();
      /**
       * Defines non-writable/enumerable properties of the provided target object.
       *
       * @param {Object} target - Object for which to define properties.
       * @param {Object} props - Properties to be defined.
       * @returns {Object} Target object.
       */


      var defineConfigurable = function defineConfigurable(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key = _a[_i];
          Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }

        return target;
      };
      /**
       * Returns the global object associated with provided element.
       *
       * @param {Object} target
       * @returns {Object}
       */


      var getWindowOf = function getWindowOf(target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
        // provided element.

        return ownerGlobal || global$1;
      }; // Placeholder of an empty content rectangle.


      var emptyRect = createRectInit(0, 0, 0, 0);
      /**
       * Converts provided string to a number.
       *
       * @param {number|string} value
       * @returns {number}
       */

      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      /**
       * Extracts borders size from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @param {...string} positions - Borders positions (top, right, ...)
       * @returns {number}
       */


      function getBordersSize(styles) {
        var positions = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }

        return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];
          return size + toFloat(value);
        }, 0);
      }
      /**
       * Extracts paddings sizes from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @returns {Object} Paddings box.
       */


      function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position = positions_1[_i];
          var value = styles['padding-' + position];
          paddings[position] = toFloat(value);
        }

        return paddings;
      }
      /**
       * Calculates content rectangle of provided SVG element.
       *
       * @param {SVGGraphicsElement} target - Element content rectangle of which needs
       *      to be calculated.
       * @returns {DOMRectInit}
       */


      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      /**
       * Calculates content rectangle of provided HTMLElement.
       *
       * @param {HTMLElement} target - Element for which to calculate the content rectangle.
       * @returns {DOMRectInit}
       */


      function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth,
            clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.

        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.

        var width = toFloat(styles.width),
            height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).

        if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
          }
        } // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.


        if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.

          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
      }
      /**
       * Checks whether provided element is an instance of the SVGGraphicsElement.
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      var isSVGGraphicsElement = function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        } // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens


        return function (target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
        };
      }();
      /**
       * Checks whether provided element is a document element (<html>).
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      /**
       * Calculates an appropriate content rectangle for provided html or svg element.
       *
       * @param {Element} target - Element content rectangle of which needs to be calculated.
       * @returns {DOMRectInit}
       */


      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
      }
      /**
       * Creates rectangle with an interface of the DOMRectReadOnly.
       * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
       *
       * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
       * @returns {DOMRectReadOnly}
       */


      function createReadOnlyRect(_a) {
        var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

        defineConfigurable(rect, {
          x: x,
          y: y,
          width: width,
          height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
        });
        return rect;
      }
      /**
       * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
       * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
       *
       * @param {number} x - X coordinate.
       * @param {number} y - Y coordinate.
       * @param {number} width - Rectangle's width.
       * @param {number} height - Rectangle's height.
       * @returns {DOMRectInit}
       */


      function createRectInit(x, y, width, height) {
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      }
      /**
       * Class that is responsible for computations of the content rectangle of
       * provided DOM element and for keeping track of it's changes.
       */


      var ResizeObservation =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
          /**
           * Broadcasted width of content rectangle.
           *
           * @type {number}
           */
          this.broadcastWidth = 0;
          /**
           * Broadcasted height of content rectangle.
           *
           * @type {number}
           */

          this.broadcastHeight = 0;
          /**
           * Reference to the last observed content rectangle.
           *
           * @private {DOMRectInit}
           */

          this.contentRect_ = createRectInit(0, 0, 0, 0);
          this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */


        ResizeObservation.prototype.isActive = function () {
          var rect = getContentRect(this.target);
          this.contentRect_ = rect;
          return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */


        ResizeObservation.prototype.broadcastRect = function () {
          var rect = this.contentRect_;
          this.broadcastWidth = rect.width;
          this.broadcastHeight = rect.height;
          return rect;
        };

        return ResizeObservation;
      }();

      var ResizeObserverEntry =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
          var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
          // and are also not enumerable in the native implementation.
          //
          // Property accessors are not being used as they'd require to define a
          // private WeakMap storage which may cause memory leaks in browsers that
          // don't support this type of collections.

          defineConfigurable(this, {
            target: target,
            contentRect: contentRect
          });
        }

        return ResizeObserverEntry;
      }();

      var ResizeObserverSPI =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
          /**
           * Collection of resize observations that have detected changes in dimensions
           * of elements.
           *
           * @private {Array<ResizeObservation>}
           */
          this.activeObservations_ = [];
          /**
           * Registry of the ResizeObservation instances.
           *
           * @private {Map<Element, ResizeObservation>}
           */

          this.observations_ = new MapShim();

          if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
          }

          this.callback_ = callback;
          this.controller_ = controller;
          this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.observe = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is already being observed.

          if (observations.has(target)) {
            return;
          }

          observations.set(target, new ResizeObservation(target));
          this.controller_.addObserver(this); // Force the update of observations.

          this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.unobserve = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is not being observed.

          if (!observations.has(target)) {
            return;
          }

          observations["delete"](target);

          if (!observations.size) {
            this.controller_.removeObserver(this);
          }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.disconnect = function () {
          this.clearActive();
          this.observations_.clear();
          this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.gatherActive = function () {
          var _this = this;

          this.clearActive();
          this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
              _this.activeObservations_.push(observation);
            }
          });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.broadcastActive = function () {
          // Do nothing if observer doesn't have active observations.
          if (!this.hasActive()) {
            return;
          }

          var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

          var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
          });
          this.callback_.call(ctx, entries, ctx);
          this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */


        ResizeObserverSPI.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        };

        return ResizeObserverSPI;
      }(); // Registry of internal observers. If WeakMap is not available use current shim
      // for the Map collection as it has all required methods and because WeakMap
      // can't be fully polyfilled anyway.


      var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
      /**
       * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
       * exposing only those methods and properties that are defined in the spec.
       */

      var ResizeObserver =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
          if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
          }

          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          }

          var controller = ResizeObserverController.getInstance();
          var observer = new ResizeObserverSPI(callback, controller, this);
          observers.set(this, observer);
        }

        return ResizeObserver;
      }(); // Expose public methods of ResizeObserver.


      ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
          var _a;

          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });

      var index = function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
        }

        return ResizeObserver;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = index;
      /***/
    },

    /***/
    "t/UT":
    /*!**********************************************************************!*\
      !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function tUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*!
       * perfect-scrollbar v1.5.0
       * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
       * Licensed under MIT
       */


      function get(element) {
        return getComputedStyle(element);
      }

      function set(element, obj) {
        for (var key in obj) {
          var val = obj[key];

          if (typeof val === 'number') {
            val = val + "px";
          }

          element.style[key] = val;
        }

        return element;
      }

      function div(className) {
        var div = document.createElement('div');
        div.className = className;
        return div;
      }

      var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

      function matches(element, query) {
        if (!elMatches) {
          throw new Error('No element matching method supported');
        }

        return elMatches.call(element, query);
      }

      function remove(element) {
        if (element.remove) {
          element.remove();
        } else {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }

      function queryChildren(element, selector) {
        return Array.prototype.filter.call(element.children, function (child) {
          return matches(child, selector);
        });
      }

      var cls = {
        main: 'ps',
        rtl: 'ps__rtl',
        element: {
          thumb: function thumb(x) {
            return "ps__thumb-" + x;
          },
          rail: function rail(x) {
            return "ps__rail-" + x;
          },
          consuming: 'ps__child--consume'
        },
        state: {
          focus: 'ps--focus',
          clicking: 'ps--clicking',
          active: function active(x) {
            return "ps--active-" + x;
          },
          scrolling: function scrolling(x) {
            return "ps--scrolling-" + x;
          }
        }
      };
      /*
       * Helper methods
       */

      var scrollingClassTimeout = {
        x: null,
        y: null
      };

      function addScrollingClass(i, x) {
        var classList = i.element.classList;
        var className = cls.state.scrolling(x);

        if (classList.contains(className)) {
          clearTimeout(scrollingClassTimeout[x]);
        } else {
          classList.add(className);
        }
      }

      function removeScrollingClass(i, x) {
        scrollingClassTimeout[x] = setTimeout(function () {
          return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
        }, i.settings.scrollingThreshold);
      }

      function setScrollingClassInstantly(i, x) {
        addScrollingClass(i, x);
        removeScrollingClass(i, x);
      }

      var EventElement = function EventElement(element) {
        this.element = element;
        this.handlers = {};
      };

      var prototypeAccessors = {
        isEmpty: {
          configurable: true
        }
      };

      EventElement.prototype.bind = function bind(eventName, handler) {
        if (typeof this.handlers[eventName] === 'undefined') {
          this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(handler);
        this.element.addEventListener(eventName, handler, false);
      };

      EventElement.prototype.unbind = function unbind(eventName, target) {
        var this$1 = this;
        this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
          if (target && handler !== target) {
            return true;
          }

          this$1.element.removeEventListener(eventName, handler, false);
          return false;
        });
      };

      EventElement.prototype.unbindAll = function unbindAll() {
        for (var name in this.handlers) {
          this.unbind(name);
        }
      };

      prototypeAccessors.isEmpty.get = function () {
        var this$1 = this;
        return Object.keys(this.handlers).every(function (key) {
          return this$1.handlers[key].length === 0;
        });
      };

      Object.defineProperties(EventElement.prototype, prototypeAccessors);

      var EventManager = function EventManager() {
        this.eventElements = [];
      };

      EventManager.prototype.eventElement = function eventElement(element) {
        var ee = this.eventElements.filter(function (ee) {
          return ee.element === element;
        })[0];

        if (!ee) {
          ee = new EventElement(element);
          this.eventElements.push(ee);
        }

        return ee;
      };

      EventManager.prototype.bind = function bind(element, eventName, handler) {
        this.eventElement(element).bind(eventName, handler);
      };

      EventManager.prototype.unbind = function unbind(element, eventName, handler) {
        var ee = this.eventElement(element);
        ee.unbind(eventName, handler);

        if (ee.isEmpty) {
          // remove
          this.eventElements.splice(this.eventElements.indexOf(ee), 1);
        }
      };

      EventManager.prototype.unbindAll = function unbindAll() {
        this.eventElements.forEach(function (e) {
          return e.unbindAll();
        });
        this.eventElements = [];
      };

      EventManager.prototype.once = function once(element, eventName, handler) {
        var ee = this.eventElement(element);

        var onceHandler = function onceHandler(evt) {
          ee.unbind(eventName, onceHandler);
          handler(evt);
        };

        ee.bind(eventName, onceHandler);
      };

      function createEvent(name) {
        if (typeof window.CustomEvent === 'function') {
          return new CustomEvent(name);
        } else {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(name, false, false, undefined);
          return evt;
        }
      }

      function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var fields;

        if (axis === 'top') {
          fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
        } else if (axis === 'left') {
          fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
        } else {
          throw new Error('A proper axis should be provided');
        }

        processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
      }

      function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
        var contentHeight = ref[0];
        var containerHeight = ref[1];
        var scrollTop = ref[2];
        var y = ref[3];
        var up = ref[4];
        var down = ref[5];
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var element = i.element; // reset reach

        i.reach[y] = null; // 1 for subpixel rounding

        if (element[scrollTop] < 1) {
          i.reach[y] = 'start';
        } // 1 for subpixel rounding


        if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
          i.reach[y] = 'end';
        }

        if (diff) {
          element.dispatchEvent(createEvent("ps-scroll-" + y));

          if (diff < 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + up));
          } else if (diff > 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + down));
          }

          if (useScrollingClass) {
            setScrollingClassInstantly(i, y);
          }
        }

        if (i.reach[y] && (diff || forceFireReachEvent)) {
          element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
        }
      }

      function toInt(x) {
        return parseInt(x, 10) || 0;
      }

      function isEditable(el) {
        return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
      }

      function outerWidth(element) {
        var styles = get(element);
        return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
      }

      var env = {
        isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
        supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
        isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
      };

      function updateGeometry(i) {
        var element = i.element;
        var roundedScrollTop = Math.floor(element.scrollTop);
        var rect = element.getBoundingClientRect();
        i.containerWidth = Math.ceil(rect.width);
        i.containerHeight = Math.ceil(rect.height);
        i.contentWidth = element.scrollWidth;
        i.contentHeight = element.scrollHeight;

        if (!element.contains(i.scrollbarXRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('x')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarXRail);
        }

        if (!element.contains(i.scrollbarYRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('y')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarYRail);
        }

        if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
          i.scrollbarXActive = true;
          i.railXWidth = i.containerWidth - i.railXMarginWidth;
          i.railXRatio = i.containerWidth / i.railXWidth;
          i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
          i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
        } else {
          i.scrollbarXActive = false;
        }

        if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
          i.scrollbarYActive = true;
          i.railYHeight = i.containerHeight - i.railYMarginHeight;
          i.railYRatio = i.containerHeight / i.railYHeight;
          i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
          i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
        } else {
          i.scrollbarYActive = false;
        }

        if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
          i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
        }

        if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
          i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
        }

        updateCss(element, i);

        if (i.scrollbarXActive) {
          element.classList.add(cls.state.active('x'));
        } else {
          element.classList.remove(cls.state.active('x'));
          i.scrollbarXWidth = 0;
          i.scrollbarXLeft = 0;
          element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
        }

        if (i.scrollbarYActive) {
          element.classList.add(cls.state.active('y'));
        } else {
          element.classList.remove(cls.state.active('y'));
          i.scrollbarYHeight = 0;
          i.scrollbarYTop = 0;
          element.scrollTop = 0;
        }
      }

      function getThumbSize(i, thumbSize) {
        if (i.settings.minScrollbarLength) {
          thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
        }

        if (i.settings.maxScrollbarLength) {
          thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
        }

        return thumbSize;
      }

      function updateCss(element, i) {
        var xRailOffset = {
          width: i.railXWidth
        };
        var roundedScrollTop = Math.floor(element.scrollTop);

        if (i.isRtl) {
          xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
        } else {
          xRailOffset.left = element.scrollLeft;
        }

        if (i.isScrollbarXUsingBottom) {
          xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
        } else {
          xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
        }

        set(i.scrollbarXRail, xRailOffset);
        var yRailOffset = {
          top: roundedScrollTop,
          height: i.railYHeight
        };

        if (i.isScrollbarYUsingRight) {
          if (i.isRtl) {
            yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
          } else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
          }
        } else {
          if (i.isRtl) {
            yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
          } else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
          }
        }

        set(i.scrollbarYRail, yRailOffset);
        set(i.scrollbarX, {
          left: i.scrollbarXLeft,
          width: i.scrollbarXWidth - i.railBorderXWidth
        });
        set(i.scrollbarY, {
          top: i.scrollbarYTop,
          height: i.scrollbarYHeight - i.railBorderYWidth
        });
      }

      function clickRail(i) {
        var element = i.element;
        i.event.bind(i.scrollbarY, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
          var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
          var direction = positionTop > i.scrollbarYTop ? 1 : -1;
          i.element.scrollTop += direction * i.containerHeight;
          updateGeometry(i);
          e.stopPropagation();
        });
        i.event.bind(i.scrollbarX, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
          var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
          var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
          i.element.scrollLeft += direction * i.containerWidth;
          updateGeometry(i);
          e.stopPropagation();
        });
      }

      function dragThumb(i) {
        bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
        bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
      }

      function bindMouseScrollHandler(i, ref) {
        var containerHeight = ref[0];
        var contentHeight = ref[1];
        var pageY = ref[2];
        var railYHeight = ref[3];
        var scrollbarY = ref[4];
        var scrollbarYHeight = ref[5];
        var scrollTop = ref[6];
        var y = ref[7];
        var scrollbarYRail = ref[8];
        var element = i.element;
        var startingScrollTop = null;
        var startingMousePageY = null;
        var scrollBy = null;

        function mouseMoveHandler(e) {
          if (e.touches && e.touches[0]) {
            e[pageY] = e.touches[0].pageY;
          }

          element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
          addScrollingClass(i, y);
          updateGeometry(i);
          e.stopPropagation();
          e.preventDefault();
        }

        function mouseUpHandler() {
          removeScrollingClass(i, y);
          i[scrollbarYRail].classList.remove(cls.state.clicking);
          i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        }

        function bindMoves(e, touchMode) {
          startingScrollTop = element[scrollTop];

          if (touchMode && e.touches) {
            e[pageY] = e.touches[0].pageY;
          }

          startingMousePageY = e[pageY];
          scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

          if (!touchMode) {
            i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
            e.preventDefault();
          } else {
            i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
          }

          i[scrollbarYRail].classList.add(cls.state.clicking);
          e.stopPropagation();
        }

        i.event.bind(i[scrollbarY], 'mousedown', function (e) {
          bindMoves(e);
        });
        i.event.bind(i[scrollbarY], 'touchstart', function (e) {
          bindMoves(e, true);
        });
      }

      function keyboard(i) {
        var element = i.element;

        var elementHovered = function elementHovered() {
          return matches(element, ':hover');
        };

        var scrollbarFocused = function scrollbarFocused() {
          return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
        };

        function shouldPreventDefault(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);

          if (deltaX === 0) {
            if (!i.scrollbarYActive) {
              return false;
            }

            if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
              return !i.settings.wheelPropagation;
            }
          }

          var scrollLeft = element.scrollLeft;

          if (deltaY === 0) {
            if (!i.scrollbarXActive) {
              return false;
            }

            if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
              return !i.settings.wheelPropagation;
            }
          }

          return true;
        }

        i.event.bind(i.ownerDocument, 'keydown', function (e) {
          if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
            return;
          }

          if (!elementHovered() && !scrollbarFocused()) {
            return;
          }

          var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

          if (activeElement) {
            if (activeElement.tagName === 'IFRAME') {
              activeElement = activeElement.contentDocument.activeElement;
            } else {
              // go deeper if element is a webcomponent
              while (activeElement.shadowRoot) {
                activeElement = activeElement.shadowRoot.activeElement;
              }
            }

            if (isEditable(activeElement)) {
              return;
            }
          }

          var deltaX = 0;
          var deltaY = 0;

          switch (e.which) {
            case 37:
              // left
              if (e.metaKey) {
                deltaX = -i.contentWidth;
              } else if (e.altKey) {
                deltaX = -i.containerWidth;
              } else {
                deltaX = -30;
              }

              break;

            case 38:
              // up
              if (e.metaKey) {
                deltaY = i.contentHeight;
              } else if (e.altKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = 30;
              }

              break;

            case 39:
              // right
              if (e.metaKey) {
                deltaX = i.contentWidth;
              } else if (e.altKey) {
                deltaX = i.containerWidth;
              } else {
                deltaX = 30;
              }

              break;

            case 40:
              // down
              if (e.metaKey) {
                deltaY = -i.contentHeight;
              } else if (e.altKey) {
                deltaY = -i.containerHeight;
              } else {
                deltaY = -30;
              }

              break;

            case 32:
              // space bar
              if (e.shiftKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = -i.containerHeight;
              }

              break;

            case 33:
              // page up
              deltaY = i.containerHeight;
              break;

            case 34:
              // page down
              deltaY = -i.containerHeight;
              break;

            case 36:
              // home
              deltaY = i.contentHeight;
              break;

            case 35:
              // end
              deltaY = -i.contentHeight;
              break;

            default:
              return;
          }

          if (i.settings.suppressScrollX && deltaX !== 0) {
            return;
          }

          if (i.settings.suppressScrollY && deltaY !== 0) {
            return;
          }

          element.scrollTop -= deltaY;
          element.scrollLeft += deltaX;
          updateGeometry(i);

          if (shouldPreventDefault(deltaX, deltaY)) {
            e.preventDefault();
          }
        });
      }

      function wheel(i) {
        var element = i.element;

        function shouldPreventDefault(deltaX, deltaY) {
          var roundedScrollTop = Math.floor(element.scrollTop);
          var isTop = element.scrollTop === 0;
          var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
          var isLeft = element.scrollLeft === 0;
          var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
          var hitsBound; // pick axis with primary direction

          if (Math.abs(deltaY) > Math.abs(deltaX)) {
            hitsBound = isTop || isBottom;
          } else {
            hitsBound = isLeft || isRight;
          }

          return hitsBound ? !i.settings.wheelPropagation : true;
        }

        function getDeltaFromEvent(e) {
          var deltaX = e.deltaX;
          var deltaY = -1 * e.deltaY;

          if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
            // OS X Safari
            deltaX = -1 * e.wheelDeltaX / 6;
            deltaY = e.wheelDeltaY / 6;
          }

          if (e.deltaMode && e.deltaMode === 1) {
            // Firefox in deltaMode 1: Line scrolling
            deltaX *= 10;
            deltaY *= 10;
          }

          if (deltaX !== deltaX && deltaY !== deltaY
          /* NaN checks */
          ) {
              // IE in some mouse drivers
              deltaX = 0;
              deltaY = e.wheelDelta;
            }

          if (e.shiftKey) {
            // reverse axis with shift key
            return [-deltaY, -deltaX];
          }

          return [deltaX, deltaY];
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          // FIXME: this is a workaround for <select> issue in FF and IE #571
          if (!env.isWebKit && element.querySelector('select:focus')) {
            return true;
          }

          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function mousewheelHandler(e) {
          var ref = getDeltaFromEvent(e);
          var deltaX = ref[0];
          var deltaY = ref[1];

          if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
            return;
          }

          var shouldPrevent = false;

          if (!i.settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            element.scrollTop -= deltaY * i.settings.wheelSpeed;
            element.scrollLeft += deltaX * i.settings.wheelSpeed;
          } else if (i.scrollbarYActive && !i.scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
              element.scrollTop -= deltaY * i.settings.wheelSpeed;
            } else {
              element.scrollTop += deltaX * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          } else if (i.scrollbarXActive && !i.scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
              element.scrollLeft += deltaX * i.settings.wheelSpeed;
            } else {
              element.scrollLeft -= deltaY * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          }

          updateGeometry(i);
          shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

          if (shouldPrevent && !e.ctrlKey) {
            e.stopPropagation();
            e.preventDefault();
          }
        }

        if (typeof window.onwheel !== 'undefined') {
          i.event.bind(element, 'wheel', mousewheelHandler);
        } else if (typeof window.onmousewheel !== 'undefined') {
          i.event.bind(element, 'mousewheel', mousewheelHandler);
        }
      }

      function touch(i) {
        if (!env.supportsTouch && !env.supportsIePointer) {
          return;
        }

        var element = i.element;

        function shouldPrevent(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);
          var scrollLeft = element.scrollLeft;
          var magnitudeX = Math.abs(deltaX);
          var magnitudeY = Math.abs(deltaY);

          if (magnitudeY > magnitudeX) {
            // user is perhaps trying to swipe up/down the page
            if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
              // set prevent for mobile Chrome refresh
              return window.scrollY === 0 && deltaY > 0 && env.isChrome;
            }
          } else if (magnitudeX > magnitudeY) {
            // user is perhaps trying to swipe left/right across the page
            if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
              return true;
            }
          }

          return true;
        }

        function applyTouchMove(differenceX, differenceY) {
          element.scrollTop -= differenceY;
          element.scrollLeft -= differenceX;
          updateGeometry(i);
        }

        var startOffset = {};
        var startTime = 0;
        var speed = {};
        var easingLoop = null;

        function getTouch(e) {
          if (e.targetTouches) {
            return e.targetTouches[0];
          } else {
            // Maybe IE pointer
            return e;
          }
        }

        function shouldHandle(e) {
          if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
            return false;
          }

          if (e.targetTouches && e.targetTouches.length === 1) {
            return true;
          }

          if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
            return true;
          }

          return false;
        }

        function touchStart(e) {
          if (!shouldHandle(e)) {
            return;
          }

          var touch = getTouch(e);
          startOffset.pageX = touch.pageX;
          startOffset.pageY = touch.pageY;
          startTime = new Date().getTime();

          if (easingLoop !== null) {
            clearInterval(easingLoop);
          }
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function touchMove(e) {
          if (shouldHandle(e)) {
            var touch = getTouch(e);
            var currentOffset = {
              pageX: touch.pageX,
              pageY: touch.pageY
            };
            var differenceX = currentOffset.pageX - startOffset.pageX;
            var differenceY = currentOffset.pageY - startOffset.pageY;

            if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
              return;
            }

            applyTouchMove(differenceX, differenceY);
            startOffset = currentOffset;
            var currentTime = new Date().getTime();
            var timeGap = currentTime - startTime;

            if (timeGap > 0) {
              speed.x = differenceX / timeGap;
              speed.y = differenceY / timeGap;
              startTime = currentTime;
            }

            if (shouldPrevent(differenceX, differenceY)) {
              e.preventDefault();
            }
          }
        }

        function touchEnd() {
          if (i.settings.swipeEasing) {
            clearInterval(easingLoop);
            easingLoop = setInterval(function () {
              if (i.isInitialized) {
                clearInterval(easingLoop);
                return;
              }

              if (!speed.x && !speed.y) {
                clearInterval(easingLoop);
                return;
              }

              if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                clearInterval(easingLoop);
                return;
              }

              applyTouchMove(speed.x * 30, speed.y * 30);
              speed.x *= 0.8;
              speed.y *= 0.8;
            }, 10);
          }
        }

        if (env.supportsTouch) {
          i.event.bind(element, 'touchstart', touchStart);
          i.event.bind(element, 'touchmove', touchMove);
          i.event.bind(element, 'touchend', touchEnd);
        } else if (env.supportsIePointer) {
          if (window.PointerEvent) {
            i.event.bind(element, 'pointerdown', touchStart);
            i.event.bind(element, 'pointermove', touchMove);
            i.event.bind(element, 'pointerup', touchEnd);
          } else if (window.MSPointerEvent) {
            i.event.bind(element, 'MSPointerDown', touchStart);
            i.event.bind(element, 'MSPointerMove', touchMove);
            i.event.bind(element, 'MSPointerUp', touchEnd);
          }
        }
      }

      var defaultSettings = function defaultSettings() {
        return {
          handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1000,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: false,
          suppressScrollY: false,
          swipeEasing: true,
          useBothWheelAxes: false,
          wheelPropagation: true,
          wheelSpeed: 1
        };
      };

      var handlers = {
        'click-rail': clickRail,
        'drag-thumb': dragThumb,
        keyboard: keyboard,
        wheel: wheel,
        touch: touch
      };

      var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
        var this$1 = this;
        if (userSettings === void 0) userSettings = {};

        if (typeof element === 'string') {
          element = document.querySelector(element);
        }

        if (!element || !element.nodeName) {
          throw new Error('no element is specified to initialize PerfectScrollbar');
        }

        this.element = element;
        element.classList.add(cls.main);
        this.settings = defaultSettings();

        for (var key in userSettings) {
          this.settings[key] = userSettings[key];
        }

        this.containerWidth = null;
        this.containerHeight = null;
        this.contentWidth = null;
        this.contentHeight = null;

        var focus = function focus() {
          return element.classList.add(cls.state.focus);
        };

        var blur = function blur() {
          return element.classList.remove(cls.state.focus);
        };

        this.isRtl = get(element).direction === 'rtl';

        if (this.isRtl === true) {
          element.classList.add(cls.rtl);
        }

        this.isNegativeScroll = function () {
          var originalScrollLeft = element.scrollLeft;
          var result = null;
          element.scrollLeft = -1;
          result = element.scrollLeft < 0;
          element.scrollLeft = originalScrollLeft;
          return result;
        }();

        this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
        this.event = new EventManager();
        this.ownerDocument = element.ownerDocument || document;
        this.scrollbarXRail = div(cls.element.rail('x'));
        element.appendChild(this.scrollbarXRail);
        this.scrollbarX = div(cls.element.thumb('x'));
        this.scrollbarXRail.appendChild(this.scrollbarX);
        this.scrollbarX.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarX, 'focus', focus);
        this.event.bind(this.scrollbarX, 'blur', blur);
        this.scrollbarXActive = null;
        this.scrollbarXWidth = null;
        this.scrollbarXLeft = null;
        var railXStyle = get(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

        if (isNaN(this.scrollbarXBottom)) {
          this.isScrollbarXUsingBottom = false;
          this.scrollbarXTop = toInt(railXStyle.top);
        } else {
          this.isScrollbarXUsingBottom = true;
        }

        this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        set(this.scrollbarXRail, {
          display: ''
        });
        this.railXWidth = null;
        this.railXRatio = null;
        this.scrollbarYRail = div(cls.element.rail('y'));
        element.appendChild(this.scrollbarYRail);
        this.scrollbarY = div(cls.element.thumb('y'));
        this.scrollbarYRail.appendChild(this.scrollbarY);
        this.scrollbarY.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarY, 'focus', focus);
        this.event.bind(this.scrollbarY, 'blur', blur);
        this.scrollbarYActive = null;
        this.scrollbarYHeight = null;
        this.scrollbarYTop = null;
        var railYStyle = get(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(railYStyle.right, 10);

        if (isNaN(this.scrollbarYRight)) {
          this.isScrollbarYUsingRight = false;
          this.scrollbarYLeft = toInt(railYStyle.left);
        } else {
          this.isScrollbarYUsingRight = true;
        }

        this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
        this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
        set(this.scrollbarYRail, {
          display: ''
        });
        this.railYHeight = null;
        this.railYRatio = null;
        this.reach = {
          x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
          y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
        };
        this.isAlive = true;
        this.settings.handlers.forEach(function (handlerName) {
          return handlers[handlerName](this$1);
        });
        this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

        this.lastScrollLeft = element.scrollLeft; // for onScroll only

        this.event.bind(this.element, 'scroll', function (e) {
          return this$1.onScroll(e);
        });
        updateGeometry(this);
      };

      PerfectScrollbar.prototype.update = function update() {
        if (!this.isAlive) {
          return;
        } // Recalcuate negative scrollLeft adjustment


        this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
        this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

        set(this.scrollbarXRail, {
          display: 'none'
        });
        set(this.scrollbarYRail, {
          display: 'none'
        });
        updateGeometry(this);
        processScrollDiff(this, 'top', 0, false, true);
        processScrollDiff(this, 'left', 0, false, true);
        set(this.scrollbarXRail, {
          display: ''
        });
        set(this.scrollbarYRail, {
          display: ''
        });
      };

      PerfectScrollbar.prototype.onScroll = function onScroll(e) {
        if (!this.isAlive) {
          return;
        }

        updateGeometry(this);
        processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
        processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
        this.lastScrollTop = Math.floor(this.element.scrollTop);
        this.lastScrollLeft = this.element.scrollLeft;
      };

      PerfectScrollbar.prototype.destroy = function destroy() {
        if (!this.isAlive) {
          return;
        }

        this.event.unbindAll();
        remove(this.scrollbarX);
        remove(this.scrollbarY);
        remove(this.scrollbarXRail);
        remove(this.scrollbarYRail);
        this.removePsClasses(); // unset elements

        this.element = null;
        this.scrollbarX = null;
        this.scrollbarY = null;
        this.scrollbarXRail = null;
        this.scrollbarYRail = null;
        this.isAlive = false;
      };

      PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
        this.element.className = this.element.className.split(' ').filter(function (name) {
          return !name.match(/^ps([-_].+|)$/);
        }).join(' ');
      };
      /* harmony default export */


      __webpack_exports__["default"] = PerfectScrollbar; //# sourceMappingURL=perfect-scrollbar.esm.js.map

      /***/
    },

    /***/
    "tM0M":
    /*!****************************************************!*\
      !*** ./src/app/modules/i18n/translation.module.ts ***!
      \****************************************************/

    /*! exports provided: TranslationModule */

    /***/
    function tM0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationModule", function () {
        return TranslationModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      var TranslationModule = function TranslationModule() {
        _classCallCheck(this, TranslationModule);
      };

      TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TranslationModule
      });
      TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TranslationModule_Factory(t) {
          return new (t || TranslationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-auth-auth-module~pages-layout-module-es5.b7331d7b97bf81b29561.js.map