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
exports.ManualSlidesContainer = void 0;
var React = require("react");
var Slide_1 = require("./Slide");
var ManualSlideBackground_1 = require("./ManualSlideBackground");
var ManualSlidesContainer = /** @class */ (function (_super) {
    __extends(ManualSlidesContainer, _super);
    function ManualSlidesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentSlideIndex: 0,
            scrollTop: 0,
        };
        return _this;
    }
    ManualSlidesContainer.isValidSlideIndex = function (slideIndex, props) {
        return slideIndex < props.slides.length && slideIndex >= 0;
    };
    ManualSlidesContainer.prototype.componentDidMount = function () {
        var _this = this;
        this.container.addEventListener("scroll", function (event) {
            var target = event.target;
            if (!_this.props.enableAutoScroll && target) {
                var currentSlideIndex = Math.ceil(target.scrollTop / _this.getHeight());
                var scrollTop = target.scrollTop % _this.getHeight();
                if (_this.state.currentSlideIndex !== currentSlideIndex) {
                    _this.setState({
                        scrollTop: scrollTop,
                        currentSlideIndex: currentSlideIndex,
                    });
                }
                else {
                    _this.setState({
                        scrollTop: scrollTop,
                    });
                }
            }
        });
    };
    ManualSlidesContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.currentSlideIndex !== this.state.currentSlideIndex) {
            this.props.onChange(this.state.currentSlideIndex);
        }
        if (typeof this.props.currentSlideIndex !== "undefined" &&
            this.props.currentSlideIndex !== prevProps.currentSlideIndex &&
            ManualSlidesContainer.isValidSlideIndex(this.props.currentSlideIndex, this.props)) {
            this.container.scrollTop =
                this.getHeight() * this.props.currentSlideIndex;
        }
    };
    ManualSlidesContainer.prototype.getHeight = function () {
        return this.props.height;
    };
    ManualSlidesContainer.prototype.renderSlides = function () {
        var _this = this;
        var height = this.getHeight();
        return this.props.slides.map(function (props, index) {
            var isCurrent = index === _this.state.currentSlideIndex;
            var isBottom = index > _this.state.currentSlideIndex;
            var isTop = index < _this.state.currentSlideIndex;
            return (React.createElement(Slide_1.Slide, { height: height, key: index },
                React.createElement(ManualSlideBackground_1.ManualSlideBackground, { scrollTop: isCurrent || isTop ? _this.state.scrollTop : 0, parallaxType: _this.props.parallax.type, parallaxOffset: _this.props.parallax.offset, isBottom: isBottom, isCurrent: isCurrent, isTop: isTop, height: _this.getHeight(), style: props.style }),
                props.content));
        });
    };
    ManualSlidesContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: this.getContainerStyle(), ref: function (ref) {
                _this.container = ref;
            } }, this.renderSlides()));
    };
    ManualSlidesContainer.prototype.getContainerStyle = function () {
        var height = this.getHeight();
        return {
            height: height + "px",
            position: "relative",
            touchAction: "none",
            padding: 0,
            margin: 0,
            transform: "translate3d(0px, 0px, 0px)",
            transition: "none 0s ease 0s",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch",
        };
    };
    ManualSlidesContainer.defaultProps = {
        enableAutoScroll: false,
        onChange: function () { },
    };
    return ManualSlidesContainer;
}(React.PureComponent));
exports.ManualSlidesContainer = ManualSlidesContainer;
//# sourceMappingURL=ManualSlidesContainer.js.map