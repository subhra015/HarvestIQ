import numpy as np
from app.core.model_loader import models


def get_price_prediction(data: dict) -> float:
    """Predict market price."""
    try:
        features = np.array([[
            data["crop"],
            data["rainfall"],
            data["temperature"],
            data["demand"],
            data["month"]
        ]])

        return float(models["price"].predict(features)[0])

    except KeyError as e:
        raise ValueError(f"Missing required field for price prediction: {e}")