import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    <hr height="4px"/>

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
