import { useContext, useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

import Sort from "./sort/sort.component";


const Shop = () => {
  const { products } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productsToRender, setProductsToRender] = useState(filteredProducts); //.slice(0, 12));
  const [sortType, setSortType] = useState(0);
  //const [sortLambda, setSortLambda] = useState(() => sort1);

  useEffect(() => {
    const sort0 = (a, b) => (a.id < b.id ? 1 : -1); // id h_l
    const sort1 = (a, b) => (a.id > b.id ? 1 : -1);
    const sort2 = (a, b) => (a.name < b.name ? 1 : -1); // ALPHABETICALLY_HIGH_LOW
    const sort3 = (a, b) => (a.name > b.name ? 1 : -1); // ALPHABETICALLY_LOW_HIGH
    const sort4 = (a, b) => (a.price > b.price ? 1 : -1); // PRICE_HIGH_LOW
    const sort5 = (a, b) => (a.price < b.price ? 1 : -1); // PRICE_LOW_HIGH
    const sort6 = (a, b) => (a.name < b.name ? 1 : -1);
    const sort7 = (a, b) => (a.name > b.name ? 1 : -1);

    const chosenSortType = () => {
      if (sortType === 0) {
        return sort0;
      } else if (sortType === 1) {
        return sort1;
      } else if (sortType === 2) {
        return sort2;
      } else if (sortType === 3) {
        return sort3;
      } else if (sortType === 4) {
        return sort4;
      } else if (sortType === 5) {
        return sort5;
      } else if (sortType === 6) {
        return sort6;
      } else if (sortType === 7) {
        return sort7;
      } else {
        return sort0;
      }
    };
    console.log("SHOULD WORK");
    const sorted = [...filteredProducts].sort(chosenSortType());
    setProductsToRender(sorted);
  }, [sortType]);

  function changeSortType(newSortType) {
    setSortType(newSortType);
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
        <div>
          <Sort stateChanger={changeSortType} />
        </div>
      </div>
      <br />

      <div className="products-container">
        {[
          ...productsToRender.map((product) => (
            <ProductCard key={product.id} product={product} />
          )),
        ]}
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
