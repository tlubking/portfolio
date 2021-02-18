import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Placeholder Text </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Mobile Development",
            "Baseball Fanatic",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
