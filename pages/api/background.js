const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Youcode | Um6p",
        degree: "Fullstack Developer",
        detail: "Web and mobile development, specialty: JAVA Angular",
        year: "2023-2025",
      },
      {
        id: 2,
        title: "ALX SE - Mastercard Foundations",
        degree: "Online Computer Engineering Curriculum Program",
        year: "2023-2024",
      },
      {
        id: 2,
        title: "1337 Coding School",
        degree: "Software Engineering",
        year: "2021-2022",
      },
      {
        id: 3,
        title: "Groupe Scolaire Zola",
        degree: "Baccalauréat in Economic Science",
        year: "2019-2020",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Meknes Distribution",
        role: "Fullstack Developer",
        url: "https://drive.google.com/file/d/1M7r3zYBqTil6ht9tNRkIe0n3CPwsUvUV/view?usp=sharing",
        desc: "As a fullstack developer, I use Laravel for backend, React for frontend side, & Tauri to build Desktop applications.",
        year: "05/2024 - 07/2024",
        location: "Meknes, Morocco",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
