import React, { Component } from 'react'
import "./ProductDetails.scss"
import PropTypes from 'prop-types'
import thumbBlush from "../../img/thumb-blush.png";
import thumbMoss from "../../img/thumb-moss.png";
import thumbOrange from "../../img/thumb-orange.png";
import thumbTeal from "../../img/thumb-teal.png";

export default class ProductDetails extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      <div className="product-detail-container" >
        <h4 className="category">MEN&apos;S</h4>
        <h1 className="product-title">Nice T-Shirt</h1>
        <div className="price"><h4>$60.00</h4></div>
        <div className="star-rating">stars go here</div>
        <div className="product-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi urna, accumsan eu mi efficitur, efficitur euismod.</p>
        </div>
        <hr/>
      </div>


      <div className="product-options">
        <div className="options-color">
          <ul>
            <li className="color">
              <button className="color-option-btn">
              <img src={thumbBlush} alt="blush color" />
              </button>
            </li>
 
          </ul>
        </div>
        <div className="options-size">
        <ul>
            <li className="size"><button>S</button></li>
            <li className="size"><button>M</button></li>
            <li className="size"><button>L</button></li>
            <li className="size"><button>XL</button></li>
          </ul>
        </div>
        <hr/>
      </div>

      <div className="product-footer">
        <div className="product-ctas">
          <button className="find-in-store">FIND IN STORE</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <p className="additl-info">International shipping restrictions may apply</p>

      </div>

      </>
    )
  }
}
