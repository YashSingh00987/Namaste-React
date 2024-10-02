import React from "react";
import ItemCategoryData from "./ItemCategoryData";
import { useState } from "react";


const ItemListWithCategoryData = ({data, showItems, setShowIndex}) => {



const handleItems = () => {
  setShowIndex()
}
  
  return (
    <div className="">
      <div className="w-6/12 mx-auto my-4  bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleItems}>
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>  
        {showItems && <ItemCategoryData resData = {data.itemCards}/>}
      </div>
    </div>
  );
};

export default ItemListWithCategoryData;
