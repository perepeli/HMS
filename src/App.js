import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Settings from './routes/settings/settings.component';
import FAQ from './routes/faq/faq.component';
import HowItWorks from './routes/how-it-works/how-it-works.component';
import RewardsProgram from './routes/rewards-program/rewards-program.component';
import ContactUs from './routes/contact-us/contact-us.component';

import TestSorting from './routes/test/test-sorting.component';
import Nutritionists from './routes/nutritionists/nutritionists.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='nutritionists' element={<Nutritionists />} />
        <Route path='auth' element={<Authentication />} />

        <Route path='how-it-works' element={<HowItWorks />} />
        <Route path='rewards-program' element={<RewardsProgram />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='contact-us' element={<ContactUs />} />

        <Route path='settings' element={<Settings />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
