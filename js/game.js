for (let i = 0; i <= 36; i++) {
  if (i != 11) {
    document.getElementById(
      "board"
    ).innerHTML += `<div class="block" data-pos="${36 - i}">
    ${
      36 - i == 0
        ? `
<div id="player" class="text-primary">
  <i class="fa-solid fa-dog"></i>
</div>
`
        : ""
    }
    </div>`;
  } else {
    document.getElementById(
      "board"
    ).innerHTML += `<div class="col-span-8 row-span-8"></div>
`;
  }
}
