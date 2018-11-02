import * as React from 'react';
import './ManualSlidesContainer.css';
import {ManualSlide} from './ManualSlide';
import {ISlideConfig} from "../models/ISlideConfig";

interface IManualSlidesContainerProps {
    height: number;
    enableAutoScroll: boolean;
    slides: ISlideConfig[];
}

interface IManualSlidesContainerState {
    scrollToTop: number;
    currentSlideIndex: number;
    transition: boolean;
    scrollTop: number,
    block: boolean;
}

export class ManualSlidesContainer extends React.PureComponent<IManualSlidesContainerProps, IManualSlidesContainerState> {
    static defaultProps = {
        enableAutoScroll: false
    };

    public state = {
        scrollToTop: 0,
        currentSlideIndex: 0,
        transition: false,
        scrollTop: 0,
        block: false
    };

    private container: HTMLDivElement;


    componentDidMount() {
        this.container.addEventListener('scroll', (event) => {
            const target = event.target as HTMLDivElement;
            if (!this.props.enableAutoScroll && target) {
                const currentSlideIndex = Math.ceil(target.scrollTop / this.getHeight());
                const scrollTop = target.scrollTop % this.getHeight();
                if (this.state.currentSlideIndex !== currentSlideIndex) {
                    this.setState({
                        scrollTop,
                        currentSlideIndex
                    });
                } else {
                    this.setState({
                        scrollTop
                    });
                }
            }
        });
    }

    getHeight() {
        return this.props.height;
    }

    renderSlides() {
        const height = this.getHeight();
        return this.props.slides.map((props, index) => {
            const isCurrent = index === this.state.currentSlideIndex;
            const isBottom = index > this.state.currentSlideIndex;
            return (
                <ManualSlide
                    {...props}
                    isCurrent={isCurrent}
                    scrollTop={isCurrent ? this.state.scrollTop : 0}
                    height={height}
                    isBottom={isBottom}
                    key={index}
                />
            );
        });
    }

    getContainerStyle() {
        const height = this.getHeight();
        return {
            height: `${height}px`,
        };
    }

    render() {
        return (
            <div className="rps-manual-slides-container"
                 style={this.getContainerStyle()}
                 ref={(ref: HTMLDivElement) => {
                     this.container = ref
                 }}
            >
                {this.renderSlides()}
            </div>
        )
    }
}