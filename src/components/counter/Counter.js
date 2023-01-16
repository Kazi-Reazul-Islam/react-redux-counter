import React from "react";

const Counter = () => {
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h4 className="text-white ">My Counter App</h4>
      </div>
      <div className="card-body">
        <h4>00</h4>
        <div className="my-4">
          <button className="btn btn-success">Increase</button>
          <button className="btn btn-danger mx-2">Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
