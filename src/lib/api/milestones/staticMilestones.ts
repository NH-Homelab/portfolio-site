import type { Milestone, MilestoneAPI } from '@/lib/types/milestone';

const staticMilestones: Milestone[] = [
    {
        title: "Completed Senior Capstone Project",
        date: new Date("2025-05-01"),
        description: "Completed capstone research on the viability of Non-Terrestrial Networks (NTN) for IoT applications. Sponsored by BI Inc.",
        tags: ["Next.js", "Arduino", "C/C++", "AWS", "Embedded", "Python", "Networking", "TCP/IP"],
        type: { type: "project", projectId: 2 },
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
        title: "Blueprint Boulder Team Lead",
        date: new Date("2023-10-01"),
        description: "Led a team of developers in creating a web application for managing community resources.",
        tags: ["Leadership", "Teamwork", "Next.js", "Node.js", "Express.js", "Javascript", "SQL"],
        type: {
            type: "project",
            projectId: 1,
            imgUrl: "/blueprint.jpg",
        }
    },
    {
        title: "Blueprint Boulder Developer",
        date: new Date("2021-10-01"),
        description: "Joined the Blueprint Boulder organization as a developer, contributing to various community-focused projects.",
        tags: ["Leadership", "Teamwork", "Next.js", "Node.js", "Express.js", "Javascript", "SQL"],
        type: {
            type: "project",
            projectId: 1,
            imgUrl: "/blueprint.jpg",
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
        }
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