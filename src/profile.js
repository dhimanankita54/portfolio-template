// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Ankita Dhiman",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Analytical and creative team player with a strong background in designing, planning and maintaining software programs and desirous to hone my technical skills and expertise along with designing creative software and products.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const sectionskill = "Skills"
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Mongodb",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  // {
  //   name: "Express",
  //   // svg: 'svg xmlns="http://www.w3.org/2000/svg" width="100" height="57" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="evenodd"',
  //   faClass: "fab fa-expressjs",
  // },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  // {
  //   name: "Github",
  //   // svg: '',
  //   faClass: "fab fa-github",
  // },
 
  // {
  //   name: "AWS",
  //   // svg: '',
  //   faClass: "fab fa-aws",
  // },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "KIMAYE",
    des: "Kimaye is a global fruit brand consistently delivering the safest and high quality fruits at doorstep. Provides fruits which earns Kimaye badge.",
    skills: ["HTML, CSS, JS"],
    view: "https://kimaye-clone.netlify.app/",
    git: "https://github.com/dhimanankita54/Kimaye"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "COURSERA",
    des: "Coursera partners with universities and companies to bring job-relevant online learning to individuals and organizations worldwide. ",
    skills: ["HTML, CSS, JS, API, Mongodb, Express"],
    view: "https://courseraclone-backend.herokuapp.com/",
    git: "https://github.com/dhimanankita54/coursera-backend"
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "IMDb",
    des:"IMDb is an online database of information about films, TV series and streaming content – including cast and biographies, ratings and critical reviews.",
    skills: ["HTML, CSS, JS, React"],
    git: "https://github.com/dhimanankita54/IMDB-Clone",
    view: "https://imdb-cloned.netlify.app/"
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "Imgur",
    des:"Imgur is an American online image sharing and image hosting service with a focus on social gossip.  The service has hosted viral images and memes, particularly those posted on Reddit.",
    skills: ["HTML, CSS, Vanilla JS"],
    git: "https://github.com/dhimanankita54/Imgur",
    view: "https://imgur-mini-app.netlify.app"
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Blogs";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "KIMAYE-CLONE",
    url: "https://dhimanankita54.hashnode.dev/kimaye-clone",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "COURSERA-BACKEND",
    url: "https://medium.com/@dhimanankita54/coursera-clone-with-backend-80fe96e0176a",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "IMDb- CLONE",
    url: "https://medium.com/@dhimanankita54/imdb-clone-228074bacacc", 
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact me";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
  copyright: "Ankita Dhiman",
  contactUrl: "https://formspree.io/f/mayvoqga",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/dhimanankita54",
  medium: "https://medium.com/@dhimanankita54",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/ankita-dhiman-479649202",
  resume: "https://drive.google.com/file/d/1ITewy2Hzf5TspMgsMq-x-neup5nEVdHH/view?usp=sharing",
  phone: "9599811925",
  mail: "dhimanankita54@gmail.com"
};
const username = {
  github: "@dhimanankita54",
  linkedin: "Ankita Dhiman",
  medium: "@dhimanankita54"
}
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  username,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  sectionskill,
};
