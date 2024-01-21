const sound = new Audio("./click_audio.mp3");
let button = document.getElementById("btn");
let output = document.getElementById("out");
const array = [1, 2, 3, 4, 5, 6];

button.addEventListener("click", () => {
  sound.play();

  var d1 = Math.floor(Math.random() * 6);
  var d2 = Math.floor(Math.random() * 6);
  
  if (array[d1] == 1) {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-one.png";
  } 
  else if (array[d1] == 2) {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-two.png";
  } 
  else if (array[d1] == 3) {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-three.png";
  } 
  else if (array[d1] == 4) {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-four.png";
  } 
  else if (array[d1] == 5) {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-five.png";
  } 
  else {
    const im = document.getElementById("img-1");
    im.src = "./dice-six-faces-six.png";
  }
  if (array[d2] == 1) {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-one.png";
  } 
  else if (array[d2] == 2) {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-two.png";
  } 
  else if (array[d2] == 3) {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-three.png";
  } 
  else if (array[d2] == 4) {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-four.png";
  } 
  else if (array[d2] == 5) {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-five.png";
  } 
  else {
    const im = document.getElementById("img-2");
    im.src = "./dice-six-faces-six.png";
  }
  let str;
  if (array[d1] > array[d2]) {
    str = "Here, Dice-1 is the Winner!!..";
  } 
  else if (array[d1] < array[d2]) {
    str = "Here, Dice-2 is the Winner!!..";
  } 
  else {
    str = "Here, Dice-1 and Dice-2 are the Same!!..";
  }
  output.value = str;
});
