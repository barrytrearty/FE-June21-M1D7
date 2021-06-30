"strict mode";

const h1 = document.getElementById("h1");
const body = document.getElementsByTagName("body")[0];
const amazonLinks = document.getElementsByTagName("a");
const images = document.getElementsByTagName("img");
const footer = document.getElementById("footer");
const prices = document.getElementsByClassName("price");
const table = document.getElementById("table");
const descriptions = document.getElementsByClassName("description");
const phoneBox = document.getElementsByClassName("phone-box");

//Functions
const changeH1Text = function () {
  h1.innerText = "The Happy Happy Smartphone Store";
};

const changeFooter = function () {
  footer.innerText = "Find us on 420 Sixty Nine Street, Las Vegas";
};
const addClassToLinks = function () {
  for (let link of amazonLinks) {
    link.classList.add("cssClassLink");
  }
};
const toggleImage = function () {
  for (let image of images) {
    image.classList.toggle("cssClassImage");
  }
};

//Styling
const changeImageSize = function () {
  for (image of images) {
    image.style.width = "300px";
  }
};
const addSomeStyle = function () {
  body.style.textAlign = "center";
  body.style.fontFamily =
    "'Lato', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif";
  body.style.fontSize = "20px";
  footer.style.fontSize = "20px";
  footer.style.fontWeight = "bold";
  table.style.margin = "auto";
};

const alignDescriptions = function () {
  for (let description of descriptions) {
    description.style.textAlign = "left";
  }
};

window.onload = function () {
  changeImageSize();
  //  toggleImage()
  alignDescriptions();
  addSomeStyle();
};

//Change price color function
const createHexadecimalValue = function () {
  let hexadecimels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexadecimelValue = "";
  let randomNumber;
  for (i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 16);
    let singleValue = hexadecimels[randomNumber];
    hexadecimelValue += singleValue;
  }
  console.log(hexadecimelValue);
  return hexadecimelValue.toString();
};

const changePriceColor = function () {
  let randomColor = `#${createHexadecimalValue()}`;
  for (let price of prices) {
    price.style.color = randomColor;
  }
};

//  const movePhoneBox = function(){
//    phoneBox.classList.add("phone-box-click")
//  }

//  const changeBackgroundColor = function(){
//    body.style.background = "linear-gradient(360deg, #259bd1, #8b6a8a)"
//  }

const changeBackgroundColorRandomly = function () {
  let randomBgColor = `linear-gradient(90deg, #${createHexadecimalValue()}, #${createHexadecimalValue()})`;
  body.style.background = randomBgColor;
};

//Welcome function invokes all the functions
const welcome = function () {
  changeH1Text();
  addClassToLinks();
  changeBackgroundColor();
  //  toggleImage()
  //  addSomeStyle()
};

const textArea = document.getElementById("text-area");
const userInput = document.getElementById("user-name");
const submit = document.getElementById("submit");

const censorMessages = function (message) {
  if (message.includes("terrible")) {
    message = message.replace("terrible", "great");
    return message;
  }
};

const logMessages = function () {
  let messageContent = textArea.value;
  let userName = userInput.value;

  let finalMessage = censorMessages(messageContent);

  console.log(userName, finalMessage);
};

submit.addEventListener("click", logMessages);

const phoneBoxContainer = document.getElementById("phone-box-container");
const galaxyActive = document.getElementById("galaxy-active");
const iphoneActive = document.getElementById("iphone-active");
const oppoActive = document.getElementById("oppo-active");
const xiaomiActive = document.getElementById("xiaomi-active");
const nokiaActive = document.getElementById("nokia-active");
const huaweiActive = document.getElementById("huawei-active");

// iphoneActive.classList.add("hidden");
// galaxyActive.classList.add("hidden");
// oppoActive.classList.add("hidden");
// xiaomiActive.classList.add("hidden");
// nokiaActive.classList.add("hidden");
// huaweiActive.classList.add("hidden");
// phoneBoxContainer.classList.add("hidden");
