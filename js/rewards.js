async function loadRewards() {
  const { data, error } = await SUPABASE_CLIENT.from("reward").select();
  console.log(data);
  const rewardDiv = document.getElementById("rewards");
  rewardDiv.innerHTML = ``;
  if (data.length == 0) {
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
  for (let reward of data) {
    rewardDiv.innerHTML += `
  <button
    onclick="alert('simplygo')"
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

let pointDiv = document.getElementById("point")

pointDiv.innerHTML = sessionStorage.getItem("point")
