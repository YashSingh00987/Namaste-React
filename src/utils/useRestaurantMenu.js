import React, { useEffect, useState } from "react";
import { CDN_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CDN_MENU + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
