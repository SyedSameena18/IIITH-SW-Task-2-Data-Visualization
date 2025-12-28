import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function App() {
  // Create 2 chart references (for example: temperature + humidity)
  const tempRef = useRef(null);
  const humidityRef = useRef(null);

  // Temperature chart
  useEffect(() => {
    const chart = echarts.init(tempRef.current);
    const option = {
      title: { text: "Temperature Trends (°C)" },
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value" },
      series: [
        {
          data: [24, 27, 26, 30, 28, 29, 25],
          type: "line",
          smooth: true,
        },
      ],
    };
    chart.setOption(option);
    return () => chart.dispose();
  }, []);

  // Humidity chart
  useEffect(() => {
    const chart = echarts.init(humidityRef.current);
    const option = {
      title: { text: "Humidity Levels (%)" },
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value" },
      series: [
        {
          data: [55, 60, 58, 65, 63, 62, 59],
          type: "bar",
        },
      ],
    };
    chart.setOption(option);
    return () => chart.dispose();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9fafb" }}>
      <h1 style={{ textAlign: "center" }}>IoT Sensor Dashboard</h1>
      <p style={{ textAlign: "center" }}>React + Apache ECharts</p>

      {/* Grid layout for charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          ref={tempRef}
          style={{
            width: "100%",
            height: "400px",
            background: "#fff",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        ></div>

        <div
          ref={humidityRef}
          style={{
            width: "100%",
            height: "400px",
            background: "#fff",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
