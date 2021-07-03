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
  // table.style.margin = "auto";
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

//Comment section

const textArea = document.getElementById("text-area");
const userInput = document.getElementById("user-name");
const submit = document.getElementById("submit");
const prompt = document.getElementById("feedback-prompt");
const messageBoardSection = document.getElementById("messageBoardSection");

const censorMessages = function (message) {
  if (message.includes("terrible")) {
    message = message.replaceAll("terrible", "terrific");
  }
  if (message.includes("shit")) {
    message = message.replaceAll("shit", "sensational");
  }
  if (message.includes("awful")) {
    message = message.replaceAll("awful", "awesome");
  }
  if (message.includes("bad")) {
    message = message.replaceAll("bad", "great");
  }
  if (message.includes("horrible")) {
    message = message.replaceAll("horrible", "fantastic");
  }

  return message;
};

const postComment = function (username, comment) {
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerHTML = `<span class="user-comment">${username}</span><p class="posted-comment">${comment}</p>`;
  messageBoardSection.appendChild(newComment);
};

const logMessages = function () {
  let messageContent = textArea.value;
  let userName = userInput.value;

  let finalMessage = censorMessages(messageContent);
  postComment(userName, finalMessage);

  textArea.remove();
  userInput.remove();
  submit.remove();
  prompt.innerText = "Thanks for your comment!";
};

submit.addEventListener("click", logMessages);

//Render Description

const phoneBoxContainer = document.getElementById("phone-box-container");

const galaxyHome = document.getElementById("galaxy-home");
const iphoneHome = document.getElementById("iphone-home");
const oppoHome = document.getElementById("oppo-home");
const xiaomiHome = document.getElementById("xiaomi-home");
const nokiaHome = document.getElementById("nokia-home");
const huaweiHome = document.getElementById("huawei-home");

const phoneBoxes = document.getElementsByClassName("home");

// const phoneDescriptionContainer = document.getElementById(
//   "phone-description-container"
// );

const galaxyActive = document.getElementById("galaxy-active");
const iphoneActive = document.getElementById("iphone-active");
const oppoActive = document.getElementById("oppo-active");
const xiaomiActive = document.getElementById("xiaomi-active");
const nokiaActive = document.getElementById("nokia-active");
const huaweiActive = document.getElementById("huawei-active");

//Trying to implement select day
// const getCurrentlySelectedPhone = function () {
//   return document.querySelector(".selected");
// };

// //Still Trying
// nokiaHome.addEventListener("click", function () {
//   nokiaHome.classList.add("selected");
//   const newPhoneDesc = phoneDescriptionContainer.appendChild("div");
//   newPhoneDesc.innerHTML = `<div class="phone-box clicked">
//   <h3>Nokia</h3>
//   <img src="storeImages/nokia.png" alt="nokia" />
//   <h4 class="price">€80</h4>
// </div>
// <div class="description-clicked">
//   <h4>About:</h4>
//   <p>The OG. What else needs to be said. Even has Snake game.</p>
//   <a href="">SHOP NOW</a>
// </div>`;
// });

/*
const createPhoneDescriptionContainer = function (phone) {
  let phoneAbout;
  if (phone == "galaxy") {
    let phoneAbout = `<p>
    The Samsung Galaxy combines streamlined design aesthetics with
    classic colours. With its refined curves, it makes it comfortable
    to hold and provides easy screen navigation.
  </p>`;
  }

  let phoneDescriptionContainer = createElement("div");
  phoneDescriptionContainer.id = "phone-description-container";
  phoneDescriptionContainer.innerHTML = `<div id="${phone}-active" class="clicked-phone">
  <div class="phone-box clicked">
    <h3>${phone}</h3>
    <img src="storeImages/${phone}.png" alt="galaxy" />
    <h4 class="price">€595</h4>
  </div>
  <div class="description-clicked">
    <h4>About:</h4>
   ${phoneAbout}
    <a href="">SHOP NOW</a>
  </div>
</div>`;
};*/

// const currentlySelectedPhoneNode = getCurrentlySelectedPhone() // Looking for any "selected" day in the page
//   if (currentlySelectedPhoneNode !== null) { // If there is any selected day...
//       currentlySelectedPhoneNode.classList.remove("selected") // ...we remove the "selected" class from it
//   }

const showGalaxy = function () {
  iphoneActive.classList.add("hidden");
  galaxyActive.classList.remove("hidden");
  oppoActive.classList.add("hidden");
  xiaomiActive.classList.add("hidden");
  nokiaActive.classList.add("hidden");
  huaweiActive.classList.add("hidden");
};

const showIphone = function () {
  iphoneActive.classList.remove("hidden");
  galaxyActive.classList.add("hidden");
  oppoActive.classList.add("hidden");
  xiaomiActive.classList.add("hidden");
  nokiaActive.classList.add("hidden");
  huaweiActive.classList.add("hidden");
};

const showOppo = function () {
  iphoneActive.classList.add("hidden");
  galaxyActive.classList.add("hidden");
  oppoActive.classList.remove("hidden");
  xiaomiActive.classList.add("hidden");
  nokiaActive.classList.add("hidden");
  huaweiActive.classList.add("hidden");
};

const showXiaomi = function () {
  iphoneActive.classList.add("hidden");
  galaxyActive.classList.add("hidden");
  oppoActive.classList.add("hidden");
  xiaomiActive.classList.remove("hidden");
  nokiaActive.classList.add("hidden");
  huaweiActive.classList.add("hidden");
};

const showNokia = function () {
  iphoneActive.classList.add("hidden");
  galaxyActive.classList.add("hidden");
  oppoActive.classList.add("hidden");
  xiaomiActive.classList.add("hidden");
  nokiaActive.classList.remove("hidden");
  huaweiActive.classList.add("hidden");
};

const showHuawei = function () {
  iphoneActive.classList.add("hidden");
  galaxyActive.classList.add("hidden");
  oppoActive.classList.add("hidden");
  xiaomiActive.classList.add("hidden");
  nokiaActive.classList.add("hidden");
  huaweiActive.classList.remove("hidden");
};

galaxyHome.addEventListener("click", showGalaxy);
iphoneHome.addEventListener("click", showIphone);
nokiaHome.addEventListener("click", showNokia);
xiaomiHome.addEventListener("click", showXiaomi);
huaweiHome.addEventListener("click", showHuawei);
oppoHome.addEventListener("click", showOppo);

iphoneActive.classList.add("hidden");
galaxyActive.classList.add("hidden");
oppoActive.classList.add("hidden");
xiaomiActive.classList.add("hidden");
nokiaActive.classList.add("hidden");
huaweiActive.classList.add("hidden");

showGalaxy();
// phoneBoxContainer.classList.add("hidden");

//  To do: Tidy up js
//  To do: ensure all requirements are met
//  To do: increase comment section censor functionality
//  To do: add in Daniele selectDay function for active phone
//  To do: use createMeeting function for comment section
//  To do: use local storage to store comments

// const selectDay = function(event){
//   // DESELECT THE CURRENTLY SELECTED DAY
//   const currentlySelectedDayNode = getCurrentlySelectedDay() // Looking for any "selected" day in the page
//   if (currentlySelectedDayNode !== null) { // If there is any selected day...
//       currentlySelectedDayNode.classList.remove("selected") // ...we remove the "selected" class from it
//   }
// const getCurrentlySelectedDay = function(){
//   return document.querySelector(".selected")
// }
