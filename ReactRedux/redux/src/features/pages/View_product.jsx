import React from "react";
import { useSelector } from "react-redux";

function View_product({ id }) {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((ele) => ele.id === id);
  return (
    <div>
      <div className="card w-100 mx-auto my-2">
        <div className="card-body">
          <h5 className="card-title">Name: {singleUser[0].name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Email : {singleUser[0].email}
          </h6>
          <p className="card-text">Password : {singleUser[0].password}</p>
          <p className="card-text">Mobile : {singleUser[0].mobile}</p>
          <p className="card-text">Image : {singleUser[0].image}</p>
        </div>
      </div>
    </div>
  );
}

export default View_product;
