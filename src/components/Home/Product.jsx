import React from 'react'
import "./Product.css"
import {useSelector,useDispatch} from "react-redux";
import { addToCart } from '../../action';
// import {addToCart,removeFromCart} from ".../action/index.js";

const Product = ({title,imgsource,desc,price}) => {
  const basketvalue = useSelector((state) => state.basket);
  const dispatch = useDispatch();
    
    return (
        <div className="product">
            <div className="card">
              <img src={imgsource} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="price">&#x20B9;<span className="price_rate">{price}</span></p>
                <p className="card-text">
                  {desc}
                </p>
                <button onClick={()=> dispatch(addToCart({title:title,imgsource:imgsource,desc:desc,price:price}))} className="addtocartbtn btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
    )
}

export default Product
