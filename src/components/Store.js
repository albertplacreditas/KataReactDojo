import React, { useState } from 'react';
import '../styles/Store.css';
import { ItemList } from './ItemList';
import { CheckoutSummary } from './CheckoutSummary';

export const Store = (props) => {

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)

    const [discount, setDiscount] = useState(0)

    const plusProduct = (price) => {
        setTotalProducts(prev => prev + 1);
        setTotalPrice(prev => prev + price);
        applyDiscount(discount)
    }

    const applyDiscount = (percentageDiscount) => {
        setDiscount(percentageDiscount)
    }



    return (
        <div className="store-wrapper">
            <div className="store-name">¡Bienvenido a mi tienda online!</div>
            <div>
                <ItemList catalog={props.catalog} plusProduct={plusProduct} />
            </div>
            <CheckoutSummary
                promoCodes={props.promoCodes}
                totalPrice={totalPrice}
                totalProducts={totalProducts}
                applyDiscount={applyDiscount}
                discount={discount}/>
        </div>
    )
}
