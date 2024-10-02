import React from "react";
import { useDispatch } from "react-redux";
import { IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCategoryData = ({ resData }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {resData.map((e) => {
        return (
          <div
            key={e?.card?.info?.id}
            className="p-2 m-2 border-gray-400 border-b-2 flex justify-between w-full"
          >
            <div className="text-left w-9/12 text-sm">
              <div className="">
                <span>{e.card.info.name}</span>
                <span>
                  - ₹{(e.card.info.price || e.card.info.defaultPrice) / 100}
                </span>
                <p>{e.card.info.ratings.aggregatedRating.rating} ⭐</p>
              </div>
              <p className="text-xs">{e.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className=" mx-5 rounded-lg bg-black text-white"
                  onClick={() => handleAddItem(e)}
                >
                  Add+
                </button>
              </div>
              <img src={IMG} className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCategoryData;
