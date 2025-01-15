const aboutTitle = "About the library";
const aboutT = document.querySelector(".about__title");
aboutT.append(aboutTitle);
const abouts = [
  {
    text: "Libraries are essential establishments in practically every city, and the Triple Peaks Library is no exception. It first opened its doors way back in 2018, right as our humble town began bidding welcome to its very first citizens!",
  },
  {
    text: "Since its initial opening, the library has seen nearly 342 monthly visitors. That's almost 50% of our population! So far, most citizens have enjoyed reading books and using our ample online resources.",
  },
  {
    text: "Become a member today, and make sure to check out our Staff Picks section. This week's selection is full of books anyone interested in computer programming would love!",
  },
];
const aboutTemplate = document.querySelector(".about__template");
const parent = document.querySelector(".about__content");
function getAboutElement(aboutData) {
  const aboutClone = aboutTemplate.content.cloneNode(true);
  const aboutText = aboutClone.querySelector(".about__paragraph");
  aboutText.textContent = aboutData.text;
  return aboutClone;
}
abouts.forEach(function (aboutData) {
  const aboutElement = getAboutElement(aboutData);
  parent.append(aboutElement);
});
