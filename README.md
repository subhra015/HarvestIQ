HarvestIQ

AI-Powered Smart Agricultural Decision Engine

Empowering Farmers with Data-Driven Decisions

HarvestIQ is an intelligent agricultural analytics platform designed to help farmers make smarter, data-backed decisions using Machine Learning.

Built for real-world agricultural challenges in the Nagpur region, HarvestIQ predicts crop risks, market trends, and environmental stress to improve yield and reduce losses.



 Problem Statement

Farmers face major uncertainties due to:

* 📉 Fluctuating crop prices
* 🌦 Weather stress
* 🐛 Pest outbreaks
* 🧊 Post-harvest spoilage

Most decisions are made without predictive tools.



Our Solution

HarvestIQ integrates multiple ML models into a unified smart system that provides:

✅ Crop Price Prediction
✅ Weather Stress Risk Analysis
✅ Pest Risk Prediction
✅ Spoilage Risk Assessment
✅ Smart Decision Insights

All accessible through a simple web interface.



How It Works

1. User enters crop and environmental data
2. Backend processes inputs using trained ML models
3. Risk scores and predictions are generated
4. System provides actionable insights



Tech Stack

Backend

* Python
* Flask
* Flask-RESTX
* JWT Authentication
* SQLAlchemy
* SQLite

Frontend

* HTML
* CSS
* JavaScript

Machine Learning

* Scikit-learn
* Pre-trained ML models (.pkl)

---

Project Structure

```
HarvestIQ/
│
├── app/
│   ├── routes/
│   ├── services/
│   ├── models/
│   └── core/
│
├── frontend/
│
├── run.py
├── requirements.txt
└── README.md
```



Installation & Setup

Clone Repository

```bash
git clone https://github.com/subhra015/HarvestIQ.git
cd HarvestIQ
```

Create Virtual Environment

```bash
python -m venv .venv
source .venv/Scripts/activate   # Windows
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
python run.py
```

Backend runs at:

```
http://localhost:5000
```

API Documentation:

```
http://localhost:5000/docs
```

Run Frontend

```bash
cd frontend
python -m http.server 5500
```

Open:


http://localhost:5500




Authentication

HarvestIQ uses JWT-based authentication:

POST `/auth/register`
*POST `/auth/login`

Secure endpoints require Authorization headers.



Impact

Improves farmer decision-making
Reduces crop losses
Increases profit predictability
Promotes AI adoption in agriculture



Future Scope

* Real-time weather API integration
* Cloud deployment
* Mobile application
* Government agriculture data integration
* Dashboard analytics for cooperatives


