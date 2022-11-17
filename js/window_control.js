//Declare variables to use here and assign each of those an HTML element
var modal = document.getElementById("discoWindow");
var modal2 = document.getElementById("questsWindow");
var modal3 = document.getElementById("helpWindow");
var modal4 = document.getElementById("coaWindow");
var span = document.getElementsByClassName("closeDiscovery")[0];
var span2 = document.getElementsByClassName("closeQuests")[0];
var span3 = document.getElementsByClassName("closeLearning")[0];
var span4 = document.getElementsByClassName("closeCoa")[0];

//Declare functions to start the Window Control program code here.
function openDiscovery() {
    var btn = document.getElementById("/images/discovery.png");
    btn = modal.style.display = "block";
}

function openQuests() {
  var btn2 = document.getElementById("/images/quests.png");
  btn2 = modal2.style.display = "block";
}

function openHelp() {
  var btn3 = document.getElementById("/images/help.png");
  btn3 = modal3.style.display = "block";
}

function openHouses() {
  var btn4 = document.getElementById("/images/coalitions.png");
  btn4 = modal4.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}


dragElement(document.getElementById("discoWindow"));
dragElement(document.getElementById("questsWindow"));
dragElement(document.getElementById("coaWindow"));
dragElement(document.getElementById("helpWindow"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "discoWindow") && document.getElementById(elmnt.id + "questsWindow") && document.getElementById(elmnt.id + "coaWindow") && document.getElementById(elmnt.id + "helpWindow")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "discoWindow").onmousedown && document.getElementById(elmnt.id + "questsWindow").onmousedown && document.getElementById(elmnt.id + "coaWindow").onmousedown && document.getElementById(elmnt.id + "helpWindow").onmousedown == dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}