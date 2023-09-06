//////////////////////////////////////////////////////////////// scroll to top
let mybutton = document.querySelector(".go-up");
mybutton.addEventListener("click", topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/////////////////////////////////////////////////////////////////////////////////Open Menu-list onclick
const menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);
const menuList = document.querySelector(".menu-list");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
