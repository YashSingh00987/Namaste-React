import React from 'react'
import ItemListWithCategoryData from './ItemListWithCategoryData'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'

const ItemListWithCategory = ({categories}) => {
  
  const [showIndex, setShowIndex] = useState(null)
  
  return (
    <div>
        {
            categories.map( (e,index) => {
                return <ItemListWithCategoryData key={uuidv4()} data = {e} showItems={index === showIndex} setShowIndex={() => {
                  if(index === showIndex){
                    setShowIndex(null)
                  }
                  else {
                    setShowIndex(index)
                  }
                }}/>
            })
        }
    </div>
  )
}

export default ItemListWithCategory