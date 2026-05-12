const canvas = document.getElementById("footer-wave");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 150;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let t = 0;
function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let x = 0; x < canvas.width; x++) {
    const y = Math.sin(x * 0.05 + t) * 60 + canvas.height / 2;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "rgba(0, 63, 95, 1)";
  ctx.lineWidth = 3;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#0af";
  ctx.stroke();

  t += 0.05;
  requestAnimationFrame(drawWave);
}
drawWave();