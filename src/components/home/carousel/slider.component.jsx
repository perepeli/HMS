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
        <h2> Our Nutritionists </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "5px solid red",
                }}
              />
            </div>
          </div>
          <div>
            <h3>2</h3>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "5px solid red",
                }}
              />
            </div>
          </div>
          <div>
            <h3>3</h3>
            <div className="card-image">
              <img
                src="https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NutritionistsSlider;
