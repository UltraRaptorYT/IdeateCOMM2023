const SESSION_COOKIE_NAME = "loginSession";

console.log(`${BACKEND_URL} connecting!`);
axios
  .get(`${BACKEND_URL}/api/userinfo`, { withCredentials: true })
  .then((response) => {
    sessionStorage.setItem("userInfo", JSON.stringify(response.data.data));
  })
  .catch((err) => {
    if (err) {
      console.log(err);
      if (err.code == "ERR_BAD_REQUEST") {
        window.location.href = "./login.html";
      }
    }
  });
