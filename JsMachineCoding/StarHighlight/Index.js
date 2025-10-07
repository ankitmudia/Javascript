const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");
let currentRating = 0;

stars.forEach((item, index) => {
  item.addEventListener("mouseover", function () {
    highlightStars(index);
  });

  item.addEventListener("mouseout", function () {
    highlightStars(currentRating - 1);
  });

  item.addEventListener("click", () => {
    currentRating = index + 1;
    ratingValue.textContent = `Rating: ${currentRating}`;
  });
});

function highlightStars(index) {
  stars.forEach((item, i) => {
    item.classList.toggle("highlight", i <= index);
  });
}
