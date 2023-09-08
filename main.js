function updateUTCTime() {
  // const currentTimeMillis = new Date().getTime();
  // const currentTimeUTC = new Date(currentTimeMillis).toUTCString();

  const utcTimeElement = document.getElementById('utc-time');
  const currentUTCTimeInMillis = Date.now();
  console.log(currentUTCTimeInMillis);
  utcTimeElement.textContent = currentUTCTimeInMillis;

  console.log("UTC Time uploaded")
}

document.getElementById('refresh-btn').addEventListener('click', updateUTCTime);

// Initial time update
updateUTCTime();