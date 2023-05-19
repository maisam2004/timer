let timer = null;

//give each id of temer a variable
msec_ch = document.getElementById('msec');
sec_ch = document.getElementById('sec');
minutes_ch = document.getElementById('minutes');


let i = 0;
let s = 0;
let m = 0;

function checklen(para) { //functin to check didgit is bigger
    if (para < 10) {
        return para = '0' + para;
    } else { return para; }
}

msec_ch.innerHTML = checklen(i);

sec_ch.innerHTML = checklen(s);
minutes_ch.innerHTML = checklen(m);

function fun_interval() {
    i++;
    msec_ch.innerHTML = checklen(i);
    if (i == 130) {
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

start_button = document.getElementById('start');

start_button.addEventListener('click', function () {
    timer = setInterval(fun_interval, 10);
    document.getElementsByClassName('main_timer')[0].style.color ="white";
    //document.getElementsByClassName('main_timer')[0].style.textShadow ="black";
});

function close_timer() {
    clearInterval(timer);
}
stop_button = document.getElementById('stop');
stop_button.addEventListener('click', close_timer);

reset_button = document.getElementById('reset');
reset_button.addEventListener('click', function () {
    msec_ch.innerHTML = checklen(0);
    sec_ch.innerHTML = checklen(0);
    minutes_ch.innerHTML = checklen(0);
});

memory_button = document.getElementById('record');
memory_button.addEventListener('click', function () {
    memo_list = document.getElementById('memory_list')
    
    memo_list.innerHTML += '<li onclick="remove(this)" >' + minutes_ch.innerHTML + ':' + sec_ch.innerHTML + ':' + msec_ch.innerHTML + '   '+'<button  id="remove">X</button> </li>'
})
// mouse over start button
document.getElementById("start").addEventListener('mouseover',
function(){ 
    document.getElementById("start").style.backgroundColor = "red";
}

)


//remove record button func

function remove(item) {
    item.remove();
  }



/* document.getElementById("start").addEventListener("mouseleave", function() {
    document.getElementById("start").style.borderRadius = "1%";
  });
 */