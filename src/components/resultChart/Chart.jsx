import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  { name: "Alice", physics: 85, chemistry: 78, math: 92 },
  { name: "Bob", physics: 75, chemistry: 82, math: 88 },
  { name: "Charlie", physics: 92, chemistry: 89, math: 94 },
  { name: "David", physics: 68, chemistry: 74, math: 79 },
  { name: "Eva", physics: 88, chemistry: 90, math: 91 },
  { name: "Fahim", physics: 70, chemistry: 65, math: 72 },
  { name: "Grace", physics: 95, chemistry: 92, math: 97 },
  { name: "Harry", physics: 82, chemistry: 77, math: 84 },
  { name: "Isla", physics: 90, chemistry: 85, math: 89 },
  { name: "Jack", physics: 76, chemistry: 80, math: 83 },
];

const Chart = () => {
  return (
    <>
      <div className="my-5">
        <LineChart width={800} height={300} data={resultData}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="math" stroke="#8884d8"></Line>
          <Line dataKey="physics" stroke="red"></Line>
          <Line dataKey="chemistry" stroke="orange"></Line>
        </LineChart>
      </div>
    </>
  );
};

export default Chart;
