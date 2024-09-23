import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantsListSearch, setFilteredRestaurantsListSearch] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
      
    );

    const json = await data.json();


    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantsListSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={
            (e) => {
              setSearchText(e.target.value)
            }
          }></input>
          <button onClick={
            () => {
              const searchWithFilter= listOfRestaurants.filter(res => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
             setFilteredRestaurantsListSearch(searchWithFilter)
            }
          }
          >Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter(
              (restaurants) => {
                return restaurants.info.avgRating > 4.2;
              }
            );
            setFilteredRestaurantsListSearch(filteredRestaurantsList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantsListSearch.map((ele) => {
          return (
            <Link to={"/restaurants/"+ele.info.id} key={ele.info.id} className="link"><RestaurantCard resData={ele} ></RestaurantCard></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
