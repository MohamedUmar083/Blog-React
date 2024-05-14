import React from "react";
import Cards from "../Components/Cards/Cards";

const Fsd = ({ data }) => {
  let fsd = data.filter((element) => element.head === "Full Stack Development");
  return (
    <div className="container">
      <h3>Full Stack Development</h3>
      <Cards data={fsd}></Cards>
    </div>
  );
};

export default Fsd;
