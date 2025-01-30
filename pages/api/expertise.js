const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "As a Full Stack Developer specializing in Java and Angular, I have extensive experience in building enterprise applications using Spring Framework (Spring Boot, Spring Data, Spring MVC, Spring Security). My expertise extends to Laravel and modern JavaScript frameworks like React and Next.js. I have demonstrated this through projects like Mo9awil.ma, a platform for business creation, and Evento, a ticket reservation system. My strong foundation in both backend and frontend technologies allows me to create comprehensive web solutions with robust architectures.",
  },
  {
    id: 1,
    title: "Backend Development",
    desc: "My backend expertise centers around Java Spring Framework ecosystem and Laravel. I'm proficient in working with various databases including MySQL, PostgreSQL, MariaDB, and MongoDB, implementing them through ORMs like Hibernate/JPA and Spring Data JPA. I have practical experience in building secure, scalable backend systems as demonstrated in my internship at Meknes Distribution, where I developed a digital document management system.",
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "I specialize in modern frontend frameworks including Angular, React, and Next.js, with expertise in styling solutions like Bootstrap, Tailwind, and Material UI. My experience includes building responsive, user-friendly interfaces across various projects, utilizing TypeScript for type-safe development. I focus on creating intuitive user experiences while maintaining clean, maintainable code structures.",
  },
  {
    id: 3,
    title: "Development Tools & Practices",
    desc: "I'm well-versed in professional development tools and practices, including version control with Git and GitHub, project management with Jira, and working with IDEs like VS Code, PhpStorm, and Eclipse. My experience includes shell scripting and working in collaborative development environments, ensuring efficient workflow and code quality.",
  },
  {
    id: 4,
    title: "Project Management & Team Collaboration",
    desc: "Through my education at YouCode - UM6P and various project experiences, I've developed strong project management skills and ability to work effectively in team environments. I understand the importance of clear communication, documentation, and organized development processes in delivering successful projects, as demonstrated in my internship and personal projects like Mo9awil.ma and Evento.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
