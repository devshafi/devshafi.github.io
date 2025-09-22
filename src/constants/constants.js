export const projects = [
    {
        title: "OC Academy",
        description:
            "This is a fully functional web application developed for a Canadian company. User can explore different courses and programs offered by the institute and purchase directly from the site. I was the the team lead of the project.",
        image: "/images/img-oca.PNG",
        tags: ["Express", "Node", "GraphQL", "MongoDB", "Vue", "Nuxt", "Stripe"],
        isPrivate: true,
        link: "https://ocacademy.ca",
        code: "",
        id: 0
    },
    {
        title: "Lighthouse Academy",
        description:
            "This is a Canadian online school course management system. Using this web application, students can register for courses of grade 9 to 12. This system allows payment for the registration, automatic invoice generation, automatic mailing etc.",
        image: "/images/img-lha.PNG",
        tags: ["Express", "Node", "GraphQL", "MongoDB", "Vue", "Nuxt", "Stripe"],
        isPrivate: true,
        link: "https://course.lighthouseacademy.ca",
        code: "",
        id: 1
    },
    {
        title: "Vid Quiz",
        description:
            "This is a video based quiz web application where participants can watch videos on certain topics and then participate in quiz, see the result. Authentication has been implemented in this application using firebase.",
        image: "/images/img-vid-quiz.PNG",
        tags: ["React", "Firebase", "authentication", "CSS module"],
        isPrivate: false,
        link: "https://vid-quiz.netlify.app",
        code: "https://github.com/devshafi/vid-quiz",
        id: 2
    },
    {
        title: "Car Mart",
        description:
            "This is a demo project where the main focus was implementing SEO friendly queries, SSR, SSG etc using Next.JS and TypeScript",
        image: "/images/img-car-mart.PNG",
        tags: ["React", "Next", "TypeScript", "Prisma", "MongoDB", "Material UI"],
        isPrivate: false,
        link: "https://car-mart.vercel.app",
        code: "https://github.com/devshafi/car-mart",
        id: 3
    },
    {
        title: "Bootstrap Shopping Cart",
        description:
            "This is a simple shopping cart developed with React, Bootstrap and TypeScript. The cart items are saved in local storage for persisting the data",
        image: "/images/img-cart.PNG",
        tags: ["React", "TypeScript", "Firebase"],
        isPrivate: false,
        link: "https://react-ts-shopping-cart.netlify.app",
        code: "https://github.com/devshafi/react-ts-shopping-cart",
        id: 4
    },
    {
        title: "News Flash Website",
        description:
            "This is modern responsive news paper template designed with modern css techniques. This template supports both dark and light themes.",
        image: "/images/img-news-flash.PNG",
        tags: ["CSS", "CSS Grid", "Flexbox", "Dark Mode"],
        isPrivate: false,
        link: "https://news-mag.netlify.app",
        code: "https://github.com/devshafi/newsmag",
        id: 5
    },
    {
        title: "Shafis Food Website",
        description: "This is fully responsive html website template developed using CSS Grid, Flexbox etc.",
        image: "/images/img-shafis-food.PNG",
        tags: ["CSS", "CSS Grid", "Flexbox"],
        isPrivate: false,
        link: "https://shafisfood.netlify.app",
        code: "https://github.com/devshafi/shafisfood",
        id: 6
    }
];

export const publications = [
    {
        title: "Personalized Mental Health Assistance with Large Language Models",
        authors: "FR Shafi, MA Hossain, S Choudhury",
        publication: "2025 IEEE 49th Annual Computers, Software, and Applications Conference",
        year: 2025,
        link: "https://ieeexplore.ieee.org/abstract/document/11126663"
    },
    {
        title: "LLM-Therapist: A RAG-Based Multimodal Behavioral Therapist as Healthcare Assistant",
        authors: "FR Shafi, MA Hossain",
        publication: "GLOBECOM 2024-2024 IEEE Global Communications Conference, 2129-2134",
        year: 2024,
        link: "https://ieeexplore.ieee.org/document/10012345" // Example link
    },
    {
        title: "Rapidly developable low cost and power-efficient portable turbine-based emergency ventilator",
        authors: "S Razwanul Haque, AKM Maruf Hossain, S Sudan Saha, FR Shafi, SR Sarkar",
        publication:
            "Proceedings of the 2021 8th International Conference on Biomedical and Clinical Engineering (ICBCE), 1-6",
        year: 2021
    },
    {
        title: "Cost-effective and power-efficient portable turbine-based emergency ventilator",
        authors: "SR Haque, SS Saha, AKMM Hossain, MHR Sohag, FR Shafi, SR Sarkar",
        publication: "HardwareX 12, e00350",
        year: 2022
    }
];

export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Android Developer", company: "CRUX" },
    { year: 2019, text: "Fullstack developer (Remote)", company: "Lighthouse Academy, Canada" },
    { year: 2020, text: "Fullstack developer (Remote)", company: "OC Academy, Canada" }
];
