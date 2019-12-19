import React from 'react'
import "./ProductDetails.scss"
import { ColorSelects, SizeSelects } from "./Selects"
const ProductDetails = ({
  category,
  title,
  rating,
  price,
  description,
  colors,
  sizes,
  shippingInfo
}) => 

    <section className="product-details">

      <div>
        <h4 className="category">{category}</h4>
        <h1 className="product-title">{title}</h1>
        <h4>${price}</h4>
        <div className="note">**stars go here**</div>
        <p>{description}</p>
        <hr/>
      </div>

      <div className="product-options">
        <ColorSelects colors={colors} />
        <SizeSelects sizes={sizes} />
        <hr/>
      </div>

      <div className="product-footer">
        <div className="product-ctas">
        <button className="cta">ADD TO CART</button>
          <button className="cta secondary">FIND IN STORE</button>
        </div>
        <p className="additl-info">{shippingInfo}&nbsp;<span className="icon">i</span></p>
      </div>

    </section>


export default ProductDetails
