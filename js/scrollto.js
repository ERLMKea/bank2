out("jeg er i scrollto");

function doScrolling(ev, scroll) {
  const s3coords = section3.getBoundingClientRect();
  out(s3coords);
  //out(pbGetScrolling.getBoundingClientRect());
  //out(window.pageXOffset, window.pageYOffset);

  //out("Hele synlige skærmbillede / viewport");
  //out(document.documentElement.clientWidth, document.documentElement.clientHeight);
  const js1 = JSON.parse(scroll);
  out(js1.top);

  window.scrollTo({
    left: js1.left,
    top: js1.top,
    behavior: 'smooth'
  });

}

const section3 = document.querySelector('#section--3');
const pbGetScrolling = document.querySelector('.pbGetScroll');
const inpScrolling = document.querySelector('#inpScrolling');
pbGetScrolling.addEventListener('click', btn => doScrolling(btn, inpScrolling.value));
