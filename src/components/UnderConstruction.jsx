import React from "react";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="message-box">
        <div className="emoji">🚧</div>
        <h1 className="message" style={{ color: "#EC4D37" }}>Site Under Development</h1>
        <p>Thanks for visiting! We're working hard to bring awesome content soon.</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
