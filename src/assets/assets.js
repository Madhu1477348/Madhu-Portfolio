import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";
import ProfileImg from "../assets/ProfileImg.jpeg";
import Project1 from "../assets/Portfolio.png";
import Project2 from "../assets/Weather.png";
import Project3 from "../assets/Ecom-Project.png";

export const assets = {
  ProfileImg,
};

export const skillSet = [
  {
    id: 1,
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Advanced",
    description:
      "Proficient in semantic HTML, forms, structure, accessibility, and SEO-friendly markup.",
  },
  {
    id: 2,
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Intermediate",
    description:
      "Skilled in Flexbox, Grid, animations, responsive design, and custom component styling.",
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    level: "Intermediate",
    description:
      "Good knowledge of responsive layout, grid system, utility classes, and custom styling.",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Intermediate",
    description:
      "Strong understanding of ES6+, DOM manipulation, async programming, and event handling.",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    level: "Intermediate",
    description:
      "Experience with utility-first styling, responsive design, animations, and custom configuration.",
  },
  {
    id: 6,
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Intermediate",
    description:
      "Experienced in component-based UI, hooks, state management, routing, and API integration.",
  },
  {
    id: 7,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Intermediate",
    description:
      "Hands-on experience with scripting, automation, problem-solving, and backend development.",
  },
  {
    id: 8,
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: "Intermediate",
    description:
      "Knowledge of writing queries, joins, CRUD operations, database design, and optimization.",
  },
  {
    id: 9,
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    level: "Beginner",
    description:
      "Familiar with building backend APIs, models, templates, and MVC structure.",
  },
  {
    id: 10,
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    level: "Beginner",
    description:
      "Basic understanding of numerical operations, arrays, math functions, and data manipulation.",
  },
  {
    id: 11,
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    level: "Beginner",
    description:
      "Knowledge of DataFrames, data cleaning, data operations, merging, and analysis.",
  },
  {
    id: 12,
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    level: "Beginner",
    description:
      "Experience in plotting graphs, charts, and visualizing datasets.",
  },
];

export const projectsDetails = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio website showcasing skills, projects, and contact information.",
    tools: ["React", "TailwindCSS"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Reusable components",
      "Modern UI",
    ],
    image: Project1,
    liveDemo: "https://your-portfolio-live-link.com",
    sourceCode: "https://github.com/your-username/portfolio",
  },
  {
    id: 2,
    title: "Weather Report Application",
    description:
      "A responsive weather application that shows live weather data using OpenWeather API.",
    tools: ["React", "Bootstrap", "OpenWeather API"],
    features: [
      "Search by city",
      "Live weather updates",
      "Responsive layout",
      "API integration",
    ],
    image: Project2,
    liveDemo: "https://madhu1477348.github.io/Weather-App/",
    sourceCode: "https://github.com/Madhu1477348/Weather-App",
  },
  {
    id: 3,
    title: "Ecommerce Website",
    description:
      "A responsive ecommerce web application that fetches products from FakeStoreAPI.",
    tools: ["React", "Bootstrap", "FakeStoreAPI"],
    features: [
      "Product listing",
      "API integration",
      "Responsive design",
      "Add to Cart (UI)",
    ],
    image: Project3,
    liveDemo: "https://madhu1477348.github.io/Ecommerce-WebStore/",
    sourceCode: "https://github.com/Madhu1477348/Ecommerce-WebStore/",
  },
];
