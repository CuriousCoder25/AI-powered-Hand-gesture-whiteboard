<!-- ASCII Art Header -->
 __  ___     _            _       _               _ 
/  |/  /__ _(_)__  ___   | |__ _ (_)__  ___ _ __ (_)

/ /|/ / _ / / _ \/ -_) | / _ || / |/ _ \ ' | |
// //_,/////_/ |_,|/ _|_/ ./||
|__/ ||

🎨 AI-powered Hand Gesture Whiteboard
✋ Draw with your finger. Express like a free soul.


---

## 🧠 What is this?

A web-based whiteboard that lets you **draw in the air** using your **index finger** — no mouse or stylus needed!  
Built using [TensorFlow.js](https://www.tensorflow.org/js) + [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands), this app captures your hand movements in real-time and converts gestures into drawings on a digital canvas.

---

## 🚀 Demo

> Coming soon — drop in a screen recording or GIF here when ready!  
<!-- Example: ![Demo](https://github.com/CuriousCoder25/AI-powered-Hand-gesture-whiteboard/raw/main/demo.gif) -->

---

## 🛠️ Features

- ✍️ **Draw with your index finger**
- 🧽 **Toggle between Drawing and Erasing** mode
- 🎥 **Real-time hand tracking** via webcam
- 🧊 **Smooth drawing motion** with easing
- 💡 **No installation needed** — runs in your browser

---

## 🧰 Tech Stack

- **HTML, CSS, JavaScript**
- **TensorFlow.js** — hand tracking framework
- **MediaPipe Hands** — landmark detection
- **Canvas API** — rendering strokes

---

## 📂 File Structure

📁 AI-powered-Hand-gesture-whiteboard/
├── index.html # Main HTML layout
├── styles.css # Simple UI styling
└── script.js # Drawing & gesture logic using MediaPipe


---

## 📸 How It Works

1. Load the app and allow **webcam** access
2. The app tracks your **index finger tip** (landmark 8)
3. As you move, it draws on a canvas behind you
4. Hit **"Eraser"** to switch between draw and erase modes

---

## 🧪 Run Locally

Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/CuriousCoder25/AI-powered-Hand-gesture-whiteboard.git
cd AI-powered-Hand-gesture-whiteboard

Then double-click index.html or use a local server (like Live Server in VS Code).

⚠️ Make sure your webcam is enabled and you allow camera access in the browser.

🙏 Acknowledgements

MediaPipe Hands

TensorFlow.js

JSDelivr CDN

🪶 License
This project is licensed under the MIT License.
Feel free to fork, remix, or paint outside the lines.

🕊️ Outro
A canvas of code, drawn by a free soul – CuriousCoder25