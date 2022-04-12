function startTime() {
    const rtc = new Date();
    let year = rtc.getFullYear();
    let month = rtc.getMonth()+1;
    let date = rtc.getDate();
    let hour = rtc.getHours();
    let minute = rtc.getMinutes();
    let second = rtc.getSeconds();
    let millisecond = rtc.getMilliseconds();
    minute = checkTime00(minute);
    second = checkTime00(second);
    millisecond = checkTime000(millisecond);
    document.getElementById('txt').innerHTML =  date + "/" + month + "/" + year + " - " + hour + ":" + minute + ":" + second + ":" + millisecond;
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
