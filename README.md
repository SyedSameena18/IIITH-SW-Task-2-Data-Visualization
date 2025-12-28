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

# Dataset
The project uses real-world IoT sensor data collected from multiple nodes across different smart city verticals.  
The dataset is used for data preprocessing, backend API responses, and frontend visualization.

**Files included:**
- `iot_dataset.csv` – Contains raw IoT sensor readings such as timestamped measurements from various sensors
- `iot_dataset_mapping.csv` – Maps sensor IDs and node information to their respective smart city verticals:
  - Air Quality (AQ)
  - Water Flow (WF)
  - Street Lighting (SL)
Both dataset files are available in the `data/` directory.

# IIITH SW Task Report
The complete project report provides a detailed explanation of the work carried out in this task, including:
- Problem statement and objectives  
- Dataset understanding and preprocessing steps  
- Backend implementation using FastAPI  
- Frontend dashboard development using React.js and Apache ECharts  
- Results, observations, and conclusion  
**Report file:**
- `IoT25_Sameena_Report.docx`
The report is available in the `report/` directory.

# 👩‍💻 Author
**Syed Sameena**  
B.Tech – Computer Science Engineering (AIDS)  
IIIT Hyderabad – IoT’25 Program

