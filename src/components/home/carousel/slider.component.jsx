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
            <div className="card-image" style={{ backgroundImage: `url("https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{ backgroundImage: `url("https://i.ibb.co/N9vW0jD/jason-briscoe-5-IGprl-BT5g4-unsplash-2.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{ backgroundImage: `url("https://i.ibb.co/M7ymWDm/mike-san-kw-QXWLNMIQs-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{backgroundImage: `url("https://i.ibb.co/3zvRtmt/maria-lupan-wtux-J9hn2ms-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{backgroundImage: `url("https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{backgroundImage: `url("https://i.ibb.co/Zm1QzQN/fortune-vieyra-8f-EMQyt-M2ik-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{backgroundImage: `url("https://i.ibb.co/N9vW0jD/jason-briscoe-5-IGprl-BT5g4-unsplash-2.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{backgroundImage: `url("https://i.ibb.co/M7ymWDm/mike-san-kw-QXWLNMIQs-unsplash.jpg")`}}>
            </div>
          </div>
          <div>
          <div className="card-image" style={{ backgroundImage: `url("https://i.ibb.co/3zvRtmt/maria-lupan-wtux-J9hn2ms-unsplash.jpg")`}}>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NutritionistsSlider;
