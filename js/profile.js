let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

let userName = document.getElementById("name");

userName.innerText = userInfo["myinfo.name"];
