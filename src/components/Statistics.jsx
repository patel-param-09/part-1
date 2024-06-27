import React from "react";

function Statistics() {
  return (
    <div>
      <tr>
        <td>Good</td> <td>{props.good}</td>
      </tr>
      <tr>
        <td>Nutral</td> <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td> <td>{props.bad}</td>
      </tr>
      <tr>
        <td>Total</td> <td>{props.total}</td>
      </tr>
    </div>
  );
}

export default Statistics;
