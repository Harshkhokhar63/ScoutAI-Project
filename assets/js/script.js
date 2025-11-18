const box = document.querySelector(".search");
const search = document.querySelector(".searchbar");

box.addEventListener("click", function() {
  document.getElementById("input-box").focus();
  document.getElementById("input-box").style.color = "#ffffffb2";
  document.getElementById("input-box").value = "Create ";
});


box.addEventListener("click", () => {
  search.classList.toggle("open");

  if (search.classList.contains("open")) {
    search.style.height = "297px";
  } else {
    search.style.height = "120px";
    document.getElementById("input-box").value = "";
  }
});

const profileDropdown = document.querySelector(".user-profile");

profileDropdown.addEventListener("click", () => {
  const drop = document.querySelector(".profile-dropdown");
  const rotate = document.querySelector(".dropdown");
  drop.classList.toggle("pd");
  if (drop.classList.contains("pd")) {
    rotate.style.rotate = "0deg";
  } else {
    rotate.style.rotate = "180deg";
  }
});


const leftSide = document.querySelector(".left-section");

leftSide.addEventListener("mouseover", () => {
  document.querySelector(".left-section-wrapper").style.transform = "translateX(75px)";
});
leftSide.addEventListener("mouseout", () => {
  document.querySelector(".left-section-wrapper").style.transform = "translateX(-75px)";
});


const bottomSide = document.querySelector(".bottom-section");

bottomSide.addEventListener("mouseover", () => {
  document.querySelector(".bottom-section-wrapper").style.transform = "translateY(-75px)";
});
bottomSide.addEventListener("mouseout", () => {
  document.querySelector(".bottom-section-wrapper").style.transform = "translateY(75px)";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Optional: stop observing after first reveal
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.searchbar').forEach(el => observer.observe(el));
document.querySelectorAll('.un').forEach(el => observer.observe(el));
