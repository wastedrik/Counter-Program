let currentNumbers = document.getElementById("countNumber").textContent;
currentNumbers = Number(currentNumbers);

document.getElementById("decrease").onclick = function() {
  currentNumbers -= 1;
  document.getElementById("countNumber").textContent = String(currentNumbers);
}

document.getElementById("reset").onclick = function() {
  currentNumbers = 0;
  document.getElementById("countNumber").textContent = String(currentNumbers);
}

document.getElementById("increase").onclick = function() {
  currentNumbers += 1;
  document.getElementById("countNumber").textContent = String(currentNumbers);
}