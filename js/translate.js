const SUPPORTED_LANGUAGE = [
  "English",
  "Chinese",
  "Malay",
  "Tamil",
  "Hokkien",
  "Cantonese",
  "Haka",
];

let translateLang = [...document.getElementsByClassName("translateLang")];

for (let translateDiv of translateLang) {
  for (let language of SUPPORTED_LANGUAGE) {
    translateDiv.innerHTML += `<option value="${language}">${language}</option>`;
  }
}

let switchBtn = document.getElementById("switch");
switchBtn.addEventListener("click", () => {
  for (let translateDiv of translateLang) {
    translateDiv;
  }
});


