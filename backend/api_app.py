# ------------------------------------------------------------
# 🌟 IoT25 FastAPI — Working Version with Summary Endpoints
# ------------------------------------------------------------
from fastapi import FastAPI
from sqlalchemy import create_engine
import pandas as pd

# ------------------------------------------------------------
# Initialize the FastAPI app
# ------------------------------------------------------------
app = FastAPI(title="IoT25 API", version="1.0")

# ------------------------------------------------------------
# PostgreSQL Connection
# ------------------------------------------------------------
try:
    engine = create_engine("postgresql+psycopg2://postgres:Sameena@localhost:5432/iot25db")
    print("✅ Connected to PostgreSQL successfully!")
except Exception as e:
    print("❌ Database connection failed:", e)

# ------------------------------------------------------------
# Helper Function
# ------------------------------------------------------------
def get_summary(df):
    """Creates a clean summary table for each vertical."""
    summary = (
        df.groupby("node_id")
        .agg({
            "latitude": "first",
            "longitude": "first",
            "value": ["mean", "min", "max"]
        })
        .reset_index()
    )
    summary.columns = ["Node ID", "Latitude", "Longitude", "Avg Value", "Min Value", "Max Value"]
    return summary.to_dict(orient="records")

# ------------------------------------------------------------
# Home Route
# ------------------------------------------------------------
@app.get("/")
def home():
    return {
        "message": "🚀 FastAPI is connected successfully!",
        "endpoints": [
            "/summary",
            "/verticalAQ",
            "/verticalWF",
            "/verticalSL"
        ]
    }

# ------------------------------------------------------------
# Combined Summary
# ------------------------------------------------------------
@app.get("/summary")
def summary_all():
    try:
        df = pd.read_sql("SELECT * FROM iot_clean_data", engine)
        if df.empty:
            return {"error": "No data found."}

        result = {}
        for vtype in ["AQ", "WF", "SL"]:
            subset = df[df["type"] == vtype]
            if not subset.empty:
                result[vtype] = get_summary(subset)
            else:
                result[vtype] = "No data available"

        return {
            "message": "📊 All vertical summaries generated successfully!",
            "total_records": len(df),
            "verticals": result
        }

    except Exception as e:
        return {"error": str(e)}

# ------------------------------------------------------------
# Individual Vertical Endpoints
# ------------------------------------------------------------
@app.get("/verticalAQ")
def aq_summary():
    try:
        df = pd.read_sql("SELECT * FROM iot_clean_data WHERE type='AQ'", engine)
        if df.empty:
            return {"error": "No Air Quality data found"}
        return {"vertical": "Air Quality (AQ)", "summary": get_summary(df)}
    except Exception as e:
        return {"error": str(e)}

@app.get("/verticalWF")
def wf_summary():
    try:
        df = pd.read_sql("SELECT * FROM iot_clean_data WHERE type='WF'", engine)
        if df.empty:
            return {"error": "No Water Flow data found"}
        return {"vertical": "Water Flow (WF)", "summary": get_summary(df)}
    except Exception as e:
        return {"error": str(e)}

@app.get("/verticalSL")
def sl_summary():
    try:
        df = pd.read_sql("SELECT * FROM iot_clean_data WHERE type='SL'", engine)
        if df.empty:
            return {"error": "No Street Light data found"}
        return {"vertical": "Street Light (SL)", "summary": get_summary(df)}
    except Exception as e:
        return {"error": str(e)}
