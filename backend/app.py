from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("heart_disease_model.pkl")
scaler = joblib.load("scaler.pkl")
columns = joblib.load("columns.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Heart Disease Prediction API is Running!"
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        df = pd.DataFrame([data])

        df = pd.get_dummies(df)

        df = df.reindex(columns=columns, fill_value=0)

        scaled_data = scaler.transform(df)

        prediction = model.predict(scaled_data)[0]

        probability = model.predict_proba(scaled_data)[0][1]

        result = "Heart Disease" if prediction == 1 else "No Heart Disease"

        return jsonify({
            "prediction": result,
            "probability": float(probability)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)