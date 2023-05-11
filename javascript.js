const skill = document.getElementById("skillList");
const projects = document.getElementById("projects");
const certs = document.getElementById("certsWrapper");

const project = [
  {
    id: 1,
    name: "JRUN",
    projectRole: "Frontend Dev",
    description:
      "Jrun is an online platform that offers cleaning services to users. It provides a variety of exceptional service options from which users can select, all from the convenience of their own device.",
    contributions: [
      "Perform research on product technologies and structures to implement into design concepts.",
      "Leveraging React JS to develop and implement service rendering and logic",
      "Developed an online customer service platform that assists users in resolving any challenges they may encounter while using the service."
    ]
  },
  {
    id: 2,
    name: "Shoppa",
    projectRole: "Frontend Dev",
    description:
      "shoppa is a Web-based application for purchasing clothing online",
    contributions: [
      "Applied expertise in React JS and its associated technologies to develop a user-friendly interface that prioritized customer needs",
      "Collaborated with a team of developers throughout the project's design, development, and deployment phases."
    ]
  },
  {
    id: 2,
    name: "delish",
    projectRole: "Frontend Dev",
    description:
      "shoppa is a Web-based application for purchasing clothing online",
    contributions: [
      "Developed a responsive website using React JS to showcase my design skills and proficiency in front-end development. ",
      "Designed and implemented a static webpage using React JS and  css to demonstrate my ability to create visually appealing and user-friendly interfaces.",
      "Conducted research on the online food delivery industry to gain insights into user behavior and preferences, which informed my design decisions and improved the overall user experience."
    ]
  }
];
function myProjects() {
  projects.innerHTML = project
    .map((item) => {
      const { id, name, projectRole, description, contributions } = item;
      return ` <div class="project" id="${id}">
                    <h3>${name}</h3>
                    <p class="projectRole">
                       ${projectRole}
                    </p>
                    <p class="projectDescription">${description}</p>
                    <div class="projectContributionsWrapper">
                    <ul class="projectContributions">
                    ${contributions
                      .map((item) => {
                        return `<li>${item}</li>`;
                      })
                      .join("")}</ul>
                    </div>`;
    })
    .join("");
}

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "ES6",
  "Scss",
  "FlexBox",
  "Grid",
  "React Js",
  "React Native",
  "React Hooks",
  "Git",
  "Github",
  "Figma",
  "PhotoShop"
];
console.log(skillList);
function renderSkills() {
  skill.innerHTML = skillList
    .map((item) => {
      return `<p> ${item}</p>`;
    })
    .join("");
}
let certificates = [
  "./assets/nelson_osuya_Side_Hustle_Certificate.png",
  "./assets/certificate.png",
  "./assets/Web capture_6-11-2022_0440_www.freecodecamp.org.jpeg",
  "./assets/Web capture_6-11-2022_0055_www.freecodecamp.org.jpeg"
];
function renderCertificates() {
  certs.innerHTML = certificates
    .map((item) => {
      return `<img src="${item}" alt="coding certificate">`;
    })
    .join("");
}
renderCertificates();
myProjects();
renderSkills();
