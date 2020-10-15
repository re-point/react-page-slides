import * as React from "react";
import { CSSProperties } from "react";
import { SlideParallaxType } from "../models/SlideParallaxType";
interface IAutoSlideBackgroundProps {
    transitionSpeed: number;
    parallaxType: SlideParallaxType;
    parallaxOffset: number;
    isBottom: boolean;
    isCurrent: boolean;
    isTop: boolean;
    height: number;
    style: CSSProperties;
}
export declare class AutoSlideBackground extends React.PureComponent<IAutoSlideBackgroundProps> {
    render(): JSX.Element;
    private getBackgroundStyles;
}
export {};
