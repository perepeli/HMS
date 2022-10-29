import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import NutritionistsSlider from "../../components/home/carousel/slider.component";

//backgroundImage: `url(${"https://i.ibb.co/MhSrDMK/eiliv-aceron-w0-Jzq-JZYX-E-unsplash.jpg"})`,

import background from "../../assets/HMS.png"
import MenuGrid from "../../components/home/grid/grid.component";
//https://i.ibb.co/3zvRtmt/maria-lupan-wtux-J9hn2ms-unsplash.jpg old lady
//https://i.ibb.co/W0Z6cNZ/jason-briscoe-5-IGprl-BT5g4-unsplash.jpg cooking guy

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Step 1 ",
      text: "define your goal",
      imageUrl:
      "https://i.ibb.co/GPDZvw4/drew-dizzy-graham-c-TKGZJTMJQU-unsplash.jpg",
    },
    {
      id: 2,
      title: "Step 2 ",
      text: "ask our nutritionists",
      imageUrl:
      "https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg",
    },
    {
      id: 3,
      title: "Step 3 ",
      text: "choose a meal plan",
      imageUrl:
      "https://i.ibb.co/MhSrDMK/eiliv-aceron-w0-Jzq-JZYX-E-unsplash.jpg",
    },
    {
      id: 4,
      title: "Step 4 ",
      text: "subscribe and get delivery",
      imageUrl:
      "https://i.ibb.co/F0FygPD/s-o-c-i-a-l-c-u-t-IW6tro-Ze-S58-unsplash.jpg",
    },
    {
      id: 5,
      title: "Step 5",
      text: "live healthy lifestyle",
      imageUrl:
        "https://i.ibb.co/Rvvr3r0/yilmaz-akin-t-UP-Toi-ZVWc-unsplash.jpg",
    },
  ];

  return (
    <div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "1150px",
          weight: "200px",
          border: "1px solid black",
        }}
      >
      </div>
      <br />
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#F8F8FF",
          borderRadius: "25px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333333" }}>OUR NUTRITIONISTS</h2>
      </div>
      <NutritionistsSlider />
      <br />
      <br />
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#F8F8FF",
          borderRadius: "25px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333333" }}>HOW IT WORKS?</h2>
      </div>
      <Directory categories={categories} />
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#F8F8FF",
          borderRadius: "25px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333333" }}>OUR MENUS</h2>
      </div>
      <div>
        <MenuGrid/>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
