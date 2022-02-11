const body = document.querySelector("body");

function changeBackgroundColor() {
  const windowWidth = window.innerWidth;
  // console.log(windowWidth);
  const fullScreen = screen.availWidth;

  if (windowWidth > fullScreen * (3 / 5)) {
    body.className = "wideWidth";
  } else if (windowWidth > fullScreen * (1 / 3)) {
    body.className = "midWidth";
  } else if (windowWidth > 0) {
    body.className = "narrowWidth";
  }
  // console.log(body.className);
}

window.addEventListener("resize", changeBackgroundColor);
