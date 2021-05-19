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
    "Innovative Art Director with success designing, managing and executing projects from start to end for a variety of high-profile clients/brands. Adept at frontend website design, SEO plans and execution for informational and ecommerce websites. Highly skilled in delivering innovative ideas for books, magazines, brochures, videos and print media with an expert level of Adobe Creative Suite software. Knowledge of JavaScript, React.js, HTML5, CSS3, Flexbox layouts, MySQL, Node.js, Express.js, MongoDB, Command Line, Git, WordPress, Mac OS X operating systems, networking, troubleshooting, and evolving technologies. Demonstrated leadership, organization, communication, interpersonal, presentation, creative thinking, and problem-solving skills. All websites, pictures, illustrations and paintings on this site are created by Kasey.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Good ol' Pencil | Pen | Paint Brush",
    value: 100,
  },
  {
    name: "Photoshop | Illustrator | InDesign",
    value: 100,
  },
  {
    name: "Wordpress | Dreamweaver | Shopify",
    value: 100,
  },
  {
    name: "iMovie | After Effects | Premiere",
    value: 85,
  },
  {
    name: "XD | Figma",
    value: 85,
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
    value: 79,
  },
  {
    name: "Javascript",
    value: 79,
  },
  {
    name: "Express",
    value: 60,
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
    skills: [
      "Updated the design and incorported many plugin functions for this WordPress ecommerce site. Shipping calculator, wholesale site, fitment finder and SEO. Also enhanced email marketing and video editing. | HTML, CSS, WordPress, Photoshop, Illustrator",
    ],
    url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "BRP Racing Products | Ecommerce",
    skills: [
      "Complete design and art direction for this WordPress site. Implemented fitment finder, shipping calculator, SEO strategies and streamlined user experience. | HTML, CSS, WordPress, Photoshop",
    ],
    url: "https://shopbrp.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "E Line Accessories | Ecommerce",
    skills: [
      "Complete design and art direction of this WordPress ecommerce website and SEO. Including fitment finder and payment gateway. | HTML, CSS, WordPress, Photoshop",
    ],
    url: "https://elineaccessories.com",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Excavator Tek | Blog",
    skills: [
      "Complete design and art direction for this WordPress informational blog site for a excavator company. | HTML, CSS, Wordpress, Photoshop",
    ],
    url: "https://excavatortek.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Don't Smoke My Hat - Hemp Hats | Ecommerce",
    skills: [
      "Complete design and art direction for this WordPress site for a online hemp hat retailer. | HTML, CSS, WordPress, Photoshop",
    ],
    url: "https://dontsmokemyhat.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project28",
    name: "Uncle Sam's Piggy Bank | React App",
    skills: [
      "Coding project to develop an app to allow a user to play with the federal budget figures. User can change the percentage of collected taxes and change federal department expenses to see if they can do a better job at balancing the federal budget than the government. | HTML, CSS, MongoDB, Express, React, Node, Photoshop",
    ],
    url: "https://unclesamspiggybank.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Weather Dashboard App",
    skills: [
      "Coding project to connect to an API and pull weather data to a user dashboard. | HTML, CSS, JS, JQuery, Photoshop",
    ],
    url: "https://kcraymond.github.io/Weather-Dashboard/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Workout Tracker App",
    skills: [
      "Coding project to connect the front end and setup Mongo DB with Atlas. | HTML, CSS, JS, Mongo DB, Atlas, Photoshop",
    ],
    url:
      "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project8",
    name: "Employee Team Builder",
    skills: [
      "Coding project to generate a front end HTML page build in the terminal with Node.js. | HTML, CSS, JS, Node, Photoshop",
    ],
    url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project9",
    name: "Trivia Game App | Lets Get Trivial",
    skills: [
      "Fun coding project to pull in APIs and use local storage. | HTML, CSS, JS, Photoshop",
    ],
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
  {
    // Add image in './styles/images.css' in #project6
    id: "project44",
    name: "Switchbacks Soccer Team | Promotional Poster",
    skills: ["Photoshop, Illustrator"],
    // url:
    //   "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project45",
    name: "Switchbacks Soccer Team | Promotional Banner",
    skills: ["Photoshop, Illustrator"],
    // url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project46",
    name: "Switchbacks Entertainment | Concert Poster",
    skills: ["Photoshop, Illustrator"],
    //   url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
];
const section7Title = "Trade Show Design & Marketing";
const projects3 = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project19",
    name: "Display Image | Trade Show Design & Production",
    skills: [
      "Back Lit Graphics, Large Banners, Corporate Interiors, Brochures, PowerPoint Presentations ",
    ],
    // url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project20",
    name: "6 Foot Convertible Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://shopbrp.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project21",
    name: "10 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "src/images/Slavens Racing Magazine Ads.pdf",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project22",
    name: "Pop Up Banners | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://excavatortek.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project23",
    name: "20 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://dontsmokemyhat.com",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project24",
    name: "Banner System | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://kcraymond.github.io/Weather-Dashboard/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project25",
    name: "10 Foot Display & Light Tower | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url:
    //   "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project26",
    name: "6 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project27",
    name: "6 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    //   url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project40",
    name: "10 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url:
    //   "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project41",
    name: "6 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    // url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project42",
    name: "10 Foot Display | Trade Show",
    skills: ["Photoshop, Illustrator"],
    //   url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Art & Illustrations";
const projects4 = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project29",
    name: "Commercial Restaurant Mural - Left Side | Acrylics & Spray Paint",
    skills: [
      "Designed and painted entrance cove in downtown Colorado Springs at the East Coast Deli",
    ],
    // url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project30",
    name: "Commercial Restaurant Mural - Right Side",
    skills: [
      "Funny thing is that I have never even been to the east coast, but it's on my bucket list. Painted from photos.",
    ],
    // url: "https://slavensracing.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project31",
    name: "Day Care Mural | Acrylics",
    skills: [
      `Recreated a painting of "Where the Wild Things Are" for a local day care. Ironically, I was surrounded by little wild things the whole process :)`,
    ],
    // url: "https://shopbrp.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project32",
    name: "Logo Illustration | Colored Pencil",
    skills: [
      "Custom logo designed and created for Excavator Company, Excavator Tek",
    ],
    // url: "src/images/Slavens Racing Magazine Ads.pdf",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project33",
    name: "Logo Sign Design | Illustrator, Photoshop",
    skills: ["Custom logo designed and created for D'Vine Wine store signage"],
    // url: "src/images/Slavens Racing Magazine Ads.pdf",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project43",
    name: "Tile Painting | Acid Ink",
    skills: ["Custom painting for tiling project"],
    // url: "src/images/Slavens Racing Magazine Ads.pdf",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project34",
    name: "Typography | Illustrator",
    skills: ["Custom t-shirt art for screen printing"],
    // url: "https://excavatortek.com",
  },
  {
    id: "project35",
    name: "Typography | Illustrator",
    skills: ["Custom t-shirt art for screen printing"],
    // url: "https://dontsmokemyhat.com",
  },
  {
    id: "project36",
    name: "Typography | Illustrator",
    skills: ["Custom t-shirt art for screen printing"],
    // url: "https://kcraymond.github.io/Weather-Dashboard/",
  },
  {
    id: "project37",
    name: "Event Logo | Illustrator",
    skills: [
      "Logo to promote the local event at the new Skateboard park for National Go Skateboarding Day.",
    ],
    // url:
    //   "https://limitless-crag-66215.herokuapp.com/?id=602bf784af7f55001513dab4",
  },
  {
    id: "project38",
    name: "Logo | Illustrator, Photoshop",
    skills: [
      "Logo to promote the Slavens Tested video series and product reviews.",
    ],
    // url: "https://github.com/KcRaymond/Template-Engine",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project39",
    name: "Logo | Illustrator",
    skills: ["Colorado inspired Slavens Racing logo for t-shirts"],
    //   url: "https://kcraymond.github.io/LetsGetTrivial/",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Thanks for viewing my work. I will be adding more projects as I input great designs into my terminal and bring creativity again and again to the galaxy... Click the arrow below to download my resume. ",
  copyright: "Kasey Raymond",
  contactUrl: "mailto:kaseyleigh1978@gmail.com",
};

const social = {
  github: "https://github.com/KcRaymond",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/KLR-Designs/",
  instagram: "https://instagram.com",
  resume:
    "https://drive.google.com/file/d/19NFZpgPt4r4-zRf40BFrwJBJ6fxiHuHg/view?usp=sharing",
};
export {
  header,
  background,
  about,
  skillsBar,
  projects,
  projects2,
  projects3,
  projects4,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
  section7Title,
};
