import React from 'react'

const Card = ({imgSrc}) => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Card