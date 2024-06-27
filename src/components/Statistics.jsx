import React from "react";

function Statistics() {
  return (
    <div>
      <p>Good = {props.good}</p>
      <p>Nutral = {props.neutral}</p>
      <p>Bad = {props.bad}</p>
      <p>Total = {props.total}</p>
    </div>
  );
}

export default Statistics;
