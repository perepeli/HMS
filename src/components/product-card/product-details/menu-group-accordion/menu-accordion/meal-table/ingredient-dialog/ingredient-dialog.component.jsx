import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import IngredientTable from './ingredient-table/ingredient-table.component';

export default function IngredientDialog() {
    const [open, setOpen] = React.useState(false);

    const ingredietsInfoButton = (
        <IconButton aria-label="settings">
            <InfoIcon />
        </IconButton>
      );
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
  
    return (
      <div >
        <IconButton aria-label="settings" onClick={handleClickOpen}>
            <InfoIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "900px",  // Set your width here
              },
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Meal Ingredients"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

            </DialogContentText>
            <IngredientTable />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }