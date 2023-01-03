import { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import './payment-form.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { currentUser } = useContext(UserContext);
    const { cartItems, cartTotal } = useContext(CartContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(false);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: cartTotal * 100 })
        }).then(res => res.json());

        console.log(response);

        const { paymentIntent: { client_secret }} = response;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        if(paymentResult.error) {
            alert('Payment Successful'); //alert(paymentResult.error);

            cartItems = []; // RESET CART
            
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    }

    return (
        <div className="payment-form-container">
            <div className=".form-container">
                <form onSubmit={paymentHandler}>
                <h2>Credit card payment: </h2>
                    <CardElement />
                    <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
                </form>
                
            </div>
            
        </div>
    )
}

export default PaymentForm;