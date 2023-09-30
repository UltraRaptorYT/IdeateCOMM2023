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

document.getElementById("translateFrom").addEventListener("change", (e) => {
  translate();
});

document.getElementById("translateTo").addEventListener("change", (e) => {
  translate();
});

document.getElementById("translateMsg").addEventListener("input", (e) => {
  translate();
});

function translate() {
  if (
    document.getElementById("translateFrom").value == "English" &&
    document.getElementById("translateTo").value == "Hokkien"
  ) {
    if (
      document.getElementById("translateMsg").value.toLowerCase() ==
      "i dont know"
    ) {
      document.getElementById("outputMsg").innerHTML = `我不知。
Góa m̄ chai.`;
    } else if (
      document.getElementById("translateMsg").value.toLowerCase() ==
      "what your name"
    ) {
      document.getElementById("outputMsg").innerHTML = `你叫啥乜名。
Lí kió siáⁿ-mí miâ?`;
    } else {
      document.getElementById("outputMsg").innerHTML = "Translating...";
    }
  } else {
    document.getElementById("outputMsg").innerHTML = "Translating...";
  }
}
