'use strict';
const out = (...str) => {console.log(...str)};

out("jeg er i message01");

function showMessage() {
  let strMessage = inpMessage.value;
  message.classList.add('cookie-message');
  strMessage += '<button class="btn btn--close--cookie">Got it!</button>';
  message.innerHTML = strMessage;
  header.append(message);
  //cloneNode makes copy of message div node. full copy if true
  //header.append(message.cloneNode(true));
  const cookClose = document.querySelector('.btn--close--cookie');
  out(cookClose);
  //overfør kode som parameter. enten som anonym funktion
  //pbClose.addEventListener('click', function () {message.remove();});
  //eller som lambda
  cookClose.addEventListener('click', function () {
    message.remove();
  })
  out("col=" + getComputedStyle(message).color);
  out(getComputedStyle(message));
}

const pbGetMessage = document.querySelector(".pbGetMessage");
const inpMessage = document.getElementById("inpMessage");

const header = document.querySelector('.header');
const message = document.createElement('div');

pbGetMessage.addEventListener('click', showMessage);

message.style.width = '50%';
message.style.backgroundColor = '#37383d';

out("color=" + message.style.color);
out("width=" + message.clientWidth);
out("backgroundcolor=" + message.backgroundColor);

out(getComputedStyle(message).color);
