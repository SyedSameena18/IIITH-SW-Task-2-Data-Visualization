import React from "react";

const Navbar = ({ onSelect }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>IoT Data Visualization Dashboard</h2>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => onSelect("aq")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          AQ Dashboard
        </button>

        <button
          onClick={() => onSelect("wf")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          WF Dashboard
        </button>

        <button
          onClick={() => onSelect("sl")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#6c63ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          SL Dashboard
        </button>
      </div>
    </div>
  );
};

export default Navbar;
