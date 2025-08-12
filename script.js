// for block onlick

let isAwakeRunning = true;


// for music
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

function awake(){
  function awakeclick(){
    document.getElementsByClassName('lockicon')[0].style.animation='fingerprint 0.8s ';
    document.getElementsByClassName('inner')[0].style.animation='innerawake 0.8s';
    document.getElementsByClassName('inner')[0].style.opacity= 1;
  };
  awakeclick();
  let inner = document.getElementsByClassName('inner')[0];
  inner.ondblclick
  setInterval(function(){
    if (!isAwakeRunning) return;
    document.getElementsByClassName('inner')[0].style.animation='innersleep 0.9s';
    setInterval(function(){window.location.reload();},800);
  },4000);  
};
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  var day = now.toLocaleDateString('en-US', { weekday: 'short' });
  var month = now.toLocaleDateString('en-US', { month: 'short' });
  var date = now.getDate();

  // Pad single digit minutes with leading zero
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var timeString = hours;
  var minString = minutes;
  var dateString = day + ', ' + date + ' ' + month;

  document.getElementById('time').textContent = timeString;
  document.getElementById('min').textContent = minString;
  document.getElementById('date').textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();

function show_time(){

    isAwakeRunning = false;

    document.getElementsByClassName('lockicon')[0].style.animation='fingerprint 1.5s ';
    document.getElementsByClassName('inner')[0].style.animation='innerawake 0.8s';
    document.getElementsByClassName('inner')[0].style.opacity= 1;
    document.getElementsByClassName('screen')[0].style.opacity= 1;
    document.getElementsByClassName('inner')[0].style.backgroundImage= "url('./images/1000.jpg')";
    let hide2 = (document.getElementsByClassName(
      "screen"
    )[0].style.animation = "show_time 0.5s");
    setInterval(function () {
      let hide = (document.getElementsByClassName(
        "screen"
      )[0].style.display = "none");
    }, 500);
      document.getElementsByClassName('lockicon')[0].style.opacity=0;
      document.getElementsByClassName('time')[0].style.opacity=0;
      document.getElementsByClassName('min')[0].style.opacity=0;
      document.getElementsByClassName('date')[0].style.opacity=0;

      document.getElementsByClassName('google')[0].style.animation="google_intro 0.5s";
      document.getElementsByClassName('google')[0].style.scale=1;

      document.getElementsByClassName('apps')[0].style.animation="apps_1 0.5s";
      document.getElementsByClassName('apps')[0].style.scale=1;

      document.getElementsByClassName('imp')[0].style.animation="imp_1 0.5s";
      document.getElementsByClassName('imp')[0].style.scale=1;

      document.getElementsByClassName('whatsapp')[0].style.animation="whatsapp_1 0.5s";
      document.getElementsByClassName('whatsapp')[0].style.scale=1;

      document.getElementsByClassName('play')[0].style.animation="play_1 0.5s";
      document.getElementsByClassName('play')[0].style.scale=1;

      document.getElementsByClassName('contacts')[0].style.animation="contacts_1 0.5s";
      document.getElementsByClassName('contacts')[0].style.scale=1;

      document.getElementsByClassName('massage')[0].style.animation="massage_1 0.5s";
      document.getElementsByClassName('massage')[0].style.scale=1;

      document.getElementsByClassName('chrome')[0].style.animation="chrome_1 0.5s";
      document.getElementsByClassName('chrome')[0].style.scale=1;

      document.getElementsByClassName('camera')[0].style.animation="camera_1 0.5s";
      document.getElementsByClassName('camera')[0].style.scale=1;

      function update() 
      {
          var now = new Date();
          var hours = now.getHours();
          var minutes = now.getMinutes();
          hours = hours % 12;
          hours = hours ? hours : 12;
          var day = now.toLocaleDateString('en-US', { weekday: 'short' });
          var month = now.toLocaleDateString('en-US', { month: 'short' });
          var date = now.getDate();

          if (hours < 10) {
              hours = "0" + hours;
          }
      
          var hourTimeString = hours;
          var minTimeString = (minutes < 10 ? "0" : "") + minutes;
          var dateString1 = day + ', ' + date +' ' + month;

          document.getElementById("hour2").textContent = hourTimeString;
          document.getElementById("min2").textContent = minTimeString;
          document.getElementById("date2").textContent = dateString1;
      }
    
      update();
      setInterval(update,1000)
} 
function noti_time() 
    {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      hours = hours % 12;
      hours = hours ? hours : 12;
      var day = now.toLocaleDateString('en-US', { weekday: 'short' });
      var month = now.toLocaleDateString('en-US', { month: 'short' });
      var date = now.getDate();

    if (hours < 10) {
        hours = "0" + hours;
    }
  
    var hourTimeString = hours;
    var minTimeString = (minutes < 10 ? "0" : "") + minutes;
    var dateString1 = day + ', ' + date +' ' + month;
    document.getElementById("time3").textContent = hourTimeString +': '+minTimeString;
    document.getElementById("date3").textContent = dateString1;
    }
setInterval(noti_time,1000);
noti_time();

function color(){
  var divElement = document.getElementById("on");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color1(){
  var divElement = document.getElementById("on1");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color2(){
  var divElement = document.getElementById("on2");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color3(){
  var divElement = document.getElementById("on3");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color4(){
  var divElement = document.getElementById("on4");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color5(){
  var divElement = document.getElementById("on5");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color6(){
  var divElement = document.getElementById("on6");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}
function color7(){
  var divElement = document.getElementById("on7");

  if (divElement.style.backgroundColor === "#2d3134") {
     (divElement.style.backgroundColor = "#c7e7ff")
  } else {
     (divElement.style.backgroundColor = "#2d3134")
  }
}

document.getElementsByClassName('trans')[0].addEventListener("click",show_bar)
function show_bar(){
   document.getElementsByClassName('noti')[0].style.animation="show_bar_ 1s";
   document.getElementsByClassName('noti')[0].style.top="50%";
}

document.getElementsByClassName('time3')[0].addEventListener("click",home)
function home(){
   document.getElementsByClassName('noti')[0].style.animation="home_dis 1s";
   document.getElementsByClassName('noti')[0].style.top="-52%";
}
document.getElementsByClassName('network')[0].addEventListener("click",home1)
function home1(){
   document.getElementsByClassName('noti')[0].style.animation="home_dis 1s";
   document.getElementsByClassName('noti')[0].style.top="-52%";
}

document.getElementsByClassName('slide')[0].addEventListener("click",apps_)
function apps_(){
   document.getElementsByClassName('application')[0].style.animation="apps_upper 1s";
   document.getElementsByClassName('application')[0].style.top="0%";
}

document.getElementsByClassName('slide_div')[0].addEventListener("click",apps_1)
function apps_1(){
   document.getElementsByClassName('application')[0].style.animation="apps_down 1s";
   document.getElementsByClassName('application')[0].style.top="100%";
}