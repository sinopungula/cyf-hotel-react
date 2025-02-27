import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        {props.orderType}: {orders}
      </li>
      <RestaurantButton orderOne={orderOne} />
    </div>
  );
};

export default Order;
