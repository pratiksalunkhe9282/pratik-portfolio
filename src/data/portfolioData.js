// ======================== PERSONALISE YOUR PORTFOLIO ========================
// 1) Profile picture: add your image to public/images/ and set its path below.
//    Example: const PROFILE_IMAGE = "/images/pratik.jpg";
// 2) Update your bio, skills, experience, projects and social links here.
// 3) Add your resume PDF to public/ as "Pratik-Salunkhe-Resume.pdf".
export const PROFILE_IMAGE = "/images/resume%20portrait.png"; // <-- PASTE YOUR PROFILE IMAGE PATH HERE

export const personalInfo = {
  name: "Pratik Salunkhe",
  role: "Software Developer",
  location: "Kolhapur, Maharashtra, India",
  phone: "+91 9022685667",
  phoneLink: "tel:+919022685667",
  email: "pratiksalunkhe2223@gmail.com",
  linkedin: "https://www.linkedin.com/in/pratik-salunkhe-b63098301/",
  github: "https://github.com/pratiksalunkhe9282",
  resume: "/Pratik-Salunkhe-Resume.pdf",
  intro:
    "I’m a software developer who enjoys turning ideas into useful, well-crafted digital experiences. With a foundation in Data Science and hands-on experience across frontend and MERN stack development, I build responsive interfaces and work toward reliable end-to-end web solutions.",
  about:
    "I’m Pratik, a Computer Science (Data Science) graduate from Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur. I enjoy learning how products work from the user interface to the server side. My experience includes building responsive React interfaces, creating reusable components, and exploring full-stack development with MongoDB, Express.js and Node.js. I value clean code, thoughtful user experiences and continuous learning.",
};

export const skills = [
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Express.js", group: "Backend" },
  { name: "MongoDB", group: "Database" },
  { name: "SQL", group: "Database" },
];

export const experiences = [
  {
    company: "Neosao Services",
    role: "MERN Stack Developer Intern",
    period: "Currently pursuing",
    description:
      "Building practical full-stack development skills while working with the MERN stack. Learning to connect responsive frontend experiences with backend services and database operations.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    current: true,
  },
  {
    company: "COMTRANSE TECHNOLOGY PVT. LTD.",
    role: "Web Development Intern",
    period: "3 months",
    description:
      "Gained hands-on experience in web development, creating responsive user interfaces and strengthening practical skills in modern frontend technologies.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    current: false,
  },
];

export const projects = [
  {
    number: "01",
    name: "Hospital Management System",
    type: "Academic project · Frontend development",
    description:
      "A web-based hospital management platform designed to simplify patient management, appointment booking and medical record access. The interface helps users navigate essential hospital services through a clear, responsive experience.",
    contribution:
      "I worked as the Frontend Developer, building responsive interfaces with React.js and Bootstrap. I created reusable UI components and interactive pages for patient registration, appointment booking and dashboard views, with a focus on usability and smooth navigation.",
    stack: ["React.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Responsive patient registration interface",
      "Appointment booking experience",
      "Dashboard and medical-record views",
      "Reusable components and clear navigation",
    ],
    // Add a real deployed project URL when available. Leave empty to hide the button.
    liveUrl: "",
    codeUrl: "", // <-- Add your GitHub repository URL when ready.
  },
];

export const education = {
  degree: "B.Tech — Computer Science (Data Science)",
  college: "Dr. D. Y. Patil Pratishthan’s College of Engineering",
  location: "Kolhapur, Maharashtra",
  period: "Graduated May 2025",
};
