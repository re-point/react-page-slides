import * as React from "react";
import { ISlideConfig } from "../models/ISlideConfig";
import { ISlidePrallaxConfig } from "../models/ISlidePrallaxConfig";
interface IManualSlidesContainerProps {
    height: number;
    enableAutoScroll: boolean;
    slides: ISlideConfig[];
    parallax: ISlidePrallaxConfig;
    currentSlideIndex?: number;
    onChange?: (index: number) => void;
}
interface IManualSlidesContainerState {
    currentSlideIndex: number;
    scrollTop: number;
}
export declare class ManualSlidesContainer extends React.PureComponent<IManualSlidesContainerProps, IManualSlidesContainerState> {
    static defaultProps: {
        enableAutoScroll: boolean;
        onChange: () => void;
    };
    static isValidSlideIndex(slideIndex: number, props: IManualSlidesContainerProps): boolean;
    state: {
        currentSlideIndex: number;
        scrollTop: number;
    };
    private container;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IManualSlidesContainerProps, prevState: IManualSlidesContainerState): void;
    getHeight(): number;
    renderSlides(): JSX.Element[];
    render(): JSX.Element;
    private getContainerStyle;
}
export {};
