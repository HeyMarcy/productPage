import React, { Component } from 'react'
import "./ProductHero.scss";
import PropTypes from 'prop-types'
import heroImage from "../../img/hero-grey.png";
import thumbGrey from "../../img/thumb-grey.png";

export default class ProductHero extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
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
}
