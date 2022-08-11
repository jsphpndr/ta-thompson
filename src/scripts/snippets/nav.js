window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
      document.getElementById('click').checked = false;
  }
}, true);


// let item = document.getElementById('click');
// let navicon = document.getElementById('navicon');

// function changeCheckbox(event) {
//   switch(item.getAttribute('aria-checked')) {
//       case "true":
//           item.setAttribute('aria-checked', "false");
//           break;
//       case "false":
//           item.setAttribute('aria-checked', "true");
//           break;
//   }
// }

// item.addEventListener('click', changeCheckbox);
// item.addEventListener('keypress', changeCheckbox);

// navicon.addEventListener('click', changeCheckbox);
// navicon.addEventListener('keypress', changeCheckbox);

