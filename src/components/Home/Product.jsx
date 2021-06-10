import React from 'react'
import "./Product.css"
const Product = ({title,imgsource,desc,price}) => {
    return (
        <div className="product">
            <div className="card">
              <img src={imgsource} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6></h6>
                <p className="price">&#x20B9;<span className="price_rate">{price}</span></p>
                <p className="card-text">
                  {desc}
                </p>
                <button className="addtocartbtn btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
    )
}

export default Product
