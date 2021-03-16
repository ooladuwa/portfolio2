import React from "react";
import Intro from "./Intro";

const Seedlings = () => {
  return (
    <section className="section2">
      <Intro />
      <div className="growth">
        See
        <br />
        my
        <br />
        GROWTH...
      </div>
      <img
        src="https://i.ibb.co/n0jnPH1/seedlings.png"
        alt="seedlings"
        className="seedling-img"
      />
    </section>
  );
};

export default Seedlings;
