let countdown = parseInt(document.getElementById("countdown").innerHTML);

const intervalId = setInterval(() => {
  countdown -= 1;
  document.getElementById("countdown").innerHTML = countdown;
}, 1000);

const timeoutId = setTimeout(() => {
  clearInterval(intervalId);
  window.location.href = "/";
}, countdown * 1000);
