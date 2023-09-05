import { range } from './utils';
import React from "react";

function Grid({ numRows, numCols }) {
  const rows = range(0, numRows).map((i) =>(
    <div key = {i} className = "row">
      {range(0, numCols).map((j) => (
        <div key = {j} className = "cell"/>
      ))}
      </div>
  ));
  return <div className="grid">{rows}</div>;
};

export default Grid;