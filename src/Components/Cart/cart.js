import React from 'react';
import './cart.css'

const Cart = (props) => {
    // total price add 
    const { cart } = props;
    const total = cart.reduce((previous, product) => previous + product.price,0);
    // let total = 0;
    // for (const product of cart) {
    //     total=total+ product.price
    // }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = (total + shipping + tax);
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Order: {props.cart.length}</h3>
            <p>Price: {total.toFixed(2)}</p>
            <p>Shipping : $ {shipping.toFixed(2)}</p>
            <p>Tax : $ {tax.toFixed(2)}</p>
            <hr />
            <p>Total : $ { grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;