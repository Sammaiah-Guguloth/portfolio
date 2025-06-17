export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

// data/techStack.js (you can import it in your Hero file)

export const techStack = [
  { name: "Java", icon: "/stack/Java.png" },
  { name: "C", icon: "/stack/c.png" },
  { name: "React.js", icon: "/stack/React.png" },
  { name: "NodeJs", icon: "/stack/nodejs.png" },
  { name: "MongoDB", icon: "/stack/MongoDB.png" },
  { name: "TailwindCSS", icon: "/stack/tailwind.png" },
  { name: "ExpressJs", icon: "/stack/express.png" },
  { name: "Redux", icon: "/stack/redux.png" },
  { name: "PHP", icon: "/stack/php.png" },
  { name: "Javascript", icon: "/stack/javascript.png" },
  { name: "Three.js", icon: "/stack/threejs.png" },
  // { name: "Framer Motion", icon: "/stack/framer.png" },
  { name: "HTML", icon: "/stack/html.png" },
  { name: "CSS", icon: "/stack/css.png" },
  { name: "Socket.io", icon: "/stack/SocketIo.png" },
  { name: "WebRTC", icon: "/stack/webrtc.svg" },
  { name: "MySQL", icon: "/stack/mysql.png" },
  { name: "BootStrap", icon: "/stack/bootstrap.png" },
];

export const myWork = [
  {
    title: "ReBook Hub - Second-Hand Book Marketplace",
    desc: "ReBook Hub is a peer-to-peer platform where users can buy and sell second-hand books easily. With a clean UI and advanced filtering, users can find books by category, search for books etc",
    subdesc:
      "Developed using the MERN stack, Razorpay for payments, and OTP-based email verification, ReBook Hub ensures secure transactions and user-friendly interactions for book lovers across the country.",
    href: "https://www.youtube.com/watch?v=rebook-demo-link", // Replace with real link
    texture: "/textures/project/rebookhub-demo.mp4", // Optional: use static image if 3D removed
    logo: "/assets/project-logo-rebook.png",
    logoStyle: {
      backgroundColor: "#204D29",
      border: "0.2px solid #4CAF50",
      boxShadow: "0px 0px 60px 0px #34D3994D",
    },
    spotlight: "/assets/spotlight1.png", // a screenshot of home or book page
    tags: [
      { id: 1, name: "React.js", path: "/stack/React.png" },
      { id: 2, name: "TailwindCSS", path: "/stack/tailwind.png" },
      { id: 3, name: "Node.js", path: "/stack/nodejs.png" },
      { id: 4, name: "MongoDB", path: "/stack/MongoDB.png" },
      { id: 5, name: "ExpressJs", path: "/stack/express.png" },
      // { id: 5, name: "Razorpay", path: "/assets/stripe.png" }
    ],
  },
  {
    title: "LiveStack - Real-Time Coding & Collaboration Workspace",
    desc: "LiveStack is a real-time collaboration platform designed for developers and teams to code, communicate, and co-create seamlessly. It offers live code editing, video/audio interaction, permissions control, and real-time chat—all in a shared room-based environment.",
    subdesc:
      "Built using the MERN stack, WebRTC, and Socket.io, LiveStack supports multi-user live editing, admin-controlled permissions, video/audio streaming, syntax highlighting across languages, and powerful collaborative tools. Designed for modern dev teams and pair programming.",
    href: "https://www.youtube.com/watch?v=livestack-demo-link", // Replace with your actual demo link
    texture: "/textures/project/livestack-demo.mp4", // Optional or remove
    logo: "/assets/project-logo-livestack.png",
    logoStyle: {
      backgroundColor: "#1E1E2F",
      border: "0.2px solid #2B2B4B",
      boxShadow: "0px 0px 60px 0px #8B5CF64D",
    },
    spotlight: "/assets/spotlight2.png", // UI screenshot or hero section image
    tags: [
      { id: 1, name: "React.js", path: "/stack/React.png" },
      { id: 2, name: "TailwindCSS", path: "/stack/tailwind.png" },
      { id: 3, name: "Node.js", path: "/stack/nodejs.png" },
      { id: 4, name: "MongoDB", path: "/stack/MongoDB.png" },
      { id: 5, name: "ExpressJs", path: "/stack/express.png" },
      { id: 5, name: "Socket.io", path: "/stack/SocketIo.png" },
      { id: 6, name: "WebRTC", path: "/stack/webrtc.svg" },
    ],
  },
];

// export const myWork = [
//   {
//     title: "Podcastr - AI Podcast Platform",
//     desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
//     subdesc:
//       "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
//     href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
//     texture: "/textures/project/project1.mp4",
//     logo: "/assets/project-logo1.png",
//     logoStyle: {
//       backgroundColor: "#2A1816",
//       border: "0.2px solid #36201D",
//       boxShadow: "0px 0px 60px 0px #AA3C304D",
//     },
//     spotlight: "/assets/spotlight1.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "LiveDoc - Real-Time Google Docs Clone",
//     desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
//     subdesc:
//       "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
//     href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
//     texture: "/textures/project/project2.mp4",
//     logo: "/assets/project-logo2.png",
//     logoStyle: {
//       backgroundColor: "#13202F",
//       border: "0.2px solid #17293E",
//       boxShadow: "0px 0px 60px 0px #2F6DB54D",
//     },
//     spotlight: "/assets/spotlight2.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "CarePulse - Health Management System",
//     desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
//     subdesc:
//       "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
//     href: "https://www.youtube.com/watch?v=lEflo_sc82g",
//     texture: "/textures/project/project3.mp4",
//     logo: "/assets/project-logo3.png",
//     logoStyle: {
//       backgroundColor: "#60f5a1",
//       background:
//         "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
//       border: "0.2px solid rgba(208, 213, 221, 1)",
//       boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
//     },
//     spotlight: "/assets/spotlight3.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "Horizon - Online Banking Platform",
//     desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
//     subdesc:
//       "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
//     href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
//     texture: "/textures/project/project4.mp4",
//     logo: "/assets/project-logo4.png",
//     logoStyle: {
//       backgroundColor: "#0E1F38",
//       border: "0.2px solid #0E2D58",
//       boxShadow: "0px 0px 60px 0px #2F67B64D",
//     },
//     spotlight: "/assets/spotlight4.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "Imaginify - AI Photo Manipulation App",
//     desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
//     subdesc:
//       "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
//     href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
//     texture: "/textures/project/project5.mp4",
//     logo: "/assets/project-logo5.png",
//     logoStyle: {
//       backgroundColor: "#1C1A43",
//       border: "0.2px solid #252262",
//       boxShadow: "0px 0px 60px 0px #635BFF4D",
//     },
//     spotlight: "/assets/spotlight5.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
// ];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.074 : isMobile ? 0.08 : 0.1,
    deskPosition: isSmall
      ? [0.5, -5, 0]
      : isMobile
      ? [0.5, -5, 0]
      : [0.25, -9.5, 0],
    cubePosition: isSmall
      ? [4, -7.5, 0]
      : isMobile
      ? [5, -7.5, 0]
      : isTablet
      ? [5.5, -9, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [5, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [14, 4, 2],
    ringPosition: isSmall
      ? [-5, 5, 0]
      : isMobile
      ? [-5, 5, 0]
      : isTablet
      ? [-11, 4, 0]
      : [-12, 5.5, 0],
    targetPosition: isSmall
      ? [-7, 10, -10]
      : isMobile
      ? [-9, -50, -10]
      : isTablet
      ? [-11, -7, -8]
      : [-13, -13, -8],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];

// {
//   id : 1,
//   title : "",
//   description : "",
//   image : ""/assets/projects/.png"",
//   github : "",
//   liveUrl : "",
// }

export const myProjects = {
  "HTML/CSS": [
    {
      id: 1,
      title: "Target Clone",
      description:
        "Clone of the Target an e-commerce website, created for HTML and CSS practice. It replicates the layout and design of the Target, including the navigation section, Hero section , and footer.",
      image: "/assets/projects/target.webp",
      github: "https://github.com/Sammaiah-Guguloth/TargetClone",
      liveUrl: "https://sammaiah-guguloth.github.io/TargetClone/",
    },
    {
      id: 2,
      title: "Amazon Prime",
      description:
        "Clone of the Amazon Prime landing page, created for HTML and CSS practice. It replicates the layout and design of the Amazon Prime homepage, including the hero section, features section, and footer.",
      image: "/assets/projects/amazon_prime.webp",
      github: "https://github.com/Sammaiah-Guguloth/Amazon-prime-clone",
      liveUrl: "https://sammaiah-guguloth.github.io/Amazon-prime-clone/",
    },
    {
      id: 3,
      title: "Netflix Clone",
      description:
        "Clone of the Netflix landing page, created for HTML and CSS practice. It replicates the layout and design of the Netflix homepage, including the hero section, features section, and footer.",
      image: "/assets/projects/netflix_clone.webp",
      github: "https://github.com/Sammaiah-Guguloth/NetflixClone",
      liveUrl: "https://sammaiah-guguloth.github.io/NetflixClone/",
    },
    {
      id: 4,
      title: "Spotify Clone",
      description:
        "Clone of the Spotify landing page, created for HTML and CSS practice. It replicates the layout and design of the Spotify homepage, including the hero section, features section, and footer.",
      image: "/assets/projects/spotify_clone.webp",
      github: "", //"https://github.com/Sammaiah-Guguloth/SpotifyClone",
      liveUrl: "",
    },
  ],
  JavaScript: [
    {
      id: 1,
      title: "Todo List",
      description:
        "Todo List app built with JavaScript, allowing users to add, delete, and mark tasks as completed. It uses local storage to persist tasks across sessions.",
      image: "/assets/projects/todo.webp",
      github: "https://github.com/Sammaiah-Guguloth/TodoApp",
      liveUrl: "https://sammaiah-guguloth.github.io/TodoApp/",
    },
    {
      id: 2,
      title: "Password Generator",
      description:
        "Password generator created with HTML, CSS, and JavaScript. Click a button to generate a password with random characters. Easily copy the generated password to your clipboard with a click.",
      image: "/assets/projects/password.webp",
      github: "https://github.com/Sammaiah-Guguloth/PasswordGenerator",
      liveUrl: "https://sammaiah-guguloth.github.io/PasswordGenerator/",
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      description:
        "The game supports two players, X and O. Players take turns placing their symbol in an empty square on the grid. The first player to get three of their symbols in a row, column, or diagonal wins the game. If the entire grid is filled without either player achieving three in a row, the game is a draw.",

      image: "/assets/projects/tic_tac_toe.webp",
      github: "https://github.com/Sammaiah-Guguloth/Tic-Tac-Toe",
      liveUrl: "https://sammaiah-guguloth.github.io/Tic-Tac-Toe/",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A simple weather app that allows users to search for the current weather in any city. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.",
      image: "/assets/projects/weather.webp",
      github: "",
      liveUrl: "",
    },
    {
      id: 5,
      title: "Notes App",
      description:
        "Notes app that allows users to create, edit, and delete notes. It uses local storage to persist notes across sessions and provides a user-friendly interface for managing notes.",
      image: "/assets/projects/notes.webp",
      github: "https://github.com/Sammaiah-Guguloth/NotesApp",
      liveUrl: "https://sammaiah-guguloth.github.io/NotesApp/",
    },
    {
      id: 6,
      title: "Currency Converter",
      description:
        "Currency converter that allows users to convert between different currencies. It uses the ExchangeRate API to fetch exchange rates and provides a user-friendly interface for converting currencies.",
      image: "/assets/projects/currency.webp",
      github: "https://github.com/Sammaiah-Guguloth/Currency-Converter",
      liveUrl: "https://sammaiah-guguloth.github.io/Currency-Converter/",
    },
  ],
  ReactJS: [
    {
      id: 1,
      title: "StudyNotion",
      description:
        "EdTech platform built to practice and demonstrate routing using React Router DOM. It features multiple pages such as Home, About, Contact, Login  and Signup . The project also includes a mock authentication flow and user-friendly navigation to simulate a real-world multi-page web application.",
      image: "/assets/projects/study_notion.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/study-notion",
      liveUrl: "",
    },
    {
      id: 2,
      title: "Ecomzy",
      description:
        "Ecomzy is a simple shopping application built with React.js to practice and implement Redux Toolkit for state management. It displays a list of products on the home page, with an add-to-cart option. The cart icon shows the number of items dynamically using the global state. The cart page displays all selected items, their total count, total price, and provides options to remove individual items or clear the entire cart.",
      image: "/assets/projects/ecomzy.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/shopping-app",
      liveUrl: "",
    },
    {
      id: 3,
      title: "Top Courses",
      description:
        "Project focused on building a course browsing interface with features like horizontal category filters, API data fetching, and a loading state. It allows users to filter courses by category (e.g., Development, Business) using a horizontal filter bar. Courses are fetched from an API, and a loading spinner is shown during data retrieval, providing a smooth and interactive user experience.",
      image: "/assets/projects/top_courses.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/top-courses",
      liveUrl: "",
    },
    {
      id: 4,
      title: "Testimonials",
      description:
        "Testimonials is a visually appealing React.js project designed to showcase user feedback in an engaging way. It features a stylish UI with profile pictures, user details, and testimonial text. Users can navigate through testimonials using Prev and Next buttons, or click the 'Surprise Me' button to view a random testimonial. This project helps practice state management, conditional rendering, and UI transitions in React.",
      image: "/assets/projects/testimonials.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/testimonials",
      liveUrl: "",
    },
    {
      id: 5,
      title: "Tech Blogs",
      description:
        "Project that fetches and displays blog posts from an API, focusing on practicing pagination and API integration. It presents a clean layout for each blog and includes navigation controls at the bottom—Previous, Next, to browse through multiple pages of content. The project emphasizes managing state for current page tracking and updating content dynamically on user interaction.",
      image: "/assets/projects/blogs.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/blogs",
      liveUrl: "",
    },
    {
      id: 6,
      title: "Tour Planner",
      description:
        "Project that displays a list of tours , each with a description, image and price. It includes Read More and Read Less buttons to toggle extended tour details and a Not Interested button to remove a tour from the list. Learned  conditional rendering, state management, and user interaction handling in React.",
      image: "/assets/projects/tours.webp",
      github:
        "https://github.com/Sammaiah-Guguloth/reactjs-projects/tree/main/tour-planner",
      liveUrl: "",
    },
  ],
  "MERN Stack": [],
  "3D": [],
  PHP: [],
};
