import React from 'react'

const SizeButtonList = (obj, key=0) => {
  return (
  <li>
    <button><span>{obj[key]}</span></button>
  </li>
  )
}

const ColorButtonList = (obj, key=0, value=1) => {
  return (
  <li>
    <button>
    <img src={obj[value]} alt={obj[key]} />
    </button>
  </li>
  )
}

export const SizeSelects = (sizes) => {
  const getSizeList = () =>{
    sizes.map((size, i) => {
      const currentSize = Object.keys({...size})
      return(<SizeButtonList key={i} size={currentSize} />)
    })
  }
  return (
    <>
      <h4 className="option-title">Select Size</h4>
      <ul className="button-list">{getSizeList}</ul>
    </>
  )
}

export const ColorSelects = ({colors}) => {
  const getColorList = () =>{
    colors.map((color, i) => {
      const productColor = Object.keys({...color})
      return(<ColorButtonList key={i} color={productColor} />)
    })
  }
  return (
    <>
      <h4 className="option-title">Select Color</h4>
        <ul className="button-list">
          {getColorList}
        </ul>
    </>
  )
}