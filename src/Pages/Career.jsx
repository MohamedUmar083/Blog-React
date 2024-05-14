import React from "react";
import Cards from "../Components/Cards/Cards";

const Career = ({ data }) => {
  let career = data.filter(
    (element) => element.head === "Career Development Program"
  );
  return (
    <div className="container">
      <h3>Career Development Program</h3>
      <Cards data={career} />
    </div>
  );
};

export default Career;
