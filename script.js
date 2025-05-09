/* filepath: c:\Users\gaura\Desktop\AI-powered-Hand-gesture-whiteboard\script.js */
const video = document.getElementById('input_video');
const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');
const eraserBtn = document.getElementById('eraserBtn');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let drawing = false;
let prevX = 0, prevY = 0;
let smoothX = 0, smoothY = 0;
const SMOOTHING = 0.2;
let isErasing = false;

eraserBtn.addEventListener('click', () => {
  isErasing = !isErasing;
  eraserBtn.textContent = isErasing ? 'Draw' : 'Eraser';
});

const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.5
});

hands.onResults((results) => {
  ctx.lineWidth = isErasing ? 100 : 4; // Increase line width for eraser
  ctx.strokeStyle = isErasing ? '#ffffff' : '#000000';
  ctx.lineCap = 'round';

  if (results.multiHandLandmarks.length > 0) {
    const index = results.multiHandLandmarks[0][8];
    let targetX = (1 - index.x) * canvas.width; // flip X
    let targetY = index.y * canvas.height;

    // Apply smoothing
    smoothX = smoothX * (1 - SMOOTHING) + targetX * SMOOTHING;
    smoothY = smoothY * (1 - SMOOTHING) + targetY * SMOOTHING;

    if (!drawing) {
      drawing = true;
      prevX = smoothX;
      prevY = smoothY;
    }

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(smoothX, smoothY);
    ctx.stroke();

    prevX = smoothX;
    prevY = smoothY;
  } else {
    drawing = false;
  }
});

const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});
camera.start();