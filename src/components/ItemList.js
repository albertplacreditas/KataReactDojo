import React from 'react';
import '../styles/ItemList.css';
import {Item} from './Item'

export const ItemList = (props) => (
    <div className="list-wrapper">
        {props.catalog.map((item) => 
        <Item key={item.name} 
        name={item.name} 
        price={item.price} 
        left={item.left} 
        plusProduct={props.plusProduct}/>)}
    </div>
);
