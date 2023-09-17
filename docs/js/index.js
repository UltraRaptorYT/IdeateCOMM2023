document.getElementById("IDK").addEventListener("click", () => {
  console.log(`${BACKEND_URL} connecting!`);
  axios
    .get(`${BACKEND_URL}/api/auth-url`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});
