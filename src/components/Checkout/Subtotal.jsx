import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
const Subtotal = () => {
    return (
        <div className="subtotalcomponent">
           <h3 className="subtotalheader">
               Subtotal (0 Items) : <span className="subtotal_amount">10</span>
           </h3>
           <div className="subtotal_gift">
               <input type="checkbox" /> This order contains gift
           </div>
            <button className="subtotal_btn" type="button">Proceed To Submit</button>
        </div>
    )
}

export default Subtotal
