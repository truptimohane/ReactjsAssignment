import React from "react";

function Lazyloading_card({ title, url }) {
  return (
    <div>
      {/* // Bootstrap card with a fixed width */}
      <div className="card" style={{ width: "18rem" }}>
        {/* Card image with the provided URL */}
        <img src={url} className="card-img-top" alt="nothing" />
        {/* Card body containing the product title */}
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Lazyloading_card;
