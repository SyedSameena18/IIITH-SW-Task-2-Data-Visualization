import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Dashboard = ({ data, vertical }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const chart = echarts.init(chartRef.current);

    const keys = Object.keys(data[0] || {}).filter(
      (key) => typeof data[0][key] === "number"
    );

    const option = {
      title: {
        text: `${vertical.toUpperCase()} Sensor Data`,
        left: "center",
      },
      tooltip: { trigger: "axis" },
      legend: { data: keys, top: 30 },
      xAxis: {
        type: "category",
        data: data.map((_, i) => i),
        name: "Record Index",
      },
      yAxis: { type: "value", name: "Sensor Value" },
      series: keys.map((key) => ({
        name: key,
        type: "line",
        smooth: true,
        data: data.map((row) => row[key]),
      })),
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [data, vertical]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "90%",
        height: "450px",
        margin: "30px auto",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        padding: "10px",
      }}
    />
  );
};

export default Dashboard;
