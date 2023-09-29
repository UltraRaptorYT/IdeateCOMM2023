let doctorArr = [];

async function loadDoctor() {
  const { data, error } = await SUPABASE_CLIENT.from("health").select();
  doctorArr = [...data];
  populateDoctor(doctorArr);
}

document.getElementById("searchDoctor").addEventListener("input", (e) => {
  populateDoctor(
    [...doctorArr].filter((doc) => doc["name"].toLowerCase().search(e.target.value) != -1)
  );
});

function populateDoctor(doctorArr) {
  document.getElementById("doctors").innerHTML = "";
  for (let doctor of doctorArr) {
    document.getElementById("doctors").innerHTML += `
<button
  class="text-black bg-white d-flex align-items-center gap-5 py-2 px-3 border-0 text-left"
>
  <img src="${doctor["img"]}" class="docImage" />
  <div class="d-flex flex-column justify-content-start">
    <span class="font-weight-bold">${doctor["name"]}</span>
    <span class="text-sm">${doctor["location"]}</span>
    <div class="d-flex align-items-center">
      <span class="text-sm">Consult fee: $</span>
      <span class="text-sm">${doctor["fee"]}</span>
    </div>
  </div>
</button>
`;
  }
}

loadDoctor();
