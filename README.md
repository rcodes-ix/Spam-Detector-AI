# 🛡️ SpamGuard AI

<img width="1917" height="928" alt="Screenshot 2026-08-07 013735" src="https://github.com/user-attachments/assets/e997e95d-ee21-4310-bc15-890d6865842e" />
<img width="1916" height="936" alt="Screenshot 2026-08-07 013701" src="https://github.com/user-attachments/assets/b0453891-169e-4c97-8107-0aabc37dd752" />
<img width="1917" height="937" alt="Screenshot 2026-08-07 013724" src="https://github.com/user-attachments/assets/54421392-1c04-4582-89a1-d3fd83c5285b" />




A machine learning-powered web application that detects whether a message is **Spam** or **Ham (Safe)** in real time. The project combines **Natural Language Processing (NLP)**, **Machine Learning**, **FastAPI**, and a modern web interface to demonstrate an end-to-end ML deployment workflow.

---

## Project Overview

SpamGuard AI allows users to enter any message into a web interface and instantly receive:

* Spam or Ham prediction
* Model confidence score
* Visual result with a clean, responsive UI

The application uses a trained **Multinomial Naive Bayes** classifier with **TF-IDF Vectorization** to classify text messages.

---

## Features

* Real-time spam detection
* Interactive web interface
* Random example messages
* Confidence score visualization
* REST API built with FastAPI
* Machine learning model integration
* Clean and responsive UI
* Easy to extend with new datasets or models

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* FastAPI
* Pydantic

### Machine Learning

* Python
* Scikit-learn
* TF-IDF Vectorizer
* Multinomial Naive Bayes

### Other Tools

* NumPy
* Pandas
* Pickle

---

## Machine Learning Pipeline

1. Load and preprocess the SMS dataset
2. Clean and normalize text
3. Convert text into numerical features using TF-IDF
4. Split the dataset into training and testing sets
5. Train a Multinomial Naive Bayes classifier
6. Evaluate the model using:

   * Accuracy
   * Precision
   * Recall
   * F1 Score
   * Confusion Matrix
7. Save the trained model and TF-IDF vectorizer using Pickle
8. Deploy the model with FastAPI
9. Connect the frontend to the API using JavaScript Fetch API

---

## 📊 Model Performance

| Metric         |    Score |
| -------------- | -------: |
| Accuracy       |  **97%** |
| Spam Precision | **100%** |
| Spam Recall    |  **78%** |
| Spam F1-Score  |  **88%** |

> These results were obtained using a TF-IDF Vectorizer and a Multinomial Naive Bayes classifier.

---

## Project Structure

```text
SpamGuard-AI/
│
├── app.py
├── index.html
├── style.css
├── script.js
├── favicon.svg
│
├── models/
│   ├── spam_model.pkl
│   └── tfidf.pkl
│
├── notebook/
│   └── spam_detection.ipynb
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/rcodes-ix/SpamGuard-AI.git
```

### Navigate to the project

```bash
cd SpamGuard-AI
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the FastAPI server

```bash
uvicorn app:app --reload
```

The backend will run at:

```
http://127.0.0.1:8000
```

### 5. Open the frontend

Open `index.html` in your browser or serve it using a local web server.

---

## Future Improvements

* Improve spam recall using larger and more diverse datasets
* Compare multiple machine learning algorithms
* Add Logistic Regression and Linear SVM models
* Support email and SMS classification
* Deploy the application online
* Add user authentication and prediction history
* Explain why a message was classified as spam
* Train on modern phishing and scam datasets

---

## Learning Outcomes

This project demonstrates practical experience with:

* Machine Learning
* Natural Language Processing
* Feature Engineering
* Model Evaluation
* FastAPI
* REST APIs
* JavaScript Fetch API
* Frontend and Backend Integration
* Model Serialization with Pickle
* End-to-End ML Deployment

