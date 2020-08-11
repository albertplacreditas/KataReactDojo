import React, {useState}from 'react';

import '../styles/Item.css';
import { ItemError } from './ItemError';

export const Item = (props) => {

    const [quantity, setQuantity] = useState(0)
    const increment = () => {
        if(props.left > quantity){
            setQuantity(prev => prev + 1);
            props.plusProduct(props.price)
        }
    }

    return (
        <div className="item-wrapper" onClick={increment}>
            <div className="item-name">{props.name}</div>
            <div className="item-price">{props.price}€</div>
            <div className="item-quantity">{quantity}</div>
            {props.left === quantity && <ItemError quantity={quantity}/>}
        </div>
    );
}
