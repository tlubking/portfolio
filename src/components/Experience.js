import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
                <h3>2011-2013</h3>
                <p>Attended Pacific Lutheran University pursuing a BS in Computer Science. Working mainly with Java and learning data structures/algorithms.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
                <h3>2014-Present</h3>
                <p>Drafted by the Tampa Bay Rays in 2014 MLB First Year Player Draft. Currently playing baseball professionally.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
                <h3>2019-Present</h3>
                <p>Re-ignited my passion for learning code at Codecademy.com to learn web development and prepare myself for a future career!</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Experience;
