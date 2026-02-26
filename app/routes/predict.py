from flask import request
from flask_restx import Namespace, Resource
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.models.request_models import create_harvest_input_model
from app.services.market_service import get_price_prediction
from app.services.spoilage_service import get_spoilage_prediction
from app.services.harvest_service import (
    get_yield_prediction,
    get_pest_prediction,
    get_weather_prediction
)

# ==========================
# 🌐 Namespace
# ==========================
predict_ns = Namespace(
    "predict",
    description="HarvestIQ Prediction Operations - Nagpur Region"
)

# Swagger Input Model
input_model = create_harvest_input_model(predict_ns)

@predict_ns.route("/")
class Predict(Resource):

    @predict_ns.expect(input_model)
    @jwt_required()
    def post(self):
        try:
            current_user_id = get_jwt_identity()
            data = request.json

            if not data:
                return {"error": "No input data provided"}, 400

            # ==========================
            # 🌍 Regional Advisory Layer
            # ==========================
            regional_warnings = []

            crop = data.get("crop")
            soil = data.get("soil")
            month = data.get("month")
            rainfall = data.get("rainfall")
            humidity = data.get("humidity")

            # Rice in Black Cotton Soil
            if soil == 1 and crop == 4:
                regional_warnings.append(
                    "Rice in Black Cotton Soil requires strong irrigation support in Nagpur region."
                )

            # Cotton in heavy monsoon rainfall
            if crop == 1 and month in [7, 8, 9] and rainfall and rainfall > 200:
                regional_warnings.append(
                    "Excess monsoon rainfall may reduce cotton yield."
                )

            # Orange with high humidity
            if crop == 8 and humidity and humidity > 85:
                regional_warnings.append(
                    "High humidity may increase fungal infection risk in oranges."
                )

            # ==========================
            # 🤖 ML Predictions
            # ==========================
            price = float(get_price_prediction(data))
            spoilage = int(get_spoilage_prediction(data))
            yield_pred = float(get_yield_prediction(data))
            pest = int(get_pest_prediction(data))
            weather_raw = float(get_weather_prediction(data))

            # Normalize weather stress (no negative confusion)
            weather = abs(weather_raw)

            # ==========================
            # 📊 Risk Scoring Engine
            # ==========================
            raw_score = (
                (spoilage * 0.25) +
                (pest * 0.2) +
                ((weather / 100) * 0.2) -
                ((yield_pred / 50) * 0.15) +
                ((price / 10000) * 0.2)
            )

            # Clamp between 0 and 1
            final_score = max(0, min(1, raw_score))
            final_score = round(final_score, 2)

            # Risk Classification
            if final_score < 0.33:
                risk_level = "Low"
            elif final_score < 0.66:
                risk_level = "Moderate"
            else:
                risk_level = "High"

            # ==========================
            # 🧠 Recommendation Engine
            # ==========================
            recommendations = []

            # Storage issue
            if spoilage == 1 or data.get("storage_days", 0) > 7:
                recommendations.append("IMPROVE_STORAGE")

            # Pest risk
            if pest == 1:
                recommendations.append("APPLY_PESTICIDE")

            # Low yield + low fertilizer
            if yield_pred < 25 and data.get("fertilizer", 0) < 40:
                recommendations.append("INCREASE_FERTILIZER")

            # High weather stress
            if weather > 60:
                recommendations.append("MONITOR_WEATHER")

            # Strong market demand
            if data.get("demand", 0) > 75:
                recommendations.append("SELL_NOW")

            if not recommendations:
                recommendations.append("CONDITIONS_STABLE")

            # ==========================
            # 📦 Final API Response
            # ==========================
            return {
                "price": round(price, 2),
                "yield": round(yield_pred, 2),
                "spoilage": spoilage,
                "pest": pest,
                "weather_stress_index": round(weather, 2),
                "final_risk_score": final_score,
                "risk_level": risk_level,
                "recommendations": recommendations,
                "regional_warnings": regional_warnings
            }, 200

        except Exception as e:
            return {"error": str(e)}, 500