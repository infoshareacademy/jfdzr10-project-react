import React from 'react'
import {CardLeftImage} from '../CardLeftImage'
import {CardLeftText} from '../CardLeftText'

export const CardLeft = ({data}) => {
  console.log(data)
  return (
    <div>
        <CardLeftImage key={data.id+'i'} imgName={data.logo.split('/')[2]}/>
        <CardLeftText key={data.id+'t'} item={data}/>
    </div>
  )
}
