import React, { useState, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import Back from "../../assets/icons/Back";
import Next from "../../assets/icons/Next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slider relative">
      <Slider {...settings} ref={sliderRef}>
        <div className="slider1 slider-all">
          <div className="div_descript-slide relative">
            <div
              className="descript-slider absolute "
        
            >
              <h3 className="text-[30px] font-bold">Simple 1</h3>
              <h2 className="text-[45px] font-bold  py-[15px]">
                Example Classiso
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                voluptatum praesentium, labore libero eveniet quibusdam porro
                reiciendis velit mollitia, repellat numquam et iusto perferendis
                id, vero neque assumenda iste cupiditate!
              </p>
            </div>
          </div>
        </div>
        <div className="slider2 slider-all">
          <div className="div_descript-slide relative">
            <div
              className="descript-slider absolute "
          
            >
              <h3 className="text-[30px] font-bold">Simple 2</h3>
              <h2 className="text-[45px] font-bold  py-[15px]">
                Example Classiso 2
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                voluptatum praesentium, labore libero eveniet quibusdam porro
                reiciendis velit mollitia, repellat numquam et iusto perferendis
                id, vero neque assumenda iste cupiditate!
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <div className="absolute arrow-slider">
        <button disabled={currentSlide === 0} onClick={handlePrev}>
          <Back></Back>
        </button>
        <button disabled={currentSlide === 2} onClick={handleNext}>
          <Next></Next>
        </button>
      </div>
    </div>
  );
};

export default Banner;
