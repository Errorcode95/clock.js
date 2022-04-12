function startTime() {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let millisecond = now.getMilliseconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('txt').innerHTML =  date + "/" + month + "/" + year + " - " + hour + ":" + minute + ":" + second + ":" + millisecond;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
