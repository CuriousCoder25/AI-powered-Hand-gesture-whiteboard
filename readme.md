# 🎨 AI-powered Hand Gesture Whiteboard ✋

## 🚀 Overview

Welcome to the **AI-powered Hand Gesture Whiteboard**! This web-based application allows you to **draw in the air using your index finger** — no mouse or stylus required. It captures your hand movements in real-time and converts gestures into drawings on a digital canvas.

Built using cutting-edge technologies like **TensorFlow.js** and **MediaPipe Hands**, this app enables you to create drawings with the power of AI and hand gesture recognition.

---

## 🧠 Features

- ✍️ **Draw with your index finger** – Control your drawing by simply moving your finger.
- 🧽 **Toggle between Drawing and Erasing modes** – Easily switch between drawing and erasing.
- 🎥 **Real-time hand tracking** – Tracks your hand movements through the webcam in real-time.
- 🧊 **Smooth drawing motion** – The app features smooth stroke rendering with easing effects.
- 💡 **No installation required** – Just open it in your browser and start drawing instantly!

---

## 🛠️ Tech Stack

- **HTML, CSS, JavaScript**: For the core functionality and layout.
- **TensorFlow.js**: For real-time hand gesture recognition and tracking.
- **MediaPipe Hands**: Provides hand landmark detection and tracking.
- **Canvas API**: Renders strokes and manages the drawing surface.

---

## 📂 Project Structure

Here’s a breakdown of the project structure:

```bash
📁 AI-powered-Hand-gesture-whiteboard/
├── index.html        # Main HTML layout
├── styles.css        # Simple UI styling
└── script.js         # Logic for drawing & gesture recognition using MediaPipe

📸 How It Works
Launch the app: Open the app in your browser and allow webcam access.

Track hand movements: The app tracks your index finger tip (landmark 8) using MediaPipe.

Draw or erase: As you move your finger, it draws on the canvas. Switch to "Eraser" mode to clear the canvas.

Smooth experience: The drawing is smooth, thanks to real-time hand tracking and motion easing.

🧪 Run Locally
To run the app on your local machine, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/CuriousCoder25/AI-powered-Hand-gesture-whiteboard.git
Navigate to the project directory:

bash
Copy
Edit
cd AI-powered-Hand-gesture-whiteboard
Open index.html in your browser (you can use a local server like Live Server in VS Code for a smoother experience).

Allow webcam access: Make sure your webcam is enabled and the browser prompts you for camera permissions.

⚠️ Prerequisites
Webcam for hand tracking.

A modern browser (Chrome, Firefox, etc.) with WebRTC support.

🙏 Acknowledgements
This project utilizes the following technologies:

MediaPipe Hands for hand landmark detection.

TensorFlow.js for machine learning and gesture recognition.

JSDelivr CDN for serving external libraries.

🪶 License
This project is licensed under the MIT License. Feel free to fork, remix, or contribute to the code.

🕊️ Outro
A canvas of code, drawn by a free soul – CuriousCoder25. 🎨
Now, go ahead, let your creativity flow!