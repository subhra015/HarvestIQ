import numpy as np
from app.core.model_loader import models


def get_spoilage_prediction(data: dict) -> int:
    """Predict spoilage risk."""
    try:
        features = np.array([[
            data["crop"],
            data["humidity"],
            data["temperature"],
            data["storage_days"],
            data["rainfall"]
        ]])

        return int(models["spoilage"].predict(features)[0])

    except KeyError as e:
        raise ValueError(f"Missing required field for spoilage prediction: {e}")