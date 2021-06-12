import React from "react";
import moment from "moment";

console.log(moment);
// const diffDates = (date1, date2) => {
//   return date1 = eachBooking.
// };
const SearchResults = ({ eachBooking }) => {
  console.log(eachBooking);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last name</th>
          <th scope="col">email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(eachBooking).map((item, key) => {
          const date2 = moment(eachBooking.checkOutDate);
          const date1 = moment(eachBooking.checkInDate);
          return (
            <tr key={key}>
              <td>{eachBooking[item].id}</td>
              <td>{eachBooking[item].title}</td>
              <td>{eachBooking[item].firstName}</td>
              <td>{eachBooking[item].surname}</td>
              <td>{eachBooking[item].email}</td>
              <td>{eachBooking[item].roomId}</td>
              <td>{eachBooking[item].checkInDate}</td>
              <td>{eachBooking[item].checkOutDate}</td>
              <td>{date2.diff(date1, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
