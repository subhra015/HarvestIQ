import os
import joblib

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")

def load_models():
    try:
        return {
            "harvest": joblib.load(os.path.join(MODEL_DIR, "nagpur_harvest_model.pkl")),
            "price": joblib.load(os.path.join(MODEL_DIR, "price_model.pkl")),
            "spoilage": joblib.load(os.path.join(MODEL_DIR, "spoilage_model.pkl")),
            "pest": joblib.load(os.path.join(MODEL_DIR, "pest_model.pkl")),
            "weather_stress": joblib.load(os.path.join(MODEL_DIR, "weather_stress_model.pkl")),
        }
    except Exception as e:
        raise RuntimeError(f"Error loading models: {e}")

# Global model object (safe because loaded once at startup)
models = load_models()