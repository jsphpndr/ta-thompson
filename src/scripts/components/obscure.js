(() => {
  let newNode;

  document.querySelectorAll('[obscure]').forEach(elem => {

    newNode = document.createElement('span');
    newNode.innerHTML = elem.innerHTML;
    // elem.classList ? newNode.classList = elem.classList : newNode.removeAttribute("class");
    elem.hasAttribute('class') ? newNode.classList = elem.classList : false;
    elem.id ? newNode.id = elem.id : false;

    for (let prop in elem.dataset) {
        newNode.innerHTML = newNode.innerHTML.replaceAll('%' + prop.replace('p', ''), elem.dataset[prop]);
    }

    elem.parentNode.insertBefore(newNode, elem);
    elem.remove();

  });

})();


// function createRipple(event) {
//   const button = event.currentTarget;

//   const circle = document.createElement("span");
//   const diameter = Math.max(button.clientWidth, button.clientHeight);
//   const radius = diameter / 2;

//   circle.style.width = circle.style.height = `${diameter}px`;
//   circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
//   circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
//   circle.classList.add("ripple");

//   const ripple = button.getElementsByClassName("ripple")[0];

//   if (ripple) {
//     ripple.remove();
//   }

//   button.appendChild(circle);
// }

// const buttons = document.querySelectorAll('.btn--ghost--sm, .tag__link');
// for (const button of buttons) {
//   button.addEventListener("click", createRipple);
// }