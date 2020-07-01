// <⚠️ DONT DELETE THIS ⚠️>

// <⚠️ /DONT DELETE THIS ⚠️>
const colors = ["#2980B9", "#F7DC6F", "#7F8C8D"];
const body = document.querySelector("body");
body.innerText = "Hello!";

const windowResized = {
    resize: () => {
        const width = window.innerWidth;
        if (width < 600) {
            document.body.style.backgroundColor = colors[0];
        } else if (width < 600 || width > 800) {
            document.body.style.backgroundColor = colors[1];
        } else if (width < 800 || width > 1000) {
            document.body.style.backgroundColor = colors[2];
        }
    }
};
const init = () => {
    window.addEventListener("resize", windowResized.resize);
};
init();


/*
import "./styles.css";

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);

*/

