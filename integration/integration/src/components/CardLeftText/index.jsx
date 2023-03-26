import React from 'react'

export const CardLeftText = ({item}) => {
  return (
    <>
      <p>{item.company}</p>
      <p></p>
      <div>
        <span></span>        
        <span>{item.contract}</span>
        <span></span>
      </div>
    </>
  )
}
