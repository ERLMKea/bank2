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

function sectionScroll(evt, section) {
  if (section == 1) {
    section1.scrollIntoView({behavior: 'smooth'});
  };
  if (section == 2) {
    section2.scrollIntoView({behavior: 'smooth'});
  };
  if (section == 3) {
    section3.scrollIntoView({behavior: 'smooth'});
  };

}

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');


const pbGetScrolling = document.querySelector('.pbGetScroll');
const inpScrolling = document.querySelector('#inpScrolling');

//expects json object {"top": 1400, "left": 50}
//pbGetScrolling.addEventListener('click', btn => doScrolling(btn, inpScrolling.value));
//bare nummer på section
pbGetScrolling.addEventListener('click', btn => sectionScroll(btn, inpScrolling.value));
