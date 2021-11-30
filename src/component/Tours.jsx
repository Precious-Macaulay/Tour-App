import React from "react";
import Card from "./Card";


function Tours() {
  return (
    <div>
      <div className="title">
        <h2>Our Tours</h2>
        <hr className="underline" />
      </div>
      <Card value="0" />
      <Card value="1" />
      <Card value="2" />
      <Card value="3" />
    </div>
  );
}

export default Tours;
