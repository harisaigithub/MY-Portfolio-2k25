import kuber from "./skills-tools/kubernetes-icon.svg";
import cybs from "./skills-tools/cybersecurity.png";
import nets from "./skills-tools/network security.svg";
import eth from "./skills-tools/white-hacker-male-svgrepo-com.svg";
import azr from "./skills-tools/azure.svg";
import cisco from "./skills-tools/cisco-svgrepo-com.svg";
import fotinet from "./skills-tools/fortinet.png";
import gitlab from "./skills-tools/gitlab.svg";
import intell from "./skills-tools/intellij-idea.svg";
import jupyter from "./skills-tools/Jupyter_logo.svg.png";
import meta from "./skills-tools/Metasploit.svg";
import wireshark from "./skills-tools/Wireshark_icon.png";
import salesforce from "./skills-tools/Salesforce.com_logo.svg.png";
import vscode from "./skills-tools/vs code.svg";
import netlify from "./skills-tools/netlify.png";
import PowerBI from "./skills-tools/New_Power_BI_Logo.png";
import ds from "./skills-tools/data science.png";
import r from "./skills-tools/R_logo.png";
import streamlit from "./skills-tools/Streamlit.png";
import restapi from "./skills-tools/rest-api.png";
import ml from "./skills-tools/ml.png";
import dl from "./skills-tools/dl.png";
import gcc from "./skills-tools/google-cloud.svg";
import canva from "./skills-tools/Canva.png";
import androidstudio from "./skills-tools/android studio.png";
import notion from "./skills-tools/notion.png";
import tesseract from "./skills-tools/tesseract.png";
import trello from "./skills-tools/trello-v2.svg";

const educationList = [
  {
    degree: "Bachelor of Technology",
    course: "Computer Science",
    specialization: "Artificial Intelligence and Machine Learning (CSM)",
    college: "Vasireddy Venkatadri Institute Of Technology",
    cgpa: "8.2",
    year: "2022-2025",
    place: "Guntur, A.P, India",
  },
  {
    degree: "Diploma",
    specialization: "Electrical and Electronic Engineering (EEE)",
    college: "Government Polytechnic Vijayawada",
    cgpa: "87.32%",
    year: "2019-2022",
    place: "Vijayawada, A.P, India",
  },
  {
    degree: "SCC",
    course: "X",
    college: "Adarsh (EM) School",
    cgpa: "10",
    year: "2018-2019",
    place: "Tenali, A.P, India",
  },
];



const skills = [
  {
    name: "Python",
    href: "https://www.python.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(55, 118, 171, 0.2), rgba(37, 78, 112, 40%))", // Transparent blue for Python
  }, // 1
  {
    name: "Machine Learning",
    href: "https://en.wikipedia.org/wiki/Machine_learning",
    imgSrc: ml,
    gradient:
      "linear-gradient(to right, rgba(24, 144, 255, 0.2), rgba(8, 108, 209, 40%))", // Transparent blue for ML
  }, // 2
  {
    name: "Deep Learning",
    href: "https://en.wikipedia.org/wiki/Deep_learning",
    imgSrc: dl,
    gradient:
      "linear-gradient(to right, rgba(85, 85, 255, 0.2), rgba(45, 45, 203, 40%))", // Transparent purple for DL
  }, // 3
  {
    name: "Data Science",
    href: "https://en.wikipedia.org/wiki/Data_science",
    imgSrc: ds,
    gradient:
      "linear-gradient(to right, rgba(0, 123, 255, 0.2), rgba(0, 83, 215, 40%))", // Transparent blue for Data Science
  }, // 4
  {
    name: "TensorFlow",
    href: "https://www.tensorflow.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(255, 138, 101, 0.2), rgba(231, 81, 31, 40%))", // Transparent orange for TensorFlow
  }, // 5
  {
    name: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(84, 110, 122, 0.2), rgba(55, 76, 86, 40%))", // Transparent grey for SQL
  }, // 6
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(255, 153, 0, 0.2), rgba(232, 114, 0, 40%))", // Transparent yellow for AWS
  }, // 7
  {
    name: "Docker",
    href: "https://www.docker.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(72, 114, 199, 0.2), rgba(45, 77, 145, 40%))", // Transparent blue for Docker
  }, // 8
  {
    name: "Git",
    href: "https://git-scm.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(240, 80, 50, 0.2), rgba(201, 38, 13, 40%))", // Transparent red for Git
  }, // 9
  {
    name: "Cloud Computing",
    href: "https://en.wikipedia.org/wiki/Cloud_computing",
    imgSrc: gcc,
    gradient:
      "linear-gradient(to right, rgba(47, 128, 237, 0.2), rgba(25, 95, 189, 40%))", // Transparent blue for Cloud Computing
  }, // 10
  {
    name: "Cybersecurity",
    href: "https://en.wikipedia.org/wiki/Computer_security",
    imgSrc: cybs,
    gradient:
      "linear-gradient(to right, rgba(33, 150, 243, 0.2), rgba(3, 120, 213, 40%))", // Transparent blue for Cybersecurity
  }, // 11
  {
    name: "Node.js",
    href: "https://nodejs.org/en/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(104, 160, 99, 0.2), rgba(67, 128, 62, 40%))", // Transparent green for Node.js
  }, // 12
  {
    name: "React",
    href: "https://reactjs.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(97, 218, 251, 0.2), rgba(66, 177, 219, 40%))", // Transparent light blue for React
  }, // 13
  {
    name: "UI/UX",
    href: "https://en.wikipedia.org/wiki/User_interface_design",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(242, 78, 30, 0.2), rgba(202, 38, 0, 40%))", // Transparent red for UI/UX
  }, // 14
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(247, 223, 30, 0.2), rgba(240, 200, 8, 40%))", // Transparent yellow for JS
  }, // 15
  {
    name: "Java",
    href: "https://www.java.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(244, 138, 30, 0.2), rgba(208, 102, 14, 40%))", // Transparent orange for Java
  }, // 16
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(51, 103, 145, 0.2), rgba(32, 67, 98, 40%))", // Transparent blue for PostgreSQL
  }, // 17
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(71, 162, 72, 0.2), rgba(47, 111, 48, 40%))", // Transparent green for MongoDB
  }, // 18
  {
    name: "Scikit-learn",
    href: "https://scikit-learn.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(252, 97, 97, 0.2), rgba(222, 37, 55, 40%))", // Transparent red for Scikit-learn
  }, // 19
  {
    name: "Kubernetes",
    href: "https://kubernetes.io/",
    imgSrc: kuber,
    gradient:
      "linear-gradient(to right, rgba(37, 94, 135, 0.2), rgba(29, 77, 105, 40%))", // Transparent cyan for Kubernetes
  }, // 20
  {
    name: "NLP",
    href: "https://en.wikipedia.org/wiki/Natural_language_processing",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(65, 131, 196, 0.2), rgba(41, 90, 140, 40%))", // Transparent blue for NLP
  }, // 21
  {
    name: "REST APIs",
    href: "https://en.wikipedia.org/wiki/Representational_state_transfer",
    imgSrc: restapi,
    gradient:
      "linear-gradient(to right, rgba(97, 218, 251, 0.2), rgba(66, 177, 219, 40%))", // Transparent light blue for REST APIs
  }, // 22
  {
    name: "JS Frameworks",
    href: "https://vuejs.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(66, 184, 131, 0.2), rgba(42, 133, 108, 40%))", // Transparent green for Vue.js
  }, // 23
  {
    name: "Ethical Hacking",
    href: "https://en.wikipedia.org/wiki/White_hat_(computer_security)",
    imgSrc: eth,
    gradient:
      "linear-gradient(to right, rgba(51, 51, 51, 0.2), rgba(26, 26, 26, 40%))", // Transparent dark for Ethical Hacking
  }, // 24
  {
    name: "Network Security",
    href: "https://en.wikipedia.org/wiki/Network_security",
    imgSrc: nets,
    gradient:
      "linear-gradient(to right, rgba(59, 89, 152, 0.2), rgba(39, 62, 117, 40%))", // Transparent blue for Network Security
  }, // 25
  {
    name: "PHP",
    href: "https://www.php.net/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(119, 123, 180, 0.2), rgba(79, 82, 140, 40%))", // Transparent purple for PHP
  }, // 26
  {
    name: "R Programming",
    href: "https://www.r-project.org/",
    imgSrc: r,
    gradient:
      "linear-gradient(to right, rgba(31, 120, 193, 0.2), rgba(18, 87, 146, 40%))", // Transparent blue for R Programming
  }, // 27
  {
    name: "Transformers",
    href: "https://huggingface.co/docs/transformers/index",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(92, 64, 141, 0.2), rgba(63, 36, 106, 40%))", // Transparent purple for Transformers
  }, // 28
  {
    name: "Django",
    href: "https://www.djangoproject.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(0, 68, 138, 0.2), rgba(0, 56, 115, 40%))", // Transparent blue for Django
  }, // 29
  {
    name: "Bootstrap",
    href: "https://getbootstrap.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(118, 13, 191, 0.2), rgba(84, 9, 157, 40%))", // Transparent purple for Bootstrap
  }, // 30
];



const tools = [
  {
    name: "GitHub",
    href: "https://github.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",
    gradient:
      "linear-gradient(to right, rgba(36, 41, 46, 0.2), rgba(16, 21, 26, 40%))", // Transparent black for GitHub
  }, // 1
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(255, 153, 0, 0.2), rgba(232, 114, 0, 40%))", // Transparent yellow for AWS
  }, // 2
  {
    name: "Docker",
    href: "https://www.docker.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(72, 114, 199, 0.2), rgba(45, 77, 145, 40%))", // Transparent blue for Docker
  }, // 3
  {
    name: "Google Cloud",
    href: "https://cloud.google.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(43, 121, 230, 0.2), rgba(26, 86, 184, 40%))", // Transparent blue for Google Cloud
  }, // 4
  {
    name: "Salesforce",
    href: "https://www.salesforce.com/",
    imgSrc: salesforce,
    gradient:
      "linear-gradient(to right, rgba(0, 162, 223, 0.2), rgba(0, 126, 181, 40%))", // Transparent blue for Salesforce
  }, // 5
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(51, 103, 145, 0.2), rgba(32, 67, 98, 40%))", // Transparent blue for PostgreSQL
  }, // 6
  {
    name: "MongoDB Atlas",
    href: "https://www.mongodb.com/cloud/atlas",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(71, 162, 72, 0.2), rgba(47, 111, 48, 40%))", // Transparent green for MongoDB Atlas
  }, // 7
  {
    name: "Jupyter Notebook",
    href: "https://jupyter.org/",
    imgSrc: jupyter,
    gradient:
      "linear-gradient(to right, rgba(243, 106, 39, 0.2), rgba(213, 76, 9, 40%))", // Transparent orange for Jupyter Notebook
  }, // 8
  {
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    imgSrc: vscode,
    gradient:
      "linear-gradient(to right, rgba(29, 35, 44, 0.2), rgba(19, 23, 29, 40%))", // Transparent dark for VS Code
  }, // 9
  {
    name: "Netlify",
    href: "https://www.netlify.com/",
    imgSrc: netlify,
    gradient:
      "linear-gradient(to right, rgba(0, 199, 167, 0.2), rgba(0, 149, 137, 40%))", // Transparent green for Netlify
  }, // 10
  {
    name: "GitLab",
    href: "https://about.gitlab.com/",
    imgSrc: gitlab,
    gradient:
      "linear-gradient(to right, rgba(80, 98, 143, 0.2), rgba(47, 68, 106, 40%))", // Transparent blue for GitLab
  }, // 11
  {
    name: "Docker Hub",
    href: "https://hub.docker.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(72, 114, 199, 0.2), rgba(45, 77, 145, 40%))", // Transparent blue for Docker Hub
  }, // 12
  {
    name: "CloudSkillsBoost",
    href: "https://cloudskillsboost.google/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(76, 131, 230, 0.2), rgba(36, 100, 195, 40%))", // Transparent blue for CloudSkillsBoost
  }, // 13
  {
    name: "Power BI",
    href: "https://powerbi.microsoft.com/",
    imgSrc: PowerBI,
    gradient:
      "linear-gradient(to right, rgba(230, 59, 35, 0.2), rgba(213, 39, 28, 40%))", // Transparent red for Power BI
  }, // 14
  {
    name: "AWS W.A.B",
    href: "https://aws.amazon.com/web-application-builder/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(255, 153, 0, 0.2), rgba(232, 114, 0, 40%))", // Transparent yellow for AWS Web Application Builder
  }, // 15
  {
    name: "Figma",
    href: "https://www.figma.com/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(179, 85, 255, 0.2), rgba(145, 72, 204, 40%))", // Transparent purple for Figma
  }, // 16
  {
    name: "Streamlit",
    href: "https://streamlit.io/",
    imgSrc: streamlit,
    gradient:
      "linear-gradient(to right, rgba(63, 115, 185, 0.2), rgba(39, 79, 137, 40%))", // Transparent blue for Streamlit
  }, // 17
  {
    name: "Canva",
    href: "https://www.canva.com/",
    imgSrc: canva,
    gradient:
      "linear-gradient(to right, rgba(0, 191, 255, 0.2), rgba(0, 153, 255, 40%))", // Transparent blue for Canva
  }, // 18
  {
    name: "IntelliJ IDEA",
    href: "https://www.jetbrains.com/idea/",
    imgSrc: intell,
    gradient:
      "linear-gradient(to right, rgba(255, 115, 0, 0.2), rgba(224, 90, 0, 40%))", // Transparent orange for IntelliJ IDEA
  }, // 19
  {
    name: "Android Studio",
    href: "https://developer.android.com/studio",
    imgSrc: androidstudio,
    gradient:
      "linear-gradient(to right, rgba(0, 102, 204, 0.2), rgba(0, 70, 120, 40%))", // Transparent blue for Android Studio
  }, // 20
  {
    name: "Kali Linux",
    href: "https://www.kali.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(46, 174, 79, 0.2), rgba(30, 130, 65, 40%))", // Transparent green for Kali Linux
  }, // 21
  {
    name: "Tesseract",
    href: "https://github.com/tesseract-ocr/tesseract",
    imgSrc: tesseract,
    gradient:
      "linear-gradient(to right, rgba(56, 90, 123, 0.2), rgba(37, 59, 83, 40%))", // Transparent blue for Tesseract
  }, // 22
  {
    name: "Metasploit",
    href: "https://www.metasploit.com/",
    imgSrc: meta,
    gradient:
      "linear-gradient(to right, rgba(67, 67, 67, 0.2), rgba(45, 45, 45, 40%))", // Transparent grey for Metasploit
  }, // 23
  {
    name: "Fortinet",
    href: "https://www.fortinet.com/",
    imgSrc: fotinet,
    gradient:
      "linear-gradient(to right, rgba(72, 106, 159, 0.2), rgba(43, 76, 118, 40%))", // Transparent blue for Fortinet
  }, // 24
  {
    name: "Cisco Packet Tracer",
    href: "https://www.netacad.com/courses/packet-tracer",
    imgSrc: cisco,
    gradient:
      "linear-gradient(to right, rgba(91, 141, 156, 0.2), rgba(56, 89, 101, 40%))", // Transparent blue for Cisco Packet Tracer
  }, // 25
  {
    name: "Wireshark",
    href: "https://www.wireshark.org/",
    imgSrc: wireshark,
    gradient:
      "linear-gradient(to right, rgba(48, 108, 158, 0.2), rgba(32, 78, 113, 40%))", // Transparent blue for Wireshark
  }, // 26
  {
    name: "Azure",
    href: "https://azure.microsoft.com/",
    imgSrc: azr,
    gradient:
      "linear-gradient(to right, rgba(85, 164, 246, 0.2), rgba(44, 114, 208, 40%))", // Transparent blue for Azure
  }, // 27
  {
    name: "Notion",
    href: "https://www.notion.so/",
    imgSrc: notion,
    gradient:
      "linear-gradient(to right, rgba(56, 50, 96, 0.2), rgba(30, 24, 53, 40%))", // Transparent dark for Notion
  }, // 28
  {
    name: "Trello",
    href: "https://trello.com/",
    imgSrc: trello,
    gradient:
      "linear-gradient(to right, rgba(0, 121, 204, 0.2), rgba(0, 85, 139, 40%))", // Transparent blue for Trello
  }, // 29
  {
    name: "Scikit-learn",
    href: "https://scikit-learn.org/",
    imgSrc:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    gradient:
      "linear-gradient(to right, rgba(252, 97, 97, 0.2), rgba(222, 37, 55, 40%))", // Transparent red for Scikit-learn
  }, // 30
];

const data = { educationList, skills, tools }; // Combine both in one export

export default data;
