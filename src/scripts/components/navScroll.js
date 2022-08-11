const container = document.getElementById('container')
const navbar = document.getElementById('navbar');

let prevScrollPos = container.scrollTop;

container.onscroll = function changeClass() {
  
  const currentScrollPos = container.scrollTop;
  
  if(currentScrollPos > 100){
      navbar.classList.add('navbar--scrolled');
    }
    else {
      navbar.classList.remove('navbar--scrolled');
    }

  if (prevScrollPos > currentScrollPos || prevScrollPos < 0) {
      navbar.style.top = 0;
  } else {
      navbar.style.top = `${-navbar.clientHeight}px`;
  }
  
  prevScrollPos = currentScrollPos;


  // console.log(currentScrollPos)
  
}

console.log(window.location.href)

// var lastpos = 0;
// document.addEventListener('scroll',function() {
//  let pos = document.documentElement.scrollTop || document.body.scrollTop; // use window.pageYOffset?
//       let windowHeight = document.documentElement.clientHeight || window.innerHeight;
//       let sHeight = document.documentElement.scrollHeight;
//       let maxScrollHeight = sHeight-windowHeight;
//       if (pos >= maxScrollHeight) {
//         pos = maxScrollHeight;
//       }
//       let pWidth = ((pos/maxScrollHeight)*100);

//       // let top = document.getElementById('header');
//       // let percent = document.getElementById('percent');

//       if (pos>top.clientHeight && lastpos<=pos) {
//         top.style.top = (-top.clientHeight)+'px';
//       } else {
//         top.style.top = 0;
//       }
//       // percent.style.width = Math.ceil(pWidth)+'%';
//       lastpos = pos;

//     },true);