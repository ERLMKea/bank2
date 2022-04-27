const out = (...str) => console.log(...str);

function showMessage() {
  let strMessage = inpMessage.value;
  message.classList.add('cookie-message');
  strMessage += '<button class="btn btn--close--cookie">Got it!</button>';
  message.innerHTML = strMessage;
  header.append(message);
  //cloneNode makes copy of message div node. full copy if true
  //header.append(message.cloneNode(true));

  const pbClose = document.querySelector('.btn--close--cookie');
  out(pbClose);

  //overfør kode som parameter. enten som anonym funktion
  //pbClose.addEventListener('click', function () {message.remove();});
  //eller som lambda
  pbClose.addEventListener('click', e => message.remove());

  out(message.style.width);
  out(getComputedStyle(message).width);
  out(getComputedStyle(message).color);
  out(getComputedStyle(message).backgroundColor);

}

const message = document.createElement('div');
const pbMessage = document.querySelector(".pbGetMessage");
const inpMessage = document.querySelector("#inpMessage");
const header = document.querySelector('.header');
pbMessage.addEventListener('click', showMessage);

out(message.style.width);
out(getComputedStyle(message).width);
out(getComputedStyle(message).color);
out(getComputedStyle(message).backgroundColor);

//message.style.width = '80%';
out(message.style.width);
