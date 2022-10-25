import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.styles.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

function NutritionistsSlider() {
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
          <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NutritionistsSlider;
