import React from "react";
import Cards from "../Components/Cards/Cards";

const All = ({ data }) => {
  // New Command to check git pull request
  return (
    <div className="container">
      <h3>All Program in One Place</h3>
      <Cards data={data} />
    </div>
  );
};

export default All;
