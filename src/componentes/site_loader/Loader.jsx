import React from "react";
import "./loader.scss";

const Loader = () => {
  // TODO transtion animation, mahbe use react Unmount?
  return (
    <div className="loader__container">
      <div className="loader_text">Loading...</div>
      <svg
        className="pl"
        width="128px"
        height="128px"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="pl__ring1"
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="#400040"
          strokeWidth="8"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="377 377"
          strokeDashoffset="-376.4"
        ></circle>
        <circle
          className="pl__ring2"
          cx="64"
          cy="64"
          r="52.5"
          fill="none"
          stroke="#4c004c"
          strokeWidth="7"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="329.9 329.9"
          strokeDashoffset="-329.3"
        ></circle>
        <circle
          className="pl__ring3"
          cx="64"
          cy="64"
          r="46"
          fill="none"
          stroke="#6c006c"
          strokeWidth="6"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="289 289"
          strokeDashoffset="-288.6"
        ></circle>
        <circle
          className="pl__ring4"
          cx="64"
          cy="64"
          r="40.5"
          fill="none"
          stroke="#8f008f"
          strokeWidth="5"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="254.5 254.5"
          strokeDashoffset="-254"
        ></circle>
        <circle
          className="pl__ring5"
          cx="64"
          cy="64"
          r="36"
          fill="none"
          stroke="#af00af"
          strokeWidth="4"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="226.2 226.2"
          strokeDashoffset="-225.8"
        ></circle>
        <circle
          className="pl__ring6"
          cx="64"
          cy="64"
          r="32.5"
          fill="none"
          stroke="#ff00ff"
          strokeWidth="3"
          transform="rotate(-90,64,64)"
          strokeLinecap="round"
          strokeDasharray="204.2 204.2"
          strokeDashoffset="-203.9"
        ></circle>
      </svg>
    </div>
  );
};

export default Loader;
