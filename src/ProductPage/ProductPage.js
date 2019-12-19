import React from 'react'
import "./ProductPage.scss";
import ProductHero from './ProductHero/ProductHero'
import ProductDetails from './ProductDetails/ProductDetails'

const ProductPage = ({products}) => 
  <div className="product-container">
      <ProductHero/>
      { products.map((product, i) =>
      <ProductDetails key={i} {...product} />)
      }
      
  </div>
    
  

export default ProductPage
