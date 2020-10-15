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
exports.Slide = void 0;
var React = require("react");
var Slide = /** @class */ (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slide.prototype.render = function () {
        return (React.createElement("div", { className: "rps-slide", style: this.getSliderStyles() },
            React.createElement("div", { className: "rps-slide__inner-container", style: this.getSlideInnerContainerStyles() }, this.props.children)));
    };
    Slide.prototype.getHeight = function () {
        return this.props.height;
    };
    Slide.prototype.getSliderStyles = function () {
        return {
            height: this.getHeight() + "px",
            position: "relative",
            width: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
        };
    };
    Slide.prototype.getSlideInnerContainerStyles = function () {
        return {
            height: this.getHeight() + "px",
            position: "relative",
            width: "100%",
            overflow: "hidden",
        };
    };
    return Slide;
}(React.PureComponent));
exports.Slide = Slide;
//# sourceMappingURL=Slide.js.map