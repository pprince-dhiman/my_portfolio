import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing my journey from learning core programming concepts to building full-stack applications. ",
    subDescription: [
      "It highlights my technical skills, problem-solving ability, and hands-on experience through real-world projects.",
      "Built using React, Vite, and modern UI libraries, this portfolio features interactive components, smooth animations, and a structured timeline to present my growth, skills, and projects in a clear and engaging way.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
    ],
    href: "https://23prince-portfolio.vercel.app/",
    logo: "",
    image: "/assets/projects/Portfolio.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Framer motion",
        path: "/assets/logos/framer-motion.svg",
      }
    ],
  },
  {
    id: 2,
    title: "BookMyStay - Hotel Room Booking Platform",
    description:
      "A full-stack hotel room booking web application built using the MERN stack, enabling users to explore, filter, and book rooms seamlessly",
    subDescription: [
      "Integrated secure authentication, real-time availability checks, and online payments to deliver a smooth and reliable booking experience",
      "Implemented advanced filtering by room type, price, and location, along with CRUD operations for room management. ",
      "Used Clerk for authentication, Stripe for secure payments, and Cloudinary for media handling, ensuring scalability, security, and optimized performance.",
    ],
    href: "https://book-my-stay-ten-pearl.vercel.app/",
    logo: "",
    image: "/assets/projects/bookMyStay.jpg",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
      {
        id: 6,
        name: "Clerk",
        path: "/assets/logos/Clerk.svg",
      },
      {
        id: 7,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
  {
    id: 3,
    title: "AllJobPortal - Job Search Platform",
    description:
      "Built a job portal with recruiter and student workflows for job posting, browsing, application tracking, and status updates.",
    subDescription: [
      "Implemented JWT-based authentication and authorization with role-based access control.",
      "Added search, filtering, and sorting to improve job discovery.",
      "Created dashboards for recruiters to manage companies, jobs, and applicants efficiently.",
    ],
    href: "https://all-job-portal.vercel.app/",
    logo: "",
    image: "/assets/projects/allJobPortal.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Redux Toolkit",
        path: "/assets/logos/redux.png",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.png",
      }
    ],
  },
  {
    id: 4,
    title: "CoursEz - E-Learning Platform",
    description:
      "Built a full-stack LMS with course browsing, enrollment, progress tracking, and role-based access for student and educator users.",
    subDescription: [
      "Implemented secure authentication with Clerk and protected routes for authorized access.",
      "Integrated payment flow for course enrollment and resolved deployment issues such as routing and redirect handling on Vercel.",
      "Designed responsive UI with React and Tailwind CSS, including chapters, lectures, and preview access.",
    ],
    href: "https://cours-ez-v1.vercel.app/",
    logo: "",
    image: "/assets/projects/courseEz.jpg",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
      {
        id: 6,
        name: "Clerk",
        path: "/assets/logos/Clerk.svg",
      },
      {
        id: 7,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "X",
    href: "https://x.com/23princeDhiman",
    icon: "/assets/socials/x.webp",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/23prince/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/prince.dhiman.1/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/pprince-dhiman",
    icon: "/assets/socials/github.webp",
  }
];

export const experiences = [
  {
    title: "DSA & Programming Foundations",
    job: "Self-Learning",
    date: "Aug 2024 - Dec 2025",
    contents: [
      "Built a strong foundation in C++ and Object-Oriented Programming (OOP).",
      "Mastered core Data Structures and Algorithms including Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, and Recursion.",
      "Applied problem-solving techniques such as Sliding Window, Two Pointers, Greedy Algorithms, and Bit Manipulation.",
      "Solved 150+ problems on LeetCode and earned a 50-day consistency badge.",
      "Solved 200+ problems on GeeksforGeeks, strengthening algorithmic thinking and coding efficiency.",
    ],
  },
  {
    title: "Full-Stack Web Development",
    job: "Self-Learning",
    date: "Mar 2025 - Dec 2025",
    contents: [
      "Learned and built applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Implemented authentication and authorization using JWT and Clerk.",
      "Integrated payment systems using Stripe and handled media storage with Cloudinary.",
      "Worked with REST APIs and testing tools like Postman for backend development.",
      "Deployed and managed applications using platforms like Vercel.",
    ],
  },
  {
    title: "Project Development",
    job: "Hands-on Experience",
    date: "Jan 2026 - Present",
    contents: [
      "Developed multiple real-world projects to apply full-stack and problem-solving skills.",
      "Built a Portfolio Website showcasing projects and technical skills using modern UI/UX practices.",
      "Created applications like Netflix Clone, BookMyStay (hotel room booking platform), AllJobPortal (job portal), and CoursEz (e-learning platform).",
      "Focused on building scalable, responsive, and user-friendly web applications.",
    ],
  },
];