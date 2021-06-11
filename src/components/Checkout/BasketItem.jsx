import React from 'react'
import "./BasketItem.css"

import { removeFromCart } from '../../action';
import { useDispatch } from 'react-redux';
const BasketItem = ({data}) => {
    const dispatch = useDispatch();
    return (
        <div className="basket_item">
            <img src={data.imgsource} alt="" className="basket_image" />
            <div className="basket_item_info">
                <h2 className="basket_item_name">{data.title}</h2>
                <p className="basket_item_desc">{data.desc}</p>
                <p className="basket_item_price">&#x20B9;<span className="rate"> {data.price}</span></p>
                <button onClick={()=> dispatch(removeFromCart(data))} className="removeBtn">Remove From Cart</button>
            </div>
        </div>
        
    )
}

export default BasketItem
