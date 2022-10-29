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
              To properly filter and show our products based on your personal preferences you might need to adjust your user settings.
              <br/><br/>
              For example here we show our products based on your diet type and allergens, so if you provide one we filter out the results and don't show you what is not appropriate for you.
              <br/><br/>
              By default we show you everything unless specific diet type or allergens are chosen.
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