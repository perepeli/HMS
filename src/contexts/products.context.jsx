import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({ // VALUE
  products: [],
}); 

export const ProductsProvider = ({ children }) => { // PROVIDER
  const [products, setProducts] = useState(PRODUCTS); //  STATE
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};