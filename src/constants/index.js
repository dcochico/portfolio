import {
  service1,
  service2,
  service3,
  service4,
  circleci,
  css3,
  cypress,
  express,
  html5,
  javascript,
  mocha,
  postgresql,
  postman,
  react,
  reactrouter,
  sass,
  typescript,
  conn,
  meta,
  milestone,
  rs,
  backyarder,
  rancidtomatillos,
  humorme
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solver",
    icon: service1,
  },
  {
    title: "Critical Thinker",
    icon: service2,
  },
  {
    title: "Lifelong Learner",
    icon: service3,
  },
  {
    title: "Software Engineer",
    icon: service4,
  },
];

const technologies = [
  {
    icon: typescript,
    color: "#ffffff"
  },
  {
    icon: javascript,
    color: "#292510"
  },
  {
    icon: html5,
    color: "#ffffff"
  },
  {
    icon: sass,
    color: "#ffffff"
  },
  {
    icon: css3,
    color: "#ffffff"
  },
  {
    icon: react,
    color: "#23272f"
  },
  {
    icon: reactrouter,
    color: "#ffffff"
  },
  {
    icon: express,
    color: "#35a4ff"
  },
  {
    icon: cypress,
    color: "#27ab76"
  },
  {
    icon: circleci,
    color: "#ffffff"
  },
  {
    icon: mocha,
    color: "#ffffff"
  },
  {
    icon: postgresql,
    color: "#ffffff"
  },
  {
    icon: postman,
    color: "#ffffff"
  }
];

const experiences = [
  {
    title: "Accounts Payable Specialist",
    company_name: "Rudolph and Sletten",
    icon: rs,
    iconBg: "#e42726",
    date: "April 2022 - February 2023",
    points: [
      "Reviewed, verified, and processed invoices and expense reports in a timely manner",
      "Matched invoices to purchase orders and reconciled discrepancies",
      "Reconciled vendor statements and managed relationships with key vendors",
      "Assisted with month-end close and other financial reporting tasks as needed",
      "Ensured compliance with company policies and procedures as well as accounting and legal regulations"
    ],
  },
  {
    title: "Screening Associate Shift Lead",
    company_name: "Meta",
    icon: meta,
    iconBg: "#0180fd",
    date: "July 2020 - October 2021",
    points: [
      "Oversaw the daily operations of a team of 100+ screening associates",
      "Conducted regular coaching sessions to help team members improve their skills and knowledge in screening processes and procedures",
      "Assigned and delegated tasks to team members to ensure that all screening activities were completed accurately and on time",
      "Implemented quality control procedures to ensure that all screening results were accurate and met company standards",
      "Monitored the performance of screening equipment and reported any issues or malfunctions",
      "Collaborated with Security to ensure that all screening activities aligned with company policies and procedures",
      "Maintained accurate records of all screening activities",
      "Collaborated with other shift leads and managers to ensure that all screening activities were completed efficiently and effectively"
    ],
  },
  {
    title: "Technician",
    company_name: "Milestone Technologies, Inc.",
    icon: milestone,
    iconBg: "#2d498a",
    date: "June 2018 - June 2020",
    points: [
      "Disconnected and reconnected computer hardware and peripherals in workstation or server room environments",
      "Labeled and documented all disconnected hardware to ensure proper tracking and inventory management",
      "Collaborated with IT to ensure that all disconnects and reconnects were properly planned and coordinated",
      "Assisted with the setup and configuration of new workstations and servers as needed",
    ],
  },
  {
    title: "Landscape Assistant",
    company_name: "Connecticut College",
    icon: conn,
    iconBg: "#00457c",
    date: "January 2018 - March 2020",
    points: [
      "Helped maintain the Arboretum by mowing, pruning, planting, weeding, watering, etc.",
      "Assisted with the planning and execution of landscaping projects, including the installation of new plants, shrubs, and trees"
    ],
  },
  {
    title: "Catering Assistant",
    company_name: "Connecticut College",
    icon: conn,
    iconBg: "#00457c",
    date: "September 2016 - March 2020",
    points: [
      "Assisted with the preparation, setup, and cleanup of catering events, including setting up tables and chairs, arranging table settings, and preparing food and beverages",
      "Provided excellent customer service to guests, answered questions, and ensured their needs were met",
      "Cleaned and maintained catering equipment and work areas to ensure proper sanitation",
      "Assisted with the loading and unloading of catering equipment and supplies, and transported them to and from events",
      "Assisted with the preparation of food and beverages, including preparing sauces and mixing drinks",
      "Ensured that all catering events were set up and executed according to the specifications of the client, and made adjustments as needed",
      "Communicated effectively with team members to ensure that all aspects of the events were coordinated and executed smoothly",
      "Ensured that all supplies and equipment were properly maintained and stored",
      "Maintained a positive and professional attitude at all times, even under stressful conditions"
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Dan is, without a doubt, an exceptional teammate. Over the course of our time at Turing, I've had the privilege of collaborating with him on two significant projects, and his unwavering dedication and outstanding work ethic have consistently left a lasting impression. When I learned that I would be working with Dan on our second project together, I was genuinely thrilled. Dan is not just a hard worker; he is a powerhouse of commitment and perseverance. His ability to tackle challenges and find innovative solutions makes him an asset to any team he is on. Even when we have faced complex logical issues and bugs in our code, Dan's steady pace of problem solving inspires his team to continue working, knowing we will find a solution. One of Dan's greatest strengths is his laid-back communication style, which makes him incredibly easy to work with. This approach fosters a collaborative atmosphere where decision-making, problem-solving, and teamwork come naturally. Dan's calm and approachable demeanor makes even the most challenging tasks seem manageable. I especially have appreciated this when we have tackled new techs, because I always felt I had the space to ask Dan questions and learn with him. Dan's work ethic, problem-solving abilities, and dedication to teamwork are truly commendable. Dan will be an asset to any team or project he joins.",
    name: "Alexa V",
    image: "https://ca.slack-edge.com/T029P2S9M-U04PRLTTEQ3-90ce1030632e-512",
  },
  {
    testimonial:
      "I had the chance to work with Daniel on a group project while at Turing School of Software & Design. His problem-solving capabilities are nothing short of remarkable, consistently delivering unique and ingenious solutions. What sets Daniel apart is his unwavering dedication to thinking outside the box, allowing him to overcome challenges with ease and innovation. He's a really collaborative team member and is always willing to help.",
    name: "Caitlin C",
    image: "https://ca.slack-edge.com/T029P2S9M-U04BFLC51L3-556967b8e140-512",
  },
  {
    testimonial:
      "I had the privilege of working with Daniel on a group project in Mod 3 of Turing's Front End Developer curriculum, and I can say with confidence that Daniel is not only a skilled and resourceful developer, but also a well-rounded person who is enjoyable to work with. If something needed to get done and Daniel was assigned to it, there was no doubt that it would be delivered on time and with no sacrifice of quality. Daniel is a welcome addition to any team who values an intelligent, reliable, and professional software engineer.",
    name: "Jamie C",
    image: "https://ca.slack-edge.com/T029P2S9M-U04PU8Q469J-26a1dfdf7bd5-512",
  },
  {
    testimonial:
      "I had the opportunity to work with Dan on a group project at the Turing School of Software and Design. Dan's technical expertise and mastery of concepts were apparent throughout the project. However, what truly stood out was his exceptional collaboration skills. Dan effortlessly balanced providing guidance and direction to the group while making space for everyone to contribute their unique perspectives and talents. This approach not only fostered a collaborative and productive work environment but also enabled everyone on the team to learn and grow from one another.",
    name: "Laura G",
    image: "https://ca.slack-edge.com/T029P2S9M-U04L0J21HTJ-62296d25b987-512",
  },
  {
    testimonial:
      "Daniel played a pivotal role in nailing our Turing School of Software and Design capstone. His work ethic and ingenuity in the code helped us overcome some of the most challenging aspects of the project. I’m not always a huge fan of pair-programming, but Daniel makes for an excellent navigator when I’m at my wit's end on a problem - his cool and collected demeanor never seems to be shaken! Trust me when I say you WANT Daniel on your team and I can’t wait for the next opportunity to work with him.",
    name: "Matt F",
    image: "https://ca.slack-edge.com/T029P2S9M-U04PRQ4MSHY-fb9dcb20e238-512",
  },
  {
    testimonial:
      "Working with Daniel during the Mod1 group project at Turing School of Software and Design was such a delight. Daniel showed engagement throughout the project, displaying a strong understanding of functional JavaScript programming, teamwork, and overall professionalism. Additionally, Daniel’s ability to debug problems in our code showed his deep understanding of the material we were working with. Daniel's technical programming skills and friendly work ethic will undoubtedly make him a great addition to any software team out there! Daniel continues to impress beyond the scope of this project and I would enjoy any opportunity to work with him again.",
    name: "Mike G",
    image: "https://ca.slack-edge.com/T029P2S9M-U04L0J1EQQ0-b353bc639300-512",
  },
  {
    testimonial:
      "Dan is a thoughtful and meticulous Software Engineer with a light heart. Working with him on the Humor Me project was a real pleasure, not only because to his incredible work ethic but also due to his kind and easygoing nature. Dan is a person who thinks before he speaks, and comes to the table with intelligent, critically-thought out questions and concerns. He is also very self-aware and understands how to prioritize his own learning while still making sure his teammates are taken care of. His stability, level-headedness, and humor make him a wonderful teammate and one of my favorite people to work with. He is an outstanding asset to any team!",
    name: "Rachel P",
    image: "https://ca.slack-edge.com/T029P2S9M-U04PNS0QL21-fe2f3d47bcde-512",
  },
  {
    testimonial:
      "I got the chance to work with Daniel at Turing on a group project and I had such great time working with him. His ability to problem solve and debug is was extremely impressive- when we were stuck in our project Daniel was able to not only find the solution, but walk us through his process of how he came to it which was very helpful. He is a very strong programmer and I am very grateful that we got to work together on the mod 1 group project. I would love to work with him again in the future!",
    name: "Saki C",
    image: "https://ca.slack-edge.com/T029P2S9M-U04QFF2J11N-c26c23996548-512",
  },
  {
    testimonial:
      "Daniel will throw himself at a problem until he finds a solve. He is incredibly industrious, studious, and kind. He will go the extra mile when a team hits a blocker. If you want someone who will expand his knowledge base on his own, on a needs basis this is your person.",
    name: "Victor S",
    image: "https://ca.slack-edge.com/T029P2S9M-U04L0J1SSD6-6a1348b6cf1d-512",
  }
];

const projects = [
  {
    name: "Backyarder",
    description:
      "Web application that revolutionizes the way gardeners brainstorm and optimize their gardens.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "drag-and-drop",
        color: "green-text-gradient",
      },
      {
        name: "circleci",
        color: "pink-text-gradient",
      },
    ],
    image: backyarder,
    source_code_link: "https://github.com/Backyarder/backyarder-ui",
    deployment_link: "https://backyarder.vercel.app/"
  },
  {
    name: "Rancid Tomatillos",
    description:
      "Web application that enables users to search for movies, read overviews, and watch YouTube previews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "router",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "pink-text-gradient",
      },
    ],
    image: rancidtomatillos,
    source_code_link: "https://github.com/dcochico/rancid-tomatillos",
    deployment_link: "https://rancid-tomatillos-nu.vercel.app/"
  },
  {
    name: "Humor Me",
    description:
      "A comprehensive platform that allows users to generate and save motivational posters.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "knex",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: humorme,
    source_code_link: "https://github.com/dcochico/humor-me-be",
    deployment_link: "https://humor-me-ui.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };