from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow import keras
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

CORS(app)

model = keras.models.load_model("heart_disease_model.keras")

scaler = joblib.load("scaler.pkl")

columns = joblib.load("columns.pkl")


@app.route("/")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    df = pd.DataFrame([data])
    df = pd.get_dummies(df)
    df = df.reindex(columns=columns, fill_value=0)
    scaled_data = scaler.transform(df)
    prediction = model.predict(scaled_data)
    result = "Heart Disease" if prediction[0][0] >= 0.5 else "No Heart Disease"

    return jsonify({
        "prediction": result, 
        "probability": float(prediction[0][0])
    })


if __name__ == "__main__":
    app.run(debug=True)
