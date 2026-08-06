const message = document.getElementById("message");
const counter = document.getElementById("counter");
const predict = document.getElementById("predict");
const example = document.getElementById("example");
const result = document.getElementById("result");
const statusText = document.getElementById("statusText");
const statusIcon = document.getElementById("statusIcon");
const confidence = document.getElementById("confidence");
const confidenceFill = document.getElementById("confidenceFill");
const explanation = document.getElementById("explanation");
const reset = document.getElementById("reset");



message.addEventListener("input", () => {
    counter.textContent = message.value.length + " characters";
});

const examples = [

    // ===== SPAM =====
    "Congratulations! You have won a free iPhone 15. Click here now to claim your reward before it expires.",
    "URGENT! Your account has been selected to receive a $1,000 cash reward. Verify your details immediately to claim your prize.",
    "Exclusive Offer! Get 90% OFF premium products today only. Buy now and enjoy free shipping. Limited time offer!",


    // ===== HAM =====
    "Hey, are we still meeting tomorrow at 3 PM? Let me know if you want to change the location.",
    "Hi, I finished the project report and uploaded it to the shared folder. Please review it before tomorrow's meeting.",
    "Happy Birthday! Wishing you an amazing day filled with happiness and success. Have a wonderful celebration!"

];


example.onclick = () => {
    const randomMessage = examples[Math.floor(Math.random() * examples.length)];
    message.value = randomMessage;
    counter.textContent = message.value.length + " characters";

};


predict.onclick = async () => {
    if (message.value.trim() == "") {
        alert("Enter a message first");
        return;
    }

    predict.innerHTML = "Analyzing...";

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message.value
            })

        });


        const data = await response.json();

        let spam = data.prediction === "spam";
        let score = data.confidence;

        result.classList.remove("hidden");
        result.classList.remove("spam", "ham");

        if (spam) {
            result.classList.add("spam");
            statusIcon.textContent = "!";
            statusText.textContent = "SPAM DETECTED";
            confidence.textContent = score + "%";
            explanation.textContent =
                "This message contains patterns commonly associated with spam, such as promotional language or suspicious content.";

        } else {
            result.classList.add("ham");
            statusIcon.textContent = "✓";
            statusText.textContent = "SAFE MESSAGE";
            confidence.textContent = score + "%";
            explanation.textContent =
                "This message appears legitimate and does not contain strong spam indicators.";

        }

        confidenceFill.style.width = score + "%";

    } catch (error) {
        console.error("API Error:", error);
        alert("Could not connect to Spam Detector API.");

    }

    predict.innerHTML = "Analyze Message →";

};



reset.onclick = () => {
    result.classList.add("hidden");
    message.value = "";
    counter.textContent = "0 characters";

};
