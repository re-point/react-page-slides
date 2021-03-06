import * as React from "react";
import { AutoSlidesContainer } from "./AutoSlidesContainer";
import { ManualSlidesContainer } from "./ManualSlidesContainer";
import { ISlideConfig } from "../models/ISlideConfig";
import { ISlidePrallaxConfig } from "../models/ISlidePrallaxConfig";

interface IPageSlidesProps {
  enableAutoScroll: boolean;
  transitionSpeed: number;
  parallax: ISlidePrallaxConfig;
  slides: ISlideConfig[];
  currentSlideIndex?: number;
  onChange?: (index: number) => void;
}

interface IPageSlidesState {
  height: number;
}

export class PageSlides extends React.Component<
  IPageSlidesProps,
  IPageSlidesState
> {
  static defaultProps = {
    enableAutoScroll: true,
    transitionSpeed: 1000,
  };

  public state = {
    height: this.getHeight(),
  };

  componentDidMount() {
    this.onResize();
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({ height: this.getHeight() });
  };

  getHeight() {
    if (typeof window !== `undefined`) {
      return window.innerHeight;
    }

    if (typeof document !== `undefined`) {
      return (
        document.documentElement.clientHeight || document.body.clientHeight
      );
    }

    return 0;
  }

  render() {
    if (this.props.enableAutoScroll) {
      return (
        <AutoSlidesContainer
          slides={this.props.slides}
          height={this.state.height}
          parallax={this.props.parallax}
          transitionSpeed={this.props.transitionSpeed}
          currentSlideIndex={this.props.currentSlideIndex}
          onChange={this.props.onChange}
        />
      );
    } else {
      return (
        <ManualSlidesContainer
          slides={this.props.slides}
          height={this.state.height}
          parallax={this.props.parallax}
          currentSlideIndex={this.props.currentSlideIndex}
          onChange={this.props.onChange}
        />
      );
    }
  }
}
