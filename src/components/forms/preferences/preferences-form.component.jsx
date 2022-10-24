import { useContext, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Button from "../../button/button.component";

import "./preferences-form.styles.scss";

const PreferencesForm = () => {
  const [preference, setPreference] = useState("anything");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleChange = (event) => {
    setPreference(event.target.value);
  };

  return (
    <div>
      <div
        className="settings-container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{ m: 1, width: 400, display: "flex", justifyContent: "center", margin: "30px", padding: "10px"}}
          >
            <FormLabel id="demo-radio-buttons-group-label">Diet type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={preference}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="anything"
                control={<Radio />}
                label="Anything"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  margin: "5px"
                }}
              >
                Excludes: Nothing
              </span>
              <FormControlLabel
                value="Keto"
                control={<Radio />}
                label="Keto"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                }}
              >
                Excludes: Grains, Legumes, Starchy Vegetables
              </span>
              <FormControlLabel
                value="vegeterian"
                control={<Radio />}
                label="Vegeterian"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  margin: "5px"
                }}
              >
                Excludes: Red Meat, Poultry, Fish, Shellfish
              </span>
              <FormControlLabel
                value="vegan"
                control={<Radio />}
                label="Vegan"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  margin: "5px"
                }}
              >
                Excludes: Red Meat, Poultry, Fish, Shellfish, Dairy, Eggs, Mayo, Honey
              </span>
              <FormControlLabel
                value="paleo"
                control={<Radio />}
                label="Paleo"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  margin: "5px"
                }}
              >
                Excludes: Grains, Legumes, Starchy Vegetables
              </span>
              <FormControlLabel
                value="mediterranean"
                control={<Radio />}
                label="Mediterranean"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  margin: "5px"
                }}
              >
                Excludes: Red Meat, Fruit juice, Starchy Vegetables
              </span>
            </RadioGroup>
          </FormControl>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="submit">Update</Button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesForm;
