import emoji from "react-easy-emoji";

import takiacademy from "./assets/img/icons/common/takiacademy.svg";
import wssel from "./assets/img/icons/common/wssel.png";
export const greetings = {
  name: "Nassim Miled",
  title: "Hi all, I'm Nassim",
  description:
    "Passionate about Web Technologies." +
    "For the past two years,i have been as Full Stack Web Developer.I have a diverse set of skills ranging from Design, Frontend , Backend Dev, all the way to Database Management, using a variety of robust languages such as Javascript and PHP and their modern frameworks. The ability to learn fast and elevate myself to new challenges is what i think picks me out.",
  resumeLink:
    "https://drive.google.com/file/d/1HYkPlzHc9ApkLPthpNY7itgvjLdHFwVH/view?usp=sharing",
};

export const openSource = {
  githubUserName: "nassimmiled",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/na0007777/",
  stackoverflow: "https://stackoverflow.com/users/8945943/nassim-miled",
  github: "https://www.github.com/nassimmiled",
  gitlab: "https://gitlab.com/milednassim",
  linkedin: "https://www.linkedin.com/in/nassim-miled-318514170/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡  Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Develop many additions to facilitate the work of the company and its users in the field of e-learning "
    ),
    emoji(
      "⚡ Integration of third party services such as ZOOM / GOTOWEBINAR / AWS "
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "vscode-icons:file-type-vue",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "logos:laravel",
    },
    {
      skillName: "grapqhl",
      fontAwesomeClassname: "logos:graphql",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "logos:redis",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "75", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Conservatoire National des Arts et Métiers (Paris)",
    subHeader: "Bachelor's degree",
    // duration: "September 2020 - July 2019",
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  // {
  //   schoolName: "Ecole de cadre de sousse",
  //   subHeader: "Associate degree , Computer Science",
  //   duration: "September 2018 - June 2020",
  //   // desc:
  //   //     'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
  //   // descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
  // },
  // {
  //   schoolName: "Lycée Jemmel",
  //   subHeader: "High School Diploma , Computer Science",
  //   duration: "September 2010 - June 2014",
  // },
];

export const experience = [
  {
    role: "Full stack web Developer",
    company: "Wssel",
    companylogo: wssel,
    date: "Aout 2021 – Present",
    desc: "Taking part of the Research and Development team of the leading Saudis Food Delivery and Management system Wssel. Our mission is to continuously integrate new features for our customer and clients applications.",
  },
  {
    role: "Full stack web Developer",
    company: "Takiacademy",
    companylogo: takiacademy,
    date: "May 2019 – Aout 2021",
    desc: "Work on developing the site on the side of the admin, student and professor.",
    descBullets: [
      "Admin interface improvements and additions that facilitate their work and facilitate communication with customers",
      "New improvements and additions in the student interface to facilitate dealing with the website",
      "Experience the site and make suggestions to the programming team to improve the site",
      "Adding improvements and changes that contributed to improving the performance of the site",
    ],
  },
  {
    role: "Customer Service Assistant",
    company: "Takiacademy",
    companylogo: takiacademy,
    date: "June 2018 – May 2019",
    desc: "It was a beautiful period in which I learned a lot in dealing with clients and teachers",
    descBullets: [
      "Working with customers by listening to their problems and trying to find solutions to those problems",
      "Working with teachers by guiding and assisting them when they encounter problems with live sessions or on the web site",
      "Experience the site and make suggestions to the programming team to improve it",
    ],
  },
];

export const projects = [
  {
    name: "Calender",
    desc: [
      "💠 New Live Sessions Flexible Calendar",
      "💠 integrate calender page from template to React using Matriel ui and scss",
      '💠 Make the calender dynamic like google calender. Session"s Box is proportional to its duartion, and its layout is resposive when encumbered',
    ],
    imgId: "1dMx3hOhgoUZWEYqVfIzLVx27KRqngTQT",
    languages: ["React", "Redux", "MatrielUI", "Scss"],
  },
  {
    name: "Offers",
    desc: [
      "💠 Create an offers page, containing all the offers for each section",
      '💠 Colors and prices change dynamically according to the student"s choice',
    ],
    imgId: "1dMx3hOhgoUZWEYqVfIzLVx27KRqngTQT",
  },
  {
    name: "Exams",
    desc: [
      "💠 Crafting a webpage for assignements : browsing, downloading, and uploading the user essay",
    ],
  },
  {
    name: "Authentication system",
    desc: [
      "💠 Implement an authentication system That contains the login, register, confirm, reset password pages",
    ],
  },
  {
    name: "Rating live session",
    desc: [
      "💠 Add the rating of live sessions, by choosing one of the emoji and adding a comment",
    ],
  },
  {
    name: "Quiz(student interface)",
  },
  {
    name: "Quiz(Admin interface)",
  },
];
