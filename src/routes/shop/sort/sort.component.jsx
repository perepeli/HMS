import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TuneIcon from '@mui/icons-material/Tune';

import { useContext } from "react";

export default function Sort({ stateChanger }) {
  const [open, setOpen] = React.useState(false);
  const [filterType, setFilterType] = React.useState(0);

  const handleChange = (event) => {
    stateChanger(event.target.value || 0);
    setFilterType(Number(event.target.value) || 0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <span style={{fontSize: "14px"}}>SORT ORDER</span>
        <TuneIcon/>
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Sort Menus</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Sort</InputLabel>
              <Select
                native
                value={filterType}
                onChange={handleChange}
                input={<OutlinedInput label="Sort" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={0}>Featured</option>
                <option value={1}>Best selling</option>
                <option value={2}>Alphabetically A-Z</option>
                <option value={3}>Alphabetically Z-A</option>
                <option value={4}>Price: High to low</option>
                <option value={5}>Price: Low to high</option>
                <option value={6}>Date: New to old</option>
                <option value={7}>Date: Old to new</option>
              </Select>
            </FormControl>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
