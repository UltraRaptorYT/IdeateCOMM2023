const SESSION_COOKIE_NAME = "loginSession";

console.log(`${BACKEND_URL} connecting!`);

axios
  .get(`${BACKEND_URL}/api/userinfo`, { withCredentials: true })
  .then(async (response) => {
    sessionStorage.setItem("userInfo", JSON.stringify(response.data.data));
    var userData;
    const { data, error } = await SUPABASE_CLIENT.from("user")
      .select()
      .eq("name", response.data.data["myinfo.name"]);
    if (error) {
      console.log(error);
      return;
    }
    userData = [...data];
    if (data.length == 0) {
      const { data, error } = await SUPABASE_CLIENT.from("user")
        .insert({ name: response.data.data["myinfo.name"] })
        .select();
      console.log("Inserting new user!");
      if (error) {
        console.log(error);
        return;
      }
      userData = [...data];
    } else {
      console.log("User already exists!");
    }
    sessionStorage.setItem("userId", userData[0]["id"]);
    sessionStorage.setItem("point", userData[0]["point"]);

    let userName = document.getElementById("name");

    userName.innerText = response.data.data["myinfo.name"];
  })
  .catch((err) => {
    if (err) {
      console.log(err);
      if (err.code == "ERR_BAD_REQUEST") {
        window.location.href = "./login.html";
      }
    }
  });
