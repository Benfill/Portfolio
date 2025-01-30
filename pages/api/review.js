const review = [
  {
    id: 0,
    clientName: "Khalil Abdelmajid",
    clientLocation: "Youcode - UM6P",
    clientSource: "Technical Trainer",
    clientReview:
      "Having mentored Anass throughout his journey at Youcode, I've witnessed his exceptional growth as a developer. His quick mastery of Spring Boot and Angular demonstrates his strong technical aptitude. What stands out is his ability to architect complex solutions while maintaining clean code practices. His work on the Mo9awil.ma platform particularly showcased his capability to handle full-stack development with professional maturity.",
  },
  {
    id: 1,
    clientName: "Iliass Rihani",
    clientLocation: "Youcode - UM6P",
    clientSource: "Lead Trainer",
    clientReview:
      "As Anass's technical mentor, I've been consistently impressed by his dedication to mastering both frontend and backend technologies. His proficiency in React and Laravel, combined with his strong problem-solving skills, makes him stand out. He shows remarkable initiative in learning new technologies and applying them effectively in his projects. His work on the Evento ticket reservation system demonstrated excellent architectural decisions and clean code implementation.",
  },
  {
    id: 2,
    clientName: "Saâd Tourougui",
    clientLocation: "Meknes Distribution",
    clientSource: "Distribution Manager",
    clientReview:
      "During his internship at Meknes Distribution, Anass demonstrated exceptional skill in developing our digital document management system. His ability to understand business requirements and translate them into technical solutions was impressive. His work with Laravel and React (Tauri) helped streamline our operations significantly. His professional attitude and technical expertise make him an asset to any development team.",
  },
  {
    id: 3,
    clientName: "Mohammed Alami",
    clientLocation: "Alpha Auto - Hyundai",
    clientSource: "IT Systems Manager",
    clientReview:
      "We collaborated with Anass on modernizing our digital infrastructure, and his technical expertise was evident throughout the project. His proficiency in full-stack development, particularly with Java and Angular, enabled him to deliver robust solutions that met our complex business requirements. His attention to detail and commitment to quality stood out, making him a reliable technology partner.",
  },
];

export default function handler(req, res) {
  res.status(200).json(review);
}
