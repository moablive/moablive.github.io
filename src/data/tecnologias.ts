import type { GrupoTech } from "./types";

const SK = "https://skillicons.dev/icons?i=";

export const gruposTech: GrupoTech[] = [
    {
        id: "core",
        tituloKey: "techCore",
        icones: `${SK}ts,nodejs,dotnet,cs,python,bun&theme=dark`,
        alt: "TypeScript, Node.js, .NET, C#, Python, Bun",
    },
    {
        id: "front",
        tituloKey: "techFront",
        icones: `${SK}react,vite,tailwind,vue,angular,bootstrap,html,css&theme=dark`,
        alt: "React, Vite, Tailwind, Vue, Angular, Bootstrap, HTML, CSS",
    },
    {
        id: "devops",
        tituloKey: "techDevops",
        icones: `${SK}docker,nginx,cloudflare,linux,bash,aws,azure,gcp&theme=dark`,
        alt: "Docker, Nginx, Cloudflare, Linux, Bash, AWS, Azure, GCP",
    },
    {
        id: "dados",
        tituloKey: "techData",
        icones: `${SK}postgres,mysql,mongodb,redis,kafka,git,github,gitlab&theme=dark`,
        alt: "PostgreSQL, MySQL, MongoDB, Redis, Kafka, Git, GitHub, GitLab",
    },
];

export const contatos = [
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/guilhermebonato/",
        badge: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
        altKey: "altLinkedin",
    },
    {
        id: "gmail",
        href: "mailto:guilhermeferrazbonato@gmail.com",
        badge: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
        altKey: "altEmail",
    },
    {
        id: "github",
        href: "https://github.com/moablive",
        badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
        altKey: "altGithub",
    },
];
