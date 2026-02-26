CROP_MAP = {
    1: "Cotton",
    2: "Soybean",
    3: "Wheat",
    4: "Rice",
    5: "Tur",
    6: "Chana",
    7: "Maize",
    8: "Orange"
}

SOIL_MAP = {
    1: "Black Cotton Soil",
    2: "Alluvial Soil",
    3: "Red Soil",
    4: "Laterite Soil",
    5: "Sandy Loam"
}

MONTH_MAP = {
    1: "January", 2: "February", 3: "March", 4: "April",
    5: "May", 6: "June", 7: "July", 8: "August",
    9: "September", 10: "October", 11: "November", 12: "December"
}

def get_mapped_names(data):
    return {
        "crop_name": CROP_MAP.get(data["crop"], "Unknown"),
        "soil_type": SOIL_MAP.get(data["soil"], "Unknown"),
        "month_name": MONTH_MAP.get(data["month"], "Unknown")
    }