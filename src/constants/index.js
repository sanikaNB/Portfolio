import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "Java",
    icon: creator,
  },
  {
    title: "NodeJS",
    icon: nodejs,
  },
  {
    title: "GIT",
    icon: git,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Creintors Automation Solutions Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - present",
    points: [
      "I am involved in developing an Enterprise Resource Planning (ERP) system for Vendor Management.",
      "The technology we are using for building this software is MERN stack.",
      "I’m getting hands-on experience with large-scale software development, learning about integrating different business processes into one unified system.",
      "Working on the ERP has pushed me to improve my skills in both back-end and front-end development.",
    ],
  }

];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "TELEMEDICINE PLATFORM ",
    description:
      "Virtual Consultations: Connects patients with healthcare professionals for online medical consultations, providing accessible medical   care regardless of  location. Convenient and Efficient: Ensures medical care is available anytime, anywhere, enhancing convenience and efficiency for both patients and providers. Comprehensive Care: Facilitates a wide range of healthcare services through a user-friendly platform ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "SIGN LANGUAGE RECOGNITION ",
    description:
      "Sign detection: A real-time sign language recognition system that converts hand    gestures into text using machine learning. Leveraged Python with TensorFlow for building and training an LSTM-based model, and OpenCV for video capture and processing. Sign language learning: It provides visual demonstrations for learning and practicing signs.  Integrated the machine learning model into the web application using JSON for seamless real-time predictions and user interaction. Speech to sign conversion: Converts spoken language into sign language using speech recognition and a pre-trained model to display corresponding sign images",
    tags:[
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "VENDOR MANAGEMENT SYSTEM                                              ",
    description:
      "Vendor Management: The website allows vendors to sign up, create profiles, and showcase their job experience. Vendors can view and apply for job postings listed by companies. Job Handling: Companies can post jobs, review applications from vendors, approve suitable candidates, and manage the job progress. Vendors get notified of approvals and can track their job assignments. Invoicing generation: After completing jobs, vendors can generate invoices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
