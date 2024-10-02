import React from "react";
import ItemList from "./ItemList";
import ItemListWithCategory from "./ItemListWithCategory";
import { useState } from "react";

const RestaurantCategory = ({ data , showItems, setShowIndex}) => {



  const getItemcards = () => {
    if (data.itemCards) {
      return data.itemCards;
    } else if (data.categories) {
      return data.categories;
    }
  };

  const fnlength = getItemcards();

  const handleShow = () =>{
    setShowIndex()
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4  bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleShow}
        >
          <span className="font-bold text">
            {data.title} ({fnlength.length})
          </span>
          <span>⬇️</span>
        </div>
        {data.itemCards && showItems && <ItemList items={data.itemCards} />}

        {data.categories && showItems && (
          <ItemListWithCategory categories={data.categories} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
