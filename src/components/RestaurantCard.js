import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  
    const { name, cuisines, avgRating, costForTwo, } = props.resData.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="logo-dish"
          src={CDN_URL}
        />
        <h3>{name}</h3>
  
        <h4>{cuisines.join(", ")}</h4>
  
        <h4>{avgRating}</h4>
        
        <h4>{costForTwo}</h4>
  
        <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  
  export default RestaurantCard;
