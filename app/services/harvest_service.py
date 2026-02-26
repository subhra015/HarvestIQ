import numpy as np
from app.core.model_loader import models


def get_yield_prediction(data: dict) -> float:
    """Predict crop yield."""
    try:
        features = np.array([[
            data["crop"],
            data["rainfall"],
            data["temperature"],
            data["soil"],
            data["fertilizer"],
            data["month"]
        ]])

        return float(models["harvest"].predict(features)[0])

    except KeyError as e:
        raise ValueError(f"Missing required field for yield prediction: {e}")


def get_pest_prediction(data: dict) -> int:
    """Predict pest risk level."""
    try:
        features = np.array([[
            data["crop"],
            data["humidity"],
            data["rainfall"],
            data["temperature"],
            data["month"]
        ]])

        return int(models["pest"].predict(features)[0])

    except KeyError as e:
        raise ValueError(f"Missing required field for pest prediction: {e}")


def get_weather_prediction(data: dict) -> float:
    """Predict weather stress index."""
    try:
        features = np.array([[
            data["rainfall"],
            data["temperature"],
            data["humidity"],
            data["wind"]
        ]])

        return float(models["weather_stress"].predict(features)[0])

    except KeyError as e:
        raise ValueError(f"Missing required field for weather prediction: {e}")