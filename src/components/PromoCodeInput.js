import React from 'react';
import '../styles/PromoCodeInput.css';

export const PromoCodeInput = (props) => {

    const changeDiscountState = (inputCode) => {
        var discount = props.promoCodes.filter(discount =>
            discount.code === inputCode.target.value)
        if (discount[0]) {
            props.applyDiscount(discount[0].discountPercentage)
        }else{
            props.applyDiscount(0)
        }
    }


    return (
        <div className="promo-wrapper">
            <div className="promo-box">
                <span className="promo-description">¿Tienes un código promocional?</span>
                <input className="promo-input" placeholder="Código Promocional" onChange={changeDiscountState} />
            </div>
        </div>
    );
}
