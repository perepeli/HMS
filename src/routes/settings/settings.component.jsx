import { useContext, useState } from "react";


import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AllergensForm from "../../components/forms/health/health-form.component";

import "./settings.styles.scss";
import LocationForm from "../../components/forms/location/location-form.component";
import MultipleSelect from "../../components/forms/allergens/allergens-form.component";
import PreferencesForm from "../../components/forms/preferences/preferences-form.component";


//import LocationForm from "./forms/location/location-form.component";

const defaultFormFields = {
  height: "",
  weight: "",
  age: "",
};

const Settings = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { age, height, weight } = formFields;
  // ACCORDION
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //////////////////////////////
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    //////////////////////////////
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div
      style={{
        
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Settings</h2>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                General
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >


                <AllergensForm />


            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleAccordionChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Allergens
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >

                <MultipleSelect />


            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleAccordionChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Food preferences
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails>

            <PreferencesForm />

            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleAccordionChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Delivery settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >

                <LocationForm/>

            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Settings;
