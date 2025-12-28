# IIITH-SW-Task-2
# IoT Sensor Data Visualization Dashboard using FastAPI, PostgreSQL/MongoDB, and Apache ECharts
This repository contains my official Software Task-2 submission for the IoT’25 program.
The task focuses on designing and implementing a full-stack IoT data visualization system using real-world sensor datasets. It involves preprocessing and mapping IoT sensor data, exposing structured insights through FastAPI-based REST APIs, and visualizing the data using a React.js dashboard for multiple smart city verticals, including Air Quality (AQ), Water Flow (WF), and Street Lighting (SL).This submission includes:

- Structured IoT datasets and mapping files
- A backend service for data processing and API generation
- An interactive frontend for visual analytics and dashboards

# Task Objectives

The primary objectives of this task are:
- To understand and preprocess real-world IoT sensor datasets for analytical use
- To map raw sensor readings to their respective smart city verticals (AQ, WF, SL)
- To design and implement RESTful APIs using FastAPI for structured data access
- To build an interactive frontend dashboard for visualizing IoT data insights
- To integrate backend and frontend components into a complete full-stack system
- To demonstrate practical skills in Python, data handling, API development, and visualization

# Repository Structure

The repository is organized to clearly separate backend logic, frontend components, and datasets, ensuring modularity and ease of understanding.
IoT25_Software_Task2/
│
├── backend/
│   ├── api_app.py              # FastAPI application for data processing and APIs
│   ├── requirements.txt        # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/          
│   │   ├── pages/              # Vertical-wise dashboards (AQ, WF, SL)
│   │   └── App.jsx             
│   └── package.json            # Frontend dependencies
│
├── data/
│   ├── iot_dataset.csv         # Raw IoT sensor readings
│   └── iot_dataset_mapping.csv # Sensor-to-vertical mapping file
│
├── README.md

# Data Processing & Logic Implemented
It focuses on **data preprocessing, mapping, and analytical logic** to support IoT data visualization.
The following processing steps and logic are implemented:

- **Dataset Loading:**  
  IoT sensor data is loaded from CSV files using Pandas for efficient processing.
- **Sensor-to-Vertical Mapping:**  
  Sensor readings are mapped to their respective smart city verticals (Air Quality, Water Flow, Street Lighting) using the mapping dataset.
- **Data Filtering & Grouping:**  
  Data is filtered and grouped based on vertical type to generate structured outputs for each dashboard.
- **API-Level Aggregation:**  
  Processed data is exposed through FastAPI REST endpoints, allowing the frontend to fetch vertical-wise insights.
- **Visualization-Oriented Formatting:**  
  Data is formatted specifically for frontend visualization libraries to enable smooth chart rendering.
  


