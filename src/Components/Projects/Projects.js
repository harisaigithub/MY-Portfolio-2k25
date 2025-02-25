// Import project images from the correct directory
import CourseWhizImg from "./images/coursewhiz.png";
import OCRProjectImg from "./images/ocr_project.png";
import SkillSetGoImg from "./images/skillsetgo.png";
import HelmetDetectionImg from "./images/helmetdetection.png";
import StockTradingImg from "./images/stock_trading.png";
import FlipkartCloneImg from "./images/flipkartclone.png";
import MyPortfolioImg from "./images/myportfolio.png";
import ECommerceInventoryImg from "./images/ecommerce_inventory.png";
import StudentDataImg from "./images/student_data.png";
import E2EProjectImg from "./images/e2e_project.png";
import CognifyzDSImg from "./images/cognifyz_data_science.png";
import CodSoftTributePageImg from "./images/codsoft_tribute_page.png";
import CodSoftCalculatorImg from "./images/codsoft_calculator.png";
import StudentGradeTrackerImg from "./images/student_grade_tracker.png";
import AndroidStudioImg from "./images/android_studio.png";
import CodSoftFreelancersImg from "./images/codsoft_freelancers.png";
import CodSoftPortfolioImg from "./images/codsoft_portfolio.png";
import JavaPortfolioImg from "./images/java_portfolio.png";

const projects = [
  // 1️⃣ CourseWhiz (AI-Powered Course Recommendation)
  {
    title: "CourseWhiz",
    duration: "November 2024 - December 2024",
    desc: "A smart course recommendation tool using NLP models like BERT to provide personalized suggestions.",
    tags: ["Python", "NLP", "BERT", "Transformers", "Streamlit", "Internship"],
    liveLink: "https://huggingface.co/spaces/harisaiparasap9/CourseWhiz",
    github: "https://github.com/harisaigithub/CourseWhiz",
    img: CourseWhizImg,
  },

  // 2️⃣ OCR & Keyword Search Application (Text Extraction)
  {
    title: "OCR & Keyword Search Application",
    duration: "September 2024",
    desc: "An OCR-powered application that extracts and searches text in images.",
    tags: ["Python", "OCR", "Tesseract", "OpenCV", "Streamlit", "Internship"],
    liveLink: "https://ocr-and-keyword-search-application.streamlit.app/",
    github:
      "https://github.com/harisaigithub/OCR-and-Keyword-Search-Application",
    img: OCRProjectImg,
  },

  // 3️⃣ SkillSetGo (Educational Platform for Students)
  {
    title: "SkillSetGo",
    duration: "September 2024 - October 2024",
    desc: "A study material repository for interview preparation, GATE, and coursework, built using React.",
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "Education",
      "Responsive UI",
      "Web App",
    ],
    liveLink: "https://skillsetgo.netlify.app/",
    github: "https://github.com/harisaigithub/SkillSetGo",
    img: SkillSetGoImg,
  },

  // 4️⃣ Helmet Detection with YOLOv3 (AI Computer Vision)
  {
    title: "Helmet Detection with YOLOv3",
    duration: "September 2024 - October 2024",
    desc: "Real-time helmet detection using YOLOv3 with a Streamlit UI for image uploads.",
    tags: [
      "YOLOv3",
      "Computer Vision",
      "OpenCV",
      "Python",
      "Deep Learning",
      "Machine Learning",
    ],
    github: "https://github.com/harisaigithub/Helmet-Detection-YOLO",
    img: HelmetDetectionImg,
  },

  // 5️⃣ Stock Trading Platform (Web Simulation)
  {
    title: "Stock Trading Platform",
    duration: "2023",
    desc: "A simulated stock trading platform with buying/selling functionality.",
    tags: [
      "JavaScript",
      "Finance",
      "Trading",
      "Portfolio Tracking",
      "UI/UX",
      "Internship",
    ],
    liveLink: "https://ca-2stocktradingplatform.netlify.app/",
    github:
      "https://github.com/harisaigithub/CodeAlpha/tree/main/TASK-2/2.2-Stock%20Trading%20Platform",
    img: StockTradingImg,
  },

  // 6️⃣ Flipkart Clone (E-Commerce Frontend)
  {
    title: "Flipkart Clone",
    duration: "November 2023 - December 2023",
    desc: "A functional clone of Flipkart using HTML, CSS, and JavaScript to demonstrate front-end development skills.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Frontend", "E-Commerce"],
    liveLink: "https://harisaigithub.github.io/flipkart_clone/",
    github: "https://github.com/harisaigithub/flipkart_clone",
    img: FlipkartCloneImg,
  },

  // 7️⃣ My Old Portfolio (Personal Website)
  {
    title: "My Old Portfolio Template",
    duration: "January 2024 - February 2024",
    desc: "A modern and responsive portfolio website built using React.js and Tailwind CSS.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Portfolio",
      "SEO",
      "Web App",
    ],
    liveLink: "https://parasaharisai-portfolio.netlify.app/",
    github: "https://github.com/harisaigithub/My_portfolio",
    img: MyPortfolioImg,
  },

  // 8️⃣ E-Commerce Inventory Management (Data Analytics)
  {
    title: "E-Commerce Inventory Management",
    duration: "July 2023 - August 2023",
    desc: "Developed an inventory management system in R for e-commerce businesses.",
    tags: [
      "R Programming",
      "Data Analysis",
      "Machine Learning",
      "Statistics",
      "Predictive Modeling",
      "Internship",
    ],
    github: "https://github.com/harisaigithub/PROJECTS__/tree/main/R%20project",
    img: ECommerceInventoryImg,
  },

  // 9️⃣ Student Data Management (Django Project)
  {
    title: "Student Data Management",
    duration: "January 2024 - March 2024",
    desc: "Django-based student data management system for course instructors.",
    tags: ["Django", "Python", "PostgreSQL", "Bootstrap", "CRUD", "Web App"],
    github: "https://github.com/harisaigithub/django_projects",
    img: StudentDataImg,
  },

  // 🔟 Minor Project (Web App Development)
  {
    title: "Minor Project",
    duration: "2023",
    desc: "An end-to-end project for web application development.",
    tags: ["Django", "Python", "React", "Full Stack", "Web App", "Internship"],
    liveLink: "https://binduvarsha.pythonanywhere.com/",
    github: "https://github.com/harisaigithub/E2E-Project-B2",
    img: E2EProjectImg,
  },

  // 1️⃣1️⃣ Cognifyz Data Science Internship (Workshop)
  {
    title: "Cognifyz Data Science Internship",
    duration: "2023",
    desc: "Completed tasks related to predictive modeling, feature engineering, and geospatial analysis.",
    tags: [
      "Data Science",
      "Machine Learning",
      "Python",
      "Pandas",
      "Visualization",
      "Internship",
    ],
    github:
      "https://github.com/harisaigithub/Cognifyz-Technologies/tree/main/Data%20Science",
    img: CognifyzDSImg,
  },

  // 1️⃣2️⃣ CodSoft Tribute Page (Web Project)
  {
    title: "Tribute Page For MSD",
    duration: "2023",
    desc: "A tribute page created as part of CodSoft's web development internship.",
    tags: ["HTML", "CSS", "Bootstrap", "Design", "Frontend", "Internship"],
    liveLink: "https://msd7-tributepage.netlify.app/",
    github: "https://github.com/harisaigithub/codsoft-L2-T1-Tribute-Page",
    img: CodSoftTributePageImg,
  },

  // 1️⃣3️⃣ CodSoft Calculator (Basic Calculator)
  {
    title: "Calculator CodSoft",
    duration: "2023",
    desc: "A basic calculator application built using HTML, CSS, and JavaScript.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "DOM Manipulation",
      "Web App",
      "Internship",
    ],
    liveLink: "https://cod-soft-calculator.netlify.app/",
    github: "https://github.com/harisaigithub/codsoft-L1-T3-Calculator",
    img: CodSoftCalculatorImg,
  },

  // 1️⃣4️⃣ Student Grade Tracker (Education Tool)
  {
    title: "Student Grade Tracker",
    duration: "2023",
    desc: "An application to track student grades, calculate averages, and display performance insights.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Education",
      "Data Visualization",
      "Internship",
    ],
    liveLink: "https://codealpha-students-grade-tracker.netlify.app/",
    github:
      "https://github.com/harisaigithub/CodeAlpha/tree/main/TASK-1/Student_Grade_Tracker",
    img: StudentGradeTrackerImg,
  },
  // 1️⃣5️⃣ Android Studio Projects (Collection of Android Apps)
  {
    title: "Android Studio Projects",
    duration: "May 2024",
    desc: "A collection of Android applications including Simple Calculator, Hello Toast Counter, and Explicit Intent apps.",
    tags: [
      "Android",
      "Java",
      "Kotlin",
      "Mobile App",
      "UI/UX",
      "Fun Experiment",
    ],
    github:
      "https://github.com/harisaigithub/android-studio/tree/main/AndroidStudioProjects",
    img: AndroidStudioImg,
  },

  // 1️⃣6️⃣ CodSoft Freelancers Landing Page
  {
    title: "Freelancers Landing Page - CodSoft",
    duration: "2023",
    desc: "A landing page designed for an on-demand freelancers platform.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Landing Page",
      "Web Design",
      "Internship",
    ],
    liveLink: "https://on-demand-freelancers.netlify.app/",
    github:
      "https://github.com/harisaigithub/codsoft-L1-T1-landingpage-OnDemandFreelancers",
    img: CodSoftFreelancersImg,
  },

  // 1️⃣7️⃣ CodSoft Portfolio (Personal Portfolio)
  {
    title: "Web Developer Portfolio CodSoft",
    duration: "2023",
    desc: "A personal portfolio website created as part of the CodSoft web development internship.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Portfolio",
      "Web Development",
      "Internship",
    ],
    liveLink: "https://hariz-portfolio.netlify.app/",
    github: "https://github.com/harisaigithub/codsoft-L1-T2-Portfolio",
    img: CodSoftPortfolioImg,
  },

  // 1️⃣8️⃣ Java Developer Portfolio (Portfolio Website)
  {
    title: "Java Developer Portfolio",
    duration: "2023",
    desc: "A portfolio website showcasing Java development projects, built as part of a CodeAlpha internship.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Portfolio", "Internship"],
    liveLink: "https://javahari-portfolio.netlify.app/",
    github:
      "https://github.com/harisaigithub/CodeAlpha/tree/main/TASK-2/2.1-Java_developer-Portfolio",
    img: JavaPortfolioImg,
  },
];

export default projects;
