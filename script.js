const bgImage = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImage.style.opacity = 1 - window.pageYOffset / 900;
  console.log("bgImage.style.opacity " + bgImage.style.opacity);
  console.log(window.pageYOffset);
  bgImage.style.backgroundSize = 180 - window.pageYOffset / 12 + "%";
}
