(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
    /***/
    "1O3W":
    /*!*******************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/overlay.js ***!
      \*******************************************************/

    /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d */

    /***/
    function O3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
        return BlockScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
        return CdkConnectedOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
        return CdkOverlayOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
        return CloseScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
        return ConnectedOverlayPositionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
        return ConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
        return ConnectionPositionPair;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
        return FlexibleConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
        return FullscreenOverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
        return GlobalPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
        return NoopScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
        return OverlayConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
        return OverlayKeyboardDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
        return OverlayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayOutsideClickDispatcher", function () {
        return OverlayOutsideClickDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
        return OverlayPositionBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
        return RepositionScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
        return ScrollStrategyOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
        return ScrollingVisibility;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
        return validateHorizontalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
        return validateVerticalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
        return BaseOverlayDispatcher;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "Ht+U");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var scrollBehaviorSupported = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["supportsScrollBehavior"])();
      /**
       * Strategy that will prevent the user from scrolling while the overlay is visible.
       */

      var BlockScrollStrategy = /*#__PURE__*/function () {
        function BlockScrollStrategy(_viewportRuler, document) {
          _classCallCheck(this, BlockScrollStrategy);

          this._viewportRuler = _viewportRuler;
          this._previousHTMLStyles = {
            top: '',
            left: ''
          };
          this._isEnabled = false;
          this._document = document;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(BlockScrollStrategy, [{
          key: "attach",
          value: function attach() {}
          /** Blocks page-level scroll while the attached overlay is open. */

        }, {
          key: "enable",
          value: function enable() {
            if (this._canBeEnabled()) {
              var root = this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

              this._previousHTMLStyles.left = root.style.left || '';
              this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
              // have the user agent margin, whereas the `html` is guaranteed not to have one.

              root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
              root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
              root.classList.add('cdk-global-scrollblock');
              this._isEnabled = true;
            }
          }
          /** Unblocks page-level scroll while the attached overlay is open. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._isEnabled) {
              var html = this._document.documentElement;
              var body = this._document.body;
              var htmlStyle = html.style;
              var bodyStyle = body.style;
              var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
              var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
              this._isEnabled = false;
              htmlStyle.left = this._previousHTMLStyles.left;
              htmlStyle.top = this._previousHTMLStyles.top;
              html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
              // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
              // Note that we don't mutate the property if the browser doesn't support `scroll-behavior`,
              // because it can throw off feature detections in `supportsScrollBehavior` which
              // checks for `'scrollBehavior' in documentElement.style`.

              if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
              }

              window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);

              if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
                bodyStyle.scrollBehavior = previousBodyScrollBehavior;
              }
            }
          }
        }, {
          key: "_canBeEnabled",
          value: function _canBeEnabled() {
            // Since the scroll strategies can't be singletons, we have to use a global CSS class
            // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
            // scrolling multiple times.
            var html = this._document.documentElement;

            if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
              return false;
            }

            var body = this._document.body;

            var viewport = this._viewportRuler.getViewportSize();

            return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
          }
        }]);

        return BlockScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
       */


      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      /**
       * Strategy that will close the overlay as soon as the user starts scrolling.
       */


      var CloseScrollStrategy = /*#__PURE__*/function () {
        function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          var _this = this;

          _classCallCheck(this, CloseScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._config = _config;
          this._scrollSubscription = null;
          /** Detaches the overlay ref and disables the scroll strategy. */

          this._detach = function () {
            _this.disable();

            if (_this._overlayRef.hasAttached()) {
              _this._ngZone.run(function () {
                return _this._overlayRef.detach();
              });
            }
          };
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(CloseScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables the closing of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this2 = this;

            if (this._scrollSubscription) {
              return;
            }

            var stream = this._scrollDispatcher.scrolled(0);

            if (this._config && this._config.threshold && this._config.threshold > 1) {
              this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
              this._scrollSubscription = stream.subscribe(function () {
                var scrollPosition = _this2._viewportRuler.getViewportScrollPosition().top;

                if (Math.abs(scrollPosition - _this2._initialScrollPosition) > _this2._config.threshold) {
                  _this2._detach();
                } else {
                  _this2._overlayRef.updatePosition();
                }
              });
            } else {
              this._scrollSubscription = stream.subscribe(this._detach);
            }
          }
          /** Disables the closing the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return CloseScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Scroll strategy that doesn't do anything. */


      var NoopScrollStrategy = /*#__PURE__*/function () {
        function NoopScrollStrategy() {
          _classCallCheck(this, NoopScrollStrategy);
        }

        _createClass(NoopScrollStrategy, [{
          key: "enable",
          value:
          /** Does nothing, as this scroll strategy is a no-op. */
          function enable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "disable",
          value: function disable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "attach",
          value: function attach() {}
        }]);

        return NoopScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): move this to live with the rest of the scrolling code
      // TODO(jelbourn): someday replace this with IntersectionObservers

      /**
       * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is scrolled out of view
       * @docs-private
       */


      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some(function (containerBounds) {
          var outsideAbove = element.bottom < containerBounds.top;
          var outsideBelow = element.top > containerBounds.bottom;
          var outsideLeft = element.right < containerBounds.left;
          var outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      /**
       * Gets whether an element is clipped by any of its scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is clipped
       * @docs-private
       */


      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some(function (scrollContainerRect) {
          var clippedAbove = element.top < scrollContainerRect.top;
          var clippedBelow = element.bottom > scrollContainerRect.bottom;
          var clippedLeft = element.left < scrollContainerRect.left;
          var clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will update the element position as the user is scrolling.
       */


      var RepositionScrollStrategy = /*#__PURE__*/function () {
        function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          _classCallCheck(this, RepositionScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._viewportRuler = _viewportRuler;
          this._ngZone = _ngZone;
          this._config = _config;
          this._scrollSubscription = null;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(RepositionScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables repositioning of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this3 = this;

            if (!this._scrollSubscription) {
              var throttle = this._config ? this._config.scrollThrottle : 0;
              this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this3._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


                if (_this3._config && _this3._config.autoClose) {
                  var overlayRect = _this3._overlayRef.overlayElement.getBoundingClientRect();

                  var _this3$_viewportRuler = _this3._viewportRuler.getViewportSize(),
                      width = _this3$_viewportRuler.width,
                      height = _this3$_viewportRuler.height; // TODO(crisbeto): include all ancestor scroll containers here once
                  // we have a way of exposing the trigger element to the scroll strategy.


                  var parentRects = [{
                    width: width,
                    height: height,
                    bottom: height,
                    right: width,
                    top: 0,
                    left: 0
                  }];

                  if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                    _this3.disable();

                    _this3._ngZone.run(function () {
                      return _this3._overlayRef.detach();
                    });
                  }
                }
              });
            }
          }
          /** Disables repositioning of the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return RepositionScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Options for how an overlay will handle scrolling.
       *
       * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
       * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
       */


      var ScrollStrategyOptions = function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this4 = this;

        _classCallCheck(this, ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */

        this.noop = function () {
          return new NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close = function (config) {
          return new CloseScrollStrategy(_this4._scrollDispatcher, _this4._ngZone, _this4._viewportRuler, config);
        };
        /** Block scrolling. */


        this.block = function () {
          return new BlockScrollStrategy(_this4._viewportRuler, _this4._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition = function (config) {
          return new RepositionScrollStrategy(_this4._scrollDispatcher, _this4._viewportRuler, _this4._ngZone, config);
        };

        this._document = document;
      };

      ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollStrategyOptions_Factory() {
          return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: ScrollStrategyOptions,
        providedIn: "root"
      });

      ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Initial configuration used when creating an overlay. */


      var OverlayConfig = function OverlayConfig(config) {
        _classCallCheck(this, OverlayConfig);

        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */

        this.panelClass = '';
        /** Whether the overlay has a backdrop. */

        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;

        if (config) {
          // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
          var configKeys = Object.keys(config);

          for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
            var key = _configKeys[_i];

            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] = config[key];
            }
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The points of the origin element and the overlay element to connect. */


      var ConnectionPositionPair = function ConnectionPositionPair(origin, overlay,
      /** Offset along the X axis. */
      offsetX,
      /** Offset along the Y axis. */
      offsetY,
      /** Class(es) to be applied to the panel while this position is active. */
      panelClass) {
        _classCallCheck(this, ConnectionPositionPair);

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      };
      /**
       * Set of properties regarding the position of the origin and overlay relative to the viewport
       * with respect to the containing Scrollable elements.
       *
       * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
       * bounds of any one of the strategy's Scrollable's bounding client rectangle.
       *
       * The overlay and origin are outside view if there is no overlap between their bounding client
       * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
       *
       *       -----------                    -----------
       *       | outside |                    | clipped |
       *       |  view   |              --------------------------
       *       |         |              |     |         |        |
       *       ----------               |     -----------        |
       *  --------------------------    |                        |
       *  |                        |    |      Scrollable        |
       *  |                        |    |                        |
       *  |                        |     --------------------------
       *  |      Scrollable        |
       *  |                        |
       *  --------------------------
       *
       *  @docs-private
       */


      var ScrollingVisibility = function ScrollingVisibility() {
        _classCallCheck(this, ScrollingVisibility);
      };
      /** The change event emitted by the strategy when a fallback position is used. */


      var ConnectedOverlayPositionChange = function ConnectedOverlayPositionChange(
      /** The position used as a result of this change. */
      connectionPair,
      /** @docs-private */
      scrollableViewProperties) {
        _classCallCheck(this, ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };

      ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: ConnectionPositionPair
        }, {
          type: ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /**
       * Validates whether a vertical position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateVerticalPosition(property, value) {
        if (value !== 'top' && value !== 'bottom' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
        }
      }
      /**
       * Validates whether a horizontal position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateHorizontalPosition(property, value) {
        if (value !== 'start' && value !== 'end' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var BaseOverlayDispatcher = /*#__PURE__*/function () {
        function BaseOverlayDispatcher(document) {
          _classCallCheck(this, BaseOverlayDispatcher);

          /** Currently attached overlays in the order they were attached. */
          this._attachedOverlays = [];
          this._document = document;
        }

        _createClass(BaseOverlayDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();
          }
          /** Add a new overlay to the list of attached overlay refs. */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);

            this._attachedOverlays.push(overlayRef);
          }
          /** Remove an overlay from the list of attached overlay refs. */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this.detach();
            }
          }
        }]);

        return BaseOverlayDispatcher;
      }();

      BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) {
        return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      BaseOverlayDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function BaseOverlayDispatcher_Factory() {
          return new BaseOverlayDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: BaseOverlayDispatcher,
        providedIn: "root"
      });

      BaseOverlayDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseOverlayDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var OverlayKeyboardDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche) {
        _inherits(OverlayKeyboardDispatcher, _BaseOverlayDispatche);

        var _super = _createSuper(OverlayKeyboardDispatcher);

        function OverlayKeyboardDispatcher(document) {
          var _this5;

          _classCallCheck(this, OverlayKeyboardDispatcher);

          _this5 = _super.call(this, document);
          /** Keyboard event listener that will be attached to the body. */

          _this5._keydownListener = function (event) {
            var overlays = _this5._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEvents.observers.length > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          return _this5;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayKeyboardDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayKeyboardDispatcher.prototype), "add", this).call(this, overlayRef); // Lazily start dispatcher once first overlay is added


            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return OverlayKeyboardDispatcher;
      }(BaseOverlayDispatcher);

      OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayKeyboardDispatcher,
        providedIn: "root"
      });

      OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var OverlayOutsideClickDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche2) {
        _inherits(OverlayOutsideClickDispatcher, _BaseOverlayDispatche2);

        var _super2 = _createSuper(OverlayOutsideClickDispatcher);

        function OverlayOutsideClickDispatcher(document, _platform) {
          var _this6;

          _classCallCheck(this, OverlayOutsideClickDispatcher);

          _this6 = _super2.call(this, document);
          _this6._platform = _platform;
          _this6._cursorStyleIsSet = false;
          /** Click event listener that will be attached to the body propagate phase. */

          _this6._clickListener = function (event) {
            // Get the target through the `composedPath` if possible to account for shadow DOM.
            var target = event.composedPath ? event.composedPath()[0] : event.target; // We copy the array because the original may be modified asynchronously if the
            // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
            // the for loop.

            var overlays = _this6._attachedOverlays.slice(); // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
            // We want to target all overlays for which the click could be considered as outside click.
            // As soon as we reach an overlay for which the click is not outside click we break off
            // the loop.


            for (var i = overlays.length - 1; i > -1; i--) {
              var overlayRef = overlays[i];

              if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
                continue;
              } // If it's a click inside the overlay, just break - we should do nothing
              // If it's an outside click dispatch the mouse event, and proceed with the next overlay


              if (overlayRef.overlayElement.contains(target)) {
                break;
              }

              overlayRef._outsidePointerEvents.next(event);
            }
          };

          return _this6;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayOutsideClickDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayOutsideClickDispatcher.prototype), "add", this).call(this, overlayRef); // tslint:disable: max-line-length
            // Safari on iOS does not generate click events for non-interactive
            // elements. However, we want to receive a click for any element outside
            // the overlay. We can force a "clickable" state by setting
            // `cursor: pointer` on the document body.
            // See https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
            // and https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
            // tslint:enable: max-line-length


            if (!this._isAttached) {
              this._document.body.addEventListener('click', this._clickListener, true);

              this._document.body.addEventListener('contextmenu', this._clickListener, true); // click event is not fired on iOS. To make element "clickable" we are
              // setting the cursor to pointer


              if (this._platform.IOS && !this._cursorStyleIsSet) {
                this._cursorOriginalValue = this._document.body.style.cursor;
                this._document.body.style.cursor = 'pointer';
                this._cursorStyleIsSet = true;
              }

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('click', this._clickListener, true);

              this._document.body.removeEventListener('contextmenu', this._clickListener, true);

              if (this._platform.IOS && this._cursorStyleIsSet) {
                this._document.body.style.cursor = this._cursorOriginalValue;
                this._cursorStyleIsSet = false;
              }

              this._isAttached = false;
            }
          }
        }]);

        return OverlayOutsideClickDispatcher;
      }(BaseOverlayDispatcher);

      OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
        return new (t || OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayOutsideClickDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayOutsideClickDispatcher_Factory() {
          return new OverlayOutsideClickDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayOutsideClickDispatcher,
        providedIn: "root"
      });

      OverlayOutsideClickDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayOutsideClickDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Whether we're in a testing environment.
       * TODO(crisbeto): remove this once we have an overlay testing module.
       */


      var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(window.__karma__ || window.jasmine);
      /** Container inside which all overlays will render. */

      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(document, _platform) {
          _classCallCheck(this, OverlayContainer);

          this._platform = _platform;
          this._document = document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var container = this._containerElement;

            if (container && container.parentNode) {
              container.parentNode.removeChild(container);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var containerClass = 'cdk-overlay-container';

            if (this._platform.isBrowser || isTestEnvironment) {
              var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
              // This can happen when transitioning from the server to the client.


              for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
              }
            }

            var container = this._document.createElement('div');

            container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

            if (isTestEnvironment) {
              container.setAttribute('platform', 'test');
            } else if (!this._platform.isBrowser) {
              container.setAttribute('platform', 'server');
            }

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */


      var OverlayRef = /*#__PURE__*/function () {
        function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher) {
          var _this7 = this;

          _classCallCheck(this, OverlayRef);

          this._portalOutlet = _portalOutlet;
          this._host = _host;
          this._pane = _pane;
          this._config = _config;
          this._ngZone = _ngZone;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._document = _document;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
          this._backdropElement = null;
          this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

          this._backdropClickHandler = function (event) {
            return _this7._backdropClick.next(event);
          };
          /** Stream of keydown events dispatched to this overlay. */


          this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Stream of mouse outside events dispatched to this overlay. */

          this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

          if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;

            this._scrollStrategy.attach(this);
          }

          this._positionStrategy = _config.positionStrategy;
        }
        /** The overlay's HTML element */


        _createClass(OverlayRef, [{
          key: "overlayElement",
          get: function get() {
            return this._pane;
          }
          /** The overlay's backdrop HTML element. */

        }, {
          key: "backdropElement",
          get: function get() {
            return this._backdropElement;
          }
          /**
           * Wrapper around the panel element. Can be used for advanced
           * positioning where a wrapper with specific styling is
           * required around the overlay pane.
           */

        }, {
          key: "hostElement",
          get: function get() {
            return this._host;
          }
          /**
           * Attaches content, given via a Portal, to the overlay.
           * If the overlay is configured to have a backdrop, it will be created.
           *
           * @param portal Portal instance to which to attach the overlay.
           * @returns The portal attachment result.
           */

        }, {
          key: "attach",
          value: function attach(portal) {
            var _this8 = this;

            var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


            if (!this._host.parentElement && this._previousHostParent) {
              this._previousHostParent.appendChild(this._host);
            }

            if (this._positionStrategy) {
              this._positionStrategy.attach(this);
            }

            this._updateStackingOrder();

            this._updateElementSize();

            this._updateElementDirection();

            if (this._scrollStrategy) {
              this._scrollStrategy.enable();
            } // Update the position once the zone is stable so that the overlay will be fully rendered
            // before attempting to position it, as the position may depend on the size of the rendered
            // content.


            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              // The overlay could've been detached before the zone has stabilized.
              if (_this8.hasAttached()) {
                _this8.updatePosition();
              }
            }); // Enable pointer events for the overlay pane element.


            this._togglePointerEvents(true);

            if (this._config.hasBackdrop) {
              this._attachBackdrop();
            }

            if (this._config.panelClass) {
              this._toggleClasses(this._pane, this._config.panelClass, true);
            } // Only emit the `attachments` event once all other setup is done.


            this._attachments.next(); // Track this overlay by the keyboard dispatcher


            this._keyboardDispatcher.add(this);

            if (this._config.disposeOnNavigation) {
              this._locationChanges = this._location.subscribe(function () {
                return _this8.dispose();
              });
            }

            this._outsideClickDispatcher.add(this);

            return attachResult;
          }
          /**
           * Detaches an overlay from a portal.
           * @returns The portal detachment result.
           */

        }, {
          key: "detach",
          value: function detach() {
            if (!this.hasAttached()) {
              return;
            }

            this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
            // This is necessary because otherwise the pane element will cover the page and disable
            // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

            this._togglePointerEvents(false);

            if (this._positionStrategy && this._positionStrategy.detach) {
              this._positionStrategy.detach();
            }

            if (this._scrollStrategy) {
              this._scrollStrategy.disable();
            }

            var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


            this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


            this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
            // rendered, even though it's transparent and unclickable which is why we remove it.


            this._detachContentWhenStable();

            this._locationChanges.unsubscribe();

            this._outsideClickDispatcher.remove(this);

            return detachmentResult;
          }
          /** Cleans up the overlay from the DOM. */

        }, {
          key: "dispose",
          value: function dispose() {
            var isAttached = this.hasAttached();

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._disposeScrollStrategy();

            this.detachBackdrop();

            this._locationChanges.unsubscribe();

            this._keyboardDispatcher.remove(this);

            this._portalOutlet.dispose();

            this._attachments.complete();

            this._backdropClick.complete();

            this._keydownEvents.complete();

            this._outsidePointerEvents.complete();

            this._outsideClickDispatcher.remove(this);

            if (this._host && this._host.parentNode) {
              this._host.parentNode.removeChild(this._host);

              this._host = null;
            }

            this._previousHostParent = this._pane = null;

            if (isAttached) {
              this._detachments.next();
            }

            this._detachments.complete();
          }
          /** Whether the overlay has attached content. */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._portalOutlet.hasAttached();
          }
          /** Gets an observable that emits when the backdrop has been clicked. */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._backdropClick;
          }
          /** Gets an observable that emits when the overlay has been attached. */

        }, {
          key: "attachments",
          value: function attachments() {
            return this._attachments;
          }
          /** Gets an observable that emits when the overlay has been detached. */

        }, {
          key: "detachments",
          value: function detachments() {
            return this._detachments;
          }
          /** Gets an observable of keydown events targeted to this overlay. */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._keydownEvents;
          }
          /** Gets an observable of pointer events targeted outside this overlay. */

        }, {
          key: "outsidePointerEvents",
          value: function outsidePointerEvents() {
            return this._outsidePointerEvents;
          }
          /** Gets the current overlay configuration, which is immutable. */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this._config;
          }
          /** Updates the position of the overlay based on the position strategy. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._positionStrategy) {
              this._positionStrategy.apply();
            }
          }
          /** Switches to a new position strategy and updates the overlay position. */

        }, {
          key: "updatePositionStrategy",
          value: function updatePositionStrategy(strategy) {
            if (strategy === this._positionStrategy) {
              return;
            }

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._positionStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              this.updatePosition();
            }
          }
          /** Update the size properties of the overlay. */

        }, {
          key: "updateSize",
          value: function updateSize(sizeConfig) {
            this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

            this._updateElementSize();
          }
          /** Sets the LTR/RTL direction for the overlay. */

        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this._config = Object.assign(Object.assign({}, this._config), {
              direction: dir
            });

            this._updateElementDirection();
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, true);
            }
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, false);
            }
          }
          /**
           * Returns the layout direction of the overlay panel.
           */

        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = this._config.direction;

            if (!direction) {
              return 'ltr';
            }

            return typeof direction === 'string' ? direction : direction.value;
          }
          /** Switches to a new scroll strategy. */

        }, {
          key: "updateScrollStrategy",
          value: function updateScrollStrategy(strategy) {
            if (strategy === this._scrollStrategy) {
              return;
            }

            this._disposeScrollStrategy();

            this._scrollStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              strategy.enable();
            }
          }
          /** Updates the text direction of the overlay panel. */

        }, {
          key: "_updateElementDirection",
          value: function _updateElementDirection() {
            this._host.setAttribute('dir', this.getDirection());
          }
          /** Updates the size of the overlay element based on the overlay config. */

        }, {
          key: "_updateElementSize",
          value: function _updateElementSize() {
            if (!this._pane) {
              return;
            }

            var style = this._pane.style;
            style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
            style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
            style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
            style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
            style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
            style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
          }
          /** Toggles the pointer events for the overlay pane element. */

        }, {
          key: "_togglePointerEvents",
          value: function _togglePointerEvents(enablePointer) {
            this._pane.style.pointerEvents = enablePointer ? '' : 'none';
          }
          /** Attaches a backdrop for this overlay. */

        }, {
          key: "_attachBackdrop",
          value: function _attachBackdrop() {
            var _this9 = this;

            var showingClass = 'cdk-overlay-backdrop-showing';
            this._backdropElement = this._document.createElement('div');

            this._backdropElement.classList.add('cdk-overlay-backdrop');

            if (this._config.backdropClass) {
              this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
            } // Insert the backdrop before the pane in the DOM order,
            // in order to handle stacked overlays properly.


            this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
            // action desired when such a click occurs (usually closing the overlay).


            this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  if (_this9._backdropElement) {
                    _this9._backdropElement.classList.add(showingClass);
                  }
                });
              });
            } else {
              this._backdropElement.classList.add(showingClass);
            }
          }
          /**
           * Updates the stacking order of the element, moving it to the top if necessary.
           * This is required in cases where one overlay was detached, while another one,
           * that should be behind it, was destroyed. The next time both of them are opened,
           * the stacking will be wrong, because the detached element's pane will still be
           * in its original DOM position.
           */

        }, {
          key: "_updateStackingOrder",
          value: function _updateStackingOrder() {
            if (this._host.nextSibling) {
              this._host.parentNode.appendChild(this._host);
            }
          }
          /** Detaches the backdrop (if any) associated with the overlay. */

        }, {
          key: "detachBackdrop",
          value: function detachBackdrop() {
            var _this10 = this;

            var backdropToDetach = this._backdropElement;

            if (!backdropToDetach) {
              return;
            }

            var timeoutId;

            var finishDetach = function finishDetach() {
              // It may not be attached to anything in certain cases (e.g. unit tests).
              if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this10._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);

                if (backdropToDetach.parentNode) {
                  backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
              } // It is possible that a new portal has been attached to this overlay since we started
              // removing the backdrop. If that is the case, only clear the backdrop reference if it
              // is still the same instance that we started to remove.


              if (_this10._backdropElement == backdropToDetach) {
                _this10._backdropElement = null;
              }

              if (_this10._config.backdropClass) {
                _this10._toggleClasses(backdropToDetach, _this10._config.backdropClass, false);
              }

              clearTimeout(timeoutId);
            };

            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

            this._ngZone.runOutsideAngular(function () {
              backdropToDetach.addEventListener('transitionend', finishDetach);
            }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.


            backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.

            timeoutId = this._ngZone.runOutsideAngular(function () {
              return setTimeout(finishDetach, 500);
            });
          }
          /** Toggles a single CSS class or an array of classes on an element. */

        }, {
          key: "_toggleClasses",
          value: function _toggleClasses(element, cssClasses, isAdd) {
            var classList = element.classList;
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
              // We can't do a spread here, because IE doesn't support setting multiple classes.
              // Also trying to add an empty string to a DOMTokenList will throw.
              if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
              }
            });
          }
          /** Detaches the overlay content next time the zone stabilizes. */

        }, {
          key: "_detachContentWhenStable",
          value: function _detachContentWhenStable() {
            var _this11 = this;

            // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
            // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
            // be patched to run inside the zone, which will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(function () {
              // We can't remove the host here immediately, because the overlay pane's content
              // might still be animating. This stream helps us avoid interrupting the animation
              // by waiting for the pane to become empty.
              var subscription = _this11._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this11._attachments, _this11._detachments))).subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this11._pane || !_this11._host || _this11._pane.children.length === 0) {
                  if (_this11._pane && _this11._config.panelClass) {
                    _this11._toggleClasses(_this11._pane, _this11._config.panelClass, false);
                  }

                  if (_this11._host && _this11._host.parentElement) {
                    _this11._previousHostParent = _this11._host.parentElement;

                    _this11._previousHostParent.removeChild(_this11._host);
                  }

                  subscription.unsubscribe();
                }
              });
            });
          }
          /** Disposes of a scroll strategy. */

        }, {
          key: "_disposeScrollStrategy",
          value: function _disposeScrollStrategy() {
            var scrollStrategy = this._scrollStrategy;

            if (scrollStrategy) {
              scrollStrategy.disable();

              if (scrollStrategy.detach) {
                scrollStrategy.detach();
              }
            }
          }
        }]);

        return OverlayRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO: refactor clipping detection into a separate thing (part of scrolling module)
      // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

      /** Class to be added to the overlay bounding box. */


      var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
      /** Regex used to split a string on its CSS units. */

      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       */

      var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
        function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, FlexibleConnectedPositionStrategy);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
          /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

          this._lastBoundingBoxSize = {
            width: 0,
            height: 0
          };
          /** Whether the overlay was pushed in a previous positioning. */

          this._isPushed = false;
          /** Whether the overlay can be pushed on-screen on the initial open. */

          this._canPush = true;
          /** Whether the overlay can grow via flexible width/height after the initial open. */

          this._growAfterOpen = false;
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

          this._hasFlexibleDimensions = true;
          /** Whether the overlay position is locked. */

          this._positionLocked = false;
          /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

          this._viewportMargin = 0;
          /** The Scrollable containers used to check scrollable view properties on position change. */

          this._scrollables = [];
          /** Ordered list of preferred positions, from most to least desirable. */

          this._preferredPositions = [];
          /** Subject that emits whenever the position changes. */

          this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Subscription to viewport size changes. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Default offset for the overlay along the x axis. */

          this._offsetX = 0;
          /** Default offset for the overlay along the y axis. */

          this._offsetY = 0;
          /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

          this._appliedPanelClasses = [];
          /** Observable sequence of position changes. */

          this.positionChanges = this._positionChanges;
          this.setOrigin(connectedTo);
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(FlexibleConnectedPositionStrategy, [{
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
          /** Attaches this position strategy to an overlay. */

        }, {
          key: "attach",
          value: function attach(overlayRef) {
            var _this12 = this;

            if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('This position strategy is already attached to an overlay');
            }

            this._validatePositions();

            overlayRef.hostElement.classList.add(boundingBoxClass);
            this._overlayRef = overlayRef;
            this._boundingBox = overlayRef.hostElement;
            this._pane = overlayRef.overlayElement;
            this._isDisposed = false;
            this._isInitialRender = true;
            this._lastPosition = null;

            this._resizeSubscription.unsubscribe();

            this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
              // When the window is resized, we want to trigger the next reposition as if it
              // was an initial render, in order for the strategy to pick a new optimal position,
              // otherwise position locking will cause it to stay at the old one.
              _this12._isInitialRender = true;

              _this12.apply();
            });
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin best fits on-screen.
           *
           * The selection of a position goes as follows:
           *  - If any positions fit completely within the viewport as-is,
           *      choose the first position that does so.
           *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
           *      choose the position with the greatest available size modified by the positions' weight.
           *  - If pushing is enabled, take the position that went off-screen the least and push it
           *      on-screen.
           *  - If none of the previous criteria were met, use the position that goes off-screen the least.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // We shouldn't do anything if the strategy was disposed or we're on the server.
            if (this._isDisposed || !this._platform.isBrowser) {
              return;
            } // If the position has been applied already (e.g. when the overlay was opened) and the
            // consumer opted into locking in the position, re-use the old position, in order to
            // prevent the overlay from jumping around.


            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
              this.reapplyLastPosition();
              return;
            }

            this._clearPanelClasses();

            this._resetOverlayElementStyles();

            this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
            // the overlay relative to the origin.
            // We use the viewport rect to determine whether a position would go off-screen.


            this._viewportRect = this._getNarrowedViewportRect();
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            var originRect = this._originRect;
            var overlayRect = this._overlayRect;
            var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

            var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

            var fallback; // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.

            var _iterator = _createForOfIteratorHelper(this._preferredPositions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var pos = _step.value;

                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.


                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


                if (overlayFit.isCompletelyWithinViewport) {
                  this._isPushed = false;

                  this._applyPosition(pos, originPoint);

                  return;
                } // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.


                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                  // Save positions where the overlay will fit with flexible dimensions. We will use these
                  // if none of the positions fit *without* flexible dimensions.
                  flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                  });
                  continue;
                } // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.


                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                  fallback = {
                    overlayFit: overlayFit,
                    overlayPoint: overlayPoint,
                    originPoint: originPoint,
                    position: pos,
                    overlayRect: overlayRect
                  };
                }
              } // If there are any positions where the overlay would fit with flexible dimensions, choose the
              // one that has the greatest area available modified by the position's weight

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (flexibleFits.length) {
              var bestFit = null;
              var bestScore = -1;

              var _iterator2 = _createForOfIteratorHelper(flexibleFits),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var fit = _step2.value;
                  var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                  if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this._isPushed = false;

              this._applyPosition(bestFit.position, bestFit.origin);

              return;
            } // When none of the preferred positions fit within the viewport, take the position
            // that went off-screen the least and attempt to push it on-screen.


            if (this._canPush) {
              // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
              this._isPushed = true;

              this._applyPosition(fallback.position, fallback.originPoint);

              return;
            } // All options for getting the overlay within the viewport have been exhausted, so go with the
            // position that went off-screen the least.


            this._applyPosition(fallback.position, fallback.originPoint);
          }
        }, {
          key: "detach",
          value: function detach() {
            this._clearPanelClasses();

            this._lastPosition = null;
            this._previousPushAmount = null;

            this._resizeSubscription.unsubscribe();
          }
          /** Cleanup after the element gets destroyed. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed) {
              return;
            } // We can't use `_resetBoundingBoxStyles` here, because it resets
            // some properties to zero, rather than removing them.


            if (this._boundingBox) {
              extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              });
            }

            if (this._pane) {
              this._resetOverlayElementStyles();
            }

            if (this._overlayRef) {
              this._overlayRef.hostElement.classList.remove(boundingBoxClass);
            }

            this.detach();

            this._positionChanges.complete();

            this._overlayRef = this._boundingBox = null;
            this._isDisposed = true;
          }
          /**
           * This re-aligns the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "reapplyLastPosition",
          value: function reapplyLastPosition() {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._getOriginRect();
              this._overlayRect = this._pane.getBoundingClientRect();
              this._viewportRect = this._getNarrowedViewportRect();
              var lastPosition = this._lastPosition || this._preferredPositions[0];

              var originPoint = this._getOriginPoint(this._originRect, lastPosition);

              this._applyPosition(lastPosition, originPoint);
            }
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._scrollables = scrollables;
            return this;
          }
          /**
           * Adds new preferred positions.
           * @param positions List of positions options for this overlay.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
            // it in order to avoid it being picked up if the consumer tries to re-apply.

            if (positions.indexOf(this._lastPosition) === -1) {
              this._lastPosition = null;
            }

            this._validatePositions();

            return this;
          }
          /**
           * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
           * @param margin Required margin between the overlay and the viewport edge in pixels.
           */

        }, {
          key: "withViewportMargin",
          value: function withViewportMargin(margin) {
            this._viewportMargin = margin;
            return this;
          }
          /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "withFlexibleDimensions",
          value: function withFlexibleDimensions() {
            var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._hasFlexibleDimensions = flexibleDimensions;
            return this;
          }
          /** Sets whether the overlay can grow after the initial open via flexible width/height. */

        }, {
          key: "withGrowAfterOpen",
          value: function withGrowAfterOpen() {
            var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._growAfterOpen = growAfterOpen;
            return this;
          }
          /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "withPush",
          value: function withPush() {
            var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._canPush = canPush;
            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition() {
            var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._positionLocked = isLocked;
            return this;
          }
          /**
           * Sets the origin, relative to which to position the overlay.
           * Using an element origin is useful for building components that need to be positioned
           * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
           * used for cases like contextual menus which open relative to the user's pointer.
           * @param origin Reference to the new origin.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._origin = origin;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the x-axis.
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withDefaultOffsetX",
          value: function withDefaultOffsetX(offset) {
            this._offsetX = offset;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the y-axis.
           * @param offset New offset in the Y axis.
           */

        }, {
          key: "withDefaultOffsetY",
          value: function withDefaultOffsetY(offset) {
            this._offsetY = offset;
            return this;
          }
          /**
           * Configures that the position strategy should set a `transform-origin` on some elements
           * inside the overlay, depending on the current position that is being applied. This is
           * useful for the cases where the origin of an animation can change depending on the
           * alignment of the overlay.
           * @param selector CSS selector that will be used to find the target
           *    elements onto which to set the transform origin.
           */

        }, {
          key: "withTransformOriginOn",
          value: function withTransformOriginOn(selector) {
            this._transformOriginSelector = selector;
            return this;
          }
          /**
           * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
           */

        }, {
          key: "_getOriginPoint",
          value: function _getOriginPoint(originRect, pos) {
            var x;

            if (pos.originX == 'center') {
              // Note: when centering we should always use the `left`
              // offset, otherwise the position will be wrong in RTL.
              x = originRect.left + originRect.width / 2;
            } else {
              var startX = this._isRtl() ? originRect.right : originRect.left;
              var endX = this._isRtl() ? originRect.left : originRect.right;
              x = pos.originX == 'start' ? startX : endX;
            }

            var y;

            if (pos.originY == 'center') {
              y = originRect.top + originRect.height / 2;
            } else {
              y = pos.originY == 'top' ? originRect.top : originRect.bottom;
            }

            return {
              x: x,
              y: y
            };
          }
          /**
           * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
           * origin point to which the overlay should be connected.
           */

        }, {
          key: "_getOverlayPoint",
          value: function _getOverlayPoint(originPoint, overlayRect, pos) {
            // Calculate the (overlayStartX, overlayStartY), the start of the
            // potential overlay position relative to the origin point.
            var overlayStartX;

            if (pos.overlayX == 'center') {
              overlayStartX = -overlayRect.width / 2;
            } else if (pos.overlayX === 'start') {
              overlayStartX = this._isRtl() ? -overlayRect.width : 0;
            } else {
              overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
            }

            var overlayStartY;

            if (pos.overlayY == 'center') {
              overlayStartY = -overlayRect.height / 2;
            } else {
              overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
            } // The (x, y) coordinates of the overlay.


            return {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY
            };
          }
          /** Gets how well an overlay at the given point will fit within the viewport. */

        }, {
          key: "_getOverlayFit",
          value: function _getOverlayFit(point, rawOverlayRect, viewport, position) {
            // Round the overlay rect when comparing against the
            // viewport, because the viewport is always rounded.
            var overlay = getRoundedBoundingClientRect(rawOverlayRect);
            var x = point.x,
                y = point.y;

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


            if (offsetX) {
              x += offsetX;
            }

            if (offsetY) {
              y += offsetY;
            } // How much the overlay would overflow at this position, on each side.


            var leftOverflow = 0 - x;
            var rightOverflow = x + overlay.width - viewport.width;
            var topOverflow = 0 - y;
            var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

            var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

            var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

            var visibleArea = visibleWidth * visibleHeight;
            return {
              visibleArea: visibleArea,
              isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
              fitsInViewportVertically: visibleHeight === overlay.height,
              fitsInViewportHorizontally: visibleWidth == overlay.width
            };
          }
          /**
           * Whether the overlay can fit within the viewport when it may resize either its width or height.
           * @param fit How well the overlay fits in the viewport at some position.
           * @param point The (x, y) coordinates of the overlat at some position.
           * @param viewport The geometry of the viewport.
           */

        }, {
          key: "_canFitWithFlexibleDimensions",
          value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
            if (this._hasFlexibleDimensions) {
              var availableHeight = viewport.bottom - point.y;
              var availableWidth = viewport.right - point.x;
              var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
              var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
              var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
              var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
              return verticalFit && horizontalFit;
            }

            return false;
          }
          /**
           * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
           * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
           * right and bottom).
           *
           * @param start Starting point from which the overlay is pushed.
           * @param overlay Dimensions of the overlay.
           * @param scrollPosition Current viewport scroll position.
           * @returns The point at which to position the overlay after pushing. This is effectively a new
           *     originPoint.
           */

        }, {
          key: "_pushOverlayOnScreen",
          value: function _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
            // If the position is locked and we've pushed the overlay already, reuse the previous push
            // amount, rather than pushing it again. If we were to continue pushing, the element would
            // remain in the viewport, which goes against the expectations when position locking is enabled.
            if (this._previousPushAmount && this._positionLocked) {
              return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
              };
            } // Round the overlay rect when comparing against the
            // viewport, because the viewport is always rounded.


            var overlay = getRoundedBoundingClientRect(rawOverlayRect);
            var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
            // side, which we'll use to decide which direction to push it.

            var overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
            var overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
            var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
            var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

            var pushX = 0;
            var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
            // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
            // viewport and allow for the trailing end of the overlay to go out of bounds.

            if (overlay.width <= viewport.width) {
              pushX = overflowLeft || -overflowRight;
            } else {
              pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
            }

            if (overlay.height <= viewport.height) {
              pushY = overflowTop || -overflowBottom;
            } else {
              pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
            }

            this._previousPushAmount = {
              x: pushX,
              y: pushY
            };
            return {
              x: start.x + pushX,
              y: start.y + pushY
            };
          }
          /**
           * Applies a computed position to the overlay and emits a position change.
           * @param position The position preference
           * @param originPoint The point on the origin element where the overlay is connected.
           */

        }, {
          key: "_applyPosition",
          value: function _applyPosition(position, originPoint) {
            this._setTransformOrigin(position);

            this._setOverlayElementStyles(originPoint, position);

            this._setBoundingBoxStyles(originPoint, position);

            if (position.panelClass) {
              this._addPanelClasses(position.panelClass);
            } // Save the last connected position in case the position needs to be re-calculated.


            this._lastPosition = position; // Notify that the position has been changed along with its change properties.
            // We only emit if we've got any subscriptions, because the scroll visibility
            // calculcations can be somewhat expensive.

            if (this._positionChanges.observers.length) {
              var scrollableViewProperties = this._getScrollVisibility();

              var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

              this._positionChanges.next(changeEvent);
            }

            this._isInitialRender = false;
          }
          /** Sets the transform origin based on the configured selector and the passed-in position.  */

        }, {
          key: "_setTransformOrigin",
          value: function _setTransformOrigin(position) {
            if (!this._transformOriginSelector) {
              return;
            }

            var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

            var xOrigin;
            var yOrigin = position.overlayY;

            if (position.overlayX === 'center') {
              xOrigin = 'center';
            } else if (this._isRtl()) {
              xOrigin = position.overlayX === 'start' ? 'right' : 'left';
            } else {
              xOrigin = position.overlayX === 'start' ? 'left' : 'right';
            }

            for (var i = 0; i < elements.length; i++) {
              elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
            }
          }
          /**
           * Gets the position and size of the overlay's sizing container.
           *
           * This method does no measuring and applies no styles so that we can cheaply compute the
           * bounds for all positions and choose the best fit based on these results.
           */

        }, {
          key: "_calculateBoundingBoxRect",
          value: function _calculateBoundingBoxRect(origin, position) {
            var viewport = this._viewportRect;

            var isRtl = this._isRtl();

            var height, top, bottom;

            if (position.overlayY === 'top') {
              // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
              top = origin.y;
              height = viewport.height - top + this._viewportMargin;
            } else if (position.overlayY === 'bottom') {
              // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
              // the viewport margin back in, because the viewport rect is narrowed down to remove the
              // margin, whereas the `origin` position is calculated based on its `ClientRect`.
              bottom = viewport.height - origin.y + this._viewportMargin * 2;
              height = viewport.height - bottom + this._viewportMargin;
            } else {
              // If neither top nor bottom, it means that the overlay is vertically centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.bottom - origin.y` and
              // `origin.y - viewport.top`.
              var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
              var previousHeight = this._lastBoundingBoxSize.height;
              height = smallestDistanceToViewportEdge * 2;
              top = origin.y - smallestDistanceToViewportEdge;

              if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
              }
            } // The overlay is opening 'right-ward' (the content flows to the right).


            var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

            var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
            var width, left, right;

            if (isBoundedByLeftViewportEdge) {
              right = viewport.width - origin.x + this._viewportMargin;
              width = origin.x - this._viewportMargin;
            } else if (isBoundedByRightViewportEdge) {
              left = origin.x;
              width = viewport.right - origin.x;
            } else {
              // If neither start nor end, it means that the overlay is horizontally centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.right - origin.x` and
              // `origin.x - viewport.left`.
              var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

              var previousWidth = this._lastBoundingBoxSize.width;
              width = _smallestDistanceToViewportEdge * 2;
              left = origin.x - _smallestDistanceToViewportEdge;

              if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
              }
            }

            return {
              top: top,
              left: left,
              bottom: bottom,
              right: right,
              width: width,
              height: height
            };
          }
          /**
           * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
           * origin's connection point and stetches to the bounds of the viewport.
           *
           * @param origin The point on the origin element where the overlay is connected.
           * @param position The position preference
           */

        }, {
          key: "_setBoundingBoxStyles",
          value: function _setBoundingBoxStyles(origin, position) {
            var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
            // when applying a new size.


            if (!this._isInitialRender && !this._growAfterOpen) {
              boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
              boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
            }

            var styles = {};

            if (this._hasExactPosition()) {
              styles.top = styles.left = '0';
              styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
              styles.width = styles.height = '100%';
            } else {
              var maxHeight = this._overlayRef.getConfig().maxHeight;

              var maxWidth = this._overlayRef.getConfig().maxWidth;

              styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
              styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
              styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
              styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

              if (position.overlayX === 'center') {
                styles.alignItems = 'center';
              } else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
              }

              if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
              } else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
              }

              if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
              }

              if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
              }
            }

            this._lastBoundingBoxSize = boundingBoxRect;
            extendStyles(this._boundingBox.style, styles);
          }
          /** Resets the styles for the bounding box so that a new positioning can be computed. */

        }, {
          key: "_resetBoundingBoxStyles",
          value: function _resetBoundingBoxStyles() {
            extendStyles(this._boundingBox.style, {
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }
          /** Resets the styles for the overlay pane so that a new positioning can be computed. */

        }, {
          key: "_resetOverlayElementStyles",
          value: function _resetOverlayElementStyles() {
            extendStyles(this._pane.style, {
              top: '',
              left: '',
              bottom: '',
              right: '',
              position: '',
              transform: ''
            });
          }
          /** Sets positioning styles to the overlay element. */

        }, {
          key: "_setOverlayElementStyles",
          value: function _setOverlayElementStyles(originPoint, position) {
            var styles = {};

            var hasExactPosition = this._hasExactPosition();

            var hasFlexibleDimensions = this._hasFlexibleDimensions;

            var config = this._overlayRef.getConfig();

            if (hasExactPosition) {
              var scrollPosition = this._viewportRuler.getViewportScrollPosition();

              extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
              extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
            } else {
              styles.position = 'static';
            } // Use a transform to apply the offsets. We do this because the `center` positions rely on
            // being in the normal flex flow and setting a `top` / `left` at all will completely throw
            // off the position. We also can't use margins, because they won't have an effect in some
            // cases where the element doesn't have anything to "push off of". Finally, this works
            // better both with flexible and non-flexible positioning.


            var transformString = '';

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y');

            if (offsetX) {
              transformString += "translateX(".concat(offsetX, "px) ");
            }

            if (offsetY) {
              transformString += "translateY(".concat(offsetY, "px)");
            }

            styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
            // we need these values to both be set to "100%" for the automatic flexible sizing to work.
            // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
            // Note that this doesn't apply when we have an exact position, in which case we do want to
            // apply them because they'll be cleared from the bounding box.

            if (config.maxHeight) {
              if (hasExactPosition) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
              } else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
              }
            }

            if (config.maxWidth) {
              if (hasExactPosition) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
              } else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
              }
            }

            extendStyles(this._pane.style, styles);
          }
          /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayY",
          value: function _getExactOverlayY(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the
            // preferred position has changed since the last `apply`.
            var styles = {
              top: '',
              bottom: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            }

            var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
            // autocomplete), mobile browsers will shift everything in order to put the input in the middle
            // of the screen and to make space for the virtual keyboard. We need to account for this offset,
            // otherwise our positioning will be thrown off.


            overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
            // above or below the origin and the direction in which the element will expand.

            if (position.overlayY === 'bottom') {
              // When using `bottom`, we adjust the y position such that it is the distance
              // from the bottom of the viewport rather than the top.
              var documentHeight = this._document.documentElement.clientHeight;
              styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
            } else {
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
            }

            return styles;
          }
          /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayX",
          value: function _getExactOverlayX(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the preferred position has
            // changed since the last `apply`.
            var styles = {
              left: '',
              right: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
            // or "after" the origin, which determines the direction in which the element will expand.
            // For the horizontal axis, the meaning of "before" and "after" change based on whether the
            // page is in RTL or LTR.


            var horizontalStyleProperty;

            if (this._isRtl()) {
              horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
            } else {
              horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
            } // When we're setting `right`, we adjust the x position such that it is the distance
            // from the right edge of the viewport rather than the left edge.


            if (horizontalStyleProperty === 'right') {
              var documentWidth = this._document.documentElement.clientWidth;
              styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
            } else {
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
            }

            return styles;
          }
          /**
           * Gets the view properties of the trigger and overlay, including whether they are clipped
           * or completely outside the view of any of the strategy's scrollables.
           */

        }, {
          key: "_getScrollVisibility",
          value: function _getScrollVisibility() {
            // Note: needs fresh rects since the position could've changed.
            var originBounds = this._getOriginRect();

            var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
            // every time, we should be able to use the scrollTop of the containers if the size of those
            // containers hasn't changed.


            var scrollContainerBounds = this._scrollables.map(function (scrollable) {
              return scrollable.getElementRef().nativeElement.getBoundingClientRect();
            });

            return {
              isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
              isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
              isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
              isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
            };
          }
          /** Subtracts the amount that an element is overflowing on an axis from its length. */

        }, {
          key: "_subtractOverflows",
          value: function _subtractOverflows(length) {
            for (var _len = arguments.length, overflows = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              overflows[_key - 1] = arguments[_key];
            }

            return overflows.reduce(function (currentValue, currentOverflow) {
              return currentValue - Math.max(currentOverflow, 0);
            }, length);
          }
          /** Narrows the given viewport rect by the current _viewportMargin. */

        }, {
          key: "_getNarrowedViewportRect",
          value: function _getNarrowedViewportRect() {
            // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
            // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
            // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
            // and `innerHeight` that do. This is necessary, because the overlay container uses
            // 100% `width` and `height` which don't include the scrollbar either.
            var width = this._document.documentElement.clientWidth;
            var height = this._document.documentElement.clientHeight;

            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            return {
              top: scrollPosition.top + this._viewportMargin,
              left: scrollPosition.left + this._viewportMargin,
              right: scrollPosition.left + width - this._viewportMargin,
              bottom: scrollPosition.top + height - this._viewportMargin,
              width: width - 2 * this._viewportMargin,
              height: height - 2 * this._viewportMargin
            };
          }
          /** Whether the we're dealing with an RTL context */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /** Determines whether the overlay uses exact or flexible positioning. */

        }, {
          key: "_hasExactPosition",
          value: function _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
          }
          /** Retrieves the offset of a position along the x or y axis. */

        }, {
          key: "_getOffset",
          value: function _getOffset(position, axis) {
            if (axis === 'x') {
              // We don't do something like `position['offset' + axis]` in
              // order to avoid breking minifiers that rename properties.
              return position.offsetX == null ? this._offsetX : position.offsetX;
            }

            return position.offsetY == null ? this._offsetY : position.offsetY;
          }
          /** Validates that the current position match the expected values. */

        }, {
          key: "_validatePositions",
          value: function _validatePositions() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._preferredPositions.length) {
                throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
              } // TODO(crisbeto): remove these once Angular's template type
              // checking is advanced enough to catch these cases.


              this._preferredPositions.forEach(function (pair) {
                validateHorizontalPosition('originX', pair.originX);
                validateVerticalPosition('originY', pair.originY);
                validateHorizontalPosition('overlayX', pair.overlayX);
                validateVerticalPosition('overlayY', pair.overlayY);
              });
            }
          }
          /** Adds a single CSS class or an array of classes on the overlay panel. */

        }, {
          key: "_addPanelClasses",
          value: function _addPanelClasses(cssClasses) {
            var _this13 = this;

            if (this._pane) {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
                if (cssClass !== '' && _this13._appliedPanelClasses.indexOf(cssClass) === -1) {
                  _this13._appliedPanelClasses.push(cssClass);

                  _this13._pane.classList.add(cssClass);
                }
              });
            }
          }
          /** Clears the classes that the position strategy has applied from the overlay panel. */

        }, {
          key: "_clearPanelClasses",
          value: function _clearPanelClasses() {
            var _this14 = this;

            if (this._pane) {
              this._appliedPanelClasses.forEach(function (cssClass) {
                _this14._pane.classList.remove(cssClass);
              });

              this._appliedPanelClasses = [];
            }
          }
          /** Returns the ClientRect of the current origin. */

        }, {
          key: "_getOriginRect",
          value: function _getOriginRect() {
            var origin = this._origin;

            if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
              return origin.nativeElement.getBoundingClientRect();
            } // Check for Element so SVG elements are also supported.


            if (origin instanceof Element) {
              return origin.getBoundingClientRect();
            }

            var width = origin.width || 0;
            var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

            return {
              top: origin.y,
              bottom: origin.y + height,
              left: origin.x,
              right: origin.x + width,
              height: height,
              width: width
            };
          }
        }]);

        return FlexibleConnectedPositionStrategy;
      }();
      /** Shallow-extends a stylesheet object with another stylesheet object. */


      function extendStyles(destination, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
          }
        }

        return destination;
      }
      /**
       * Extracts the pixel value as a number from a value, if it's a number
       * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
       */


      function getPixelValue(input) {
        if (typeof input !== 'number' && input != null) {
          var _input$split = input.split(cssUnitPattern),
              _input$split2 = _slicedToArray(_input$split, 2),
              value = _input$split2[0],
              units = _input$split2[1];

          return !units || units === 'px' ? parseFloat(value) : null;
        }

        return input || null;
      }
      /**
       * Gets a version of an element's bounding `ClientRect` where all the values are rounded down to
       * the nearest pixel. This allows us to account for the cases where there may be sub-pixel
       * deviations in the `ClientRect` returned by the browser (e.g. when zoomed in with a percentage
       * size, see #21350).
       */


      function getRoundedBoundingClientRect(clientRect) {
        return {
          top: Math.floor(clientRect.top),
          right: Math.floor(clientRect.right),
          bottom: Math.floor(clientRect.bottom),
          left: Math.floor(clientRect.left),
          width: Math.floor(clientRect.width),
          height: Math.floor(clientRect.height)
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative to some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
       * @breaking-change 8.0.0
       */


      var ConnectedPositionStrategy = /*#__PURE__*/function () {
        function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
          _classCallCheck(this, ConnectedPositionStrategy);

          /** Ordered list of preferred positions, from most to least desirable. */
          this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
          // the extra logic, we create an instance of the positioning strategy that has some
          // defaults that make it behave as the old position strategy and to which we'll
          // proxy all of the API calls.

          this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
          this.withFallbackPosition(originPos, overlayPos);
          this.onPositionChange = this._positionStrategy.positionChanges;
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(ConnectedPositionStrategy, [{
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
          /** Attach this position strategy to an overlay. */

        }, {
          key: "attach",
          value: function attach(overlayRef) {
            this._overlayRef = overlayRef;

            this._positionStrategy.attach(overlayRef);

            if (this._direction) {
              overlayRef.setDirection(this._direction);
              this._direction = null;
            }
          }
          /** Disposes all resources used by the position strategy. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._positionStrategy.dispose();
          }
          /** @docs-private */

        }, {
          key: "detach",
          value: function detach() {
            this._positionStrategy.detach();
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin fits on-screen.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            this._positionStrategy.apply();
          }
          /**
           * Re-positions the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "recalculateLastPosition",
          value: function recalculateLastPosition() {
            this._positionStrategy.reapplyLastPosition();
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._positionStrategy.withScrollableContainers(scrollables);
          }
          /**
           * Adds a new preferred fallback position.
           * @param originPos
           * @param overlayPos
           */

        }, {
          key: "withFallbackPosition",
          value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
            var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

            this._preferredPositions.push(position);

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the layout direction so the overlay's position can be adjusted to match.
           * @param dir New layout direction.
           */

        }, {
          key: "withDirection",
          value: function withDirection(dir) {
            // Since the direction might be declared before the strategy is attached,
            // we save the value in a temporary property and we'll transfer it to the
            // overlay ref on attachment.
            if (this._overlayRef) {
              this._overlayRef.setDirection(dir);
            } else {
              this._direction = dir;
            }

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the x-axis
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withOffsetX",
          value: function withOffsetX(offset) {
            this._positionStrategy.withDefaultOffsetX(offset);

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the y-axis
           * @param  offset New offset in the Y axis.
           */

        }, {
          key: "withOffsetY",
          value: function withOffsetY(offset) {
            this._positionStrategy.withDefaultOffsetY(offset);

            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition(isLocked) {
            this._positionStrategy.withLockedPosition(isLocked);

            return this;
          }
          /**
           * Overwrites the current set of positions with an array of new ones.
           * @param positions Position pairs to be set on the strategy.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions.slice();

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the origin element, relative to which to position the overlay.
           * @param origin Reference to the new origin element.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._positionStrategy.setOrigin(origin);

            return this;
          }
        }]);

        return ConnectedPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Class to be added to the overlay pane wrapper. */


      var wrapperClass = 'cdk-global-overlay-wrapper';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * explicit position relative to the browser's viewport. We use flexbox, instead of
       * transforms, in order to avoid issues with subpixel rendering which can cause the
       * element to become blurry.
       */

      var GlobalPositionStrategy = /*#__PURE__*/function () {
        function GlobalPositionStrategy() {
          _classCallCheck(this, GlobalPositionStrategy);

          this._cssPosition = 'static';
          this._topOffset = '';
          this._bottomOffset = '';
          this._leftOffset = '';
          this._rightOffset = '';
          this._alignItems = '';
          this._justifyContent = '';
          this._width = '';
          this._height = '';
        }

        _createClass(GlobalPositionStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            var config = overlayRef.getConfig();
            this._overlayRef = overlayRef;

            if (this._width && !config.width) {
              overlayRef.updateSize({
                width: this._width
              });
            }

            if (this._height && !config.height) {
              overlayRef.updateSize({
                height: this._height
              });
            }

            overlayRef.hostElement.classList.add(wrapperClass);
            this._isDisposed = false;
          }
          /**
           * Sets the top position of the overlay. Clears any previously set vertical position.
           * @param value New top offset.
           */

        }, {
          key: "top",
          value: function top() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._bottomOffset = '';
            this._topOffset = value;
            this._alignItems = 'flex-start';
            return this;
          }
          /**
           * Sets the left position of the overlay. Clears any previously set horizontal position.
           * @param value New left offset.
           */

        }, {
          key: "left",
          value: function left() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._rightOffset = '';
            this._leftOffset = value;
            this._justifyContent = 'flex-start';
            return this;
          }
          /**
           * Sets the bottom position of the overlay. Clears any previously set vertical position.
           * @param value New bottom offset.
           */

        }, {
          key: "bottom",
          value: function bottom() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._topOffset = '';
            this._bottomOffset = value;
            this._alignItems = 'flex-end';
            return this;
          }
          /**
           * Sets the right position of the overlay. Clears any previously set horizontal position.
           * @param value New right offset.
           */

        }, {
          key: "right",
          value: function right() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._leftOffset = '';
            this._rightOffset = value;
            this._justifyContent = 'flex-end';
            return this;
          }
          /**
           * Sets the overlay width and clears any previously set width.
           * @param value New width for the overlay
           * @deprecated Pass the `width` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "width",
          value: function width() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                width: value
              });
            } else {
              this._width = value;
            }

            return this;
          }
          /**
           * Sets the overlay height and clears any previously set height.
           * @param value New height for the overlay
           * @deprecated Pass the `height` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "height",
          value: function height() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                height: value
              });
            } else {
              this._height = value;
            }

            return this;
          }
          /**
           * Centers the overlay horizontally with an optional offset.
           * Clears any previously set horizontal position.
           *
           * @param offset Overlay offset from the horizontal center.
           */

        }, {
          key: "centerHorizontally",
          value: function centerHorizontally() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.left(offset);
            this._justifyContent = 'center';
            return this;
          }
          /**
           * Centers the overlay vertically with an optional offset.
           * Clears any previously set vertical position.
           *
           * @param offset Overlay offset from the vertical center.
           */

        }, {
          key: "centerVertically",
          value: function centerVertically() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.top(offset);
            this._alignItems = 'center';
            return this;
          }
          /**
           * Apply the position to the element.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // Since the overlay ref applies the strategy asynchronously, it could
            // have been disposed before it ends up being applied. If that is the
            // case, we shouldn't do anything.
            if (!this._overlayRef || !this._overlayRef.hasAttached()) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parentStyles = this._overlayRef.hostElement.style;

            var config = this._overlayRef.getConfig();

            var width = config.width,
                height = config.height,
                maxWidth = config.maxWidth,
                maxHeight = config.maxHeight;
            var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
            var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
            styles.position = this._cssPosition;
            styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
            styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
            styles.marginBottom = this._bottomOffset;
            styles.marginRight = this._rightOffset;

            if (shouldBeFlushHorizontally) {
              parentStyles.justifyContent = 'flex-start';
            } else if (this._justifyContent === 'center') {
              parentStyles.justifyContent = 'center';
            } else if (this._overlayRef.getConfig().direction === 'rtl') {
              // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
              // don't want that because our positioning is explicitly `left` and `right`, hence
              // why we do another inversion to ensure that the overlay stays in the same position.
              // TODO: reconsider this if we add `start` and `end` methods.
              if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
              } else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
              }
            } else {
              parentStyles.justifyContent = this._justifyContent;
            }

            parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
          }
          /**
           * Cleans up the DOM changes from the position strategy.
           * @docs-private
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed || !this._overlayRef) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parent = this._overlayRef.hostElement;
            var parentStyles = parent.style;
            parent.classList.remove(wrapperClass);
            parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
            this._overlayRef = null;
            this._isDisposed = true;
          }
        }]);

        return GlobalPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Builder for overlay position strategy. */


      var OverlayPositionBuilder = /*#__PURE__*/function () {
        function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */


        _createClass(OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @param elementRef
           * @param originPos
           * @param overlayPos
           * @deprecated Use `flexibleConnectedTo` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param origin Origin relative to which to position the overlay.
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return OverlayPositionBuilder;
      }();

      OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
      };

      OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayPositionBuilder_Factory() {
          return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
        },
        token: OverlayPositionBuilder,
        providedIn: "root"
      });

      OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: OverlayContainer
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Next overlay unique ID. */


      var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
      // which needs to be different depending on where OverlayModule is imported.

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
       */

      var Overlay = /*#__PURE__*/function () {
        function Overlay(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher) {
          _classCallCheck(this, Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(config) {
            var host = this._createHostElement();

            var pane = this._createPaneElement(host);

            var portalOutlet = this._createPortalOutlet(pane);

            var overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @returns An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @returns Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal outlet.
           * @returns A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayOutsideClickDispatcher));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Overlay,
        factory: Overlay.ɵfac
      });

      Overlay.ctorParameters = function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: OverlayOutsideClickDispatcher
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ScrollStrategyOptions
          }, {
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: OverlayPositionBuilder
          }, {
            type: OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: OverlayOutsideClickDispatcher
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


      var defaultPositionList = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }];
      /** Injection token that determines the scroll handling while the connected overlay is open. */

      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
      /**
       * Directive applied to an element to make it usable as an origin for an Overlay using a
       * ConnectedPositionStrategy.
       */

      var CdkOverlayOrigin = function CdkOverlayOrigin(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });

      CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive to facilitate declarative creation of an
       * Overlay using a FlexibleConnectedPositionStrategy.
       */


      var CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Margin between the overlay and the viewport edges. */

          this.viewportMargin = 0;
          /** Whether the overlay is open. */

          this.open = false;
          /** Whether the overlay can be closed by user interaction. */

          this.disableClose = false;
          /** Event emitted when the backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the position has changed. */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been attached. */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been detached. */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are keyboard events that are targeted at the overlay. */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are mouse outside click events that are targeted at the overlay. */

          this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */


        _createClass(CdkConnectedOverlay, [{
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** The offset in pixels for the overlay connection point on the y-axis */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          },
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** Whether or not the overlay should attach a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether or not the overlay should be locked when scrolling. */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          },
          set: function set(value) {
            this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          },
          set: function set(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          },
          set: function set(value) {
            this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          },
          set: function set(value) {
            this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The associated overlay reference. */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /** The element's layout direction. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._attachSubscription.unsubscribe();

            this._detachSubscription.unsubscribe();

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();

            if (this._overlayRef) {
              this._overlayRef.dispose();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /** Creates an overlay */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this15 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            var overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());

            this._attachSubscription = overlayRef.attachments().subscribe(function () {
              return _this15.attach.emit();
            });
            this._detachSubscription = overlayRef.detachments().subscribe(function () {
              return _this15.detach.emit();
            });
            overlayRef.keydownEvents().subscribe(function (event) {
              _this15.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !_this15.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();

                _this15._detachOverlay();
              }
            });

            this._overlayRef.outsidePointerEvents().subscribe(function (event) {
              _this15.overlayOutsideClick.next(event);
            });
          }
          /** Builds the overlay config based on the directive's inputs */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

            var overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /** Updates the state of a position strategy, based on the values of the directive inputs. */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this16 = this;

            var positions = this.positions.map(function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this16.offsetX,
                offsetY: currentPosition.offsetY || _this16.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
          }
          /** Returns the position strategy of the overlay to be set on the overlay config */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            return strategy;
          }
          /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this17 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this17.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }

            this._positionSubscription.unsubscribe(); // Only subscribe to `positionChanges` if requested, because putting
            // together all the information for it can be expensive.


            if (this.positionChange.observers.length > 0) {
              this._positionSubscription = this._position.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(function () {
                return _this17.positionChange.observers.length > 0;
              })).subscribe(function (position) {
                _this17.positionChange.emit(position);

                if (_this17.positionChange.observers.length === 0) {
                  _this17._positionSubscription.unsubscribe();
                }
              });
            }
          }
          /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();
            }

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();
          }
        }]);

        return CdkConnectedOverlay;
      }();

      CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
          transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown",
          overlayOutsideClick: "overlayOutsideClick"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        disableClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayDisableClose']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOpen']
          }],
          disableClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayDisableClose']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOrigin']
          }],
          positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositionStrategy']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
          }],
          transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayTransformOriginOn']
          }]
        });
      })();
      /** @docs-private */


      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var OverlayModule = function OverlayModule() {
        _classCallCheck(this, OverlayModule);
      };

      OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OverlayModule
      });
      OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        },
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
          declarations: function declarations() {
            return [CdkConnectedOverlay, CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          },
          exports: function exports() {
            return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
            providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Alternative to OverlayContainer that supports correct displaying of overlay elements in
       * Fullscreen mode
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
       *
       * Should be provided in the root component.
       */


      var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
        _inherits(FullscreenOverlayContainer, _OverlayContainer);

        var _super3 = _createSuper(FullscreenOverlayContainer);

        function FullscreenOverlayContainer(_document, platform) {
          _classCallCheck(this, FullscreenOverlayContainer);

          return _super3.call(this, _document, platform);
        }

        _createClass(FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this18 = this;

            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(function () {
              return _this18._adjustParentForFullscreenChange();
            });
          }
        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }

            var fullscreenElement = this.getFullscreenElement();
            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              var _document = this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            var _document = this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return FullscreenOverlayContainer;
      }(OverlayContainer);

      FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FullscreenOverlayContainer_Factory() {
          return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: FullscreenOverlayContainer,
        providedIn: "root"
      });

      FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
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
      //# sourceMappingURL=overlay.js.map

      /***/

    },

    /***/
    "305l":
    /*!*********************************************!*\
      !*** ./src/app/modules/auth/auth.module.ts ***!
      \*********************************************/

    /*! exports provided: PERFECT_SCROLLBAR_CONFIG, AuthModule */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function () {
        return PERFECT_SCROLLBAR_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-routing.module */
      "cMCp");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "6n5F");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration/registration.component */
      "58k3");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "SiHH");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./logout/logout.component */
      "8DKb");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth.component */
      "NRzN");
      /* harmony import */


      var _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../i18n/translation.module */
      "tM0M");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var ngx_joyride__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-joyride */
      "1PZ1");

      var PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], ngx_joyride__WEBPACK_IMPORTED_MODULE_15__["JoyrideModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], ngx_joyride__WEBPACK_IMPORTED_MODULE_15__["JoyrideModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _i18n_translation_module__WEBPACK_IMPORTED_MODULE_10__["TranslationModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], ngx_joyride__WEBPACK_IMPORTED_MODULE_15__["JoyrideModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "58k3":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/auth/registration/registration.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function k3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-password.validator */
      "Qy8N");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models/user.model */
      "rrsC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function RegistrationComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The registration details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 'Passsword' and 'Confirm Password' didn't match. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_container_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_ng_template_53_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r6, " ");
        }
      }

      function RegistrationComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegistrationComponent_ng_template_53_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "Fullname is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "minlength",
          message: "Fullname should have at least 3 symbols",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "maxLength",
          message: "Fullname should have maximum 100 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "minlength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c8 = function _c8(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c9 = function _c9(a2) {
        return {
          validation: "minlength",
          message: "Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c10 = function _c10(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var _c11 = function _c11(a2) {
        return {
          validation: "required",
          message: "Confirm Password is required",
          control: a2
        };
      };

      var _c12 = function _c12(a2) {
        return {
          validation: "minlength",
          message: "Confirm Password should have at least 3 symbols",
          control: a2
        };
      };

      var _c13 = function _c13(a2) {
        return {
          validation: "maxLength",
          message: "Confirm Password should have maximum 100 symbols",
          control: a2
        };
      };

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(fb, authService, router) {
          _classCallCheck(this, RegistrationComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

          if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registrationForm.controls;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.registrationForm = this.fb.group({
              fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              email: ['qwe@qwe.qwe', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
              agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            }, {
              validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordValidator"].MatchPassword
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this19 = this;

            this.hasError = false;
            var result = {};
            Object.keys(this.f).forEach(function (key) {
              result[key] = _this19.f[key].value;
            });
            var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
            newUser.setUser(result);
            var registrationSubscr = this.authService.registration(newUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (user) {
              if (user) {
                _this19.router.navigate(['/']);
              } else {
                _this19.hasError = true;
              }
            });
            this.unsubscribe.push(registrationSubscr);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 55,
        vars: 71,
        consts: [[1, "login-form", "login-signup"], ["novalidate", "novalidate", "id", "kt_login_signup_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "text", "name", "fullname", "formControlName", "fullname", "placeholder", "Fullname", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", "placeholder", "Email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], ["type", "password", "placeholder", "Confirm password", "name", "cPassword", "autocomplete", "off", "formControlName", "cPassword", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [1, "checkbox", "mb-0"], ["type", "checkbox", "formControlName", "agree", "name", "agree"], ["href", "https://keenthemes.com/metronic/?page=faq", "target", "_blank"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0", "pb-3"], ["type", "submit", "id", "kt_login_signup_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4", 3, "disabled"], ["routerLink", "/auth/login", "type", "button", "id", "kt_login_signup_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "fv-plugins-message-container"], [1, "fv-help-block"], [1, "spinner", "spinner-primary", "ml-5"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your details to create your account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fullname");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](12, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](14, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](20, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](21, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](22, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](27, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](28, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](29, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](34, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](35, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](36, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegistrationComponent_ng_container_37_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xA0I Agree the\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RegistrationComponent_ng_container_51_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegistrationComponent_ng_template_53_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.registrationForm.controls["fullname"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c1, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c2, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c3, ctx.registrationForm.controls["fullname"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.registrationForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c4, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c5, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c6, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c7, ctx.registrationForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.registrationForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c8, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c9, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c10, ctx.registrationForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c0, ctx.registrationForm.controls["cPassword"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c11, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c12, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c13, ctx.registrationForm.controls["cPassword"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.controls["cPassword"].errors && ctx.registrationForm.controls["cPassword"].errors.ConfirmPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid || !ctx.registrationForm.controls["agree"].value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 35, ctx.isLoading$));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUVKO0VBQUk7SUFDRSxXQUFBO0VBRU47QUFDRiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6n5F":
    /*!*******************************************************!*\
      !*** ./src/app/modules/auth/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function n5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var src_app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.constants */
      "dkQB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_services_club_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../core/services/club.service */
      "wDSB");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "7dP1");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var ngx_joyride__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-joyride */
      "1PZ1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");

      function LoginComponent_ng_template_7_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.showPreviousClubs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_7_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No record found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_7_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_17_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var club_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.onClubSelected(club_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var club_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", club_r17.logoURL, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", club_r17.clubName, "");
        }
      }

      function LoginComponent_ng_template_7_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_ng_container_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.loadMoreClubs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Load more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoginComponent_ng_template_7_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_ng_template_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more Clubs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_template_7_button_3_Template, 2, 0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select club");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_Template_button_click_7_listener() {
            var c_r7 = ctx.close;
            return c_r7("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_Template_button_click_10_listener() {
            var d_r8 = ctx.dismiss;
            return d_r8("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perfect-scrollbar", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_ng_template_7_div_15_Template, 6, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_ng_template_7_div_17_Template, 6, 2, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_Template_button_click_19_listener() {
            var c_r7 = ctx.close;
            return c_r7("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_ng_template_7_ng_container_21_Template, 3, 0, "ng-container", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_ng_template_7_ng_template_22_Template, 2, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showBackBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.searchControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.noClubFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allClubs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isPickerClub)("ngIfElse", _r13);
        }
      }

      function LoginComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The login details are incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoginComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selected club:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selectedClub_r27 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", selectedClub_r27.logoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectedClub_r27.clubName, "");
        }
      }

      function LoginComponent_ng_container_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoginComponent_ng_template_44_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r29, " ");
        }
      }

      function LoginComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_ng_template_44_ng_container_0_Template, 4, 1, "ng-container", 16);
        }

        if (rf & 2) {
          var control_r28 = ctx.control;
          var validation_r30 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r28.hasError(validation_r30) && (control_r28.dirty || control_r28.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-in valid": a0
        };
      };

      var _c1 = function _c1(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "required",
          message: "Password is required",
          control: a2
        };
      };

      var _c6 = function _c6(a2) {
        return {
          validation: "minlength",
          message: "Password should contain at least 8 characters",
          control: a2
        };
      };

      var _c7 = function _c7(a2) {
        return {
          validation: "maxLength",
          message: "Password should have maximum 100 symbols",
          control: a2
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(config, fb, router, _clubService, _authService, modalService, toastr, spinner, cf, activeModal, joyrideService) {
          var _this20 = this;

          _classCallCheck(this, LoginComponent);

          this.config = config;
          this.fb = fb;
          this.router = router;
          this._clubService = _clubService;
          this._authService = _authService;
          this.modalService = modalService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.cf = cf;
          this.activeModal = activeModal;
          this.joyrideService = joyrideService;
          this.selectedClub$ = this._clubService.SelectedClub$;
          this.defaultAuth = {
            email: '',
            password: ''
          };
          this.searchString = '';
          this.searchStarted = false;
          this.noClubFound = false;
          this.showBackBtn = false;
          this.isPickerClub = false;
          this.offset = 0;
          this.limit = 20;
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          config.backdrop = 'static';
          config.keyboard = false;
          this.page = 0;
          this.isLoading = false;
          this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000)).subscribe(function (newValue) {
            if (newValue.trim().length == 0 || newValue == "") {
              if (_this20.isPickerClub == true) {
                _this20.noClubFound = false;

                _this20.getDividisClubs();
              } else {
                _this20.noClubFound = false;

                _this20.getAllClubs();
              }
            } else {
              _this20.searchClub(newValue);
            }
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner.hide();
            this.initLoginForm();
            this.getAllClubs();
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.joyrideService.startTour({
              steps: ['firstStep', 'secondStep']
            } // Your steps order
            );
          }
        }, {
          key: "initLoginForm",
          value: function initLoginForm() {
            this.loginForm = this.fb.group({
              email: [this.defaultAuth.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])],
              password: [this.defaultAuth.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])]
            });
          }
        }, {
          key: "updateUserClub",
          value: function updateUserClub(club) {
            this._clubService.updateClub(club).subscribe(function (data) {});
          }
        }, {
          key: "showPreviousClubs",
          value: function showPreviousClubs() {
            if (this.isPickerClub == true) {
              this.previous();
            } else {
              this.isPickerClub = false;
              this.noClubFound = false;
              this.showBackBtn = false;
              this.getAllClubs();
            }
          }
        }, {
          key: "previous",
          value: function previous() {
            if (this.page == 0) {
              this.isPickerClub = false;
              this.noClubFound = false;
              this.showBackBtn = false;
              this.getAllClubs();
            } else {
              this.page--;
              this.getDividisClubs();
            }
          }
        }, {
          key: "loginByEmail",
          value: function loginByEmail() {
            var _this21 = this;

            var self = this;

            if (!this._clubService.selectedClub) {
              this.toastr.error('Please Select Club', 'Empty Club');
              return;
            }

            var payload = {
              clubID: this._clubService.selectedClub.id,
              email: this.loginForm.value.email,
              password: this.loginForm.value.password
            };

            if (this._clubService.selectedClub.pickerClub) {
              payload.clubID = this._clubService.selectedClub.pickerModelId;
              payload.pickerClubID = this._clubService.selectedClub.id;
              payload.clubName = this._clubService.selectedClub.clubName;
            }

            this.spinner.show();

            this._authService.loginByEmail(payload).subscribe(function (res) {
              var _a, _b, _c, _d;

              if (!res.hasErrors()) {
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.newUser) {
                  localStorage.setItem('newUser', 'true');
                }

                if ((_b = res.data) === null || _b === void 0 ? void 0 : _b.user.admin) {
                  _this21.spinner.hide();

                  _this21.toastr.success("You are logged in as ".concat(res.data.user.fullName, "."), 'Welcome!');

                  _this21.router.navigateByUrl('/pages/dashboard').then(function (hjh) {});
                } else {
                  _this21.spinner.hide();

                  _this21.toastr.error('Only admins can access this panel.', 'Access Denied!');

                  return;
                }
              } else {
                _this21.spinner.hide();

                if (res.errors) {
                  _this21.toastr.warning((_d = (_c = res === null || res === void 0 ? void 0 : res.errors[0]) === null || _c === void 0 ? void 0 : _c.error) === null || _d === void 0 ? void 0 : _d.message, 'Invalid!');

                  return;
                }
              }
            });
          }
        }, {
          key: "getAllClubs",
          value: function getAllClubs() {
            var _this22 = this;

            if (this.isLoading) return;
            this.isLoading = true;

            this._clubService.getAllClubs(this.page).subscribe(function (res) {
              if (!res.hasErrors()) {
                _this22.allClubs = res.data;
                _this22.tempClubs = res.data;
                console.log(_this22.allClubs);

                if (_this22.allClubs.find(function (club) {
                  var _a;

                  return club.id == ((_a = _this22._clubService.selectedClub) === null || _a === void 0 ? void 0 : _a.id);
                })) {
                  if (_this22.showBackBtn) _this22.onClubSelected(_this22._clubService.selectedClub);
                }
              }

              _this22.isLoading = false;
            }, function (error) {
              _this22.toastr.error(error.message);
            });
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content) {
            this.modalService.open(content, {
              centered: true,
              size: 'lg'
            });
            this.noClubFound = false; // this.searchString = ""

            this.allClubs = this.tempClubs;
          }
        }, {
          key: "searchClub",
          value: function searchClub(searchString) {
            var _this23 = this;

            if (this.isPickerClub) {
              this.showBackBtn = true;

              if (searchString.trim().length == 0 || searchString == "") {
                this.noClubFound = false;
                this.cf.detectChanges();
                return;
              } else {
                this._clubService.searchClubByNameForPicker(searchString, this.offset, this.limit).subscribe(function (res) {
                  if (!res.hasErrors()) {
                    if (res.data.length == 0) {
                      _this23.noClubFound = true;
                      _this23.allClubs = res.data;
                      return;
                    } else if (res.data.length > 0) {
                      res.data.map(function (item) {
                        item.pickerClub = true;
                        item.baseURL = _this23._clubService.selectedClub.baseURL;
                        item.pickerModelId = _this23._clubService.selectedClub.id;
                      });
                      _this23.allClubs = res.data;
                      _this23.noClubFound = false;

                      _this23.cf.detectChanges();
                    }

                    _this23.cf.detectChanges();
                  }
                });
              }
            } else {
              this.showBackBtn = false;

              if (searchString.trim().length == 0 || searchString == "") {
                this.noClubFound = false;
                this.cf.detectChanges();
                return;
              } else {
                this._clubService.searchClubByName(searchString, this.offset, this.limit).subscribe(function (res) {
                  if (!res.hasErrors()) {
                    if (res.data.length == 0 && searchString.trim().length !== 0) {
                      _this23.noClubFound = true;
                      _this23.allClubs = res.data;
                      return;
                    } else if (res.data.length > 0) {
                      _this23.allClubs = res.data;
                      _this23.noClubFound = false;

                      _this23.cf.detectChanges();
                    }

                    _this23.cf.detectChanges();
                  }
                });
              }
            }
          }
        }, {
          key: "onClubSelected",
          value: function onClubSelected(club) {
            if (!club.isPicker) {
              this.isPickerClub = false;
              this.modalService.dismissAll();
            }

            this._clubService.selectedClub = club;
            src_app_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].clubApiUrl = club.baseURL;
            this.isPickerClub = true;

            if (this._clubService.selectedClub.isPicker) {
              this.showBackBtn = true;
              this.getDividisClubs();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
          }
        }, {
          key: "loadMoreClubs",
          value: function loadMoreClubs() {
            this.page++;
            this.getAllClubs();
          }
        }, {
          key: "next",
          value: function next() {
            this.page++;
            this.getDividisClubs();
          }
        }, {
          key: "getDividisClubs",
          value: function getDividisClubs() {
            var _this24 = this;

            this._clubService.getDividisClubs(this.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (res) {
              if (!res.hasErrors()) {
                if (res.data.length == 0) {
                  _this24.allClubs = [];
                  _this24.noClubFound = true;
                  return;
                }

                res.data.map(function (item) {
                  item.pickerClub = true;
                  item.baseURL = _this24._clubService.selectedClub.baseURL;
                  item.pickerModelId = _this24._clubService.selectedClub.id;
                });
                _this24.allClubs = res.data;
                _this24.tempClubs = res.data;
              }
            }, function (error) {
              _this24.toastr.error(error.message);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.complete();
            this.destroy$.unsubscribe();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_club_service__WEBPACK_IMPORTED_MODULE_7__["ClubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["MainAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_joyride__WEBPACK_IMPORTED_MODULE_11__["JoyrideService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])],
        decls: 46,
        vars: 44,
        consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "default", "color", "#fff", "type", "ball-spin", 3, "fullScreen"], [2, "color", "white"], [1, "login-form", "login-signin"], [1, "font-weight-bolder", "font-size-h2", 2, "color", "#000000", "letter-spacing", "1px"], [1, "example-preview"], ["content6", ""], ["data-toggle", "tooltip", "title", "select club before login", 1, "btn", "btn-icon", "btn-light", "w-auto", "btn-clean", "d-inline-flex", "align-items-center", "btn-lg", "px-2", "mr-5", 2, "background-color", "#1e1e2d", 3, "click"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["points", "0 0 24 0 24 24 0 24"], ["d", "M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z", "fill", "#000000", "opacity", "0.3"], ["d", "M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z", "fill", "#000000"], ["joyrideStep", "firstStep", "title", "Select Club", "text", "You need to select club first.", 1, "text-light", "font-weight-bolder", "font-size-base", "mr-3"], ["novalidate", "novalidate", 1, "form", 3, "formGroup", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [4, "ngIf"], ["class", "alert alert-custom alert-white shadow-sm fade show", "role", "alert", 4, "ngIf"], [1, "form-group"], [1, "font-size-h6", "font-weight-bolder", "text-dark"], ["type", "email", "name", "email", "joyrideStep", "secondStep", "title", "Email", "text", "Provide your valid email", "formControlName", "email", "autocomplete", "off", "placeholder", "e.g johndoe@gmail.com", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-between", "mt-n5"], [1, "font-size-h6", "font-weight-bolder", "text-dark", "pt-5"], ["type", "password", "name", "password", "joyrideStep", "thirdStep", "title", "Password", "text", "Provide your valid password", "autocomplete", "off", "formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", 3, "ngClass"], [1, "pb-lg-0", "pb-5"], ["type", "submit", "id", "kt_login_signin_submit", "joyrideStep", "fourthStep", "title", "Sign In", "text", "By clicking this button you'll be redirected to the dashboard screen.", 1, "btn", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-3", 2, "background-color", "#1e1e2d", "color", "#fff", 3, "disabled"], ["formError", ""], [1, "modal-header", "d-flex", "justify-content-between", 2, "background-color", "#1e1e2d", "padding-bottom", "10px"], [1, "form-group", "d-flex", "flex-row", 2, "float", "left"], ["type", "button", "class", "btn", "data-toggle", "tooltip", "title", "back", "style", "margin-left: -15px;", 3, "click", 4, "ngIf"], ["for", "exampleInputEmail1", 1, "font-size-h2", 2, "color", "#fff"], [1, "form-group", "d-flex", "flex-row-reverse", "responsive"], ["type", "button", "data-toggle", "tooltip", "title", "close window", 1, "btn", 3, "click"], [1, "far", "fa-times-circle", 2, "color", "rgba(255, 255, 255, 0.877)"], ["id", "exampleInputEmail1", "placeholder", "search", 1, "form-control", "bg-primary-o-30", 2, "color", "#fff", 3, "formControl"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "d-flex", "justify-content-center"], [1, "media", 2, "height", "600px"], ["class", "custom-height d-flex align-items-center justify-content-center", "style", "width: 100% ", 4, "ngIf"], ["id", "items", 1, "row", "row-cols-1", "row-cols-md-4", "g-4", 2, "cursor", "pointer"], ["class", "col", "id", "items", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [4, "ngIf", "ngIfElse"], ["picker", ""], ["type", "button", "data-toggle", "tooltip", "title", "back", 1, "btn", 2, "margin-left", "-15px", 3, "click"], [1, "far", "fa-arrow-alt-circle-left", 2, "color", "rgba(255, 255, 255, 0.877)"], [1, "custom-height", "d-flex", "align-items-center", "justify-content-center", 2, "width", "100%"], [1, "d-flex", "flex-column-auto", "flex-column"], [1, "text-center"], ["src", "./assets/media/bg/app________app____.jpg", "alt", ""], ["id", "items", 1, "col"], [1, "card", "resp-card", 3, "click"], ["alt", "...", 1, "rounded", "mx-auto", "d-block", "card-img-top", "size", "d-flex", "justify-content-center", 3, "src"], [1, "list-group", "list-group-flush", 2, "width", "100%"], [1, "list-group-item", "d-flex", "justify-content-center", "font-weight-bold", "text-center", 2, "margin", "auto"], ["type", "button", 1, "btn", "btn-light-primary", 3, "click"], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], ["role", "alert", 1, "alert", "alert-custom", "alert-white", "shadow-sm", "fade", "show"], [1, "alert-icon"], ["alt", "...", 1, "rounded", "mx-auto", "d-block", "card-img-top", 2, "width", "70px", "height", "70px", "object-fit", "cover", 3, "src"], [1, "spinner", "spinner-primary", "ml-5"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please wait..");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_template_7_Template, 24, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.openVerticallyCentered(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0\xA0Select club");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
              return ctx.loginByEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_ng_container_20_Template, 4, 0, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 8, 2, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](27, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](28, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](29, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](30, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](36, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](37, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](38, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginComponent_ng_container_42_Template, 2, 0, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, LoginComponent_ng_template_44_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, ctx.selectedClub$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.loginForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c3, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c4, ctx.loginForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.loginForm.controls["password"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c5, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c6, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c7, ctx.loginForm.controls["password"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 24, ctx.isLoading$));
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], ngx_joyride__WEBPACK_IMPORTED_MODULE_11__["JoyrideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #999999;\n}\ndiv.gallery[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: 1px solid #ccc;\n  float: left;\n  width: 180px;\n}\ndiv.gallery[_ngcontent-%COMP%]:hover {\n  border: 1px solid #777;\n}\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\ndiv.desc[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n.col[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.size[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.align[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.responsive[_ngcontent-%COMP%] {\n  float: right;\n  position: absolute;\n  left: 593px;\n}\n.resp-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0.1rem 1rem 0.25rem rgba(0, 0, 0, 0.05);\n}\n@media screen and (max-width: 1600px) {\n  .media[_ngcontent-%COMP%] {\n    height: 400px !important;\n  }\n\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n\n  .custom-height[_ngcontent-%COMP%] {\n    height: 200px !important;\n  }\n}\n@media screen and (max-width: 474px) {\n  .responsive[_ngcontent-%COMP%] {\n    float: right;\n    left: 242px;\n  }\n\n  .resp-card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n\n  .resp-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 175px;\n  }\n}\n.search-results[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.search-results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.row.align-items-center.no-gutters[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBRUo7RUFBSTtJQUNFLFdBQUE7RUFFTjtBQUNGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUEyQix5QkFBQTtBQUMzQjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0Usb0JBQUE7QUFFRjtBQUNBO0VBR0UsWUFBQTtBQUFGO0FBR0E7RUFDQSxtQkFBQTtBQUFBO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsV0FBQTtBQUlwQztBQUZBO0VBQ0MsV0FBQTtFQUFpQixZQUFBO0VBQWMscURBQUE7QUFPaEM7QUFMQTtFQUNFO0lBQ0Usd0JBQUE7RUFRRjs7RUFOQTtJQUNFLGlCQUFBO0VBU0Y7O0VBTkE7SUFDRSx3QkFBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNFO0lBQ0UsWUFBQTtJQUVBLFdBQUE7RUFPRjs7RUFMQTtJQUNFLFdBQUE7SUFBYSxZQUFBO0VBU2Y7O0VBUEE7SUFDRSxZQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQVNGO0FBUEE7RUFDRSxhQUFBO0FBVUY7QUFSQTtFQUNFLGFBQUE7QUFXRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbmRpdi5nYWxsZXJ5OmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuZGl2LmRlc2Mge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29se1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2l6ZXtcclxuICAvLyBoZWlnaHQ6IDgwcHg7XHJcbiAgLy8gd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYWxpZ257XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLnJlc3BvbnNpdmV7XHJcbiAgZmxvYXQ6IHJpZ2h0OyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDU5M3B4O1xyXG59XHJcbi5yZXNwLWNhcmR7XHJcbiB3aWR0aDogMTAwJTsgICAgIGhlaWdodDoxMDAlOyAgYm94LXNoYWRvdzogMCAwLjFyZW0gMXJlbSAwLjI1cmVtIHJnYigwIDAgMCAvIDUlKTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE2MDBweCl7XHJcbiAgLm1lZGlhe1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1hc2lkZSAuYXNpZGUtaW1ne1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWhlaWdodHtcclxuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NHB4KXtcclxuICAucmVzcG9uc2l2ZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI0MnB4O1xyXG4gIH1cclxuICAucmVzcC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJlc3AtY2FyZD5pbWd7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG59XHJcbi5zZWFyY2gtcmVzdWx0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIubm8tZ3V0dGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLy8gLmN1c3RvbS1oZWlnaHR7XHJcbi8vICAgaGVpZ2h0OiA1OTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _core_services_club_service__WEBPACK_IMPORTED_MODULE_7__["ClubService"]
          }, {
            type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["MainAuthService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
          }, {
            type: ngx_joyride__WEBPACK_IMPORTED_MODULE_11__["JoyrideService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8DKb":
    /*!*********************************************************!*\
      !*** ./src/app/modules/auth/logout/logout.component.ts ***!
      \*********************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function DKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(authService) {
          _classCallCheck(this, LogoutComponent);

          this.authService = authService;
          this.authService.logout();
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 2,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NRzN":
    /*!************************************************!*\
      !*** ./src/app/modules/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function NRzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _core_services_club_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../core/services/club.service */
      "wDSB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(_clubService) {
          _classCallCheck(this, AuthComponent);

          this._clubService = _clubService;
          this.today = new Date();
          this.allClubs = [];
          this.page = 1;
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getAllClubs",
          value: function getAllClubs() {
            var _this25 = this;

            this._clubService.getAllClubs(this.page).subscribe(function (res) {
              if (!res.hasErrors()) {
                _this25.allClubs = res.data;

                _this25.setDefaultClub();
              }
            }, function (error) {});
          }
        }, {
          key: "setDefaultClub",
          value: function setDefaultClub() {
            var localClub = this._clubService.selectedClub;

            if (!localClub) {
              this._clubService.selectedClub = this.allClubs[0];
              return;
            }
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_club_service__WEBPACK_IMPORTED_MODULE_1__["ClubService"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 14,
        vars: 0,
        consts: [["id", "kt_login_wrapper", 1, "d-flex", "flex-column", "flex-root", "h-100"], ["id", "kt_login", 1, "login", "login-1", "login-signin-on", "d-flex", "flex-column", "flex-lg-row", "flex-column-fluid", "bg-white"], [1, "login-aside", "d-flex", "flex-column", "flex-row-auto", 2, "background-color", "#1e1e2d"], [1, "d-flex", "flex-column-auto", "flex-column", "pt-lg-40", "pt-15"], ["href", "#", 1, "text-center", "mb-10"], ["src", "./assets/media/logos/icon-dividis.png", "alt", "", 1, "max-h-150px"], [1, "font-weight-bolder", "text-center", "font-size-h1", "display-3", 2, "color", "#ffffff", "letter-spacing", "1px"], [1, "text-muted", "font-weight-bold", "text-muted", "d-block", "d-flex", "justify-content-center", 2, "letter-spacing", "4.5px"], [1, "bg", "aside-img", "d-flex", "flex-row-fluid", "bgi-no-repeat", "bgi-position-y-bottom", "bgi-position-x-center", 2, "background-image", "url('./assets/media/svg/illustrations/login-visual-5.svg')"], [1, "login-content", "flex-row-fluid", "d-flex", "flex-column", "justify-content-center", "position-relative", "overflow-hidden", "p-7", "mx-auto"], [1, "d-flex", "flex-column-fluid", "flex-center"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " D I V I D I S ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Social Media Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n  min-height: 450px;\n}\n.login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: block;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%] {\n  display: none;\n}\n.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 992px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 700px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (max-width: 991.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 400px;\n  }\n}\n@media (max-width: 575.98px) {\n  .login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%] {\n    min-height: 300px !important;\n    background-size: 400px;\n  }\n  .login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n[_nghost-%COMP%] {\n  height: 100%;\n}\n@media (max-width: 1600px) {\n  .bg[_ngcontent-%COMP%] {\n    min-height: 340px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFnZXNcXGxvZ2luXFxsb2dpbi0xLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXV0aC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdRO0VBQ0ksaUJBQUE7QUNWWjtBRGVJOzs7RUFHSSxhQUFBO0FDYlI7QURpQlE7RUFDSSxhQUFBO0FDZlo7QURrQlE7RUFDSSxjQUFBO0FDaEJaO0FEbUJRO0VBQ0ksYUFBQTtBQ2pCWjtBRHNCUTtFQUNJLGNBQUE7QUNwQlo7QUR1QlE7RUFDSSxhQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUFBQTtBQ3RCWjtBRDJCUTtFQUNJLGFBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxhQUFBO0FDMUJaO0FENkJRO0VBQ0ksY0FBQTtBQzNCWjtBQzBCSTtFRlNJO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDL0JWO0VEa0NNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENWO0VEa0NVO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENkO0FBQ0Y7QUN1Q0k7RUZDSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQ3JDVjtBQUNGO0FDa0JJO0VGMkJRO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDMUNkO0FBQ0Y7QUNZSTtFRnNDSTtJQUNJLDRCQUFBO0lBQ0Esc0JBQUE7RUMvQ1Y7RURtRFU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ2pEZDtBQUNGO0FBckVBO0VBQ0UsWUFBQTtBQXVFRjtBQTlEQTtFQUNFO0lBQ0UsNEJBQUE7RUFpRUY7QUFDRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy8gTG9naW4gMVxyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xyXG4vL1xyXG5cclxuXHJcbi8vIEluaXRpYWxpemF0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXMsIG1peGlucyBhbmQgZnVuY3Rpb25zXHJcbkBpbXBvcnQgXCIuLi8uLi9pbml0XCI7XHJcblxyXG4ubG9naW4ubG9naW4tMSB7XHJcbiAgICAubG9naW4tYXNpZGUge1xyXG4gICAgICAgIC5hc2lkZS1pbWcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9ybSBtb2Rlc1xyXG4gICAgLmxvZ2luLXNpZ25pbixcclxuICAgIC5sb2dpbi1zaWdudXAsXHJcbiAgICAubG9naW4tZm9yZ290IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYubG9naW4tc2lnbmluLW9uIHtcclxuICAgICAgICAubG9naW4tc2lnbnVwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1zaWduaW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1mb3Jnb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmxvZ2luLXNpZ251cC1vbiB7XHJcbiAgICAgICAgLmxvZ2luLXNpZ251cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLXNpZ25pbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tZm9yZ290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5sb2dpbi1mb3Jnb3Qtb24ge1xyXG4gICAgICAgIC5sb2dpbi1zaWdudXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLXNpZ25pbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tZm9yZ290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZXNrdG9wIHZpZXdcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgICAgIC5sb2dpbi1hc2lkZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuXHJcbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gVGFibGV0IGFuZCBNb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWJldHdlZW4obGcsIHhsKSB7XHJcbiAgICAubG9naW4ubG9naW4tMSB7XHJcbiAgICAgICAgLmxvZ2luLWFzaWRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUYWJsZXQgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgIC5sb2dpbi5sb2dpbi0xIHtcclxuICAgICAgICAubG9naW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAubG9naW4ubG9naW4tMSB7XHJcbiAgICAgICAgLmFzaWRlLWltZyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5sb2dpbi5sb2dpbi0xIC5sb2dpbi1hc2lkZSAuYXNpZGUtaW1nIHtcbiAgbWluLWhlaWdodDogNDUwcHg7XG59XG4ubG9naW4ubG9naW4tMSAubG9naW4tc2lnbmluLFxuLmxvZ2luLmxvZ2luLTEgLmxvZ2luLXNpZ251cCxcbi5sb2dpbi5sb2dpbi0xIC5sb2dpbi1mb3Jnb3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tc2lnbmluLW9uIC5sb2dpbi1zaWdudXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ2luLmxvZ2luLTEubG9naW4tc2lnbmluLW9uIC5sb2dpbi1zaWduaW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbi5sb2dpbi0xLmxvZ2luLXNpZ25pbi1vbiAubG9naW4tZm9yZ290IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbi5sb2dpbi0xLmxvZ2luLXNpZ251cC1vbiAubG9naW4tc2lnbnVwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1zaWdudXAtb24gLmxvZ2luLXNpZ25pbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1zaWdudXAtb24gLmxvZ2luLWZvcmdvdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1mb3Jnb3Qtb24gLmxvZ2luLXNpZ251cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1mb3Jnb3Qtb24gLmxvZ2luLXNpZ25pbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW4ubG9naW4tMS5sb2dpbi1mb3Jnb3Qtb24gLmxvZ2luLWZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luLmxvZ2luLTEgLmxvZ2luLWFzaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICB9XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG4gIC5sb2dpbi5sb2dpbi0xIC5sb2dpbi1jb250ZW50IC5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgLmxvZ2luLmxvZ2luLTEgLmxvZ2luLWFzaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmxvZ2luLmxvZ2luLTEgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAubG9naW4ubG9naW4tMSAuYXNpZGUtaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XG4gIH1cbiAgLmxvZ2luLmxvZ2luLTEgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmJnIHtcbiAgICBtaW4taGVpZ2h0OiAzNDBweCAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [{
            type: _core_services_club_service__WEBPACK_IMPORTED_MODULE_1__["ClubService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qy8N":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmPasswordValidator */

    /***/
    function Qy8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      var ConfirmPasswordValidator = /*#__PURE__*/function () {
        function ConfirmPasswordValidator() {
          _classCallCheck(this, ConfirmPasswordValidator);
        }

        _createClass(ConfirmPasswordValidator, null, [{
          key: "MatchPassword",
          value:
          /**
           * Check matching password with confirm password
           * @param control AbstractControl
           */
          function MatchPassword(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('cPassword').value;

            if (password !== confirmPassword) {
              control.get('cPassword').setErrors({
                ConfirmPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return ConfirmPasswordValidator;
      }();
      /***/

    },

    /***/
    "SiHH":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/auth/forgot-password/forgot-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function SiHH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/auth.service */
      "+BVi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function ForgotPasswordComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The email detail is incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email is correct!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Message with 'recovery' instruction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " has been sent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ok, got it! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_template_23_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().message;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r6, " ");
        }
      }

      function ForgotPasswordComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_ng_template_23_ng_container_0_Template, 4, 1, "ng-container", 5);
        }

        if (rf & 2) {
          var control_r5 = ctx.control;
          var validation_r7 = ctx.validation;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c2 = function _c2(a2) {
        return {
          validation: "required",
          message: "Email is required",
          control: a2
        };
      };

      var _c3 = function _c3(a2) {
        return {
          validation: "email",
          message: "Email is invalid",
          control: a2
        };
      };

      var _c4 = function _c4(a2) {
        return {
          validation: "minLength",
          message: "Email should have at least 3 symbols",
          control: a2
        };
      };

      var _c5 = function _c5(a2) {
        return {
          validation: "maxLength",
          message: "Email should have maximum 360 symbols",
          control: a2
        };
      };

      var ErrorStates;

      (function (ErrorStates) {
        ErrorStates[ErrorStates["NotSubmitted"] = 0] = "NotSubmitted";
        ErrorStates[ErrorStates["HasError"] = 1] = "HasError";
        ErrorStates[ErrorStates["NoError"] = 2] = "NoError";
      })(ErrorStates || (ErrorStates = {}));

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(fb, authService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.fb = fb;
          this.authService = authService;
          this.errorState = ErrorStates.NotSubmitted;
          this.errorStates = ErrorStates; // private fields

          this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

          this.isLoading$ = this.authService.isLoading$;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.forgotPasswordForm.controls;
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.forgotPasswordForm = this.fb.group({
              email: ['admin@demo.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(320)])]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this26 = this;

            this.errorState = ErrorStates.NotSubmitted;
            var forgotPasswordSubscr = this.authService.forgotPassword(this.f.email.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (result) {
              _this26.errorState = result ? ErrorStates.NoError : ErrorStates.HasError;
            });
            this.unsubscribe.push(forgotPasswordSubscr);
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 25,
        vars: 28,
        consts: [[1, "login-form", "login-forgot"], ["novalidate", "novalidate", "id", "kt_login_forgot_form", 1, "form", "fv-plugins-bootstrap", "fv-plugins-framework", 3, "formGroup", "ngStyle", "ngSubmit"], [1, "pb-13", "pt-lg-0", "pt-5"], [1, "font-weight-bolder", "text-dark", "font-size-h4", "font-size-h1-lg"], [1, "text-muted", "font-weight-bold", "font-size-h4"], [4, "ngIf"], [1, "form-group", "fv-plugins-icon-container", "has-danger"], ["type", "email", "formControlName", "email", "placeholder", "Email", "name", "email", "autocomplete", "off", 1, "form-control", "form-control-solid", "h-auto", "py-7", "px-6", "rounded-lg", "font-size-h6", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-group", "d-flex", "flex-wrap", "pb-lg-0"], ["type", "submit", "id", "kt_login_forgot_submit", 1, "btn", "btn-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3", "mr-4"], ["routerLink", "/auth/login", "id", "kt_login_forgot_cancel", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-h6", "px-8", "py-4", "my-3"], ["formError", ""], [1, "mb-10", "alert", "alert-custom", "alert-light-danger", "alert-dismissible"], [1, "alert-text"], [1, "spinner", "spinner-primary", "ml-5"], [1, "card", "card-custom", "bgi-no-repeat", "gutter-b", 2, "height", "175px", "background-color", "#4ab58e", "background-position", "calc(100% + 1rem) bottom", "background-size", "25% auto", "background-image", "url(assets/media/svg/humans/custom-1.svg)"], [1, "card-body", "d-flex", "align-items-center"], [1, "py-2"], [1, "text-white", "font-weight-bolder", "mb-3"], [1, "text-white", "font-size-lg"], ["routerLink", "/auth/login", 1, "swal2-confirm", "btn", "font-weight-bold", "btn-light-primary"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Forgotten Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your email to reset your password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_ng_container_7_Template, 4, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](10, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPasswordComponent_ng_container_19_Template, 2, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ForgotPasswordComponent_ng_container_22_Template, 13, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForgotPasswordComponent_ng_template_23_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.errorState === ctx.errorStates.NoError ? "none" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorState === ctx.errorStates.HasError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.forgotPasswordForm.controls["email"].invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c5, ctx.forgotPasswordForm.controls["email"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorState === ctx.errorStates.NoError);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUVKO0VBQUk7SUFDRSxXQUFBO0VBRU47QUFDRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZTz/":
    /*!***********************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/select.js ***!
      \***********************************************************/

    /*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _MatSelectBase, matSelectAnimations */

    /***/
    function ZTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function () {
        return MAT_SELECT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
        return MAT_SELECT_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function () {
        return MAT_SELECT_TRIGGER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
        return MatSelect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
        return MatSelectChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
        return MatSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
        return MatSelectTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
        return SELECT_ITEM_HEIGHT_EM;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
        return SELECT_MULTIPLE_PANEL_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
        return SELECT_PANEL_INDENT_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
        return SELECT_PANEL_MAX_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
        return SELECT_PANEL_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
        return SELECT_PANEL_VIEWPORT_PADDING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSelectBase", function () {
        return _MatSelectBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
        return matSelectAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "Ht+U");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The following are all the animations for the mat-select component, with each
       * const containing the metadata for one animation.
       *
       * The values below match the implementation of the AngularJS Material mat-select animation.
       * @docs-private
       */


      var _c0 = ["trigger"];
      var _c1 = ["panel"];

      function MatSelect_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder);
        }
      }

      function MatSelect_span_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
        }
      }

      function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
        }
      }

      function MatSelect_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        }
      }

      function MatSelect_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8._panelDoneAnimatingStream.next($event.toState);
          })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
        }
      }

      var _c2 = [[["mat-select-trigger"]], "*"];
      var _c3 = ["mat-select-trigger", "*"];
      var matSelectAnimations = {
        /**
         * This animation ensures the select's overlay panel animation (transformPanel) is called when
         * closing the select.
         * This is needed due to https://github.com/angular/angular/issues/23302
         */
        transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], {
          optional: true
        }))]),

        /**
         * This animation transforms the select's overlay panel on and off the page.
         *
         * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
         * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
         * side to ensure the option text correctly overlaps the trigger text.
         *
         * When the panel is removed from the DOM, it simply fades out linearly.
         */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          transform: 'scaleY(0.8)',
          minWidth: '100%',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          minWidth: 'calc(100% + 32px)',
          transform: 'scaleY(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          minWidth: 'calc(100% + 64px)',
          transform: 'scaleY(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown when attempting to change a select's `multiple` option
       * after initialization.
       * @docs-private
       */

      function getMatSelectDynamicMultipleError() {
        return Error('Cannot change `multiple` mode of select after initialization.');
      }
      /**
       * Returns an exception to be thrown when attempting to assign a non-array value to a select
       * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
       * resetting the value.
       * @docs-private
       */


      function getMatSelectNonArrayValueError() {
        return Error('Value must be an array in multiple-selection mode.');
      }
      /**
       * Returns an exception to be thrown when assigning a non-function value to the comparator
       * used to determine if a value corresponds to an option. Note that whether the function
       * actually takes two values and returns a boolean is not checked.
       */


      function getMatSelectNonFunctionValueError() {
        return Error('`compareWith` must be a function.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId = 0;
      /**
       * The following style constants are necessary to save here in order
       * to properly calculate the alignment of the selected option over
       * the trigger element.
       */

      /**
       * The max height of the select's overlay panel.
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_PANEL_MAX_HEIGHT = 256;
      /**
       * The panel's padding on the x-axis.
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_PANEL_PADDING_X = 16;
      /**
       * The panel's x axis padding if it is indented (e.g. there is an option group).
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
      /**
       * The height of the select items in `em` units.
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

      /**
       * Distance between the panel edge and the option text in
       * multi-selection mode.
       *
       * Calculated as:
       * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
       * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
       * The checkbox width is 16px.
       *
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
      /**
       * The select panel will only "fit" inside the viewport if it is positioned at
       * this value or more away from the viewport boundary.
       *
       * @deprecated To be turned into a private variable.
       * @breaking-change 12.0.0
       */

      var SELECT_PANEL_VIEWPORT_PADDING = 8;
      /** Injection token that determines the scroll handling while a select is open. */

      var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
      /** @docs-private */

      function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** Injection token that can be used to provide the default options the select module. */


      var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
      /** @docs-private */

      var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_SELECT_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /** Change event object that is emitted when the select value has changed. */

      var MatSelectChange = function MatSelectChange(
      /** Reference to the select that emitted the change event. */
      source,
      /** Current value of the select that emitted the event. */
      value) {
        _classCallCheck(this, MatSelectChange);

        this.source = source;
        this.value = value;
      }; // Boilerplate for applying mixins to MatSelect.

      /** @docs-private */


      var MatSelectBase = function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        _classCallCheck(this, MatSelectBase);

        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
      /**
       * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
       * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSelectTrigger');
      /**
       * Allows the user to customize the trigger that is displayed when the select has a value.
       */

      var MatSelectTrigger = function MatSelectTrigger() {
        _classCallCheck(this, MatSelectTrigger);
      };

      MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
        return new (t || MatSelectTrigger)();
      };

      MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSelectTrigger,
        selectors: [["mat-select-trigger"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SELECT_TRIGGER,
          useExisting: MatSelectTrigger
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-select-trigger',
            providers: [{
              provide: MAT_SELECT_TRIGGER,
              useExisting: MatSelectTrigger
            }]
          }]
        }], null, null);
      })();
      /** Base class with all of the `MatSelect` functionality. */


      var _MatSelectBase = /*#__PURE__*/function (_MatSelectMixinBase2) {
        _inherits(_MatSelectBase, _MatSelectMixinBase2);

        var _super4 = _createSuper(_MatSelectBase);

        function _MatSelectBase(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
          var _this27;

          _classCallCheck(this, _MatSelectBase);

          var _a, _b, _c;

          _this27 = _super4.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this27._viewportRuler = _viewportRuler;
          _this27._changeDetectorRef = _changeDetectorRef;
          _this27._ngZone = _ngZone;
          _this27._dir = _dir;
          _this27._parentFormField = _parentFormField;
          _this27.ngControl = ngControl;
          _this27._liveAnnouncer = _liveAnnouncer;
          _this27._defaultOptions = _defaultOptions;
          /** Whether or not the overlay panel is open. */

          _this27._panelOpen = false;
          /** Comparison function to specify which option is displayed. Defaults to object equality. */

          _this27._compareWith = function (o1, o2) {
            return o1 === o2;
          };
          /** Unique id for this input. */


          _this27._uid = "mat-select-".concat(nextUniqueId++);
          /** Current `ariar-labelledby` value for the select trigger. */

          _this27._triggerAriaLabelledBy = null;
          /** Emits whenever the component is destroyed. */

          _this27._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /** `View -> model callback called when value changes` */

          _this27._onChange = function () {};
          /** `View -> model callback called when select has been touched` */


          _this27._onTouched = function () {};
          /** ID for the DOM node containing the select's value. */


          _this27._valueId = "mat-select-value-".concat(nextUniqueId++);
          /** Emits when the panel element is finished transforming in. */

          _this27._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          _this27._overlayPanelClass = ((_a = _this27._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
          _this27._focused = false;
          /** A name for this control that can be used by `mat-form-field`. */

          _this27.controlType = 'mat-select';
          _this27._required = false;
          _this27._multiple = false;
          _this27._disableOptionCentering = (_c = (_b = _this27._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
          /** Aria label of the select. */

          _this27.ariaLabel = '';
          /** Combined stream of all of the child options' change events. */

          _this27.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(function () {
            var options = _this27.options;

            if (options) {
              return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(function (option) {
                  return option.onSelectionChange;
                })));
              }));
            }

            return _this27._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
              return _this27.optionSelectionChanges;
            }));
          });
          /** Event emitted when the select panel has been toggled. */

          _this27.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event emitted when the select has been opened. */

          _this27._openedStream = _this27.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the select has been closed. */

          _this27._closedStream = _this27.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the selected value has been changed by the user. */

          _this27.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the select changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this27.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

          if (_this27.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this27.ngControl.valueAccessor = _assertThisInitialized(_this27);
          } // Note that we only want to set this when the defaults pass it in, otherwise it should
          // stay as `undefined` so that it falls back to the default in the key manager.


          if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
            _this27._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
          }

          _this27._scrollStrategyFactory = scrollStrategyFactory;
          _this27._scrollStrategy = _this27._scrollStrategyFactory();
          _this27.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

          _this27.id = _this27.id;
          return _this27;
        }
        /** Whether the select is focused. */


        _createClass(_MatSelectBase, [{
          key: "focused",
          get: function get() {
            return this._focused || this._panelOpen;
          }
          /** Placeholder to be shown if no value has been selected. */

        }, {
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether the component is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /** Whether the user should be allowed to select multiple options. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatSelectDynamicMultipleError();
            }

            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /** Whether to center the active option over the trigger. */

        }, {
          key: "disableOptionCentering",
          get: function get() {
            return this._disableOptionCentering;
          },
          set: function set(value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /**
           * Function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatSelectNonFunctionValueError();
            }

            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /** Value of the select control. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            // Always re-assign an array, because it might have been mutated.
            if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
              if (this.options) {
                this._setSelectionByValue(newValue);
              }

              this._value = newValue;
            }
          }
          /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

        }, {
          key: "typeaheadDebounceInterval",
          get: function get() {
            return this._typeaheadDebounceInterval;
          },
          set: function set(value) {
            this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
          }
          /** Unique id of the element. */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
            this.stateChanges.next();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
            this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
            // fire the animation end event twice for the same animation. See:
            // https://github.com/angular/angular/issues/24084

            this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              return _this28._panelDoneAnimating(_this28.panelOpen);
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this29 = this;

            this._initKeyManager();

            this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function (event) {
              event.added.forEach(function (option) {
                return option.select();
              });
              event.removed.forEach(function (option) {
                return option.deselect();
              });
            });

            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              _this29._resetOptions();

              _this29._initializeSelection();
            });
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var newAriaLabelledby = this._getTriggerAriaLabelledby(); // We have to manage setting the `aria-labelledby` ourselves, because part of its value
            // is computed as a result of a content query which can cause this binding to trigger a
            // "changed after checked" error.


            if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
              var element = this._elementRef.nativeElement;
              this._triggerAriaLabelledBy = newAriaLabelledby;

              if (newAriaLabelledby) {
                element.setAttribute('aria-labelledby', newAriaLabelledby);
              } else {
                element.removeAttribute('aria-labelledby');
              }
            }

            if (this.ngControl) {
              this.updateErrorState();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
            // the parent form field know to run change detection when the disabled state changes.
            if (changes['disabled']) {
              this.stateChanges.next();
            }

            if (changes['typeaheadDebounceInterval'] && this._keyManager) {
              this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy.next();

            this._destroy.complete();

            this.stateChanges.complete();
          }
          /** Toggles the overlay panel open or closed. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.panelOpen ? this.close() : this.open();
          }
          /** Opens the overlay panel. */

        }, {
          key: "open",
          value: function open() {
            if (this._canOpen()) {
              this._panelOpen = true;

              this._keyManager.withHorizontalOrientation(null);

              this._highlightCorrectOption();

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Closes the overlay panel and focuses the host element. */

        }, {
          key: "close",
          value: function close() {
            if (this._panelOpen) {
              this._panelOpen = false;

              this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

              this._changeDetectorRef.markForCheck();

              this._onTouched();
            }
          }
          /**
           * Sets the select's value. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param value New value to be written to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Saves a callback function to be invoked when the select's value
           * changes from user input. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the value changes.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /**
           * Saves a callback function to be invoked when the select is blurred
           * by the user. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the component has been touched.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * Disables the select. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param isDisabled Sets whether the component is disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /** Whether or not the overlay panel is open. */

        }, {
          key: "panelOpen",
          get: function get() {
            return this._panelOpen;
          }
          /** The currently selected option. */

        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The value displayed in the trigger. */

        }, {
          key: "triggerValue",
          get: function get() {
            if (this.empty) {
              return '';
            }

            if (this._multiple) {
              var selectedOptions = this._selectionModel.selected.map(function (option) {
                return option.viewValue;
              });

              if (this._isRtl()) {
                selectedOptions.reverse();
              } // TODO(crisbeto): delimiter should be configurable for proper localization.


              return selectedOptions.join(', ');
            }

            return this._selectionModel.selected[0].viewValue;
          }
          /** Whether the element is in RTL mode. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir ? this._dir.value === 'rtl' : false;
          }
          /** Handles all keydown events on the select. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this.disabled) {
              this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
            }
          }
          /** Handles keyboard events while the select is closed. */

        }, {
          key: "_handleClosedKeydown",
          value: function _handleClosedKeydown(event) {
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
            var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
            var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

            if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
              event.preventDefault(); // prevents the page from scrolling down when pressing space

              this.open();
            } else if (!this.multiple) {
              var previouslySelectedOption = this.selected;
              manager.onKeydown(event);
              var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

              if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
              }
            }
          }
          /** Handles keyboard events when the selected is open. */

        }, {
          key: "_handleOpenKeydown",
          value: function _handleOpenKeydown(event) {
            var manager = this._keyManager;
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            var isTyping = manager.isTyping();

            if (isArrowKey && event.altKey) {
              // Close the select on ALT + arrow key to match the native <select>
              event.preventDefault();
              this.close(); // Don't do anything in this case if the user is typing,
              // because the typing sequence can include the space key.
            } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              event.preventDefault();

              manager.activeItem._selectViaInteraction();
            } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
              event.preventDefault();
              var hasDeselectedOptions = this.options.some(function (opt) {
                return !opt.disabled && !opt.selected;
              });
              this.options.forEach(function (option) {
                if (!option.disabled) {
                  hasDeselectedOptions ? option.select() : option.deselect();
                }
              });
            } else {
              var previouslyFocusedIndex = manager.activeItemIndex;
              manager.onKeydown(event);

              if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
              }
            }
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            if (!this.disabled) {
              this._focused = true;
              this.stateChanges.next();
            }
          }
          /**
           * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
           * "blur" to the panel when it opens, causing a false positive.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this._focused = false;

            if (!this.disabled && !this.panelOpen) {
              this._onTouched();

              this._changeDetectorRef.markForCheck();

              this.stateChanges.next();
            }
          }
          /**
           * Callback that is invoked when the overlay panel has been attached.
           */

        }, {
          key: "_onAttached",
          value: function _onAttached() {
            var _this30 = this;

            this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
              _this30._changeDetectorRef.detectChanges();

              _this30._positioningSettled();
            });
          }
          /** Returns the theme to be used on the panel. */

        }, {
          key: "_getPanelTheme",
          value: function _getPanelTheme() {
            return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
          }
          /** Whether the select has a value. */

        }, {
          key: "empty",
          get: function get() {
            return !this._selectionModel || this._selectionModel.isEmpty();
          }
        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this31 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              _this31._setSelectionByValue(_this31.ngControl ? _this31.ngControl.value : _this31._value);

              _this31.stateChanges.next();
            });
          }
          /**
           * Sets the selected option based on a value. If no option can be
           * found with the designated value, the select trigger is cleared.
           */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this32 = this;

            this._selectionModel.selected.forEach(function (option) {
              return option.setInactiveStyles();
            });

            this._selectionModel.clear();

            if (this.multiple && value) {
              if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getMatSelectNonArrayValueError();
              }

              value.forEach(function (currentValue) {
                return _this32._selectValue(currentValue);
              });

              this._sortValues();
            } else {
              var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what option the user interacted with last.


              if (correspondingOption) {
                this._keyManager.updateActiveItem(correspondingOption);
              } else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.updateActiveItem(-1);
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Finds and selects and option based on its value.
           * @returns Option that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this33 = this;

            var correspondingOption = this.options.find(function (option) {
              // Skip options that are already in the model. This allows us to handle cases
              // where the same primitive value is selected multiple times.
              if (_this33._selectionModel.isSelected(option)) {
                return false;
              }

              try {
                // Treat null as a special reset value.
                return option.value != null && _this33._compareWith(option.value, value);
              } catch (error) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                  // Notify developers of errors in their comparator.
                  console.warn(error);
                }

                return false;
              }
            });

            if (correspondingOption) {
              this._selectionModel.select(correspondingOption);
            }

            return correspondingOption;
          }
          /** Sets up a key manager to listen to keyboard events on the overlay panel. */

        }, {
          key: "_initKeyManager",
          value: function _initKeyManager() {
            var _this34 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this34.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!_this34.multiple && _this34._keyManager.activeItem) {
                  _this34._keyManager.activeItem._selectViaInteraction();
                } // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.


                _this34.focus();

                _this34.close();
              }
            });

            this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this34._panelOpen && _this34.panel) {
                _this34._scrollOptionIntoView(_this34._keyManager.activeItemIndex || 0);
              } else if (!_this34._panelOpen && !_this34.multiple && _this34._keyManager.activeItem) {
                _this34._keyManager.activeItem._selectViaInteraction();
              }
            });
          }
          /** Drops current option subscriptions and IDs and resets from scratch. */

        }, {
          key: "_resetOptions",
          value: function _resetOptions() {
            var _this35 = this;

            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
            this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
              _this35._onSelect(event.source, event.isUserInput);

              if (event.isUserInput && !_this35.multiple && _this35._panelOpen) {
                _this35.close();

                _this35.focus();
              }
            }); // Listen to changes in the internal state of the options and react accordingly.
            // Handles cases like the labels of the selected options changing.

            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(function (option) {
              return option._stateChanges;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
              _this35._changeDetectorRef.markForCheck();

              _this35.stateChanges.next();
            });
          }
          /** Invoked when an option is clicked. */

        }, {
          key: "_onSelect",
          value: function _onSelect(option, isUserInput) {
            var wasSelected = this._selectionModel.isSelected(option);

            if (option.value == null && !this._multiple) {
              option.deselect();

              this._selectionModel.clear();

              if (this.value != null) {
                this._propagateChanges(option.value);
              }
            } else {
              if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
              }

              if (isUserInput) {
                this._keyManager.setActiveItem(option);
              }

              if (this.multiple) {
                this._sortValues();

                if (isUserInput) {
                  // In case the user selected the option with their mouse, we
                  // want to restore focus back to the trigger, in order to
                  // prevent the select keyboard controls from clashing with
                  // the ones from `mat-option`.
                  this.focus();
                }
              }
            }

            if (wasSelected !== this._selectionModel.isSelected(option)) {
              this._propagateChanges();
            }

            this.stateChanges.next();
          }
          /** Sorts the selected values in the selected based on their order in the panel. */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this36 = this;

            if (this.multiple) {
              var options = this.options.toArray();

              this._selectionModel.sort(function (a, b) {
                return _this36.sortComparator ? _this36.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
              });

              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (this.multiple) {
              valueToEmit = this.selected.map(function (option) {
                return option.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this.selectionChange.emit(this._getChangeEvent(valueToEmit));

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Highlights the selected item. If no option is selected, it will highlight
           * the first item instead.
           */

        }, {
          key: "_highlightCorrectOption",
          value: function _highlightCorrectOption() {
            if (this._keyManager) {
              if (this.empty) {
                this._keyManager.setFirstItemActive();
              } else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
              }
            }
          }
          /** Whether the panel is allowed to open. */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            var _a;

            return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
          }
          /** Focuses the select element. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Gets the aria-labelledby for the select panel. */

        }, {
          key: "_getPanelAriaLabelledby",
          value: function _getPanelAriaLabelledby() {
            var _a;

            if (this.ariaLabel) {
              return null;
            }

            var labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
            var labelExpression = labelId ? labelId + ' ' : '';
            return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
          }
          /** Determines the `aria-activedescendant` to be set on the host. */

        }, {
          key: "_getAriaActiveDescendant",
          value: function _getAriaActiveDescendant() {
            if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
              return this._keyManager.activeItem.id;
            }

            return null;
          }
          /** Gets the aria-labelledby of the select component trigger. */

        }, {
          key: "_getTriggerAriaLabelledby",
          value: function _getTriggerAriaLabelledby() {
            var _a;

            if (this.ariaLabel) {
              return null;
            }

            var labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
            var value = (labelId ? labelId + ' ' : '') + this._valueId;

            if (this.ariaLabelledby) {
              value += ' ' + this.ariaLabelledby;
            }

            return value;
          }
          /** Called when the overlay panel is done animating. */

        }, {
          key: "_panelDoneAnimating",
          value: function _panelDoneAnimating(isOpen) {
            this.openedChange.emit(isOpen);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
            this.open();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this._panelOpen || !this.empty || this._focused && !!this._placeholder;
          }
        }]);

        return _MatSelectBase;
      }(_MatSelectMixinBase);

      _MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) {
        return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
      };

      _MatSelectBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatSelectBase,
        viewQuery: function _MatSelectBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
          }
        },
        inputs: {
          ariaLabel: ["aria-label", "ariaLabel"],
          id: "id",
          placeholder: "placeholder",
          required: "required",
          multiple: "multiple",
          disableOptionCentering: "disableOptionCentering",
          compareWith: "compareWith",
          value: "value",
          typeaheadDebounceInterval: "typeaheadDebounceInterval",
          panelClass: "panelClass",
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          errorStateMatcher: "errorStateMatcher",
          sortComparator: "sortComparator"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          _closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      _MatSelectBase.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_CONFIG]
          }]
        }];
      };

      _MatSelectBase.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disableOptionCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        typeaheadDebounceInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSelectBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_CONFIG]
            }]
          }];
        }, {
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
          }],
          _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger']
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var MatSelect = /*#__PURE__*/function (_MatSelectBase2) {
        _inherits(MatSelect, _MatSelectBase2);

        var _super5 = _createSuper(MatSelect);

        function MatSelect() {
          var _this37;

          _classCallCheck(this, MatSelect);

          _this37 = _super5.apply(this, arguments);
          /** The scroll position of the overlay panel, calculated to center the selected option. */

          _this37._scrollTop = 0;
          /** The cached font-size of the trigger element. */

          _this37._triggerFontSize = 0;
          /** The value of the select panel's transform-origin property. */

          _this37._transformOrigin = 'top';
          /**
           * The y-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text.
           * when the panel opens. Will change based on the y-position of the selected option.
           */

          _this37._offsetY = 0;
          _this37._positions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'bottom'
          }];
          return _this37;
        }
        /**
         * Calculates the scroll position of the select's overlay panel.
         *
         * Attempts to center the selected option in the panel. If the option is
         * too high or too low in the panel to be scrolled to the center, it clamps the
         * scroll position to the min or max scroll positions respectively.
         */


        _createClass(MatSelect, [{
          key: "_calculateOverlayScroll",
          value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionOffsetFromScrollTop = itemHeight * selectedIndex;
            var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
            // scroll container, then subtracts the scroll buffer to scroll the option down to
            // the center of the overlay panel. Half the option height must be re-added to the
            // scrollTop so the option is centered based on its middle, not its top edge.

            var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
            return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            _get(_getPrototypeOf(MatSelect.prototype), "ngOnInit", this).call(this);

            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this38.panelOpen) {
                _this38._triggerRect = _this38.trigger.nativeElement.getBoundingClientRect();

                _this38._changeDetectorRef.markForCheck();
              }
            });
          }
        }, {
          key: "open",
          value: function open() {
            var _this39 = this;

            if (_get(_getPrototypeOf(MatSelect.prototype), "_canOpen", this).call(this)) {
              _get(_getPrototypeOf(MatSelect.prototype), "open", this).call(this);

              this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
              // `parseInt` ignores the trailing 'px' and converts this to a number.

              this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');

              this._calculateOverlayPosition(); // Set the font size on the panel element once it exists.


              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
                if (_this39._triggerFontSize && _this39.overlayDir.overlayRef && _this39.overlayDir.overlayRef.overlayElement) {
                  _this39.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this39._triggerFontSize, "px");
                }
              });
            }
          }
          /** Scrolls the active option into view. */

        }, {
          key: "_scrollOptionIntoView",
          value: function _scrollOptionIntoView(index) {
            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.options, this.optionGroups);

            var itemHeight = this._getItemHeight();

            this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
          }
        }, {
          key: "_positioningSettled",
          value: function _positioningSettled() {
            this._calculateOverlayOffsetX();

            this.panel.nativeElement.scrollTop = this._scrollTop;
          }
        }, {
          key: "_panelDoneAnimating",
          value: function _panelDoneAnimating(isOpen) {
            if (this.panelOpen) {
              this._scrollTop = 0;
            } else {
              this.overlayDir.offsetX = 0;

              this._changeDetectorRef.markForCheck();
            }

            _get(_getPrototypeOf(MatSelect.prototype), "_panelDoneAnimating", this).call(this, isOpen);
          }
        }, {
          key: "_getChangeEvent",
          value: function _getChangeEvent(value) {
            return new MatSelectChange(this, value);
          }
          /**
           * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text when
           * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
           * can't be calculated until the panel has been attached, because we need to know the
           * content width in order to constrain the panel within the viewport.
           */

        }, {
          key: "_calculateOverlayOffsetX",
          value: function _calculateOverlayOffsetX() {
            var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

            var viewportSize = this._viewportRuler.getViewportSize();

            var isRtl = this._isRtl();

            var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
            var offsetX; // Adjust the offset, depending on the option padding.

            if (this.multiple) {
              offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
            } else if (this.disableOptionCentering) {
              offsetX = SELECT_PANEL_PADDING_X;
            } else {
              var selected = this._selectionModel.selected[0] || this.options.first;
              offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
            } // Invert the offset in LTR.


            if (!isRtl) {
              offsetX *= -1;
            } // Determine how much the select overflows on each side.


            var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
            var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

            if (leftOverflow > 0) {
              offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } else if (rightOverflow > 0) {
              offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } // Set the offset directly in order to avoid having to go through change detection and
            // potentially triggering "changed after it was checked" errors. Round the value to avoid
            // blurry content in some browsers.


            this.overlayDir.offsetX = Math.round(offsetX);
            this.overlayDir.overlayRef.updatePosition();
          }
          /**
           * Calculates the y-offset of the select's overlay panel in relation to the
           * top start corner of the trigger. It has to be adjusted in order for the
           * selected option to be aligned over the trigger when the panel opens.
           */

        }, {
          key: "_calculateOverlayOffsetY",
          value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
            var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

            if (this.disableOptionCentering) {
              return 0;
            }

            if (this._scrollTop === 0) {
              optionOffsetFromPanelTop = selectedIndex * itemHeight;
            } else if (this._scrollTop === maxScroll) {
              var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
              var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
              // portion of it is shown in the viewport and account for it in our offset.

              var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
              // there is always extra padding at the top or bottom of the panel. When
              // scrolled to the very bottom, this padding is at the top of the panel and
              // must be added to the offset.

              optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
            } else {
              // If the option was scrolled to the middle of the panel using a scroll buffer,
              // its offset will be the scroll buffer minus the half height that was added to
              // center it.
              optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
            } // The final offset is the option's offset from the top, adjusted for the height difference,
            // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
            // The value is rounded to prevent some browsers from blurring the content.


            return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
          }
          /**
           * Checks that the attempted overlay position will fit within the viewport.
           * If it will not fit, tries to adjust the scroll position and the associated
           * y-offset so the panel can open fully on-screen. If it still won't fit,
           * sets the offset back to 0 to allow the fallback position to take over.
           */

        }, {
          key: "_checkOverlayWithinViewport",
          value: function _checkOverlayWithinViewport(maxScroll) {
            var itemHeight = this._getItemHeight();

            var viewportSize = this._viewportRuler.getViewportSize();

            var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
            var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
            var panelHeightTop = Math.abs(this._offsetY);
            var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

            if (panelHeightBottom > bottomSpaceAvailable) {
              this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
            } else if (panelHeightTop > topSpaceAvailable) {
              this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
            } else {
              this._transformOrigin = this._getOriginBasedOnOption();
            }
          }
          /** Adjusts the overlay panel up to fit in the viewport. */

        }, {
          key: "_adjustPanelUp",
          value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel up into the viewport.

            this._scrollTop -= distanceBelowViewport;
            this._offsetY -= distanceBelowViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
            // by scrolling, so set the offset to 0 to allow the fallback position to take
            // effect.

            if (this._scrollTop <= 0) {
              this._scrollTop = 0;
              this._offsetY = 0;
              this._transformOrigin = "50% bottom 0px";
            }
          }
          /** Adjusts the overlay panel down to fit in the viewport. */

        }, {
          key: "_adjustPanelDown",
          value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel down into the viewport.

            this._scrollTop += distanceAboveViewport;
            this._offsetY += distanceAboveViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
            // panel by scrolling, so set the offset to 0 to allow the fallback position
            // to take effect.

            if (this._scrollTop >= maxScroll) {
              this._scrollTop = maxScroll;
              this._offsetY = 0;
              this._transformOrigin = "50% top 0px";
              return;
            }
          }
          /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

        }, {
          key: "_calculateOverlayPosition",
          value: function _calculateOverlayPosition() {
            var itemHeight = this._getItemHeight();

            var items = this._getItemCount();

            var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

            var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

            var selectedOptionOffset;

            if (this.empty) {
              selectedOptionOffset = 0;
            } else {
              selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
            }

            selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.

            var scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

            this._checkOverlayWithinViewport(maxScroll);
          }
          /** Sets the transform origin point based on the selected option. */

        }, {
          key: "_getOriginBasedOnOption",
          value: function _getOriginBasedOnOption() {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
            return "50% ".concat(originY, "px 0px");
          }
          /** Calculates the height of the select's options. */

        }, {
          key: "_getItemHeight",
          value: function _getItemHeight() {
            return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
          }
          /** Calculates the amount of items in the select. This includes options and group labels. */

        }, {
          key: "_getItemCount",
          value: function _getItemCount() {
            return this.options.length + this.optionGroups.length;
          }
        }]);

        return MatSelect;
      }(_MatSelectBase);

      MatSelect.ɵfac = function MatSelect_Factory(t) {
        return ɵMatSelect_BaseFactory(t || MatSelect);
      };

      MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatSelect,
        selectors: [["mat-select"]],
        contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
        hostVars: 20,
        hostBindings: function MatSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatSelect_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSelect_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex"
        },
        exportAs: ["matSelect"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatSelect
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c3,
        decls: 9,
        vars: 12,
        consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
        template: function MatSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
              return ctx.close();
            })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
              return ctx._onAttached();
            })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
              return ctx.close();
            });
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._valueId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
          }
        },
        directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"],
        encapsulation: 2,
        data: {
          animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
        },
        changeDetection: 0
      });
      MatSelect.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
            descendants: true
          }]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MAT_SELECT_TRIGGER]
        }]
      };

      var ɵMatSelect_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatSelect);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-select',
            exportAs: 'matSelect',
            template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
              'role': 'combobox',
              'aria-autocomplete': 'none',
              // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
              // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
              // value. At some point we should try to switch it back to being `listbox`.
              'aria-haspopup': 'true',
              'class': 'mat-select',
              '[attr.id]': 'id',
              '[attr.tabindex]': 'tabIndex',
              '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
              '[attr.aria-expanded]': 'panelOpen',
              '[attr.aria-label]': 'ariaLabel || null',
              '[attr.aria-required]': 'required.toString()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
              '[class.mat-select-disabled]': 'disabled',
              '[class.mat-select-invalid]': 'errorState',
              '[class.mat-select-required]': 'required',
              '[class.mat-select-empty]': 'empty',
              '[class.mat-select-multiple]': 'multiple',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()'
            },
            animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
              useExisting: MatSelect
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatSelect
            }],
            styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"]
          }]
        }], null, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }],
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
              descendants: true
            }]
          }],
          customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MAT_SELECT_TRIGGER]
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


      var MatSelectModule = function MatSelectModule() {
        _classCallCheck(this, MatSelectModule);
      };

      MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatSelectModule
      });
      MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatSelectModule_Factory(t) {
          return new (t || MatSelectModule)();
        },
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, {
          declarations: function declarations() {
            return [MatSelect, MatSelectTrigger];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatSelect, MatSelectTrigger],
            providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
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
      //# sourceMappingURL=select.js.map

      /***/

    },

    /***/
    "cMCp":
    /*!*****************************************************!*\
      !*** ./src/app/modules/auth/auth-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function cMCp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "NRzN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "6n5F");
      /* harmony import */


      var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./registration/registration.component */
      "58k3");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "SiHH");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout/logout.component */
      "8DKb");

      var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [{
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
          data: {
            returnUrl: window.location.pathname
          }
        }, {
          path: 'registration',
          component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]
        }, {
          path: 'logout',
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rrsC":
    /*!****************************************************!*\
      !*** ./src/app/modules/auth/_models/user.model.ts ***!
      \****************************************************/

    /*! exports provided: UserModel */

    /***/
    function rrsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModel", function () {
        return UserModel;
      });
      /* harmony import */


      var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.model */
      "LZ44");

      var UserModel = /*#__PURE__*/function (_auth_model__WEBPACK_) {
        _inherits(UserModel, _auth_model__WEBPACK_);

        var _super6 = _createSuper(UserModel);

        function UserModel() {
          _classCallCheck(this, UserModel);

          return _super6.apply(this, arguments);
        }

        _createClass(UserModel, [{
          key: "setUser",
          value: function setUser(user) {
            this.id = user.id;
            this.username = user.username || '';
            this.password = user.password || '';
            this.fullname = user.fullname || '';
            this.email = user.email || '';
            this.pic = user.pic || './assets/media/users/default.jpg';
            this.roles = user.roles || [];
            this.occupation = user.occupation || '';
            this.companyName = user.companyName || '';
            this.phone = user.phone || '';
            this.address = user.address;
            this.socialNetworks = user.socialNetworks;
          }
        }]);

        return UserModel;
      }(_auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-auth-auth-module-es5.c40d141df4cb1df904df.js.map