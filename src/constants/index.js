export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Sobre',
        href: '#about',
    },
    {
        id: 3,
        name: 'Trabalhos',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contato',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Chat.Io - Aplicação de chat em tempo real',
        desc: 'Este projeto foi desenvolvido como parte de um estudo aprofundado sobre aplicações em tempo real utilizando Socket.io. Trata-se de uma aplicação full stack construída com React.js no frontend e Node.js no backend, projetada para oferecer uma experiência fluida e interativa para seus usuários.',
        subdesc:
            'Este projeto é um exemplo prático e funcional da aplicação de conceitos modernos de desenvolvimento web, com foco em tecnologias em tempo real e usabilidade.',
        href: 'https://chat-io-vzqv.onrender.com/login',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/chat-io-logo.png',
        logoStyle: {
            backgroundColor: '#3D3244',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Node.js',
                path: '/assets/node.png',
            },
            {
                id: 5,
                name: 'Socket.io',
                path: '/assets/socket.png',
            }
        ],
    },
    {
        title: 'NgFlix - Confira os últimos lançamentos',
        desc: 'Este projeto foi criado com o objetivo de explorar as potencialidades do Angular, destacando sua versatilidade como framework completo para desenvolvimento web. A aplicação oferece aos usuários uma experiência intuitiva e prática para acessar informações detalhadas sobre filmes em cartaz.',
        subdesc:
            'Este projeto reafirma a flexibilidade do Angular, mostrando como ele pode transformar o ambiente de desenvolvimento com ferramentas poderosas e uma abordagem reativa e eficiente.',
        href: 'https://angular-flix.vercel.app',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/netflix-logo.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Angular',
                path: '/assets/angular-logo.png',
            },
            {
                id: 2,
                name: 'Sass',
                path: 'assets/sass-logo.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Rxjs',
                path: '/assets/rxjs-logo.png',
            },
        ],
    },
    {
        title: 'Help Control - Plataforma Help Desk',
        desc: 'Este projeto foi desenvolvido para explorar e aplicar os novos recursos do Next.js 14 em uma plataforma Help Desk Full Stack. A aplicação combina funcionalidades modernas de front e backend para oferecer uma experiência fluida e eficiente aos usuários.',
        subdesc:
            'O projeto demonstra a versatilidade e o poder do Next.js 14, reforçando seu valor no mercado como uma ferramenta completa para o desenvolvimento de aplicações modernas e robustas.',
        href: 'https://help-control.vercel.app',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/computer-icon.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/assets/mongo-db.png',
            },
        ],
    },
    {
        title: 'Em breve',
        desc: '...',
        subdesc:
            '...',
        href: 'https://www.linkedin.com/in/igor-montezuma-dev/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/angular-logo.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [

        ],
    },
    {
        title: 'Em breve',
        desc: '...',
        subdesc:
            '...',
        href: 'https://www.linkedin.com/in/igor-montezuma-dev/',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/logo-react.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [

        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
        cubePosition: isSmall ? [4, -5, 3] : isMobile ? [5, -5, 4] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 3, 2] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 1, 2],
        ringPosition: isSmall ? [-8, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-23, 7, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];