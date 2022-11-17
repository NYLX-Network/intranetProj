const { on } = require("events");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { prototype } = require("stream");
var crypto = require("crypto");

var creepy = (clear) => {
    let length = 16;
    let salt = crypto.randomBytes(Math.ceil(length / 2)).toString("hex").slice(0, length);

    let hash = crypto.createHmac("sha512", salt);
    hash.update(clear);
    return {
        salt: salt,
        hash: hash.digest("hex")
    };
};

var clearpass = document.getInput("password");
var creeped = creepy(clearpass);

var validate = (userpass, hashedpass, salt) => {
    let hash = crypto.createHmac("sha512", salt);
    hash.update(userpass);
    userpass = hash.digest("hex");
    return userpass == hashedpass;
};

var validated = validate(clearpass, creeped.hash, creeped.salt);
console.log("Has is been validated ? > " + validated);

var btn = document.querySelector("username").childNodes[0].textContent="userName";

function openUser() {
    btn = menu.style.flyout;
}

$mysqli = mysqli_connect("localhost", "mysql_user", "mysql_userpass", "usrdatabse");

if(mysqli_connect_errno()) {
    drop.mysqli_connect_errno
}

function loginIntra() {
        document.getElementsByClassName("wrapper2");
    while (usrPassword == WebSocket.OPEN)
        window.location.replace("home.htm").InputEvent(keyPress("enter"));
        prototype.addListener.call($mysqli("mysql_userpass")).match.InputEvent.apply.call(WebSocket($mysqli));
} 

function usrPassword() {
    usrPassword == validated;
        do loginIntra(); while (
    usrPassword() == "mysql_userpass") {
        getInput.cipherinfo.WebSocket(document.getElementByClassNames("wrapper3"))
    }
        WebSocket.passwordCheck;
    if (userpass.validated != true)
        getInput.elementByClassNames("wrapper3").usrPassword != InputEvent.apply.call(passwordCheck.WebSocket($mysqli("mysql_userpass")), oninput(KeyboardEvent.keyPress("enter"))) == print("Incorrect Password.");
    else getInput.elementByClassNames("wrapper3").usrPassword = InputEvent.apply.call(passwordCheck.WebSocket($mysqli("mysql_userpass")), oninput(KeyboardEvent.keyPress("enter"))) == print("Password OK !");
}

function usrName() {
        usrName == InputEvent.apply.call(usrCheck.WebSocket($mysqli("mysql_user")), oninput(KeyboardEvent.keyPress("enter")));
    if (usrCheck.toString("username")) usrCheck.action.WebSocket($mysqli("mysql_user") == IDBDatabase.requestItem.toString("username"));
    else (usrCheck.toString("nouser")).action.IDBDatabase($mysqli("mysql_null"));
        reportError.WebSocket.action(hasUncaughtExceptionCaptureCallback.arguments(print("This user does not Exist.")));
        getInput.usrName.OPEN(WebSocket.IDBDatabase($mysqli("mysql_user"))).getUserRole($mysqli("mysql_role")).apply(usrName.bind.$mysqli("mysql_user") --> mysqli_connect("mysql_user")).loginIntra((onsubmit));
}