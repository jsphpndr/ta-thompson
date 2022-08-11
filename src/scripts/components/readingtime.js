(() => {

  const readingTime = document.getElementById('readingTime');
  const text = document.getElementById('text').innerText;
  
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  let average;

  average = document.createElement('span');
  average.classList.add('readingTime');
  average.innerText = ` — ${time} min read.`;

  readingTime.parentNode.insertBefore(average, readingTime);
  readingTime.remove();  

})();
