const box = document.querySelector(".search");
const search = document.querySelector(".searchbar");

box.addEventListener("click", function () {
  document.getElementById("input-box").focus();
  document.getElementById("input-box").style.color = "#ffffff";
});

box.addEventListener("click", () => {
  search.classList.toggle("open");

  if (search.classList.contains("open")) {
    search.style.height = "297px";
    search.style.transition = "height 0.35s ease";
  } else {
    search.style.height = "120px";
  }
});

const profileDropdown = document.querySelector(".user-profile");
const drop = document.querySelector(".profile-dropdown");
const rotate = document.querySelector(".dropdown");

profileDropdown.addEventListener("click", () => {
  drop.classList.toggle("pd");
  if (drop.classList.contains("pd")) {
    rotate.style.rotate = "0deg";
  } else {
    rotate.style.rotate = "180deg";
  }
});

const leftSide = document.querySelector(".left-section");

leftSide.addEventListener("mouseover", () => {
  document.querySelector(".left-section-wrapper").style.transform =
    "translateX(75px)";
});
leftSide.addEventListener("mouseout", () => {
  document.querySelector(".left-section-wrapper").style.transform =
    "translateX(-75px)";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".searchbar").forEach((el) => observer.observe(el));
document.querySelectorAll(".un").forEach((el) => observer.observe(el));

const msb = document.querySelectorAll(".msb");

msb.forEach(ele =>{
  ele.addEventListener("click", (e) => {
    if (e.target === ele) {
      search.classList.remove("open");
      search.style.height = "120px";
      rotate.style.rotate = "0deg";
      drop.classList.add("pd");
    }
  });
});

