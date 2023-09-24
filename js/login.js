document.getElementById("loginBtn").addEventListener("click", () => {
  console.log(`${BACKEND_URL} connecting!`);
  document.getElementById("loginBtn").innerHTML = `<span>Loading...</span>`;
  axios
    .get(`${BACKEND_URL}/api/auth-url`, { withCredentials: true })
    .then(async (response) => {
      window.location.href = response.data.url;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});
