import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState(FakeBookings);
  const callSetBookings = () => {
    return setBookings(bookings);
  };
  console.log(FakeBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          callSetBookings={callSetBookings}
          eachBooking={bookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
