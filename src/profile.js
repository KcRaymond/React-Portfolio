// Change your display name on tha landing display
const header = {
  name: "KR",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Kasey...";
const about = {
  paragraph:
    "An Innovative front-end developer/designer with success designing, executing and managing projects from start to end for a variety of high-profile clients and brands. Adept at SEO plans and execution for informational and ecommerce websites. Highly skilled in delivering innovative ideas for books, magazines, brochures and print media. Expert with Adobe Creative Suite programs including PhotoShop, Illutrator, Indesign and XD. Knowledge of React, JavaScript, MySQL, Node, Express, MongoDB, Command Line, Git, WordPress, Mac OS X operating systems, networking, troubleshooting, HTML5, CSS3, Flexbox layouts, and evolving technologies. Demonstrated organizational, communication, interpersonal, presentation, creative thinking, and problem-solving skills. Natural talent and an eye for design are rare, any company would greatly benefit and quickly see the invaluable asset added to their team. All websites, pictures, illustrations and paintings on this site are created by Kasey.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Photoshop | Illustrator | InDesign",
    value: 100,
  },
  {
    name: "Wordpress | WooCommerce",
    value: 100,
  },
  {
    name: "Adobe XD | Figma",
    value: 75,
  },
  {
    name: "HTML5",
    value: 85,
  },
  {
    name: "CSS3 | Sass",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Javascript",
    value: 75,
  },

  {
    name: "Node",
    value: 50,
  },
  {
    name: "Mongoose",
    value: 50,
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Digital Media";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Slavens Racing | Ecommerce",
    skills: ["HTML, CSS, WordPress, Photoshop"],
    url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "BRP Racing Products | Ecommerce",
    skills: ["HTML, CSS, WordPress, Photoshop"],
    url: "https://shopbrp.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "E Line Accessories | Ecommerce",
    skills: ["HTML, CSS, WordPress, Photoshop"],
    url: "https://elineaccessories.com",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Excavator Tek | Blog",
    skills: ["HTML, CSS, Wordpress, Photoshop"],
    url: "https://excavatortek.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Don't Smoke My Hat | Ecommerce",
    skills: ["HTML, CSS, WordPress, Photoshop"],
    url: "https://dontsmokemyhat.com",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Weather Dashboard",
    skills: ["HTML, CSS, JS, JQuery, Photoshop"],
    url: "https://kcraymond.github.io/Weather-Dashboard/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Workout Tracker",
    skills: ["HTML, CSS, JS, Mongo DB, Atlas, Photoshop"],
    url:
      "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project8",
    name: "Employee Team Builder",
    skills: ["HTML, CSS, JS, Node, Photoshop"],
    url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project9",
    name: "Trivia Game",
    skills: ["HTML, CSS, JS, Photoshop"],
    url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
];
const section6Title = "Printed Media";
const projects2 = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project10",
    name: "Craftsman Tool | Packaging Design",
    skills: ["Photoshop, Illustrator"],
    // url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project11",
    name: "Ridgid Tool | Packaging Design",
    skills: ["Photoshop, Illustrator"],
    // url: "https://shopbrp.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project12",
    name: "Slavens Racing | Magazine Ads",
    skills: ["Photoshop, Illustrator"],
    // url: "src/images/Slavens Racing Magazine Ads.pdf",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project13",
    name: "Various Clients | T Shirt Design",
    skills: ["Photoshop, Illustrator"],
    // url: "https://excavatortek.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project14",
    name: "Rocky Mountain Motorworks | Catalog Covers",
    skills: ["Photoshop, Illustrator, InDesign"],
    // url: "https://dontsmokemyhat.com",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project15",
    name: "Rocky Mountain Motorworks | Magazine Ads",
    skills: ["Photoshop, Illustrator, InDesign"],
    // url: "https://kcraymond.github.io/Weather-Dashboard/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project16",
    name: "Rocky Mountain Motorworks | Catalog Inside Spreads",
    skills: ["Photoshop, Illustrator, InDesign"],
    // url:
    //   "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project17",
    name: "Rocky Mountain Motorworks | Catalog Inside Covers",
    skills: ["Photoshop, Illustrator, InDesign"],
    // url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project18",
    name: "Various Clients | Logo Design, Business Cards, Brochures...",
    skills: ["Photoshop, Illustrator, InDesign"],
    //   url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Art & Illustrations";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Mural Painting | Acrylics & Spray Paint",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Mural Painting | Acrylics",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Illustration | Colored Pencil",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc4",
    name: "Typography | Illustrator",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc5",
    name: "Typography | Illustrator",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc6",
    name: "Typography | Illustrator",
    // url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Thanks for viewing my work. I will be adding more projects as I input great designs into my terminal and bring creativity again and again to the galaxy... Click the arrow below to download my resume. ",
  copyright: "Kasey Raymond",
  contactUrl: "mailto:kaseyleigh1978@gmail.com",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/KcRaymond",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/KLR-Designs/",
  instagram: "https://instagram.com",
  resume:
    "https://drive.google.com/file/d/1k5s5i3f2JgNgqTtgI9_2IPQHHu3U6sII/view?usp=sharing",
};
// Dont change anything here
export {
  header,
  background,
  about,
  skillsBar,
  projects,
  projects2,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
};
