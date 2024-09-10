setTimeout(function () {
  alert("Selamat datang di Toko Online Kami");
}, 3000);
const heroText = document.queryselector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
  heroText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextcolor, 2000);
let currentImageIndex = 0;
const images = [
  "sepatu putsal.jpg",
  "segdzfg.jpg",
  "sepatu.jpg",
  "sepatu2.webp",
];

function changeheroImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.querySelector("#hero").style.backgroundImage = url(
    "${images[currentImageIndex]}"
  );
}
setInterval(changeheroImage, 2000);
const productImages = document.querySelectorAll(".produt-card img");
productImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
  });
});
document.querySelectorAll(".cta").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("terima kasih telah membeli produk ini");
  });
});
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "=";
scrollToTopBtn.id = "scrollTopTopBtn";
document.body.appendChild(scrollToTopBtn);
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo ({
    top: 0,
    behavior: "smooth",
  });
})
