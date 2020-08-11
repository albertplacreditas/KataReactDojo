import React from 'react';
import '../styles/CheckoutSummary.css';
import { PromoCodeInput } from './PromoCodeInput';

export const CheckoutSummary = (props) => {

    var amountDiscount = props.totalPrice * (props.discount / 100)
    var totalPriceWithDiscount = props.totalPrice - amountDiscount

    return (
        <div className="summary-wrapper">
            <div className="summary-box">
                <PromoCodeInput promoCodes={props.promoCodes} applyDiscount={props.applyDiscount} />
                <div className="summary-title">
                    Resumen pedido
                </div>
                <hr />
                <div className="summary-info">
                    <div className="summary-products">
                        Total Productos <span className="summary-number">{props.totalProducts}</span>
                    </div>
                    <div className="summary-price">
                        Total <span className="summary-number">{props.totalPrice}€</span>
                    </div>
                    <div className="summary-products">
                        Descuento Promo <span className="summary-discount">({props.discount}%)</span>
                    </div>
                    <div className="summary-products">
                        Descuento total <span className="summary-discount">-{amountDiscount}€</span>
                    </div>
                    <div className="summary-products">
                        Total con Descuento Promo <span className="summary-discount">{totalPriceWithDiscount}€</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
