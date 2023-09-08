function displayCurrentUTCTime() {
  const utcTimeElement = document.getElementById('currentUTCTime');
  const currentUTCTimeInMillis = Date.now();
  utcTimeElement.textContent = currentUTCTimeInMillis

  console.log(currentUTCTimeInMillis);
}

setInterval(displayCurrentUTCTime, 1000);
