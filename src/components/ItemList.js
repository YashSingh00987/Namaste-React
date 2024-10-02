import React from "react";
import { IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
      dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => {
       
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-400 border-b-2 flex justify-between"
          >
            <div className="text-left w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
                <p>{item.card.info.ratings.aggregatedRating.rating} ⭐</p>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
            <div className="absolute">
                <button className=" mx-16 rounded-lg bg-black text-white" onClick={() => handleAddItem(item)}>Add+</button>
              </div>
                <img src={IMG} className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
