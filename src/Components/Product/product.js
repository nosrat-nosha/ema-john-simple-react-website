import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';


const Product = (props) => {
    // console.log(props)
    // distructure 
    const { name, img, price, stock, seller } = props.product;
    // const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="">
            <h4 className="product-name">{name}</h4>
           <p><small>By:{seller}</small> </p>
                <p> Price : $ {price}</p>
                <p><small>only {stock} left in stock-order soon</small> </p>
                <button
                    //    data send to evenHAndalar 
                    onClick={()=>props.handleAddToCart(props.product)}
                    className="regular-btn">
                    {/* {cartIcon} */}
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;