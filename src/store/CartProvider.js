import React from 'react';
import CartContext from './cart-context';

function CartProvider(props) {
    const addItemToCarthandler = item => {};

    const removeItemFromCartHandler = id =>{};

    const cartContext = {
        items:[],
        totalAmount: 0,
        addItem: addItemToCarthandler,
        removeItem:removeItemFromCartHandler
    };

    return (
        <div>
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider;
