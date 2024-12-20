import {
  imageCert,
  imageCompanies,
  imageProjects,
  imageTech,
} from "@/assets/image";

const icons = [
  { id: 1, image: imageTech.jsIcons, name: "JavaScript" },
  { id: 2, image: imageTech.TSIcons, name: "TypeScript" },
  { id: 3, image: imageTech.bootstrapIcons, name: "Bootstrap" },
  { id: 4, image: imageTech.tailwindIcons, name: "Tailwind CSS" },
  { id: 5, image: imageTech.reactIcons, name: "React" },
  { id: 6, image: imageTech.reduxIcons, name: "Redux" },
  { id: 7, image: imageTech.Vue, name: "Vue" },
  { id: 8, image: imageTech.NextIcons, name: "Next.js" },
  { id: 9, image: imageTech.NodeIcons, name: "Node.js" },
  { id: 10, image: imageTech.ExpressIcons, name: "Express.js" },
  { id: 11, image: imageTech.MongoDB, name: "Mongo DB" },
  { id: 12, image: imageTech.postmanIcons, name: "Postman" },
  { id: 13, image: imageTech.figmaIcons, name: "Figma" },
];

const projects = [
  {
    id: 1,
    name: "Job Finder",
    image: imageProjects.JobFinder,
    description: "Job Portal",
    technologies: [imageTech.react, imageTech.NextUIIcon, imageTech.reduxIcons],
    liveLink: "https://job-finder-beige.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/fe-job-finder",
  },
  {
    id: 2,
    name: "Last King Academy",
    image: imageProjects.LastKingAcademy,
    description: "Web Course",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
    ],
    liveLink: "https://last-king-academy.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Last-King-Academy",
  },
  {
    id: 3,
    name: "GoEat",
    image: imageProjects.GoEat,
    description: "Food Delivery",
    technologies: [imageTech.Vue, imageTech.bootstrapIcons],
    githubLink: "https://github.com/Azzaxy1/go-eat",
  },

  {
    id: 4,
    name: "MOVIELIST",
    image: imageProjects.MovieApp,
    description: "Movie Rating Film",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
    ],
    liveLink: "https://project-6-team-6-redux.vercel.app/id",
    githubLink: "https://github.com/Azzaxy1/Ch7-MovieApp-React-Redux",
  },
  {
    id: 5,
    name: "KKM 01 Desa Panyabrangan",
    image: imageProjects.KKM01,
    description: "Landing Page",
    technologies: [
      imageTech.NextIcons,
      imageTech.NextUIIcon,
      imageTech.TSIcons,
    ],
    liveLink: "https://kkm01-desa-panyabrangan.vercel.app/",
    githubLink: "https://github.com/azzaxy1/kkm01-profile",
  },

  {
    id: 6,
    name: "MERN NexaBlog",
    image: imageProjects.MERNNexaBlog,
    description: "Blog App",
    technologies: [
      imageTech.MongoDB,
      imageTech.ExpressIcons,
      imageTech.react,
      imageTech.NodeIcons,
    ],
    githubLink: "https://github.com/Azzaxy1/discus-zone",
  },
  {
    id: 7,
    name: "Discus Zone",
    image: imageProjects.DiscusZone,
    description: "Discus App",
    technologies: [
      imageTech.react,
      imageTech.tailwindIcons,
      imageTech.reduxIcons,
      imageTech.CypressIcon,
    ],
    liveLink: "https://discus-zone.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/discus-zone",
  },
  {
    id: 8,
    name: "Notes Hive",
    image: imageProjects.NotesHive,
    description: "Notes App",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://notes-hive.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/notes-hive",
  },
  {
    id: 9,
    name: "ContactEase",
    image: imageProjects.contactEase,
    description: "Manage Contact",
    technologies: [imageTech.ExpressIcons, imageTech.MongoDB, imageTech.EJS],
    liveLink: "https://contact-ease-ten.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/contact-ease",
  },
  {
    id: 10,
    name: "TodoZen",
    image: imageProjects.TodoZen,
    description: "Todo List App",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://todoZen1.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/todoZen",
  },
  {
    id: 11,
    name: "UNBAJA",
    image: imageProjects.DashboardAdmin,
    description: "Admin Dashboard",
    technologies: [imageTech.CI],
    githubLink: "https://github.com/Azzaxy1/ci-student-dashboard",
  },
  {
    id: 12,
    name: "Abdurrohman Azis",
    image: imageProjects.Azis,
    description: "Personal Website",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://abdurrohmanazis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Portfolio-ReactTailwind",
  },
  {
    id: 13,
    name: "Rental Car",
    image: imageProjects.CarRental,
    description: "Landing Page",
    technologies: [imageTech.htmlIcons, imageTech.bootstrapIcons],
    liveLink: "https://rentalcar-azis.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Ch1-RentalCar-Botstrapp",
  },
  {
    id: 14,
    name: "Tunanetra Audio Book",
    image: imageProjects.tunanetraAudioBook,
    description: "Audio Book Web",
    technologies: [imageTech.react, imageTech.tailwindIcons],
    liveLink: "https://tunanetra-audio-book.vercel.app/",
  },
  {
    id: 15,
    name: "Abdurrohman Azis",
    image: imageProjects.PersonalWeb,
    description: "Personal Website",
    technologies: [imageTech.htmlIcons, imageTech.cssIcons],
    liveLink: "https://azis-personal-website.vercel.app/",
    githubLink: "https://github.com/Azzaxy1/Belajar-Dasar-Pemrograman-Web",
  },
  {
    id: 16,
    name: "Suwit Jawa",
    image: imageProjects.suwitJawa,
    description: "Mini Game",
    technologies: [imageTech.htmlIcons, imageTech.cssIcons],
    liveLink: "https://suwit-jawa-ten.vercel.app/",
  },
];

const experience = [
  {
    id: 1,
    name: "Sainstisindo Solusi",
    image: imageCompanies.Sainstisindo,
    companyName: "Sainstisindo Solusi",
    date: "Oct 2024 - Now",
    position: "Frontend Developer",
  },
  {
    id: 2,
    name: "Dicoding Indonesia",
    image: imageCompanies.DicodingLogo,
    companyName: "PT Presentologics",
    date: "Feb 2024 - Jun 2024",
    position: "React dan Back End",
    description: [
      "Apply knowledge through assignments at the end of each module.",
      "Develop a React-powered NotesApp SPA website and incorporate APIs.",
      "Build a ForumApp website using Redux state management and React.js, and connect it with APIs.",
      "Collaborated in developing a Job Finder Platform for Job Portal sites using Git with Back End. Used Next UI, React Js, implemented Redux state management, and integrated with APIs from the Backend team as part of the Capstone Project completion.",
    ],
  },
  {
    id: 3,
    name: "Binar Academy",
    image: imageCompanies.BinarLogo,
    companyName: "PT Lentera Benderang",
    date: "Agust 2023 - Des 2023",
    position: "Frontend Developer",
    description: [
      "Developed a ToDo List Website with CRUD capabilities utilizing Tailwind CSS and React Js to complete the task.",
      "Building a Movie Rating Website in collaboration using Git with the team. Using React Js and Tailwind CSS, integrating with the Restful API, and implementing Redux state management.",
      "Designed and developed a web course (Last King Academy) in three sprints using the Scrum Method (each sprint lasting two weeks), collaborating with the Front End and Back End teams via Git. Utilized Tailwind CSS, React.js, and implemented Redux for state management, integrating APIs from the Backend team as part of the final project.",
    ],
  },
];

const certificate = [
  {
    id: 1,
    image: imageCert.certDicoding,
    name: "MSIB Batch 6 Graduation Certificate",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 2,
    image: imageCert.certBinar,
    name: "MSIB Batch 5 Graduation Certificate",
    publisher: "Binar Academy",
  },
  {
    id: 3,
    image: imageCert.certReactExpert,
    name: "Menjadi React Web Developer Expert",
    publisher: "Dicoding Indonesia",
  },

  {
    id: 4,
    image: imageCert.certFullstack,
    name: "Full-Stack Web Development 101",
    publisher: "Binar Academy",
  },
  {
    id: 5,
    image: imageCert.certEdspertReact,
    name: "Kickstart Your Front End Developer Career with React Js",
    publisher: "Edspert.id",
  },

  {
    id: 6,
    image: imageCert.certMySkillHTML,
    name: "HTML Introduction",
    publisher: "MySkill",
  },
  {
    id: 7,
    image: imageCert.certFundamentalReact,
    name: "Belajar Fundamental Aplikasi Web dengan React",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 8,
    image: imageCert.certAplikasiReact,
    name: "Belajar Membuat Aplikasi Web dengan React",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 9,
    image: imageCert.certFrontendPemula,
    name: "Belajar Membuat Front-End Web untuk Pemula",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 10,
    image: imageCert.certMySkillSemantic,
    name: "Semantic HTML",
    publisher: "MySkill",
  },
  {
    id: 11,
    image: imageCert.certMySkillArray,
    name: "Array in JavaScript",
    publisher: "MySkill",
  },
  {
    id: 12,
    image: imageCert.certMySkillFunc,
    name: "Function in JavaScript",
    publisher: "MySkill",
  },
  {
    id: 13,
    image: imageCert.certJS,
    name: "Belajar Dasar Pemrograman JavaScript",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 14,
    image: imageCert.certBackendPemula,
    name: "Belajar Back-end Pemula dengan JavaScript",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 15,
    image: imageCert.certPemrogramanWeb,
    name: "Belajar Dasar Pemrograman Web",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 16,
    image: imageCert.certGitHub,
    name: "Belajar Dasar Git dengan GitHub",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 17,
    image: imageCert.certDasarPemrograman,
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 18,
    image: imageCert.certLogikaPemrograman,
    name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 19,
    image: imageCert.certRevou,
    name: "Intro to Software Engineering",
    publisher: "Revou Indonesia",
  },
  {
    id: 20,
    image: imageCert.certDicodingCoaching,
    name: "Dicoding Developer Coaching | Pengenalan Web Development",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 21,
    image: imageCert.certDicodingCoachingHTML,
    name: "Dicoding Developer Coaching | Pengenalan HTML",
    publisher: "Dicoding Indonesia",
  },
  {
    id: 22,
    image: imageCert.certMySkillDOM,
    name: "DOM in JavaScript",
    publisher: "MySkill",
  },
];

export { experience, icons, projects, certificate };
