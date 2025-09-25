import type { Milestone, MilestoneAPI } from '@/lib/types/milestone';

const staticMilestones: Milestone[] = [
    {
        title: "Portfolio Site",
        date: new Date("2025-09-01"),
        description: "Developed a personal portfolio website to showcase projects and skills using Next.js and Material-UI.",
        tags: ["Next.js", "TypeScript", "Material-UI", "React", "Web Development", "CSS", "HTML"],
        type: { type: "project", projectId: 0, link: "https://github.com/NH-Homelab/portfolio-site", imgUrl: "/portfolio.png" },
        body: "/markdown/portfolio.md"
    },
    {
        title: "Homelab Authentication System",
        date: new Date("2025-08-01"),
        description: "Created a custom authentication system for my homelab using OAuth2 and JWT to enhance security and user management.",
        tags: ["OAuth2", "JWT", "Golang", "Kubernetes", "Security", "API", "Backend Development"],
        type: { type: "project", projectId: 7, link: "https://github.com/NH-Homelab/auth-service" },
        body: "/markdown/auth.md"
    },
    {
        title: "Event Driven Systems Exploration - Quantlytic Project",
        date: new Date("2025-07-01"),
        description: "Explored event driven systems using kafka and kubernetes to create a scalable microservice architecture.",
        tags: ["Kubernetes", "Docker", "Kafka", "Microservices", "Data Bucket", "Minio", "Golang", "API", "Finance"],
        type: { type: "project", projectId: 4, link: "https://github.com/Quantlytic" },
        body: "/markdown/quantlytic.md"
    },
    {
        title: "Completed Senior Capstone Project",
        date: new Date("2025-05-01"),
        description: "Completed capstone research on the viability of Non-Terrestrial Networks (NTN) for IoT applications. Sponsored by BI Inc.",
        tags: ["Next.js", "Arduino", "C/C++", "AWS", "Embedded", "Python", "Networking", "TCP/IP"],
        type: { type: "project", projectId: 2, imgUrl: "/bi.jpg", link: "https://github.com/BI-Inc-Senior-Design" },
        body: "/markdown/capstone.md"
    },
    {
        title: "Graduated from the University of Colorado Boulder",
        date: new Date("2025-05-08"),
        description: "Graduated with a Bachelor of Science in Computer Science and a minor in Data Science.",
        tags: [],
        type: {
            type: "certificate",
            imgUrl: "/CU.png",
        }
    },
    {
        title: "Excel Macro Project - Leeds School of Business",
        date: new Date("2025-01-01"),
        description: "Started a project to automate monotonous data entry tasks to improve team efficiency.",
        tags: ["VBA", "Excel", "Automation", "Software Development Lifecycle", "Data Cleaning"],
        type: {
            type: "project",
            projectId: 3,
        },
        body: "/markdown/excelmacro.md"
    },
    {
        title: "Student Canvas Course Builder",
        date: new Date("2023-10-01"),
        description: "Accepted role creating and updating canvas course pages for the Leeds School of Business Graduate program.",
        tags: ["Time Management", "Deadline Driven Environment", "HTML", "CSS", "Javascript"],
        type: {
            type: "work"
        }
    },
    {
        title: "Portland Indigenous Marketplace - Blueprint Boulder",
        date: new Date("2023-10-01"),
        description: "Led a team of developers in creating a web application for managing community resources.",
        tags: ["Leadership", "Teamwork", "Next.js", "Node.js", "Express.js", "Javascript", "SQL", "Full Stack"],
        type: {
            type: "project",
            projectId: 1,
            imgUrl: "/pim.png",
            link: "https://github.com/Blueprint-Boulder/f23-PortlandIndigenousMarketplace"
        },
        body: "/markdown/pim.md"
    },
    {
        title: "CryptoTool Trading Bot",
        description: "My first attempt at creating a trading bot using C++, which spawned processes for different aspects of the app like data collection or processing.",
        date: new Date("2022-12-01"),
        tags: ["C++", "API", "Finance", "Algorithms", "Data Structures", "Blockchain"],
        type: {
            type: "project",
            projectId: 6,
            link: "https://github.com/nh602/CryptoTool",
        },
        body: "/markdown/cryptotool.md"
    },
    {
        title: "Hack CU 2022 Participant",
        description: "Participated in HackCU 2022, a 24-hour hackathon where I collaborated with a team to develop a secure online voting platform using blockchain technology.",
        date: new Date("2022-03-05"),
        tags: ["Hackathon", "Teamwork", "Creativity", "Problem-Solving", "Python", "Flask", "API", "Blockchain"],
        type: {
            type: "project",
            projectId: 5,
            link: "https://github.com/nh602/HackCU2022",
            imgUrl: "/hackcu.png",
        }
    },
    {
        title: "Fostersource - Blueprint Boulder",
        date: new Date("2021-10-01"),
        description: "Joined the Blueprint Boulder organization as a developer, contributing to various community-focused projects.",
        tags: ["Teamwork", "Angular", "Node.js", "Express.js", "Javascript", "SQL", "Full Stack"],
        type: {
            type: "project",
            projectId: 1,
            imgUrl: "/fostersource.jpg",
            link: "https://github.com/Blueprint-Boulder/f21s22-foster-source"
        },
        body: "/markdown/fs.md"
    },
    {
        title: "Joined Blueprint Boulder Student Organization",
        date: new Date("2021-09-01"),
        description: "The blueprint boulder student organization is a student-led group that pairs teams of developers with non-profits to create applications for free.",
        tags: ["Teamwork", "Community"],
        type: {
            type: "work",
            imgUrl: "/blueprint.jpg",
        }
    },
    {
        title: "Started at University of Colorado Boulder",
        date: new Date("2021-08-01"),
        description: "Began my studies at the University of Colorado Boulder, pursuing a degree in Computer Science.",
        tags: [],
        type: {
            type: "certificate",
            imgUrl: "/CU.png",
        }
    },
    {
        title: "eLearn - Highschool TSA Project",
        date: new Date("2021-03-01"),
        description: "1st place in the state for TSA, created a website to help connect students to online courses during COVID.",
        tags: ["HTML", "CSS", "Javascript", "React", "Web Development", "Teamwork", "Full Stack"],
        type: {
            type: "project",
            projectId: 8,
            link: "https://github.com/ctrekker/tsa-project-2021",
        }
    },
    {
        title: "ML Audio Enhancement - HackMIT 2021",
        date: new Date("2021-02-20"),
        description: "Participated in HackMIT 2021, attempted to create a machine learning model to try to compress and denoise audio for better streaming quality.",
        tags: ["Python", "Machine Learning", "Hackathon"],
        type: {
            type: "project",
            projectId: 9,
            link: "https://github.com/ctrekker/blueprint-2021"
        }
    },
    {
        title: "MyTrace - HackMIT 2020",
        date: new Date("2020-09-20"),
        description: "Participated in HackMIT 2020, created an app to help users track their carbon impact.",
        tags: ["JavaScript", "Hackathon", "Full Stack"],
        type: {
            type: "project",
            projectId: 10,
            link: "https://github.com/ctrekker/mytrace",
        }
    },
    {
        title: "IT Summer Intern at DCSD",
        date: new Date("2019-06-01"),
        description: "Worked as an IT summer intern at Douglas County School District, gaining hands-on experience in IT support and infrastructure.",
        tags: ["Agile", "SQL", "Java", "Tableau", "Git", "Spring Boot"],
        type: {
            type: "work",
            imgUrl: "/dcsd.png",
        },
        body: "/markdown/dcsd.md"
    }
];

export class StaticMilestoneAPI implements MilestoneAPI {
    private milestones: Milestone[] = [...staticMilestones];

    async getMilestones(): Promise<Milestone[]> {
        // Return a copy to prevent external modification
        return [...this.milestones];
    }

    async addMilestone(milestone: Milestone): Promise<Milestone> {
        this.milestones.push(milestone);
        return milestone;
    }

    async updateMilestone(index: number, milestone: Partial<Milestone>): Promise<Milestone | null> {
        if (index < 0 || index >= this.milestones.length) {
            return null;
        }

        this.milestones[index] = { ...this.milestones[index], ...milestone };
        return this.milestones[index];
    }

    async deleteMilestone(index: number): Promise<boolean> {
        if (index < 0 || index >= this.milestones.length) {
            return false;
        }

        this.milestones.splice(index, 1);
        return true;
    }
}

export const staticMilestoneAPI = new StaticMilestoneAPI();