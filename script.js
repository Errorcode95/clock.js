function startTime() {
  const rtc = new Date();

  //local timezone
  let offset = rtc.getTimezoneOffset() / 60;
  let year = rtc.getFullYear();
  let month = rtc.getMonth()+1;
  let date = rtc.getDate();
  let hour = rtc.getHours();
  let minute = rtc.getMinutes();
  let second = rtc.getSeconds();
  let millisecond = rtc.getMilliseconds();

  //utc
  let yearUTC = rtc.getUTCFullYear();
  let monthUTC = rtc.getUTCMonth()+1;
  let dateUTC = rtc.getUTCDate();
  let hourUTC = rtc.getUTCHours();
  let minuteUTC = rtc.getUTCMinutes();

  hour = checkTime00(hour)
  minute = checkTime00(minute);
  second = checkTime00(second);
  hourUTC = checkTime00(hourUTC)
  minuteUTC = checkTime00(minuteUTC);
  millisecond = checkTime000(millisecond);

  document.getElementById('clockLocal').innerHTML =  
  date + "/" + month + "/" + year + " - " + hour + ":" + minute + ":" + second + ":" + millisecond + " UTC" + offset;
  document.getElementById('clockUTC').innerHTML =  
  dateUTC + "/" + monthUTC + "/" + yearUTC + " - " + hourUTC + ":" + minuteUTC + ":" + second + ":" + millisecond + " UTC";
  setTimeout(startTime, 1);
}

function checkTime00(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function checkTime000(i) {
  if (i < 10) {i = "00" + i}
  else if (i < 100 && i > 10) {i = "0" + i}
  else {}
  return i;
} 
