const headerTitle = "Welcome to the Triple Peaks Library";
const headerDescription =
  "We're pleased to open our library doors to everyone! Come and expand your development knowledge, or just use this lovely spot to work or study. This is a cool place for cool students!";
const headerAddress = "200 Success Avenue, The Town of Triple Peaks";
const headerLink = "About the library ";
let header = document.querySelector(".header");
let hTitle = header.querySelector(".header__title");
let hDescription = header.querySelector(".header__description");
let hAddress = header.querySelector(".header__address");
let hLink = header.querySelector(".header__link");
hTitle.textContent = headerTitle;
hDescription.textContent = headerDescription;
hAddress.textContent = headerAddress;
hLink.prepend(headerLink);
