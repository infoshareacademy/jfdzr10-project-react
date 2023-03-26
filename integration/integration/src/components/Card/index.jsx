import React from 'react'
import {CardLeft} from '../CardLeft'
import {CardRight} from '../CardRight'

export const Card = ({data}) => {
  return (
    <div>
      <CardLeft data={data}/>
      <CardRight/>
    </div>
  )
}
