"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSlidesContainer = void 0;
var React = require("react");
var Slide_1 = require("./Slide");
var AutoSlideBackground_1 = require("./AutoSlideBackground");
var AutoSlidesContainer = /** @class */ (function (_super) {
    __extends(AutoSlidesContainer, _super);
    function AutoSlidesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentSlideIndex: 0,
        };
        // private prevWheelDelta = 0;
        _this.block = false;
        _this.handleMouseWheel = function (event) {
            event.preventDefault();
            var delta = -event.deltaY;
            if (!_this.block) {
                // if (
                //   Math.abs(this.prevWheelDelta) < Math.abs(delta) ||
                //   delta % 120 === 0
                // ) {
                _this.updateCurrentPage(delta < 0);
                // }
            }
            // this.prevWheelDelta = delta;
        };
        _this.handleKeyDown = function (event) {
            if (!_this.block) {
                switch (event.key) {
                    case "ArrowUp":
                        _this.updateCurrentPage(false);
                        break;
                    case "ArrowDown":
                        _this.updateCurrentPage(true);
                        break;
                }
            }
        };
        _this.handleTouchStart = function (event) {
            _this.touchStart = event.touches[0].pageY;
        };
        _this.handleTouchMove = function (event) {
            if (!_this.block) {
                var touchDelta = event.touches[0].pageY - _this.touchStart;
                if (Math.abs(touchDelta) > 30) {
                    _this.updateCurrentPage(touchDelta < 0);
                    _this.touchStart = event.touches[0].pageY;
                }
            }
        };
        _this.onTransitionEnd = function () {
            _this.block = false;
        };
        return _this;
    }
    AutoSlidesContainer.getDerivedStateFromProps = function (props, state) {
        if (typeof props.currentSlideIndex !== "undefined" &&
            props.currentSlideIndex !== state.userSlideIndex &&
            AutoSlidesContainer.isValidSlideIndex(props.currentSlideIndex, props)) {
            return {
                currentSlideIndex: props.currentSlideIndex,
                userSlideIndex: props.currentSlideIndex,
            };
        }
        return null;
    };
    AutoSlidesContainer.isValidSlideIndex = function (slideIndex, props) {
        return slideIndex < props.slides.length && slideIndex >= 0;
    };
    AutoSlidesContainer.prototype.componentDidMount = function () {
        window.addEventListener("wheel", this.handleMouseWheel, { passive: false });
        window.addEventListener("DOMMouseScroll", this.handleMouseWheel, {
            passive: false,
        });
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("touchstart", this.handleTouchStart);
        window.addEventListener("touchmove", this.handleTouchMove, {
            passive: false,
        });
    };
    AutoSlidesContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.currentSlideIndex !== this.state.currentSlideIndex) {
            this.props.onChange(this.state.currentSlideIndex);
        }
    };
    AutoSlidesContainer.prototype.componentWillUnmount = function () {
        window.removeEventListener("wheel", this.handleMouseWheel);
        window.removeEventListener("DOMMouseScroll", this.handleMouseWheel);
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("touchstart", this.handleTouchStart);
        window.removeEventListener("touchmove", this.handleTouchMove);
    };
    AutoSlidesContainer.prototype.updateCurrentPage = function (nextPage) {
        var currentSlideIndex = (nextPage ? 1 : -1) + this.state.currentSlideIndex;
        if (AutoSlidesContainer.isValidSlideIndex(currentSlideIndex, this.props)) {
            this.setState({
                currentSlideIndex: currentSlideIndex,
            });
            this.block = true;
        }
    };
    AutoSlidesContainer.prototype.getHeight = function () {
        return this.props.height;
    };
    AutoSlidesContainer.prototype.renderSlides = function () {
        var _this = this;
        var height = this.getHeight();
        return this.props.slides.map(function (props, index) {
            var isCurrent = index === _this.state.currentSlideIndex;
            var isBottom = index > _this.state.currentSlideIndex;
            var isTop = index < _this.state.currentSlideIndex;
            return (React.createElement(Slide_1.Slide, { height: height, key: index },
                React.createElement(AutoSlideBackground_1.AutoSlideBackground, { transitionSpeed: _this.props.transitionSpeed, parallaxType: _this.props.parallax.type, parallaxOffset: _this.props.parallax.offset, isBottom: isBottom, isCurrent: isCurrent, isTop: isTop, height: _this.getHeight(), style: props.style }),
                props.content));
        });
    };
    AutoSlidesContainer.prototype.getScrollToTop = function () {
        return this.state.currentSlideIndex * this.getHeight() * -1;
    };
    AutoSlidesContainer.prototype.render = function () {
        return (React.createElement("div", { style: this.getContainerStyle(), onTransitionEnd: this.onTransitionEnd }, this.renderSlides()));
    };
    AutoSlidesContainer.prototype.getContainerStyle = function () {
        var scrollToTop = this.getScrollToTop();
        return {
            height: "100%",
            position: "relative",
            touchAction: "none",
            padding: 0,
            margin: 0,
            transform: "translate3d(0px, " + scrollToTop + "px, 0px)",
            transition: "all " + this.props.transitionSpeed + "ms ease",
        };
    };
    AutoSlidesContainer.defaultProps = {
        transitionSpeed: 2000,
        onChange: function () { },
    };
    return AutoSlidesContainer;
}(React.Component));
exports.AutoSlidesContainer = AutoSlidesContainer;
//# sourceMappingURL=AutoSlidesContainer.js.map