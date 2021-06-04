import React from "react";
//import FakeBookings from "./data/fakeBookings.json";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{"ID"}</th>
          <th scope="col">{"First Name"}</th>
          <th scope="col">{"Last name"}</th>
          <th scope="col">{"email"}</th>
          <th scope="col">{"Room ID"}</th>
          <th scope="col">{"Check-in date"}</th>
          <th scope="col">{"Check-out date"}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.results}
          {/* <th scope="row">{1}</th>
      <td>{"#332"}</td>
      <td>{"Mark"}</td>
      <td>{"Otto"}</td>
      <td>{"markott@hmail.com"}</td>
      <td>{"gf564"}</td>
      <td>{"10-09-34"}</td>
      <td>{"20-09-34"}</td> */}
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
