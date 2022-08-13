import React from "react";
import "./loader.scss";

const Loader = () => {
  // TODO transtion animation, mahbe use react Unmount?
  return (
    <div className="loader__container">
      <span className="loader"></span>
      <div className="loader_text">Loading...</div>
    </div>
  );
};

export default Loader;
