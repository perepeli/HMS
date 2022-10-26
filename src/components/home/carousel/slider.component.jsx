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
                src="https://i.ibb.co/WpFMmVM/julia-rekamie-Z72-Yujn-Orl-Y-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
            <div className="card-image">
              <img
                src="https://i.ibb.co/Vm5vM7z/spencer-davis-0-Sh-Ts8i-PY28-unsplash.jpg"
                className="card-image-content"
              />
            </div>
          </div>
          <div>
            <div className="card-image">
              <img
                src="https://i.ibb.co/KF7WJc1/jakob-owens-7t-MKyu-V-9yo-unsplash.jpg"
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
