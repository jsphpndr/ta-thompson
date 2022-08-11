let timeOfDay = document.getElementById('timeOfDay');
let today = new Date();
let hourNow = today.getHours();
let greeting = 'day'; // Undefined 

if (hourNow > 0) {
  greeting = 'morning';
}

if (hourNow > 12) {
  greeting = 'afternoon';
}

if (hourNow > 18) {
  greeting = 'evening';
}

timeOfDay.innerHTML = greeting;


function startCountdown(seconds) {
  let counter = seconds;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    
    if (counter > 0 ) {
      document.getElementById("countdown").innerHTML = counter - 1
    }

    if (counter < 1 ) {
      window.location = "/";
    }

  }, 1000);
}

startCountdown(6);