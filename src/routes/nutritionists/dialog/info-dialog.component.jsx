import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton>
            <InfoIcon color="inherit" fontSize="small" style={{height: "15px"}} onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Filter based on your user settings"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              To properly filter and show our nutritionists based on your personal preferences you might need to adjust your user settings.
              <br/><br/>
              For example here we show our professionals based on your chosen diet type, so we show you professionals who have experience with your diet type if one is chosen.
              <br/><br/>
              By default we show you every nutritionist unless specific diet type is chosen to filter our results.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }