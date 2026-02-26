# HarvestIQ Backend API Documentation

Welcome! Your backend is fully configured. Since your frontend developer is on another PC, they need to connect to your machine over the Local Network (Wi-Fi).

## Base URL
Your machine's Local IP address on the Wi-Fi network is:
**`http://10.17.124.114:5000`**

*(Note: Your frontend developer must be connected to the same Wi-Fi network as you).*

---

## 1. Authentication

Since we added JWT Authentication, all requests to the `/predict` route must include a valid Token.

### Login
- **Endpoint**: `POST /auth/login`
- **Description**: Authenticates a user and returns a JSON Web Token (JWT).
- **Request Body** (JSON):
```json
{
  "username": "your_username",
  "password": "your_password"
}
```
- **Response** (200 OK):
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

> **Note to Backend Dev**: Because you removed the `/register` endpoint, your frontend dev cannot create accounts through the API. I have created a file called `create_user.py` in your folder. You can run `python create_user.py "username" "password"` in your terminal to create accounts for them manually!

---

## 2. Prediction Engine

Once the frontend has the `access_token` from `/login`, they can request predictions.

- **Endpoint**: `POST /predict/`
- **Headers Required**: 
  - `Content-Type`: `application/json`
  - `Authorization`: `Bearer <YOUR_ACCESS_TOKEN_HERE>`
- **Request Body** (JSON):
```json
{
  "crop": 1,
  "soil": 1,
  "month": 7,
  "fertilizer": 50,
  "storage_days": 5,
  "demand": 70,
  "temperature": 32.5,
  "rainfall": 120,
  "humidity": 65,
  "wind": 12
}
```
*Tip: Crop & Soil integers map to the Nagpur datasets (e.g. Crop 1=Cotton, 8=Orange).*

- **Response** (200 OK):
```json
{
  "final_risk_score": 0.42,
  "pest": 0,
  "price": 4500.5,
  "recommendations": [
    "CONDITIONS_STABLE"
  ],
  "regional_warnings": [
    "Excess monsoon rainfall may reduce cotton yield."
  ],
  "risk_level": "Moderate",
  "spoilage": 0,
  "weather_stress_index": 22.4,
  "yield": 12.5
}
```

---

## How to Test it Works
1. Make sure your Python Flask server is running: `python -m app.main`
2. Your friend can open their terminal and run this `curl` command to see if they can reach your PC:
```bash
curl -X POST http://10.17.124.114:5000/auth/login -H "Content-Type: application/json" -d "{\"username\":\"test\",\"password\":\"test\"}"
```
*(If it times out, you may need to briefly disable your Windows Firewall for "Private Networks" so they can connect).*
