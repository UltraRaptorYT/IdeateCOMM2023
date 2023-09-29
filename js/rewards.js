let userid = parseInt(sessionStorage.getItem("userId"));
async function loadRewards() {
  var { data, error } = await SUPABASE_CLIENT.from("user_reward")
    .select("*")
    .eq("userid", userid);
  if (error) {
    console.log(error);
    return;
  }
  let existingData = [...data];
  var { data, error } = await SUPABASE_CLIENT.from("reward").select("*");
  if (error) {
    console.log(error);
    return;
  }
  let filterData = data.filter((e) => {
    return !existingData.some((d) => d.rewardid == e.id);
  });
  const rewardDiv = document.getElementById("rewards");
  rewardDiv.innerHTML = ``;
  if (filterData.length == 0) {
    rewardDiv.innerHTML = `
<div
  class="py-3 d-flex flex-column justify-content-center align-items-center gap-3"
>
  <h1 class="m-0 text-warning"><i class="bi bi-star-fill"></i></h1>
  <h4 class="">There is no rewards</h4>
</div>
`;
    rewardDiv.classList.add("justify-content-center");
  }
  for (let reward of filterData) {
    rewardDiv.innerHTML += `
  <button
    onclick="usePoints(${reward["id"]}, ${reward["point"]})"
    class="text-black bg-white d-flex align-items-center gap-5 py-2 px-3 border-0 text-left"
  >
    <img
      src="${reward["img"]}"
      class="brandImage"
    />
    <div class="d-flex flex-column justify-content-start">
      <span class="font-weight-bold">${reward["name"]}</span>
      <div class="d-flex align-items-center gap-1">
        <span class="text-sm">${reward["point"]}</span>
        <i class="fa-solid fa-heart text-danger"></i>
      </div>
    </div>
  </button>
  `;
  }
}

loadRewards();

let pointDiv = document.getElementById("point");

let currentPoint = parseInt(sessionStorage.getItem("point"));

pointDiv.innerHTML = currentPoint;

async function usePoints(rewardId, point) {
  if (currentPoint < point) {
    alert("Insufficient amount of points");
    return;
  }
  console.log(currentPoint);
  console.log(rewardId);
  console.log(point, userid);

  var { data, error } = await SUPABASE_CLIENT.from("user_reward")
    .insert([{ userid: userid, rewardid: rewardId }])
    .select();

  if (error) {
    console.log(error);
    return;
  }
  sessionStorage.setItem("point", currentPoint - point);
  window.location.reload();
}
