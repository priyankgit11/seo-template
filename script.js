// Adding background Image to all cards
const cardItems = Array.from(document.querySelectorAll(".product-card-item"));
const cardsImages = Array.from(document.querySelectorAll(".product-card-img"));
console.log(cardItems);
console.log(cardsImages);
cardItems.forEach((ele, i) => {
  ele.style.backgroundImage = `url("${cardsImages[i].src}")`;
});

////////////////////////////////////////////////////////// setting width of span according to number of images in brand slider
const marqueeSpan = Array.from(document.getElementsByClassName("marquee-span"));
const spanWidth = 100 / marqueeSpan.length;
marqueeSpan.forEach((ele) => {
  ele.style.width = `${spanWidth}%`;
});
console.log(marqueeSpan[0].style.width);
/////////////////////////////////////////////////////////////////////////////////Open Menu-list onclick
const menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);
const menuList = document.querySelector(".menu-list");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

////////////////////////////////////////////////////////////////////////////////// slider
const animationTiming = {
  duration: 2000,
  iterations: 1,
};
const animationFadeOut = [{ transform: "scale(0)" }];
const animationFadeIn = [{ transform: "scale(1)" }];
const radios = document.querySelectorAll(".slider-radio");
const carousels = document.querySelectorAll(".slider-item");
let intervalId = setInterval(autoRotate, 3000);
let currentIndex = 0;
let prev = currentIndex;
console.log(currentIndex);

function autoRotate() {
  prev = currentIndex;
  currentIndex = (currentIndex + 1) % radios.length;
  console.log(currentIndex);
  radios[currentIndex].checked = true;
  updateImage(); // Update the image immediately
}

function updateImage() {
  let div = document.querySelector(".slider");
  carousels[prev].classList.add("hidden");
  const currentImg = carousels[currentIndex].getElementsByTagName("img");
  console.log(currentImg[0].src);
  div.style.backgroundImage = `url("${currentImg[0].src}")`;
  carousels[currentIndex].style.animation = "fadeIn 2s";
  carousels[currentIndex].classList.remove("hidden");
  console.log(div.style.backgroundImage);
}

function changeCarousel(radio) {
  clearInterval(intervalId);
  prev = currentIndex;
  currentIndex = Array.from(radios).indexOf(radio); // Get the index of the clicked radio button
  updateImage(); // Update the image immediately
  intervalId = setInterval(autoRotate, 3000); // Start rotating again
}

function showMenu() {
  const menu = document.querySelector(".vertical-menu");
  console.log(menu);
  menu.style.display = "flex";
}

function hideMenu() {
  const menu = document.querySelector(".vertical-menu");
  menu.style.display = "none";
}
