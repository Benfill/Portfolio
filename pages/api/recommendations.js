// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Mohammed El Bachiri",
    image:
      "https://i.ibb.co/w2RBpkJ/Mohammed-el-Bachiri-Full-Stack-CV-01-30-2025-06-28-AM.png",
    designation: "Fullstack Developer | Angular/Java | Student At YouCode",
    view: "I had the pleasure of collaborating with Anass on several complex projects, and I'm thoroughly impressed by his expertise in both frontend and backend technologies. His proficiency in Next.js and Spring Boot particularly stood out during our work together. Anass has this remarkable ability to architect clean, scalable solutions while maintaining high code quality standards. His deep understanding of the full development stack makes him an invaluable team member who can bridge any technical gaps seamlessly. I've personally witnessed his problem-solving skills in action, and they're truly exceptional! 🚀",
    linkednURL: "https://www.linkedin.com/in/mohammed-el-bachiri-21016b253/",
  },
  {
    id: 1,
    name: "Hamza Meski",
    image: "https://i.ibb.co/LXmdkdDV/1728413056161.jpg",
    designation: "SOFTWARE DEVELOPER @ YOUCODE-UM6P | SIMPLONLINE",
    view: "Working alongside Anass has been an incredible learning experience. His versatility across multiple frameworks - from React to Laravel and Angular - is truly remarkable. What sets him apart is not just his technical prowess, but his ability to choose the right tool for each specific challenge. His commitment to writing clean, maintainable code and his knack for implementing complex features while keeping performance in mind is admirable. Anass is also an excellent team player who's always willing to share his knowledge and help others grow. 💯",
    linkednURL: "https://www.linkedin.com/in/hamza-meski/",
  },
  {
    id: 2,
    name: "Mohamed Hachami",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQF-ELrl-5ZgPw/profile-displayphoto-shrink_400_400/B4DZRtA3uQG4Ag-/0/1736995733702?e=1743638400&v=beta&t=tKz3PKI7XQTIoKdCv4R09TQvHAleVFMPiUC77oSytUA",
    designation: "Full stack developer|@Youcode(simplon.co)- UM6P",
    view: "I've had the opportunity to witness Anass's growth as a Full Stack Developer, and it's been nothing short of impressive. His mastery of Next.js and React has helped our team deliver sophisticated web applications with exceptional user experiences. What I particularly admire about Anass is his ability to seamlessly integrate frontend frameworks with backend technologies like Spring Boot and Laravel. His dedication to staying current with the latest tech trends while maintaining solid fundamentals makes him a truly valuable asset to any development team. 👨‍💻✨",
    linkednURL: "https://www.linkedin.com/in/mohamed-hachami-17786b197/",
  },
  {
    id: 3,
    name: "Saâd Tourougui",
    image: "https://i.ibb.co/DHYxpgDC/file.jpg",
    designation: "Meknes Distribution Manager",
    view: "From a business perspective, I can confidently say that Anass is an exceptional Full Stack Developer who brings both technical expertise and business understanding to the table. His ability to translate complex business requirements into elegant technical solutions using various frameworks like Next.js, React, and Angular is remarkable. What truly sets him apart is his attention to detail and commitment to delivering high-quality work that not only meets but exceeds expectations. His proficiency in multiple technologies makes him extremely adaptable and valuable in today's fast-paced tech environment. 🌟",
    linkednURL: null,
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
