from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle


# Create FastAPI app
app = FastAPI(title="Spam Detector API")


# Allow frontend (localhost:5500) to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load trained model and vectorizer

with open("models/spam_model.pkl", "rb") as file:
    model = pickle.load(file)

with open("models/tfidf.pkl", "rb") as file:
    vectorizer = pickle.load(file)


# Request format from frontend
class EmailRequest(BaseModel):
    message: str

# Test route
@app.get("/")
def home():
    return {
        "message": "Spam Detector API is running"
    }

# Prediction route
@app.post("/predict")
def predict_email(data: EmailRequest):

    # Convert text into numbers using TF-IDF
    transformed_text = vectorizer.transform([data.message])

    # Predict
    prediction = model.predict(transformed_text)[0]

    # Convert prediction to readable text
    if prediction == 1:
        result = "spam"
    else:
        result = "ham"

    # Confidence

    probability = model.predict_proba(transformed_text)[0]

    confidence = round(max(probability) * 100, 2)


    return {
        "prediction": result,
        "confidence": confidence
    }
