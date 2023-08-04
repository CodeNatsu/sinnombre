const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

function setRating(starsSelected) {
  stars.forEach((star, index) => {
    star.classList.toggle("selected", index < starsSelected);
  });
  ratingValue.textContent = starsSelected;
}

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.dataset.rating);
    setRating(rating);
  });
});
