import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './product-cart.styles.scss';

import Button from '../button/button.component';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AddNutritionistToCartButton from './add-nutritionist-to-cart-button/add-nutritionist-to-cart-button.component';




const NutritionistCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const [rating, setRating] = useState(2);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container' style={{}}>
      <div style={{float: "none"}}></div>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer' >
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      
      
      
      <div className='nutritionist-div' style={{ width: "40%"}}>
        <AddNutritionistToCartButton product={product} /> {/* ADD TO CART BUTTON */}
      </div>
      
    </div>
  );
};

export default NutritionistCard;