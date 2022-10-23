import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "../../button/button.component";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultAllergens = [
  "Gluten",
  "Peanuts",
  "Eggs",
  "Fish",
  "Tree Nuts",
  "Dairy",
  "Soy",
  "Shellfish",
];

function getStyles(name, userAllergens, theme) {
  return {
    fontWeight:
      userAllergens.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AllergensForm() {
  const theme = useTheme();
  const [allergens, setAllergens] = React.useState([]);

  //console.log(allergens);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(allergens);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllergens(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <span>Exclude your allergens: </span>
        <FormControl
          sx={{ m: 1, width: 300, display: "flex", justifyContent: "center" }}
        >
          <InputLabel id="demo-multiple-name-label">Exclude</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={allergens}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {defaultAllergens.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, allergens, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0px 0px 0px"
          }}
        >
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}
