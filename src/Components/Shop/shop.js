import React, { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Product from '../Product/product';
import './shop.css';

const Shop = () => {
    //state
    const [products, setProducts] = useState([]);
    // change state by clicked 
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    // Add evenHandelar 
    const handleAddToCart = (product) => {
        // copy 
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container"> 
            <div className="product-container">
                
                {/* map  */}
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                    
                        handleAddToCart={handleAddToCart}
                    >
                        
                        </Product>)
                }
           </div>
            <div className="product-cart">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;