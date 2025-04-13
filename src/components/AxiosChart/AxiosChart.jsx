import React, { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const AxiosChart = ({ marksPromise }) => {
  const marks = use(marksPromise);
  const marksData = marks.data;

  // data processing for the chart

  const marksChartData = marksData.map((studentsMark) => {
    const student = {
      name: studentsMark.name,
      physics: studentsMark.marks.physics,
      chemistry: studentsMark.marks.chemistry,
      math: studentsMark.marks.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });

  return (
    <>
      <div>
        <BarChart width={800} height={300} data={marksChartData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"physics"} fill="blue"></Bar>
          <Bar dataKey={"chemistry"} fill="orange"></Bar>
          <Bar dataKey={"math"} fill="red"></Bar>
        </BarChart>
      </div>
    </>
  );
};

export default AxiosChart;
