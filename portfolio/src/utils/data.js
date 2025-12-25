import {
    Code2,
    GraduationCap,
    Briefcase,
    User,
    Phone,
    Mail,
    MapPin,
    Icon,
    Heart,
    Coffee,
    BookOpen,
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
    {number: "18", label: "Years of Experience" },
    {number: "100+", label: "Happy Clients" },
    {number: "15", label: "Certifications" },
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
        year: "2022 - Present",
        title: "Staff Software Engineer",
        company: "IONOS SE",
        icon: Code2,
        color: "bg-blue-500",
        logo: auto1_group_logo,
        position: "Frontend Developer",
        duration: "Jan 2022 - Present",
        description: "Developed and maintained web applications using React.js and Redux. Collaborated with cross-functional teams to define, design, and ship new features. Optimized applications for maximum speed and scalability.",
        responsibilities: [
            "Developed and maintained web applications using React.js and Redux.",
            "Collaborated with cross-functional teams to define, design, and ship new features.",
            "Optimized applications for maximum speed and scalability.",
        ],
    },
    {
        year: "2020 - 2021",
        title: "Junior Web Developer",
        company: "Brilliant Gamez Labs",
        icon: Briefcase,
        color: "bg-purple-500",
        logo: brilliantgamezlabs_logo,
        position: "Junior Web Developer",
        duration: "Jun 2020 - Dec 2021",
        description: "Assisted in the development of web applications using HTML, CSS, and JavaScript. Worked closely with senior developers to learn best practices and improve coding skills. Participated in code reviews and team meetings to enhance project outcomes.",
        responsibilities: [
            "Assisted in the development of web applications using HTML, CSS, and JavaScript.",
            "Worked closely with senior developers to learn best practices and improve coding skills.",
            "Participated in code reviews and team meetings to enhance project outcomes.",
        ],
    },
];
export const PASSIONS = [
    {
        Icon: Heart,
        title: "Uesr Experience",
        description: "Developed and maintained web applications using React.js and Redux.",
    },
   {
        Icon: BookOpen,
        title: "Continuous Learning",
        description: "Developed and maintained web applications using React.js and Redux.",
    },
    {
        Icon: Coffee,
        title: "Problem Solving",
        description: "Developed and maintained web applications using React.js and Redux.",
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
export const CONTACT_INFO = [
    {
        label: "Phone",
        value: "+123 456 7890",
        icon: Phone
    },
    {
        label: "Email",
        value: "email@example.com",
        icon: Mail
    },
    {
        label: "Address",
        value: "123 Main St, Anytown, USA",
        icon: MapPin
    }
];
export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: BsGithub,
        url: "https://github.com",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: BsLinkedin,
        url: "https://linkedin.com",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Twitter",
        icon: BsTwitter,
        url: "https://twitter.com/",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10"
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:alex@example.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    }
];
