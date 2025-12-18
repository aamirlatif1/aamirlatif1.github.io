import {
    Code2,
    GraduationCap,
    Briefcase,
    User,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import auto1_group_logo from "../assets/images/auto1_group_logo.jpeg";
import brilliantgamezlabs_logo from "../assets/images/brilliantgamezlabs_logo.jpeg";
export const icons = {
    code: Code2,
    graduationCap: GraduationCap,
    briefcase: Briefcase,
    user: User,
    phone: Phone,
    mail: Mail,
    mapPin: MapPin,
    github: BsGithub,
    linkedin: BsLinkedin,
    twitter: BsTwitter,
};
export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icons: Code2,
        description: "Technologies I use for building the client-side of applications.",
        skills: [
            { name: "React", level: 88, proficiency: "Expert" },
            { name: "JavaScript", level: 85, proficiency: "Expert" },
            { name: "HTML5", level: 90, proficiency: "Expert" },
            { name: "CSS3", level: 87, proficiency: "Expert" },
            { name: "Tailwind CSS", level: 70, proficiency: "Intermediate" },
        ],
    },
    {
        title: "Backend",
        icons: Briefcase,
        description: "Technologies I use for building the server-side of applications.",
        skills: [
            { name: "Node.js", level: 90, proficiency: "Intermediate" },
            { name: "Express.js", level: 75, proficiency: "Intermediate" },
            { name: "MongoDB", level: 75, proficiency: "Intermediate" },
            { name: "SQL", level: 50, proficiency: "Beginner" },
        ],
    },
];
export const TECH_STACK = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
];
export const STATS = [
    {number: "50+", label: "Projects Completed" },
    {number: "2", label: "Years of Experience" },
    {number: "10+", label: "Happy Clients" },
    {number: "5", label: "Certifications" },
];
export const PROJECTS = [
    {
        id: 1,
        title: "Portfolio Website",
        image: auto1_group_logo,
        description: "A personal portfolio website to showcase my projects and skills.",
        techStack: ["React", "Tailwind CSS"],
        link: "https://yourportfolio.com",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        image: brilliantgamezlabs_logo,
        description: "An e-commerce platform for buying and selling products online.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://yourecommerceplatform.com",
    },
    {
        id: 3,
        title: "Blog Application",
        image: auto1_group_logo,
        description: "A blogging application where users can create and share blog posts.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://yourblogapplication.com",

    }
];
export const WORK_EXPERIENCE = [
    {
        company: "Auto1 Group",
        logo: auto1_group_logo,
        position: "Frontend Developer",
        duration: "Jan 2022 - Present",
        responsibilities: [
            "Developed and maintained web applications using React.js and Redux.",
            "Collaborated with cross-functional teams to define, design, and ship new features.",
            "Optimized applications for maximum speed and scalability.",
        ],
    },
    {
        company: "Brilliant Gamez Labs",
        logo: brilliantgamezlabs_logo,
        position: "Junior Web Developer",
        duration: "Jun 2020 - Dec 2021",
        responsibilities: [
            "Assisted in the development of web applications using HTML, CSS, and JavaScript.",
            "Worked closely with senior developers to learn best practices and improve coding skills.",
            "Participated in code reviews and team meetings to enhance project outcomes.",
        ],
    },
];
export const EDUCATION = [
    {
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        duration: "2016 - 2020",
        details: [  
            "Graduated with Honors, achieving a GPA of 3.8/4.0.",
            "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.",
            "Active member of the Computer Science Club, organizing coding workshops and hackathons.",
        ],
    },
];
export const CONTACT_INFO = {
    phone: "+123 456 7890",
    email: "email@example.com",
    address: "123 Main St, Anytown, USA",
};
export const SOCIAL_LINKS = {
    github: "", 
    twitter: "https://twitter.com/yourprofile",
    // Add more social links as needed
};
