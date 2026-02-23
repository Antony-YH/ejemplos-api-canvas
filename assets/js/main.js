function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  // Limpia todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO RELLENO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARITA CON arc()
  // =============================
  ctx.beginPath();
  ctx.arc(400, 100, 50, 0, Math.PI * 2, true);

  ctx.moveTo(435, 100);
  ctx.arc(400, 100, 35, 0, Math.PI, false);

  ctx.moveTo(390, 90);
  ctx.arc(385, 90, 5, 0, Math.PI * 2, true);

  ctx.moveTo(420, 90);
  ctx.arc(415, 90, 5, 0, Math.PI * 2, true);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Triángulo relleno
  ctx.beginPath();
  ctx.moveTo(525, 25);
  ctx.lineTo(605, 25);
  ctx.lineTo(525, 105);
  ctx.fill();

  // Triángulo contorneado
  ctx.beginPath();
  ctx.moveTo(625, 125);
  ctx.lineTo(625, 45);
  ctx.lineTo(545, 125);
  ctx.closePath();
  ctx.stroke();


  // =============================
  // ARCOS EN MATRIZ
  // =============================
  ctx.strokeStyle = "#0f172a";
  ctx.fillStyle = "#38bdf8";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 50 + j * 60;
      const y = 220 + i * 60;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }


  // =============================
  // CURVA BÉZIER (CORAZÓN)
  // =============================
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.moveTo(350, 260);
  ctx.bezierCurveTo(350, 257, 345, 245, 325, 245);
  ctx.bezierCurveTo(295, 245, 295, 282.5, 295, 282.5);
  ctx.bezierCurveTo(295, 300, 315, 322, 350, 340);
  ctx.bezierCurveTo(385, 322, 405, 300, 405, 282.5);
  ctx.bezierCurveTo(405, 282.5, 405, 245, 375, 245);
  ctx.bezierCurveTo(360, 245, 350, 257, 350, 260);
  ctx.fill();


// =====================================================
// PAC-MAN
// =====================================================

  const dx = 470;
  const dy = 200;

  roundedRect(ctx, 12+dx, 12+dy, 150, 150, 15);
  roundedRect(ctx, 19+dx, 19+dy, 150, 150, 9);
  roundedRect(ctx, 53+dx, 53+dy, 49, 33, 10);
  roundedRect(ctx, 53+dx, 119+dy, 49, 16, 6);
  roundedRect(ctx, 135+dx, 53+dy, 49, 33, 10);
  roundedRect(ctx, 135+dx, 119+dy, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37+dx, 37+dy, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31+dx, 37+dy);
  ctx.fill();

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51+dx + i * 16, 35+dy, 4, 4);
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115+dx, 51+dy + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51+dx + i * 16, 99+dy, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83+dx, 116+dy);
  ctx.lineTo(83+dx, 102+dy);
  ctx.bezierCurveTo(83+dx, 94+dy, 89+dx, 88+dy, 97+dx, 88+dy);
  ctx.bezierCurveTo(105+dx, 88+dy, 111+dx, 94+dy, 111+dx, 102+dy);
  ctx.lineTo(111+dx, 116+dy);
  ctx.lineTo(106.333+dx, 111.333+dy);
  ctx.lineTo(101.666+dx, 116+dy);
  ctx.lineTo(97+dx, 111.333+dy);
  ctx.lineTo(92.333+dx, 116+dy);
  ctx.lineTo(87.666+dx, 111.333+dy);
  ctx.lineTo(83+dx, 116+dy);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91+dx, 96+dy);
  ctx.bezierCurveTo(88+dx, 96+dy, 87+dx, 99+dy, 87+dx, 101+dy);
  ctx.bezierCurveTo(87+dx, 103+dy, 88+dx, 106+dy, 91+dx, 106+dy);
  ctx.bezierCurveTo(94+dx, 106+dy, 95+dx, 103+dy, 95+dx, 101+dy);
  ctx.bezierCurveTo(95+dx, 99+dy, 94+dx, 96+dy, 91+dx, 96+dy);
  ctx.moveTo(103+dx, 96+dy);
  ctx.bezierCurveTo(100+dx, 96+dy, 99+dx, 99+dy, 99+dx, 101+dy);
  ctx.bezierCurveTo(99+dx, 103+dy, 100+dx, 106+dy, 103+dx, 106+dy);
  ctx.bezierCurveTo(106+dx, 106+dy, 107+dx, 103+dy, 107+dx, 101+dy);
  ctx.bezierCurveTo(107+dx, 99+dy, 106+dx, 96+dy, 103+dx, 96+dy);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101+dx, 102+dy, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89+dx, 102+dy, 2, 0, Math.PI * 2, true);
  ctx.fill();


  // =============================
  // Path2D
  // =============================
  const rectangle = new Path2D();
  rectangle.rect(50, 480, 80, 80);

  const circle = new Path2D();
  circle.arc(200, 520, 40, 0, 2 * Math.PI);

  ctx.strokeStyle = "#111827";
  ctx.fillStyle = "#22c55e";

  ctx.stroke(rectangle);
  ctx.fill(circle);
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.closePath();
  ctx.stroke();
}

function initUI() {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  document
    .getElementById("btnRedraw")
    .addEventListener("click", draw);

  window.addEventListener("resize", draw);

  draw();
}

initUI();
