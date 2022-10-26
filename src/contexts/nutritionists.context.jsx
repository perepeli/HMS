import { createContext, useState } from "react";

import PRODUCTS from "../nutritionists-data.json";




export const NutritionistsContext = createContext({ // VALUE
  nutritionists: [],
});


export const NutritionistsProvider = ({ children }) => { // PROVIDER
  const [nutritionists, setNutritionists] = useState(PRODUCTS); //  STATE
  const value = { nutritionists, setNutritionists };
  return (
    <NutritionistsContext.Provider value={value}>
      {children}
    </NutritionistsContext.Provider>
  );
};
