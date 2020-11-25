import * as React from "react";
import { ISlideConfig } from "../models/ISlideConfig";
import { ISlidePrallaxConfig } from "../models/ISlidePrallaxConfig";
interface IAutoSlidesContainerProps {
    height: number;
    transitionSpeed: number;
    slides: ISlideConfig[];
    parallax: ISlidePrallaxConfig;
    currentSlideIndex: number | undefined;
    onChange?: (index: number) => void;
}
interface IAutoSlidesContainerState {
    currentSlideIndex: number;
    userSlideIndex?: number;
}
export declare class AutoSlidesContainer extends React.Component<IAutoSlidesContainerProps, IAutoSlidesContainerState> {
    static defaultProps: {
        transitionSpeed: number;
        onChange: () => void;
    };
    static getDerivedStateFromProps(props: IAutoSlidesContainerProps, state: IAutoSlidesContainerState): {
        currentSlideIndex: number;
        userSlideIndex: number;
    } | null;
    static isValidSlideIndex(slideIndex: number, props: IAutoSlidesContainerProps): boolean;
    state: {
        currentSlideIndex: number;
    };
    private touchStart;
    private block;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IAutoSlidesContainerProps, prevState: IAutoSlidesContainerState): void;
    componentWillUnmount(): void;
    handleMouseWheel: (event: WheelEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    handleTouchStart: (event: TouchEvent) => void;
    handleTouchMove: (event: TouchEvent) => void;
    updateCurrentPage(nextPage: boolean): void;
    getHeight(): number;
    renderSlides(): JSX.Element[];
    getScrollToTop(): number;
    onTransitionEnd: () => void;
    render(): JSX.Element;
    private getContainerStyle;
}
export {};
