import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listOfRestaurants = useRestaurantCard();

  const [filteredRestaurantsList, setFilteredRestaurantsList] =
    useState(listOfRestaurants);

  useEffect(() => {
    setFilteredRestaurantsList(listOfRestaurants);
  }, [listOfRestaurants]);

  const [searchText, setSearchText] = useState("");

  const status = useOnlineStatus();

  if (status === false) {
    return (
      <h1>Looks like you're offline!! Please check the Internet Connection</h1>
    );
  }
  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const searchRestaurtant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantsList(searchRestaurtant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const topRestaurant = listOfRestaurants.filter((restaurants) => {
                return restaurants.info.avgRating > 4.2;
              });
              setFilteredRestaurantsList(topRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurantsList.map((ele) => {
          return (
            <Link
              to={"/restaurants/" + ele.info.id}
              key={ele.info.id}
              className="link"
            >
              <RestaurantCard resData={ele}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
