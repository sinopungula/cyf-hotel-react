import React from "react";

const RestaurantButton = props => {
  console.log(props);
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
