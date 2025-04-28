function Menu() {
  const menu = document.querySelector(".menu");
  const mobileBtn = document.querySelector(".mobile-btn");

  if (mobileBtn.name === "menu") {
    mobileBtn.name = "close";
    menu.classList.add("top-[60px]");
    menu.classList.add("opacity-100");
  } else {
    mobileBtn.name = "menu";
    menu.classList.remove("top-[60px]");
    menu.classList.remove("opacity-100");
  }
}
