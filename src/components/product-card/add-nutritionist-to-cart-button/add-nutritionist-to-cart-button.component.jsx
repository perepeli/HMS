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
    serviceType: "Menu Suggestion/Creation",
    contactYouOn: "Tuesday",
  };

export default function AddNutritionistToCartButton({ product }) {
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
                <div style={{border: "1px solid black", width: "400px" , height: "500px", backgroundImage: `url(${imageUrl})`, backgroundSize: "100% 100%"}}></div>
                {/* FORM */}
                

                <div style={{ width: "300px" , height: "500px"}}>
                    <h5> {name} </h5>
                    <span> Our nutritionists will guide you to your goal </span>

                    <br/><br/>
                    <span>Type of Service : </span>
                    <br/><br/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">type of service</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="serviceType"
                            value={formFields.serviceType}
                            label="type of service"
                            onChange={handleChange}
                            defaultValue={"Menu Suggestion/Creation"}
                        >
                            <MenuItem value={"Menu Suggestion/Creation"}>Menu Suggestion/Creation</MenuItem>
                            <MenuItem value={"Consultation"}>Consultation only</MenuItem>
                            
                        </Select>
                        </FormControl>
                    </Box>
                    <br/><br/>
                    <span>Contact you on : </span>
                    <br/><br/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">day to contact you</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="contactYouOn"
                            value={formFields.contactYouOn}
                            label="day to contact you"
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