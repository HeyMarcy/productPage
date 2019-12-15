import React, { Component } from 'react'
import PropTypes from 'prop-types'
import heroImage from "../../img/hero-grey.png";

export default class ProductHero extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <img src={heroImage} className="heroImage" alt="Nice T-shirt, Grey" />
      </div>
    )
  }
}
