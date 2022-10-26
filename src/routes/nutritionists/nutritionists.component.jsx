import { useContext, useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./nutritionists.styles.scss";
import { NutritionistsContext } from "../../contexts/nutritionists.context";
import ProductCard from "../../components/product-card/product-card.component";

const Nutritionists = () => {
  const { nutritionists } = useContext(NutritionistsContext);

  const [filteredNutritionists, setFilteredNutritionists] = useState(nutritionists);
  const [nutritionistsToRender, setNutritionistsToRender] = useState(filteredNutritionists); //.slice(0, 12));
  const [sortType, setSortType] = useState(0);

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
        <div>NUTRITIONISTS</div>
        <div></div>
      </div>
      <br />

      <div className="nutritionists-container">
        {[
          ...nutritionistsToRender.map((nutritionist) => (
            <ProductCard key={nutritionist.id} product={nutritionist} />
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

export default Nutritionists;
