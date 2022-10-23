import { useContext, useState } from "react";

//import FormInput from "../../../components/form-input/form-input.component";

import FormInput from "../../form-input/form-input.component";

import Button from "../../button/button.component";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import "./health-form.styles.scss";
import { SnowshoeingOutlined } from "@mui/icons-material";

const defaultFormFields = {
  age: "",
  height: "",
  weight: "",
  sex: 0,
  activity: 0,
  goal: 0,
};

const marks = [
  {
    value: 0,
    label: "No",
  },
  {
    value: 1,
    label: "Light",
  },
  {
    value: 2,
    label: "Moderate",
  },
  {
    value: 3,
    label: "Hard",
  },
  {
    value: 4,
    label: "Extreme",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const HealthForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); // STATE
  const { age, height, weight, sex, activity, goal } = formFields; // DESTRUCTURED STATE

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  const handleChange = (event) => {
    setFormFields((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
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
          <span>Your physical profile: </span>
          <FormInput
            label="Age"
            type="number"
            required
            onChange={handleChange}
            name="age"
            value={age}
          />
          <FormInput
            label="Height"
            type="number"
            required
            onChange={handleChange}
            name="height"
            value={height}
          />
          <FormInput
            label="Weight"
            type="number"
            required
            onChange={handleChange}
            name="weight"
            value={weight}
          />
          <span>Biological sex: </span>
          <br />
          <br />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sex</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="sex"
                value={formFields.sex}
                label="Sex"
                onChange={handleChange}
                defaultValue={0}
              >
                <MenuItem value={0}>Male</MenuItem>
                <MenuItem value={1}>Female</MenuItem>
                <MenuItem value={2}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <br />
          <span>Physical activity: </span>
          <div
            style={{
              padding: "20px 0px 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Custom marks"
                max={4}
                defaultValue={0}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                name="activity"
                onChange={handleChange}
              />
            </Box>
          </div>
          <span>Your goal: </span>
          <br/><br/>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Goal</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="goal"
                value={formFields.goal}
                label="Goal"
                onChange={handleChange}
                defaultValue={0}
              >
                <MenuItem value={0}>Maintain weight</MenuItem>
                <MenuItem value={1}>Lose fat</MenuItem>
                <MenuItem value={2}>Build muscles</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;
