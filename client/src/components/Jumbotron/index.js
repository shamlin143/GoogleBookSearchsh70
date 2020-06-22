import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (

    // <div
    //   style={{ height: 200, clear: "both", textAlign: "center", color: "black" }}
    //   className="jumbotron">
    //   {children}
    // </div>
      <div className="jumbotron jumbotron-fluid d-flex align-items-center">
          <div className="container text-center">
              {children}
          </div>
      </div>
  );
}

export default Jumbotron;
