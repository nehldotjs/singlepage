const skill = document.getElementById("skill");

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "ES6",
  "Scss",
  "FlexBox/Grid",
  "React Hooks",
  "Git",
  "Github",
  "Figma",
  "PhotoShop"
];

function renderSkills() {
  skill.innerHTML = skillList
    .map((item) => {
      return `<p> ${item}</p>`;
    })
    .join("");
}

renderSkills();
