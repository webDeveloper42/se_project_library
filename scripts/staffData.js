const staffTitle = "Staff picks";
const staffSubtitle = "That our readers love";
const staffT = document.querySelector(".staff__title");
const staffS = document.querySelector(".staff__subtitle");
staffT.append(staffTitle);
staffS.append(staffSubtitle);
const staffCards = [
  {
    title: "Introduction to Algorithms",
    text: "The name of this book is self-explanatory; it's a proper introduction to algorithms! Introduction to Algorithms, or CLRS, in reference to the authors' last names, goes in-depth and covers a range of algorithms across several self-contained chapters.",
    footer:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
  },
  {
    title: "The Structure and Interpretation of Computer Programs (SICP)",
    text: "This is one of the best books for learning the fundamentals of programming. Featured by MIT in one of their foundational programming courses, SICP is a general-purpose programming book that uses Scheme to illustrate various programming concepts.",
    footer: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
  },
  {
    title: "The Clean Coder: A Code of Conduct for Professional Programmers",
    text: "Compiled by seasoned software engineer and author Robert C. Martin (also known as Uncle Bob), this book covers the techniques and tools of true software craftsmanship. It explains how to write clean code and demonstrates how to cultivate the attitude of a skilled, professional programmer.",
    footer: "Steve McConnell",
  },
  {
    title: "Code Complete: A Practical Handbook of Software Construction",
    text: "Want to know how to write robust code irrespective of the architecture behind your chosen programming language? Then consider reading Code Complete: A Practical Handbook of Software Construction. It comprehensively covers everything related to good code structure.",
    footer: "Steve McConnell",
  },
];
const template = document.querySelector(".staff__card-template");
const cardsList = document.querySelector(".staff__cards");
function getCardElement(cardData) {
  const cardClone = template.content.cloneNode(true);
  const cardTitle = cardClone.querySelector(".card__title");
  const cardText = cardClone.querySelector(".card__text");
  const cardFooter = cardClone.querySelector(".card__footer");
  cardTitle.textContent = cardData.title;
  cardText.textContent = cardData.text;
  cardFooter.textContent = cardData.footer;
  return cardClone;
}
staffCards.forEach(function (cardData) {
  const cardElement = getCardElement(cardData);
  cardsList.append(cardElement);
});
