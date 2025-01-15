const membershipTitle = "Becoming a library member is easy!";
const membershipT = document.querySelector(".membership__title");
membershipT.append(membershipTitle);
const steps = [
  {
    title: "Step 1",
    imgLink: "./images/icon_step_forward.svg",
    imgAlt: "icon forward",
    description: "Fill out the membership form online or in person.",
  },
  {
    title: "Step 2",
    imgLink: "./images/icon_step_forward.svg",
    imgAlt: "icon forward",
    description: "Come pick up your library card at the front desk.",
  },
  {
    title: "Step 3",
    imgLink: "./images/icon_step_forward.svg",
    imgAlt: "icon forward",
    description: "Sign the back of the card.",
  },
  {
    title: "Step 4",
    imgLink: "./images/icon_step_finish.svg",
    imgAlt: "icon finish",
    description: "Enjoy all the awesome benefits of membership!",
  },
];
const stepsTemplate = document.querySelector(".membership__steps-template");
const stepsList = document.querySelector(".membership__steps");
function getStepElement(stepData) {
  const stepClone = stepsTemplate.content.cloneNode(true);
  const stepTitle = stepClone.querySelector(".step__title");
  const stepImg = stepClone.querySelector(".step__icon");
  const stepDescription = stepClone.querySelector(".step__description");
  stepTitle.prepend(stepData.title);
  stepImg.src = stepData.imgLink;
  stepImg.alt = stepData.imgAlt;
  stepDescription.textContent = stepData.description;
  return stepClone;
}
steps.forEach(function (stepData) {
  const stepElement = getStepElement(stepData);
  stepsList.append(stepElement);
});
