import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          resArray={results.Object.keys()}
          resArray={FakeBookings.map((el, idx) => {
            return <tbody key={idx}>{el}</tbody>;
          })}
        />
      </div>
    </div>
  );
};

export default Bookings;
