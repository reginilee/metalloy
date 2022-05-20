import React from "react";
import "./HalfBanner.css";

export default function HalfBanner(props) {
  return (
    <div className="halfBanner">
      <h1>{props.title}</h1>
    </div>
  );
}
