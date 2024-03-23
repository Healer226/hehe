const mydiv = document.getElementById("div");
let x = 0;
let y = 0;
const move = 10;
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y = y - move;
        break;
      case "ArrowDown":
        y = y + move;
        break;
      case "ArrowLeft":
        x = x - move;
        break;
      case "ArrowRight":
        x = x + move;
        break;
    }
    console.log(y);
    mydiv.textContent = `You in morning was the prettiest thing 🤌🏼.`;
    mydiv.style.top = `${y}px`;
    mydiv.style.left = `${x}px`;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key.startsWith("Arrow")) {
    mydiv.textContent = `Heh 😅`;
  }
});
