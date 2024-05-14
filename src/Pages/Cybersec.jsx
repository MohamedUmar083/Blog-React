import React from "react";
import Cards from "../Components/Cards/Cards";

const Cybersec = ({ data }) => {
  let cybersec = data.filter((element) => element.head === "Cyber Security");
  return (
    <div className="container">
      <h3>Cyber Security Program</h3>
      <Cards data={cybersec} />
    </div>
  );
};

export default Cybersec;
