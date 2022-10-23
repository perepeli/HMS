import { useContext } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div style={{
        
        padding: "50px 0px 90px 0px",
        display: "flex",
        justifyContent: "center",
      }}> 
        <Stack spacing={2}>
          <Pagination count={10}  />
        </Stack>
      </div>
    </div>
    
  );
};

export default Shop;