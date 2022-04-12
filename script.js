function startTime() {
    const rtc = new Date();
    let year = rtc.getFullYear();
    let month = rtc.getMonth()+1;
    let date = rtc.getDate();
    let hour = rtc.getHours();
    let minute = rtc.getMinutes();
    let second = rtc.getSeconds();
    let millisecond = rtc.getMilliseconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('txt').innerHTML =  date + "/" + month + "/" + year + " - " + hour + ":" + minute + ":" + second + ":" + millisecond;
    setTimeout(startTime, 1);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
