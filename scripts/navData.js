const links = ["Events", "Staff picks", "Become a member", "About", "Contacts"];
const oList = document.querySelector(".nav__links");
const navText = oList.querySelectorAll(".nav__link");
for (let i = 0; i < Math.min(links.length, navText.length); i++) {
  navText[i].textContent = links[i];
}
