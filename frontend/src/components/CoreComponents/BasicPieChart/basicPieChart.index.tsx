import { format } from "date-fns";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { IBasicPieChartProps } from "./basicPieChart.type";

const BasicPieChart: React.FC<IBasicPieChartProps> = ({}) => {
  const defaultLabelStyle = {
    fontSize: "15px",
    fontFamily: "sans-serif",
    color: "white !important",
    fill: "rgb(255, 255, 255)",
  };
  return (
    <PieChart
      labelStyle={{
        ...defaultLabelStyle,
      }}
      style={{ height: "250px", color: "white" }}
      label={({ dataEntry }) => dataEntry.title}
      data={[
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
      ]}
    />
  );
};
export default BasicPieChart;
