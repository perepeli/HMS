import { useContext, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

import Sort from "./sort/sort.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const [productsToRender, setProductsToRender] = useState(products);

  const [sortType, setSortType] = useState(0); // FILTERING TYPE INT

  console.log(sortType)

  const sortLambda = () => {
    switch (sortType) {
      case 0:
        return (a, b) => (a.itemM > b.itemM ? 1 : -1);
        break;
      case 1: 
        return (a, b) => (a.itemM < b.itemM ? 1 : -1);
        break;
      case 2: 
        return (a, b) => (a.itemM > b.itemM ? 1 : -1);
        break;
      case 3: 
        return (a, b) => (a.itemM < b.itemM ? 1 : -1);
        break;

      default:
        return (a, b) => (a.itemM < b.itemM ? 1 : -1);
        break;
    }
  }
  

  const changeSortType = (newSortType) => { // WORKS ONLY 1 TIME????
    setSortType(newSortType);
    //setProductsToRender([...products.sort((a, b) => (a.itemM > b.itemM ? 1 : -1))]); // USED TO WORK
    setProductsToRender([...products.sort((a, b) => (a.itemM > b.itemM ? 1 : -1))]);
    console.log(productsToRender);
  }

  return (
    <div>
      <div
        style={{
          padding: "0px 0px 0px 0px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
        }}
      >
        <div>MENUS</div>
        <div><Sort stateChanger={changeSortType} /></div>
      </div>
      <br />

      <div className="products-container">
        {
        productsToRender
                .sort(sortLambda())
                .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div
        style={{
          padding: "50px 0px 90px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </div>
    </div>
  );
};

export default Shop;
