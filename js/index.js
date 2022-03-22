let index = document.querySelector('.index');
let h1 = document.querySelector('h1');
let pageLink = document.querySelector('.page-link');
let home = document.querySelector('.home');
setTimeout(function() {
  if(h1)h1.classList.remove('up');
  h1Up();
},500);

// if(h1)h1.addEventListener('transitionend', aniTxt);
// function aniTxt() {
//   let ani = document.querySelector('.ani');
//   let aniTxt = ['CEO Letter','About Us','Reports','News Release','Care In Space','Link to Sub. Co'];
//   let i = aniTxt.length;
//   let j = 0;
//   let aniInit = setInterval(function() {
//     if(j < i) {
//       ani.innerHTML = '';
//       ani.innerHTML = aniTxt[j];
//       j++;
//     } else {
//       clearInterval(aniInit);
//       ani.innerHTML = '';
//       ani.classList.remove('ready');
//       h1Up();
//     }
//   }, 300);
// }

function h1Up() {
  if(h1)h1.classList.remove('ready');
  setTimeout(function() {
    pageLinkUP();
  },700)
}

function pageLinkUP() {
  if(pageLink)pageLink.classList.remove('ready');
  setTimeout(function() {
    if(home)home.classList.remove('ready');
    vBgUp();
  },1000)
}

let vBg = document.querySelector('.v-bg');
function vBgUp() {
  setTimeout(function() {
    if(vBg)vBg.classList.remove('ready');
  },500)
}

//ceo
let select = document.querySelector('.select-box');
let ceoSelect = document.querySelector('.select-box ul');
if(ceoSelect)ceoSelect.addEventListener('click', function() {
  if(select.classList.contains('active')) {
    select.classList.remove('active');
  } else {
    select.classList.add('active');
  }
});

let ceo = document.querySelector('.ceo');
let section = document.querySelector('section');
let selectList = document.querySelectorAll('.select-box li a');
Array.prototype.forEach.call(selectList, function(e) {
  e.addEventListener('click', function() {
    let idx = e.getAttribute('data-list');
    section.setAttribute('data-nm', idx);
  })
});



let mov = document.querySelectorAll('[mov]');
function movCheck() {
  var bottom = window.innerHeight;
  console.log(bottom)
  let i = mov.length;
  var r;
  while(i--) {
    r = mov[i].getBoundingClientRect();
    if (r.top < bottom)mov[i].setAttribute('mov', 'in')
  }
}
window.addEventListener('scroll', movCheck);
window.addEventListener('resize', movCheck);
movCheck();


