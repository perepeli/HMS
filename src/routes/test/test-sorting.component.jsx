import { Button } from "@mui/material";
import * as React from "react";

import { useContext, useState, useEffect } from "react";
import Sort from "./sort.component";

const arrayToSort = [
  {
    id: 1,
    name: "b",
  },
  {
    id: 2,
    name: "a",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "e",
  },
  {
    id: 5,
    name: "d",
  },
];

export default function TestSorting({ stateChanger }) {
  const [arr, setArr] = React.useState(arrayToSort);
  const [arrToShow, setArrToShow] = React.useState(arr);
  const [sortType, setSortType] = React.useState(0);

  useEffect(() => {
    console.log(sortType);

    const sort0 = (a, b) => (a.id < b.id ? 1 : -1); // ID HIGH_LOW
    const sort1 = (a, b) => (a.id > b.id ? 1 : -1); // ID LOW_HIGH
    const sort2 = (a, b) => (a.name < b.name ? 1 : -1); // NAME HIGHT_LOW
    const sort3 = (a, b) => (a.name > b.name ? 1 : -1); // NAME LOW_HIGH

    const chosenSortType = () => { // HAS NO ACCESS TO SORT_TYPE FROM CHILD?
        if(sortType === 0) {
            console.log("SORT 0")
            return sort0;
        } else if (sortType === 1) {
            console.log("SORT 1")
            return sort1;
        } else if (sortType === 2) {
            console.log("SORT 2")
            return sort2;
        } else {
            console.log("SORT 3")
            return sort3;
        }
    }

    console.log(chosenSortType())

    const sorted = [...arr].sort(chosenSortType());
    setArrToShow(sorted);

  }, [sortType]);

  const handleChange = (event) => {
    setSortType(0);
  };
  const handleChange1 = (event) => {
    setSortType(1);
  };

  const handleChange2 = (event) => {
    setSortType(2);
  };

  const handleChange3 = (event) => {
    setSortType(3);
  };

  function changeSortType(newValue) {
    "PARENT_SET_STATE"
    setSortType(newValue);
  }

  return (
    <div>
      <Button onClick={handleChange}>SORT_0</Button>
      <Button onClick={handleChange1}>SORT_1</Button>
      <Button onClick={handleChange2}>SORT_2</Button>
      <Button onClick={handleChange3}>SORT_3</Button>
      <div>
          <Sort stateChanger={changeSortType} />
        </div>
      {[
        ...arrToShow.map((product) => (
          <h1>
            {product.id} {product.name}
          </h1>
        )),
      ]}
    </div>
  );
}
