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
    return "Uh, oh ! It looks like I couldn't connect to the database.".mysqli_connect_errno();
}

function loginIntra() {
} 

