let number = document.getElementById("number1");
let counter = 0;
setInterval(() => {
  if (counter == 70) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = "HTMl " + counter + "%";
    $("#htmlcircle1").css("stroke-dasharray", (6*70));
  }
}, 30);


let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 70) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = "CSS " + counter2 + "%";
    $("#htmlcircle2").css("stroke-dasharray", (6*70));
  }
}, 30);


let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 60) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = "JAVASCRIPT" + counter3 + "%";
    $("#htmlcircle3").css("stroke-dasharray", (6*60));
  }
}, 30);



let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
  if (counter4 == 80) {
    clearInterval();
  } else {
    counter4 += 1;
    number4.innerHTML = "PHP " + counter4 + "%";
    $("#htmlcircle4").css("stroke-dasharray", (6*80));
  }
}, 30);


let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
  if (counter5 == 75) {
    clearInterval();
  } else {
    counter5 += 1;
    number5.innerHTML = "PHP " + counter5 + "%";
    $("#htmlcircle5").css("stroke-dasharray", (6*75));
  }
}, 30);


let number6 = document.getElementById("number6");
let counter6 = 0;
setInterval(() => {
  if (counter6 == 50) {
    clearInterval();
  } else {
    counter6 += 1;
    number6.innerHTML = "AJAX " + counter6 + "%";
    $("#htmlcircle6").css("stroke-dasharray", (6*60));
  }
}, 30);


let number7 = document.getElementById("number7");
let counter7 = 0;
setInterval(() => {
  if (counter7 == 70) {
    clearInterval();
  } else {
    counter7 += 1;
    number7.innerHTML = "JAVA " + counter7 + "%";
    $("#htmlcircle7").css("stroke-dasharray", (6*70));
  }
}, 30);

let number8 = document.getElementById("number8");
let counter8 = 0;
setInterval(() => {
  if (counter8 == 80) {
    clearInterval();
  } else {
    counter8 += 1;
    number8.innerHTML = "C++ " + counter8 + "%";
    $("#htmlcircle8").css("stroke-dasharray", (6*80));
  }
}, 30);


