import React from 'react'
import "./ProductDetails.scss"
import thumbBlush from "../../img/thumb-blush.png";
import thumbMoss from "../../img/thumb-moss.png";
import thumbOrange from "../../img/thumb-orange.png";
import thumbTeal from "../../img/thumb-teal.png";

const ProductDetails= () => {
  return (
    <section className="product-details">

      <div>
        <h4 className="category">MEN&#39;S</h4>
        <h1 className="product-title">Nice T-Shirt</h1>
        <h4>$60.00</h4>
        <div className="note">**stars go here**</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi urna, accumsan eu mi efficitur, efficitur euismod.</p>
  
        <hr/>
      </div>

      <article className="product-options">
        <div>
          <h4 className="option-title">Select Color</h4>
          <ul className="button-list">
            <li >
              <button >
                <img src={thumbBlush} alt="options" />
              </button>
            </li>
            <li >
              <button >
                <img src={thumbTeal} alt="options" />
              </button>
            </li>
            <li >
              <button >
                <img src={thumbMoss} alt="options" />
              </button>
            </li>
            <li >
              <button >
                <img src={thumbOrange} alt="options" />
              </button>
            </li>
          </ul>
        </div>
        <div>
        <h4 className="option-title">Select Size</h4>
        <ul className="button-list">
            <li >
              <button><span>S</span></button>
            </li>
            <li >
              <button ><span>M</span></button>
            </li>
            <li >
              <button ><span>L</span></button>
            </li>
            <li >
              <button ><span>XL</span></button>
            </li>
          </ul>
        </div>
        <hr/>
      </article>

      <div className="product-footer">
        <div className="product-ctas">
        <button className="cta">ADD TO CART</button>
          <button className="cta secondary">FIND IN STORE</button>
        </div>
        <p className="additl-info">International shipping restrictions may apply&nbsp;<span className="note">info icon goes here</span></p>
      </div>

    </section>
  )
}

export default ProductDetails
