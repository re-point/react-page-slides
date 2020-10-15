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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSlideBackground = void 0;
var React = require("react");
var SlideParallaxType_1 = require("../models/SlideParallaxType");
var AutoSlideBackground = /** @class */ (function (_super) {
    __extends(AutoSlideBackground, _super);
    function AutoSlideBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoSlideBackground.prototype.render = function () {
        return (React.createElement("div", { className: "rps-slide-background", style: this.getBackgroundStyles() }));
    };
    AutoSlideBackground.prototype.getBackgroundStyles = function () {
        var translateY = 0;
        var _a = this.props, height = _a.height, parallaxType = _a.parallaxType, parallaxOffset = _a.parallaxOffset;
        if (this.props.isBottom && parallaxType === SlideParallaxType_1.SlideParallaxType.reveal) {
            translateY = -1 * parallaxOffset * height;
        }
        if (this.props.isTop && parallaxType === SlideParallaxType_1.SlideParallaxType.cover) {
            translateY = parallaxOffset * height;
        }
        var styles = __assign(__assign({ backgroundSize: "cover" }, this.props.style), { margin: 0, padding: 0, backfaceVisibility: "hidden", height: height + "px", width: "100%", transform: "translateX(0px) translateY(" + translateY + "px)", position: "absolute", top: 0, left: 0, zIndex: -1 });
        if (this.props.isCurrent ||
            (this.props.isBottom && parallaxType === SlideParallaxType_1.SlideParallaxType.reveal) ||
            (this.props.isTop && parallaxType === SlideParallaxType_1.SlideParallaxType.cover)) {
            styles = __assign(__assign({}, styles), { transition: "all " + this.props.transitionSpeed + "ms ease" });
        }
        return styles;
    };
    return AutoSlideBackground;
}(React.PureComponent));
exports.AutoSlideBackground = AutoSlideBackground;
//# sourceMappingURL=AutoSlideBackground.js.map