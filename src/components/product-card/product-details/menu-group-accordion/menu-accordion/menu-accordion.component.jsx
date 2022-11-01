import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import MealTable from "./meal-table/meal-table.component";
import TotalTable from "./total-table/total-table.component";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .09)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function MenuAccordion() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div style={{}}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <div style={{ width: "80%" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              xs={{
                width: "50px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>BREAKFAST</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MealTable />
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ width: "80%" }}>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              xs={{
                width: "50px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>DINNER</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MealTable />
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ width: "80%" }}>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              xs={{
                width: "50px",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>SUPPER</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MealTable />
              </AccordionDetails>
            </Accordion>
          </div>
          <div
            style={{ width: "80%", display: "flex", justifyContent: "center" }}
          >
            <TotalTable />
          </div>
        </Grid>
      </div>
    </div>
  );
}
