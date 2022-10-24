import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import NutritionistsSlider from '../../components/home/carousel/slider.component';


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'food',
      imageUrl: 'https://i.ibb.co/MhSrDMK/eiliv-aceron-w0-Jzq-JZYX-E-unsplash.jpg',
    },
    {
      id: 2,
      title: 'health',
      imageUrl: 'https://i.ibb.co/Rvvr3r0/yilmaz-akin-t-UP-Toi-ZVWc-unsplash.jpg',
    },
    {
      id: 3,
      title: 'beauty',
      imageUrl: 'https://i.ibb.co/GPDZvw4/drew-dizzy-graham-c-TKGZJTMJQU-unsplash.jpg',
    },
    {
      id: 4,
      title: 'nutritionists',
      imageUrl: 'https://i.ibb.co/XxZm8WT/yilmaz-akin-FPKt-Cl74-Hfs-unsplash.jpg',
    },
    {
      id: 5,
      title: 'delivery',
      imageUrl: 'https://i.ibb.co/F0FygPD/s-o-c-i-a-l-c-u-t-IW6tro-Ze-S58-unsplash.jpg',
    },
  ];

  return (
    <div>

      <NutritionistsSlider />
      <br/><br/>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;