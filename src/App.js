import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer
        data={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ].map((item, id) => {
          return <ul key={id}>{item}</ul>;
        })}
      />
    </div>
  );
};

export default App;
