import React, { Component } from 'react'
import "./ProductPage.scss";
import ProductHero from './ProductHero/ProductHero'
import ProductDetails from './ProductDetails/ProductDetails'

class ProductPage extends Component {
  render() {
    return (
      <div className="product-container">
           <ProductHero/>
          <ProductDetails />
      </div>
    )
  }
}

export default ProductPage
