import React, { Component, MouseEventHandler } from "react";
import heroSlider1 from "../assets/svgs/heroSlider1.svg";
import explore1 from "../assets/svgs/explore1.svg";
import explore2 from "../assets/svgs/explore2.svg";
import arrowNextBlue from "../assets/svgs/arrowNextBlue.svg";
import arrowNextWhite from "../assets/svgs/arrowNextWhite.svg";
import arrowPrev from "../assets/svgs/arrowPrev.svg";
import longArrow from "../assets/svgs/longArrow.svg";
import Slider from "react-slick";

import '../Styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  className?: string;
  style?: {};
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
function NextArrowBlue(props: Props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={arrowNextBlue} className="arrowNextBlue" alt="" />
    </div>
  );
}
function NextArrowWhite(props: Props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={arrowNextWhite} className="arrowNextWhite" alt="" />
    </div>
  );
}

function PrevArrow(props: Props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={arrowPrev} alt="" className="arrowPrev" />
    </div>
  );
}

export class CarouselLayout2 extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      centerMode: false,
      slidesToShow: 1.95,
      slidesToScroll: 1,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      swipe: true,
      nextArrow: <NextArrowWhite />
    };
    return (
      <div className="carousel2">
        <Slider {...settings}>
          <div className="slider-item2">
            <img src={explore1} alt="" />
            <div className="textOnImg">
              <h2>COST EFFECTIVENESS</h2>
              <p>Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers
                additional benefits. Save cost, gain value.</p>
              <img src={longArrow} alt="" />
            </div>
          </div>
          <div className="slider-item2">
            <img src={explore2} alt="" />
            <div className="textOnImg">
              <h2>FLEXIBILITY</h2>
              <p>Determine just what you need for your business and pay for it. Avoid cost for extra space you will not use. You can grow at your own pace.</p>
              <img src={longArrow} alt="" />
            </div>
            <div className="textOnImg">
              <h2>COST EFFECTIVENESS</h2>
              <p>Eliminate the cost of hardware and serial maintenance. Focus on infrastructure that delivers
                additional benefits. Save cost, gain value.</p>
              <img src={longArrow} alt="" />
            </div>
          </div>
          <div className="slider-item2">
            <img src={explore2} alt="" />
            <div className="textOnImg">
              <h2>FLEXIBILITY</h2>
              <p>Determine just what you need for your business and pay for it. Avoid cost for extra space you will not use. You can grow at your own pace.</p>
              <img src={longArrow} alt="" />
            </div>
          </div>
          {/* <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div> */}
        </Slider>
      </div>
    );
  }
}

export class CarouselLayout1 extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1.7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      swipe: true,
      nextArrow: <NextArrowBlue />,
      prevArrow: <PrevArrow />
      // dotsClass: "custom-dots"
    };
    return (
      <div className="carousel1">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
          <div className="slider-item">
            <img src={heroSlider1} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}




// export {
//   CarouselLayout1,
//   CarouselLayout2
// }
