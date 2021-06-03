import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="card col">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="peoplemakeglasgow.com" className="btn btn-primary">
              People make Glasgow
            </a>
          </div>
        </div>
        <div className="card col">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="visitmanchester.com" className="btn btn-primary">
              Visit Manchester
            </a>
          </div>
        </div>
        <div className="card col">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="visitlondon.com" className="btn btn-primary">
              Visit London
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
