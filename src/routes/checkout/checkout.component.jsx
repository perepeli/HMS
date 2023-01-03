import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import './checkout.styles.scss'
import Button from '../../components/button/button.component';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext); 

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
            <div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <div><span className='total'>Total: ${cartTotal}</span></div>
                {/*<div style={{display: "flex", justifyContent: "space-between",}}>
                        <div><span className='total'>Total: ${cartTotal}</span></div>
                        <Button>CHECKOUT</Button>
                        <PaymentForm/>
                        <Total>Total: ${cardTotal}</Total>
                    </div>
                    */}
                {(cartItems.length > 0) && 
                <PaymentForm/>
                    
                } 
                
                
            </div>
        </div>
    )
}

export default Checkout;