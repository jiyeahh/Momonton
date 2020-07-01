
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const text = document.getElementsByTagName('h1')[0];

const superEventHandler = {
  mouseOver: () => {
    text.innerHTML = "The mouse is here";
    text.style.color = colors[0];
  },
  mouseGone: () => {
    text.innerHTML = "The mouse is gone";
    text.style.color = colors[1];
  },
  windowResize: () => {
    text.innerHTML = "The window size is resized";
    text.style.color = colors[2];
  },
  mouseRight: () => {
    text.innerHTML = "That was a right click!";
    text.style.color = colors[3];
  }
};


text.addEventListener("mouseenter",superEventHandler.mouseOver);
text.addEventListener("mouseleave",superEventHandler.mouseGone);
window.addEventListener("resize",superEventHandler.windowResize);
window.addEventListener("contextmenu",superEventHandler.mouseRight);