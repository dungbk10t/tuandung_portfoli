/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "TuanDung",
  title: "Hi all, I'm Dzung",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / VueJs / Nodejs / ASP .NET / PHP Lavarel / Ruby on rails / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11VfrVron_ajRNdcOnAHY9b-94GhHirQk/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dungbk10t",
  linkedin: "https://www.linkedin.com/in/dungbk10t/",
  gmail: "dungbk10t@gmail.com",
  gitlab: "https://gitlab.com/dungbk10t",
  facebook: "https://www.facebook.com/tuandung1802",
  medium: "https://medium.com/@dungbk10t",
  stackoverflow: "https://stackoverflow.com/users/15194732/pham-tuan-dung",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanoi University of Science and Technology",
      logo: require("./assets/images/HUSTLogo.png"),
      subHeader: "HEDSPI Information Specialist Technology (ELITECH ICT PROGRAM)",
      duration: "September 2017 - June 2022",
      desc: "Experience",
      descBullets: [
        "I have studied Japanese and basic Software Engineering subjects like Data structures and algorithms, OOP, Operating System, Discrete Math, Network Programming, Computer System, Programming System, Distributed System, etc.",
        "Besides that, I have finished courses about Web development like HTML, CSS, Javascript, Java, React,... on Udemy, Coursera, Freecodecamp, Codecademy, etc.",
        "At university, I joined the Japanese club to develop my Japanese ability, and at the same time spread the beauty of Japanese culture to Vietnam."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "MISA JSC",
      companylogo: require("./assets/images/misaLogo.png"),
      date: "June 2021 – August 2021",
      desc: "Design and build CUKCUK website",
      descBullets: [
        "Purpose: Help manage employee and customer information data.",
        "Basic functions: Add/edit/delete/update employee and customer information...",
        "FRONT END : Vue.js",
        "BACK END : ASP .NET"
      ]
    },
    {
      role: "Frontend Developer",
      company: "FPT Software",  
      companylogo: require("./assets/images/FPTLogo.png"),
      date: "February 2022 – Present",
      desc: "Participating in the project of building software products for the Japanese market."
    },
    {
      role: "Web Programer",
      company: "MindX",
      companylogo: require("./assets/images/mindxLogo.png"),
      date: "February 2019 – June 2019",
      desc: "Learned and finished Web Developer course with React. Finished final project web."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pj_eventappLogo.png"),
      projectName: "Event App",
      projectDesc: "Website to help you learn vocabulary through cards",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.google.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pj_cardLogo.png"),
      projectName: "Flashcard website",
      projectDesc: "Online website to post events",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.google.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "2021 Summer Business Japanese Special Course",
      subtitle:
        "In this course, I will learn about the Japanese language, cultural knowledge, manners, skills, etc. that are required in business situations.",
      image: require("./assets/images/certi_Tokyo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://husteduvn-my.sharepoint.com/:f:/g/personal/dung_pt176728_sis_hust_edu_vn/Es5O9oSANsVMtJbgL61Bx6EBtNH1SXHdx6OiXFRaLqyg9w?e=9VEsJU"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "The AWS Certified Cloud Practitioner (CLF-C01) is the first in the Amazon Web Services certification system.",
      image: require("./assets/images/certi_aws_cloud_practitioner.png"),
      footerLink: [
        {
          name: "Certification",
          url: "www.gooogle.com"
        }
      ]
    },
    {
      title:
        "Full-Stack Web Development with React Specialization",
      subtitle:
        "Completed Certifcation from The Hong Kong University of Science and Technology",
      image: require("./assets/images/certi_courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "www.gooogle.com"
        }
      ]
    },
    {
      title:
        "Data Structures and Algorithms Specialization",
      subtitle:
        "Completed Certifcation from UNIVERSITY OF CALIFORNIA SAN DIEGOHSE UNIVERSITY",
      image: require("./assets/images/certi_courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "www.gooogle.com"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://qiita.com/komanaki/items/dc7d43b434a5612570f9",
      title: "生徒の努力を得点じゃなく、「音ゲー」のようなリザルト画面で評しました!",
      description:
        ""
    },
    {
      url: "https://qiita.com/GunseiKPaseri/items/7652787323f1ecd97f69",
      title: "JavaScriptの反意図性(クソ挙動)を指摘するバズツイ周辺解説",
      description:
        "犯罪にも認定されるjavascriptの反意図性"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://soundcloud.com/refeeld/project-aer-x-refeeld-brighter-days-refeeld-vip?si=0b7bdf916bb04e939fcfcaa211d740a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Contact information

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you have problems with programming or just say Hello. Please contact me. My Inbox is open for all. I can help you with Algorithms, Network programming, Linux, Web Programming, Cloud Service, DevOps, Opensource Development, etc.",
  // number: "0346905088",
  // email_address: "dungbk10t@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
