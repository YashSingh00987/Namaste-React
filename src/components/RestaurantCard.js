import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo } = props.resData.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[480px] rounded-lg bg-red-100 hover:bg-green-200 " >
      <img className="rounded-lg" src={CDN_URL} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating}</h4>

      <h4>{costForTwo}</h4>

      <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
