document.getElementById("interp2DForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const x1 = parseFloat(document.getElementById("x1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);

  const f_x1y1 = parseFloat(document.getElementById("f_x1y1").value);
  const f_x1y2 = parseFloat(document.getElementById("f_x1y2").value);
  const f_x2y1 = parseFloat(document.getElementById("f_x2y1").value);
  const f_x2y2 = parseFloat(document.getElementById("f_x2y2").value);

  // 1️⃣ Interpolate along Y for X1 and X2
  const f_x1y = f_x1y1 + ((f_x1y2 - f_x1y1) / (y2 - y1)) * (y - y1);
  const f_x2y = f_x2y1 + ((f_x2y2 - f_x2y1) / (y2 - y1)) * (y - y1);

  document.getElementById("res1").value = f_x1y.toFixed(4);
  document.getElementById("res2").value = f_x2y.toFixed(4);

  // 2️⃣ Interpolate along X to get final value
  const f_xy = f_x1y + ((f_x2y - f_x1y) / (x2 - x1)) * (x - x1);

  document.getElementById("finalRes").value = f_xy.toFixed(4);
});
