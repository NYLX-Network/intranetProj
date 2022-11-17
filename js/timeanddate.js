`use strict`

if (typeof window != 'undefined') {
var body = window.document.getElementsByTagName("body")[0];

const timedateStyles = window.getComputedStyle(document.getElementById('clock'), "");
}
//console.log(timedateStyles.display);

    function startTime() {
        var today = new Date();
        var h = today.getHours() % 12;
        var m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('clock').innerHTML =
        h + ":" + m;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    //document.getElementById("date-time").innerHTML = startTime;
