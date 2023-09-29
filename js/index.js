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
      window.location.href = "./login.html";
    }
  });

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

async function loadEvents() {
  const { data, error } = await SUPABASE_CLIENT.from("event")
    .select("*")
    .order("date");
  if (error) {
    console.log(error);
    return;
  }
  if (data.length == 0) {
    return;
  }
  for (let event of data) {
    console.log(event);
    let date = new Date(event["date"]);
    let lateDate = new Date(event["date"]);
    lateDate.setMinutes(lateDate.getMinutes() + event["duration"]);
    document.getElementById("events").innerHTML += `
<button onclick="bookEvent('${
      event["name"]
    }')" class="bg-white d-flex flex-column p-3 gap-1 border-0 eventBtn" >
  <div class="d-flex gap-2 align-items-center">
    <i class="fa-solid fa-calendar-days"></i>
    <span class="text-sm">${week[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    }, ${date.getHours() % 12}:${date.getMinutes()}${
      Math.floor(date.getHours() / 12) == 0 ? "am" : "pm"
    } - ${lateDate.getHours() % 12}:${lateDate.getMinutes()}${
      Math.floor(lateDate.getHours() / 12) == 0 ? "am" : "pm"
    }</span>
  </div>
  <p class="m-0 font-weight-bold">${event["name"]}</p>
  <div class="d-flex gap-2 align-items-center">
    <i class="fa-solid fa-location-dot"></i>
    <p class="m-0 text-sm">${event["location"]}</p>
  </div>
</button>
`;
  }
}

loadEvents();

function bookEvent(eventName) {
  let points = 250;
  let book = confirm(`Are you sure you want to join ${eventName}?`);
  if (book) {
    alert(`Added ${points} points`);
    sessionStorage.setItem(
      "point",
      parseInt(sessionStorage.getItem("point")) + points
    );
  }
}
