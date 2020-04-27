import React from "react";

const WhatIDo = () => {
  return (
    <section className="what-i-do-section">
      <h2 className="what-i-do-header"> What i Do?</h2>
      <div className="what-i-do-items">
        <div className="what-i-do-item">
          <img src="../../public/images/emptyRectangle.png"></img>
          <h3 className="what-i-do-item-header">Android Development</h3>
          <p className="what-i-do-item-desc">
            This is where problem solving meets visual impact. I’ll unite
            products and users, design and experiences.
          </p>
        </div>
        <div className="what-i-do-item">
          <img src="../../public/images/emptyRectangle.png"></img>
          <h3 className="what-i-do-item-header">Mobile App Design</h3>
          <p className="what-i-do-item-desc">
            Using iOS, Android and an expert vision, I’ll take your application
            to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
