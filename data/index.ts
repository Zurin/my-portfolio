import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const data = {
  home: {
    name: "Rino Ridlo",
    description:
      "I Build, Optimize, and Refine #Next_js, #Golang, & #Laravel Apps", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/Zurin",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/rino-ridlo-julianto/",
        icon: Linkedin,
      },
      {
        name: "facebook",
        link: "https://facebook.com/RynoVengeance/",
        icon: Facebook,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/trnshd_1/",
        icon: Instagram,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Reemotely Portal",
        description:
          "A comprehensive platform designed to facilitate the generation of marketing content, leveraging advanced AI technology to enhance efficiency and creativity.\n\n Technologies Used: Next.js, React MUI, OpenAI API.",
        image: "/projects-imgs/reemotely-portal.png",
      },
      {
        id: 2,
        title: "Alnico Agency Partner",
        description:
          "A tailored custom ERP solution integrated into the Lark ecosystem, designed to effectively manage agency partnerships for Alnico Company. \n\n Technologies Used: Next.js, React MUI, Lark server API.",
        image: "/projects-imgs/alnico.png",
      },
      {
        id: 3,
        title: "Agathis Partner Apps",
        description:
          "Web applications accessible through Mandiri Livin Sukha, JakLingko, and Dana, with WebView integration for the first two and a dedicated Dana Mini Program. \n\n Technologies Used: Nuxt.js, Tailwind CSS, Golang, Dana Mini Program.",
        image: "/projects-imgs/agathis-partner.png",
      },
      {
        id: 4,
        title: "Agathis Merchant Page",
        description:
          "An online tourism ticketing platform that aggregates AINO tourism merchants, offering various destinations and enabling seamless ticket sales for travelers. \n\n Technologies Used: Vue.js, Tailwind CSS, Golang.",
        image: "/projects-imgs/agathis-merchant.png",
        previewLink: "https://agathis.fun",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 7,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 8,
        name: "mui",
        src: "/skills/mui.svg",
        link: "https://en.wikipedia.org/wiki/Material_Design",
      },
      {
        id: 9,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 10,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 11,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 12,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 13,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 14,
        name: "vueJS",
        src: "/skills/vue.svg",
        link: "https://en.wikipedia.org/wiki/Vue.js",
      },
      {
        id: 15,
        name: "nuxtJS",
        src: "/skills/nuxt.svg",
        link: "https://en.wikipedia.org/wiki/Nuxt.js",
      },
      {
        id: 16,
        name: "mysql",
        src: "/skills/mysql.svg",
        link: "https://en.wikipedia.org/wiki/mysql",
      },
      {
        id: 17,
        name: "linux",
        src: "/skills/linux.svg",
        link: "https://en.wikipedia.org/wiki/linux",
      },
      {
        id: 18,
        name: "go",
        src: "/skills/go.svg",
        link: "https://en.wikipedia.org/wiki/Go_(programming_language)",
      },
      {
        id: 19,
        name: "nodeJS",
        src: "/skills/nodejs.svg",
        link: "https://en.wikipedia.org/wiki/Node.js",
      },
      {
        id: 20,
        name: "laravel",
        src: "/skills/laravel.svg",
        link: "https://en.wikipedia.org/wiki/Laravel",
      },
      {
        id: 21,
        name: "bootstrap",
        src: "/skills/bootstrap.svg",
        link: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
      },
    ],
  },
  contact: {
    email: "rinoridlojulianto@gmail.com",
  },
  experiences: [
    {
      id: 1,
      company: "Linkbot Pte Ltd",
      period: "Aug 2024 - Present",
      position: "Sr. Software Engineer",
      img: "/companies/linkbot.webp",
      website: "https://linkbot.sg/",
    },
    {
      id: 2,
      company: "PT AINO Indonesia",
      period: "Nov 2023 - Jul 2024",
      position: "Full-stack Developer",
      img: "/companies/aino.webp",
      website: "https://www.ainosi.co.id/",
    },
    {
      id: 3,
      company: "amalan international",
      period: "Jul 2023 - Oct 2023",
      position: "Back End Engineer",
      img: "/companies/amalan.jpg",
      website: "https://amalan.com/",
    },
    {
      id: 4,
      company: "ICUBE By Sirclo",
      period: "Jul 2022 - Jun 2023",
      position: "Software Engineer",
      img: "/companies/icube.png",
      website: "https://icubeonline.com/",
    },
    {
      id: 5,
      company: "Authscure Sdn Bhd",
      period: "Jan 2021 - Jun 2022",
      position: "Back End Developer",
      img: "/companies/authscure.webp",
      website: "https://www.authscure.com.my/",
    },
    {
      id: 6,
      company: "PT AINO Indonesia",
      period: "Mar 2019 - Feb 2021",
      position: "Full-stack Engineer",
      img: "/companies/aino.webp",
      website: "https://www.ainosi.co.id/",
    },
  ],
};

export default data;
