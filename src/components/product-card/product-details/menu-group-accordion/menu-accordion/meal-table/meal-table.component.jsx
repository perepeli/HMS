import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import IngredientDialog from "./ingredient-dialog/ingredient-dialog.component";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Dish 1", 159, 6.0, 24, 4.0),
  createData("Dish 2", 237, 9.0, 37, 4.3),
  createData("Dish 3", 262, 16.0, 24, 6.0),
  createData("Subtotal:", 700, 100, 233, 190),
];

export default function MealTable() {

    const ingredietsInfoButton = (
        <IngredientDialog/>
      );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Dish</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Calories&nbsp;</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.name !== "Subtotal:" && ingredietsInfoButton}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
