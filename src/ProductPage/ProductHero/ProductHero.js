import React from 'react'
import "./ProductHero.scss";
import heroImage from "../../img/hero-grey.png";
import thumbGrey from "../../img/thumb-grey.png";

const ProductHero = () => {
  return (
    <div className="product-hero">
      <img src={heroImage} className="heroImage" alt="Nice T-shirt, Grey" />
      <div className="options-hero">
        <ul className="button-list">
          <li >
            <button >
              <img src={thumbGrey} alt="options" />
            </button>
          </li>
          <li >
            <button >
              <img src={thumbGrey} alt="options" />
            </button>
          </li>
          <li >
            <button >
              <img src={thumbGrey} alt="options" />
            </button>
          </li>
          <li >
            <button >
              <img src={thumbGrey} alt="options" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default ProductHero