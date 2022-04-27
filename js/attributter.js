out('jeg er i attributter');

function showAttribute(evt, domElement) {
  out(domElement);
  const elem = document.querySelector('.'+domElement);
  out(elem.className);
  for (const a of elem.attributes) {
    out(a.name + "=" + a.value);
  }
}

const pbGetAttributter = document.querySelector('.pbGetAttribut');
const inpAttributter = document.querySelector('#inpAttribut');
pbGetAttributter.addEventListener('click', btn => showAttribute(btn, inpAttributter.value));

const logo = document.querySelector('.nav__logo');
out(logo.alt);
out(logo.src);

out(logo.firma);
out(logo.className);

logo.alt = 'Beatiful logo';
out(logo.alt);
out(logo.getAttribute('firma'));
logo.firma = 'kurt';
logo.setAttribute('firma', 'kurt');

document.documentElement.style.setProperty('--color-primary', 'orangered');

