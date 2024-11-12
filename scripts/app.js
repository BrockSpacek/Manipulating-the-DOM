// alert();

let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");
let btnchange11 = document.getElementById("btnchange11");

let changeElement1 = document.getElementById("changeElement1");
let changeElement2 = document.getElementById("changeElement2");
let changeElement3 = document.getElementById("changeElement3");
let changeElement4 = document.getElementById("changeElement4");
let changeElement5 = document.getElementById("changeElement5");
let changeElement6 = document.getElementById("changeElement6");
let changeElement7 = document.getElementById("changeElement7");
let changeElement8 = document.getElementById("changeElement8");
let changeElement9 = document.getElementById("changeElement9");
let changeElement10 = document.getElementById("changeElement10");

let changeRule1 = document.getElementById("changeRule1");
let changeRule2 = document.getElementById("changeRule2");
let changeRule3 = document.getElementById("changeRule3");

let toggle = true;
let toggle2 = true;
let toggle3 = true;
let toggle4 = true;
let toggle5 = true;
let toggle6 = true;
let toggle7 = true;
let toggle8 = true;
let toggle9 = true;
let toggle10 = true;
let toggle11 = true;

btnChange1.addEventListener("click", function (event) {
  if (toggle == false) {
    changeRule1.innerText = "There are multiple buttons";
    changeRule2.innerText = "Each one will change something on the page";
    changeRule3.innerText = "Pay Attention to what each one does!";
    toggle = true;
  } else {
    changeRule1.innerText = "You are such a rule breaker";
    changeRule2.innerText =
      "Maybe you should stick to actually playing with the buttons below";
    changeRule3.innerText = "You might get lost young one";
    toggle = false;
  }
});

btnChange2.addEventListener("click", function (event) {
  if (toggle2 == false) {
    changeElement1.innerText =
      "Item 1";
    toggle2 = true;
  } else {
    changeElement1.innerText = "Congratulations!!! You pressed the button and changed the text";
    toggle2 = false;
  }
});

btnChange3.addEventListener("click", function (event) {
  if (toggle3 == false) {
    changeElement2.innerText = "Item 2";
    changeElement2.className = "";
    toggle3 = true;
  } else {
    changeElement2.innerText = "Paint with all the colors of the wind!";
    changeElement2.className = "itemTwoColor";
    toggle3 = false;
  }
});

btnChange4.addEventListener("click", function (event) {
  if (toggle4 == false) {
    changeElement3.innerText = "Item 3";
    changeElement3.className = "";
    toggle4 = true;
  } else {
    changeElement3.innerText = "Look at those letters!";
    changeElement3.className = "itemThreeFonts";
    toggle4 = false;
  }
});

btnChange5.addEventListener("click", function (event) {
  if (toggle5 == false) {
    changeElement4.innerText = "Item 4";
    changeElement4.className = "";
    toggle5 = true;
  } else {
    changeElement4.innerText = "My goodess you have grown!";
    changeElement4.className = "itemFourSize";
    toggle5 = false;
  }
});

btnChange6.addEventListener("click", function (event) {
  if (toggle6 == false) {
    changeElement5.innerText = "Item 5";
    changeElement5.className = "";
    toggle6 = true;
  } else {
    changeElement5.innerText = "";
    changeElement5.className = "itemFiveImage";
    toggle6 = false;
  }
});

btnChange7.addEventListener("click", function (event) {
  if (toggle7 == false) {
    changeElement6.innerText = "Item 6";
    toggle7 = true;
  } else {
    changeElement6.innerText = "";
    toggle7 = false;
  }
});

btnChange8.addEventListener("click", function (event) {
  if (toggle8 == false) {
    changeElement7.innerText = "Item 7";
    changeElement7.className = "";
    toggle8 = true;
  } else {
    changeElement7.innerText = "I feel like Houdini appearing before you!";
    changeElement7.className = "buttonchange7 " + "fadeIn";
    toggle8 = false;
  }
});

btnChange9.addEventListener("click", function (event) {
  if (toggle9 == false) {
    changeElement8.innerText = "Item 8";
    changeElement8.className = "";
    toggle9 = true;
  } else {
    changeElement8.innerText = "Woah... now I feel really dizzy...";
    changeElement8.className = "buttonchange8 " + "spinner";
    toggle9 = false;
  }
});

btnChange10.addEventListener("click", function (event) {
  if (toggle10 == false) {
    changeElement9.innerText = "Item 9"
    changeElement9.className = "";
    toggle10 = true;
  } else {
    changeElement9.innerText = "Since you pressed on me... my heart can't stop beating";
    changeElement9.className = "buttonchange9 " + "heartbeat";
    toggle10 = false;
  }
});

btnChange11.addEventListener("click", function (event) {
  if (toggle11 == false) {
    changeElement10.innerText = "Item 10";
    changeElement10.className = "";
    toggle11 = true;
  } else {
    changeElement10.innerText = "Baby, I'm just gonna shake, shake, shake, shake, shake";
    changeElement10.className = "buttonchange10 " + "shake";
    toggle11 = false;
  }
});
