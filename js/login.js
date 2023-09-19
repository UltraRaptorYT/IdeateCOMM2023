document.getElementById("IDK").addEventListener("click", () => {
  console.log(`${BACKEND_URL} connecting!`);
  axios
    .get(`${BACKEND_URL}/api/auth-url`, { withCredentials: true })
    .then((response) => {
      window.location.href = response.data.url;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});
