import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import {useSelector,useDispatch} from "react-redux";

const Subtotal = () => {
    const basketvalue = useSelector((state) => state.basket);

    let price=0;
    Array.from(basketvalue).forEach((item,index)=>{
        price += parseInt(item.price)
    })
    return (
        <div className="subtotalcomponent">
           <h3 className="subtotalheader">
               Subtotal ({basketvalue.length} Items) : <span className="subtotal_amount">{price}</span>
           </h3>
           <div className="subtotal_gift">
               <input type="checkbox" /> This order contains gift
           </div>
            <button className="subtotal_btn" type="button">Proceed To Submit</button>
        </div>
    )
}

export default Subtotal
