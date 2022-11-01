import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from "../../button/button.component";
import { Grid } from "@mui/material";
import { CartContext } from "../../../contexts/cart.context";

import "../product-cart.styles.scss";

const defaultFormFields = {
    billingWillOccur: "Tuesday",
    subscriptionWeeks: "1",
  };

export default function AddMenuToCartButton({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = React.useContext(CartContext);

    const [formFields, setFormFields] = React.useState(defaultFormFields); // STATE
    const { billingWillOccur, subscriptionWeeks } = formFields; // DESTRUCTURED STATE

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const addProductToCart = () => {
    addItemToCart(product)
    setOpen(false);
    };


  return (
    <div>
      <Button buttonType="inverted" onClick={handleClickOpen}>
        Add to cart
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
        sx={{width: "100%", height: "90%"}}
      >
        <DialogTitle id="alert-dialog-title">
          {"Configure Your Subscription"}
        </DialogTitle>
        <DialogContent sx={{}}>
            <form onSubmit={handleSubmit}>
                
                

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >                     {/* ADD TO CART BUTTON FORM */}
                <div style={{border: "1px solid black", width: "500px" , height: "500px", backgroundImage: `url(${imageUrl})`, backgroundSize: "100% 100%"}}></div>
                {/* FORM */}
                

                <div style={{ width: "300px" , height: "500px"}}>
                    <h5> {name} </h5>
                    <span> Price: 65$/week -</span>
                    <span> Calories: 2000/day</span>
                    <br/><br/>
                    <span>Number of Weeks Of Subscription : </span>
                    <br/><br/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"># of weeks</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="subscriptionWeeks"
                            value={formFields.subscriptionWeeks}
                            label="# of Weeks"
                            onChange={handleChange}
                            defaultValue={"1"}
                        >
                            <MenuItem value={"1"}>1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                            <MenuItem value={"4"}>4</MenuItem>
                            <MenuItem value={"8"}>8</MenuItem>
                            <MenuItem value={"16"}>16</MenuItem>
                            <MenuItem value={"32"}>32</MenuItem>
                            <MenuItem value={"52"}>52</MenuItem>
                            <MenuItem value={"Ongoing"}>Ongoing</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                    <br/><br/>
                    <span>Billing will occur every week on : </span>
                    <br/><br/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">billing day</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="weeks"
                            value={formFields.billingWillOccur}
                            label="billing day"
                            onChange={handleChange}
                            defaultValue={"Tuesday"}
                        >
                            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                        </Select>
                        </FormControl>
                    </Box>
                </div>

            </Grid>
          </form>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={addProductToCart} autoFocus>
            ADD TO CART
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}