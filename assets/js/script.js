const box = document.querySelector(".searchbar");
const search = document.querySelector(".searchbar");

search.addEventListener("click", function() {
  document.getElementById("input-box").focus();
  document.getElementById("input-box").style.color = "#ffffffb2";
  document.getElementById("input-box").value = "Create ";
});


box.addEventListener("click", () => {
  box.classList.toggle("open");

  if (box.classList.contains("open")) {
    box.style.height = "270px";
  } else {
    box.style.height = "110px";
    document.getElementById("input-box").value = "";
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