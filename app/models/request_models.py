from flask_restx import fields

def create_harvest_input_model(api):
    return api.model("HarvestInput_NagpurRegion", {

        "temperature": fields.Float(
            required=True,
            example=32,
            description="Temperature in Celsius (Nagpur avg 18–45°C)"
        ),

        "rainfall": fields.Float(
            required=True,
            example=110,
            description="Rainfall in mm (Monsoon dominant)"
        ),

        "humidity": fields.Float(
            required=True,
            example=65,
            description="Humidity percentage (30–90%)"
        ),

        "wind": fields.Float(
            required=True,
            example=12,
            description="Wind speed in km/h"
        ),

        "crop": fields.Integer(
            required=True,
            example=1,
            description=(
                "Crop Code (Nagpur Region): "
                "1=Cotton, 2=Soybean, 3=Wheat, 4=Rice, "
                "5=Tur, 6=Chana, 7=Maize, 8=Orange"
            )
        ),

        "soil": fields.Integer(
            required=True,
            example=1,
            description=(
                "Soil Code (Nagpur Region): "
                "1=Black Cotton Soil, "
                "2=Alluvial Soil, "
                "3=Red Soil, "
                "4=Laterite Soil, "
                "5=Sandy Loam"
            )
        ),

        "fertilizer": fields.Float(
            required=True,
            example=55,
            description="Fertilizer applied (kg per acre)"
        ),

        "storage_days": fields.Integer(
            required=True,
            example=8,
            description="Days crop stored post-harvest"
        ),

        "demand": fields.Float(
            required=True,
            example=75,
            description="Market demand index (0–100 scale)"
        ),

        "month": fields.Integer(
            required=True,
            example=7,
            description=(
                "Month Number: "
                "1=Jan ... 6=Jun (Pre-Monsoon), "
                "7=Jul ... 9=Sep (Monsoon), "
                "10=Oct ... 12=Dec (Post-Monsoon)"
            )
        )
    })