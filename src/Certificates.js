import React from "react";

function Certificates(props) {
  const { description } = props;
  return (
    <section className="certificate">
      <div className="describe">{description}</div>
      <button className="btn">Click to View</button>
    </section>
  );
}

export default Certificates;
