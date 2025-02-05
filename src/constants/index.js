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
  BB,
  EML,
  URO,
  TG,
  HWC,
  UBC,
  stat301,
  cpsc210,
  visiontrack,
  fitnomic,
  forestar,
  cpsc330,
  WL

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "AR Developer / Project Manager",
    company_name: "UBC Emerging Media Lab (EML)",
    icon: EML,
    iconBg: "#383E56",
    date: "May 2023 - Sep 2023",
    points: [
      "🎤 Presented an interactive web prototype to 150 attendees at the EML Summer Showcase, earning 87% user satisfaction.",
      "🌲 Co-developed Forestar, a web app for self-guided forest bathing, tackling mobility & accessibility challenges.",
      "🔍 Integrated AR, Agile, and UX strategies to enhance sensory focus, using React, TypeScript, MongoDB, and Unity.",
      "📝 Created clear, concise documentation to support development, deployment, and user onboarding, scalability and enhancements."
    ],
  },
  {
    title: "Data Engineering/ML Research Fellow",
    company_name: "Research EXperience (REX) Fellowship",
    icon: URO,
    iconBg: "#90EE90",
    date: "Oct 2023 - May 2024",
    points: [
      "💧 Built a data pipeline for global waterflow research, processing 100K+ records across 10 countries (Scikit-Learn, Pandas, Matplotlib, NumPy)",
      "📊 Presented data-driven insights at MURC, translating complex research into clear, engaging visualizations."
    ],
  },
  {
    title: "Quantitative Analyst",
    company_name: "UBC Trading Group",
    icon: TG,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "📈 Boosted membership engagement by 32% through a data-driven market analysis framework.",
      "🔢 Applied statistical modeling (t-test, logistic regression, KS-test, KL-divergence) in STATA, achieving 95% accuracy on financial data.",
      "🚀 Engaged in entrepreneurial discussions, exploring innovation, startups, and market trends."
    ],
  },
  {
    title: "Data Engineering Intern",
    company_name: "BlackBerry",
    icon: BB,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "🚀 Deployed ML model endpoints (Python, Spark, Terraform), automating 10+ ETL pipelines for 200+ users via Databricks API.",
      "⚡ Built monitoring pipelines (Python, SQL-Alert) to debug clusters, cutting cloud costs by 28% (Databricks, AWS).",
      "🔐 Optimized SQL schemas for 1M+ cybersecurity logs, boosting query performance by 35% (MySQL, scalable storage)",
      "🤝 Engaged with customers to gather feedback, ensuring data solutions met real-world needs",
      "📢 Communicated technical insights in user-friendly terms, enhancing adoption across teams."
      
    ],
  },
  {
    title: "Database Developer / Research Assistant",
    company_name: "Work & Learn Program, UBC, Three E's Lab",
    icon: UBC,
    iconBg: "#E6DEDD",
    date: "May 2024 - Sep 2024",
    points: [
      "🌱 Developed a time-series database for tree growth metrics across Canadian ecoregions (Python, ArcGIS).",
      "📊 Adapted a degree-day model from Dr. Josephine Gantois' US-based tree sustainability research.",
      "⚡ Processed 500K+ weather records (ERA5-Land) with Pandas, NumPy, Google Earth Engine, optimizing GCP workflows.",
    ],
  },
  {
    title: "Lead Tech Fellow",
    company_name: "Harvard WECode: Women Engineers Code Conference 2025",
    icon: HWC,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "🎓 WECode Scholar & Fellow, recognized for leadership and contributions to tech diversity.",
      "🌍 Leading a team of 5 fellows, directing virtual series on professional development & digital media.",
      "🤝 Strengthening US-Canada student connections through outreach and peer engagement at UBCV.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    "name": "STAT301: Statistical Modelling of University Rankings",
    "description": "An in-depth statistical analysis of university rankings using Multiple Linear Regression (MLR) to examine the impact of research score, student-to-staff ratio, and international student percentage on overall scores.",
    "tags": [
      {
        "name": "R",
        "color": "blue-text-gradient"
      },
      {
        "name": "statistical-modelling",
        "color": "green-text-gradient"
      },
      {
        "name": "data-analysis",
        "color": "pink-text-gradient"
      },
      {
        "name": "data-science-coursework",
        "color": "green-text-gradient"
      },
    ],
    "image": stat301,
    "source_code_link": "https://github.com/zhvner/stat301-final-project.git"
  },
  {
    "name": "CPSC330: Prediction of Credit Default",
    "description": "A machine learning project analyzing financial risk and predicting credit card defaults using advanced classification models, feature engineering, and model interpretability techniques.",
    "tags": [
      {
        "name": "machine-learning-coursework",
        "color": "blue-text-gradient"
      },
      {
        "name": "financial-risk",
        "color": "pink-text-gradient"
      },
      {
        "name": "logistic-regression-model",
        "color": "green-text-gradient"
      },
      {
        "name": "random-forest-classifier",
        "color": "green-text-gradient"
      },
      {
        "name": "XGBoost",
        "color": "green-text-gradient"
      },{
        "name": "LightGBM",
        "color": "green-text-gradient"
      },

    ],
    "image": cpsc330,
    "source_code_link": "https://github.com/zhvner/cpsc330-credit-default.git",
    "medium_link": "https://medium.com/@szhanerz/predicting-credit-default-a-data-driven-approach-to-financial-risk-management-17b2194c4df9"
  },
  {
    name: "CPSC210: ECOWARDROBE",
    description: "A sustainability-focused web application that helps users track the environmental impact of their wardrobe by logging outfits, monitoring material choices, and analyzing water and carbon footprints.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "UML",
        color: "pink-text-gradient",
      },
      {
        name: "2023",
        color: "pink-text-gradient",
      },
    ],
    image: cpsc210,
    source_code_link: "https://github.com/zhvner/EcoWardrobe.git",
  },
  {
    name: "VisionTrack",
    description: "A computer vision-powered tracking system that leverages OpenCV and YOLO to analyze video footage, enabling object detection and movement tracking for real-time insights.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient"
      },
      {
        name: "yolov8",
        color: "green-text-gradient"
      },
      {
        name: "flask",
        color: "pink-text-gradient"
      },
      {
        name: "computerVision",
        color: "green-text-gradient"
      }
    ],
    image: visiontrack,
    source_code_link: "https://github.com/zhvner/VisionTrack.git"
  },
  {
    "name": "Fitnomic",
    "description": "A mobile app that gamifies health and wellness by rewarding users for daily activity, helping companies maximize their wellness budgets.",
    "tags": [
      {
        "name": "react-native",
        "color": "blue-text-gradient"
      },
      {
        "name": "hackathon-winner",
        "color": "green-text-gradient"
      },
      {
        "name": "ui-ux",
        "color": "pink-text-gradient"
      },
      {
        "name": "pitch-deck",
        "color": "pink-text-gradient"
      },
      {
        "name": "SAPsponsorPrize",
        "color": "green-text-gradient"
      },
      {
        "name": "march2023",
        "color": "pink-text-gradient"
      },
    ],
    "image": fitnomic, 
    "source_code_link": "https://github.com/Saumya-2521/ProduHacks_2023",
    "demo_link": "https://devpost.com/software/fitnomic",  
    "medium_link": "https://pitch.com/public/99f7d141-0861-4fc9-8bf1-533f6b3cc41c"
  },
  {
    "name": "Forestʌr:Guide to Forest Bathing",
    "description": "A digital platform integrating Augmented Reality (AR) and interactive guidance to offer a personalized forest bathing experience, helping users reconnect with nature and enhance well-being.",
    "tags": [
      {
        "name": "augmented-reality",
        "color": "blue-text-gradient"
      },
      {
        "name": "web-app",
        "color": "green-text-gradient"
      },
      {
        "name": "mental-health",
        "color": "pink-text-gradient"
      },
      {
        "name": "summer2023",
        "color": "green-text-gradient"
      },
    ],
    "image": forestar,
    "demo_link": "https://needle-engine-forestspaces-638290901395762811.netlify.app/",
    "figma_link": "https://www.figma.com/design/DTYz2ItuUNHO4s6usupCLP/MVP-wireflow-Forest-Bathing-App?node-id=0-1&t=oy93gQPnuyRpA7w2-1",
    "medium_link": "https://eml.ubc.ca/projects/virtual-therapeutic-landscapes/"
  },
  {
    "name": "Climate Database Optimization",
    "description": "A data-driven research initiative focused on processing and analyzing large-scale climate datasets, leveraging cloud computing and geospatial analytics for sustainability research.",
    "tags": [
      {
        "name": "big-data",
        "color": "blue-text-gradient"
      },
      {
        "name": "cloud-computing",
        "color": "green-text-gradient"
      },
      {
        "name": "google-earth-engine",
        "color": "pink-text-gradient"
      },
      {
        "name": "GCP",
        "color": "green-text-gradient"
      },
      {
        "name": "summer2024",
        "color": "green-text-gradient"
      }
    ],
    "image": WL,
    "source_code_link": "https://github.com/zhvner/worklearn-database-optimization",
}

];

export { services, technologies, experiences, testimonials, projects };
