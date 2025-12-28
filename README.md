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

# API Endpoints Implemented
The backend exposes RESTful APIs using FastAPI to serve processed IoT data to the frontend dashboards.
The following endpoints are implemented:

| Endpoint | Method | Description |
|--------|--------|-------------|
| `/aq` | GET | Returns processed Air Quality (AQ) sensor data |
| `/wf` | GET | Returns processed Water Flow (WF) sensor data |
| `/sl` | GET | Returns processed Street Lighting (SL) sensor data |
Each endpoint fetches vertical-specific data after preprocessing and mapping, ensuring clean and structured responses for frontend visualization.

# Frontend Dashboards
The frontend is built using React.js and Apache ECharts to visualize IoT sensor data.
Separate dashboards are implemented for:
- Air Quality (AQ)
- Water Flow (WF)
- Street Lighting (SL)
Each dashboard fetches data from the corresponding backend API endpoint and renders interactive charts for analysis.

## How to Run the Project
#Backend:
pip install -r requirements.txt
uvicorn api_app:app --reload

#Frontend:
npm install
npm start

# Technologies Used
- Backend      : Python, FastAPI, Pandas  
- Frontend     : React.js, Apache ECharts  
- Data Format  : CSV  
- Architecture : REST-based full-stack application

# Dataset Description
- The dataset contains IoT readings with sensor-mapped values.
Files included:

 1. iot_dataset.csv
This file contains the raw IoT sensor readings collected from different nodes.
- Sensor readings recorded over time
- Node and sensor identifiers
- Data values corresponding to different IoT parameters
This dataset serves as the primary input for backend data processing and visualization.

 2. iot_dataset_mapping.csv
This file defines the mapping between sensors and their respective smart city verticals.
- Sensor IDs
- Node IDs
- Corresponding vertical classification (AQ, WF, SL)
This mapping file is used to group and route sensor data to the appropriate dashboards.

# 👩‍💻 Author
**Syed Sameena**  
B.Tech – Computer Science Engineering (AIDS)  
IIIT Hyderabad – IoT’25 Program

