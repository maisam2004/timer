let timer = null;
let egg_timer = null; //var to start egg timer interval
document.getElementById("stop").style.display = "none";

//give each id of timer items as variable
msec_ch = document.getElementById("msec");
sec_ch = document.getElementById("sec");
minutes_ch = document.getElementById("minutes");

//counters for milisec = i, for seconds = s , minutes = m

let i = 0;
let s = 0;
let m = 0;

//function to check didgit is one  make it double bigger
function checklen(para) {
  if (para < 10) {
    return (para = "0" + para);
  } else {
    return para;
  }
}

//first time checking for len of counters and make it double digit
msec_ch.innerHTML = checklen(i);

sec_ch.innerHTML = checklen(s);

minutes_ch.innerHTML = checklen(m);

//function give to timer var to set interval
function fun_interval() {
  i++;
  msec_ch.innerHTML = checklen(i);
  if (i == 99) {
    s++;
    i = 0;
    sec_ch.innerHTML = checklen(s);
  }
  if (s == 60) {
    s = 0;
    sec_ch.innerHTML = checklen(s);
    m++;
    minutes_ch.innerHTML = checklen(m);
  }
}

//add event listener to start button process
start_button = document.getElementById("start");

start_button.addEventListener("click", function () {
  timer = setInterval(fun_interval, 10);
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "";
  document.getElementById("stop").style.width = "205px";

  egg_button.classList.add("moving");
  egg_button.style.color = "rgba(11, 40, 30,0)";

  //document.getElementsByClassName('main_timer')[0].style.color ="white";
  //document.getElementsByClassName('main_timer')[0].style.textShadow ="black";
});

//click event for egg button

egg_button = document.getElementById("egg");
//egg_button.style.margin='40px';
egg_button.addEventListener("click", function () {
  egg_timer = setInterval(func_egg_interval, 10);
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("record").style.display = "none";
  document.getElementById("egg_stop").style.display = "";
  document.getElementById("pause").style.display = "";

  egg_button.classList.add("moving");

  //document.getElementById("stop").style.width = "100px";
  //document.getElementById("stop").style.display = "";
});

// function for egg timer to give to variable egg_timer
function func_egg_interval() {
  console.log("egg func works");
  i++;
  msec_ch.innerHTML = checklen(i);
  if (i == 10) {
    /*number miliseconds to add 1 second */
    s++;
    i = 0;
    sec_ch.innerHTML = checklen(s);
  }
  if (s == 60) {
    s = 0;
    sec_ch.innerHTML = checklen(s);
    m++;
    minutes_ch.innerHTML = checklen(m);
  }
  if (m === 4) {
    alert("Your Egg ready to eat");
    close_timer(egg_timer);
    msec_ch.innerHTML = checklen(0);
    sec_ch.innerHTML = checklen(0);
    minutes_ch.innerHTML = checklen(0);

    document.getElementById("start").style.display = "";
    document.getElementById("reset").style.display = "";
    document.getElementById("record").style.display = "";

    egg_button.classList.remove("moving"); /* stop egg to move */
  }
}

//function to stopping interval for timer after press stop
function close_timer(tg) {
  clearInterval(tg);
}
stop_button = document.getElementById("stop");

stop_button.addEventListener("click", function () {
  close_timer(timer);
  document.getElementById("start").style.display = "";
  document.getElementById("stop").style.display = "none";
  //document.getElementById("stop").style.width = "100px";
  egg_button.classList.remove("moving");
  egg_button.style.color = "rgba(25, 25, 25,1)";
});

//reset button setting
reset_button = document.getElementById("reset");
reset_button.addEventListener("click", function () {
  msec_ch.innerHTML = checklen(0);
  sec_ch.innerHTML = checklen(0);
  minutes_ch.innerHTML = checklen(0);
});

//recording time stoped
memory_button = document.getElementById("record");
memory_button.addEventListener("click", function () {
  memo_list = document.getElementById("memory_list");

  memo_list.innerHTML +=
    '<li onclick="remove(this)" >' +
    minutes_ch.innerHTML +
    ":" +
    sec_ch.innerHTML +
    ":" +
    msec_ch.innerHTML +
    "   " +
    '<span  id="remove">x</span> </li>';
});
// mouse over start button
document.getElementById("start").addEventListener("mouseover", function () {
  document.getElementById("start").style.backgroundColor = "red";
});

function remove(item) {
  item.remove();
}

second_stop = document.getElementById("egg_stop");

second_stop.addEventListener("click", function () {
  close_timer(egg_timer);
  msec_ch.innerHTML = checklen(0);
  sec_ch.innerHTML = checklen(0);
  minutes_ch.innerHTML = checklen(0);

  document.getElementById("start").style.display = "";
  document.getElementById("reset").style.display = "";
  document.getElementById("record").style.display = "";
  pause.style.display = "none";
  egg_button.classList.remove("moving");
  second_stop.style.display = "none";
});

pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  close_timer(egg_timer);

  egg_button.classList.remove("moving");
  pause.style.display = "none";
});
