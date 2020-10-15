import * as React from "react";
import { SlideParallaxType } from "../models/SlideParallaxType";
import { CSSProperties } from "react";
interface IManualSlideProps {
    scrollTop: number;
    parallaxType: SlideParallaxType;
    parallaxOffset: number;
    isBottom: boolean;
    isCurrent: boolean;
    isTop: boolean;
    height: number;
    style: CSSProperties;
}
export declare class ManualSlideBackground extends React.PureComponent<IManualSlideProps> {
    render(): JSX.Element;
    private getBackgroundStyles;
}
export {};
