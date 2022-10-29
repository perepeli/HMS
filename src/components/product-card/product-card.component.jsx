import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

import Button from '../button/button.component';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const ProductCard = ({ product }) => {
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
      
      <Button buttonType='inverted' onClick={addProductToCart} style={{border: "1px solid black"}}>Add to card</Button>
    </div>
  );
};

export default ProductCard;