import React from 'react'

export const CardLeftImage = ({imgName }) => {
  const address = `src/assets/${imgName}`
  return (
    <div>
      <img src={address}></img>
    </div>
  )
}
