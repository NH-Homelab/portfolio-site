import type { Milestone, MilestoneAPI } from '@/lib/types/milestone';

const mockMilestones: Milestone[] = [
    {
        title: "Graduated Computer Science",
        date: new Date("2023-05-15"),
        description: "Bachelor's degree in Computer Science with focus on software engineering and algorithms",
        tags: ["education", "degree", "computer-science"],
        type: { type: "career" }
    },
    {
        title: "AWS Solutions Architect",
        date: new Date("2023-08-20"),
        description: "Achieved AWS Solutions Architect Associate certification with focus on cloud infrastructure design",
        tags: ["aws", "cloud", "certification", "architecture"],
        type: {
            type: "career",
            imgUrl: "https://picsum.photos/400/300?random=101",
            link: "https://aws.amazon.com/certification/"
        }
    },
    {
        title: "React Developer Certification",
        date: new Date("2023-10-05"),
        description: "Completed advanced React certification covering hooks, context, and performance optimization",
        tags: ["react", "frontend", "certification", "javascript"],
        type: {
            type: "career",
            imgUrl: "https://picsum.photos/400/300?random=102",
            link: "https://reactjs.org/community/conferences.html"
        }
    },
    {
        title: "Portfolio Website Launch",
        date: new Date("2024-01-10"),
        description: "Built and deployed personal portfolio using Next.js, TypeScript, and Material-UI",
        tags: ["web", "nextjs", "typescript", "portfolio"],
        type: {
            type: "project_major",
            projectId: 1,
            imgUrl: "https://picsum.photos/400/300?random=103",
            link: "https://github.com/username/portfolio"
        }
    },
    {
        title: "Started at Tech Company",
        date: new Date("2024-03-01"),
        description: "Joined as a Full Stack Developer working on cloud-native applications",
        tags: ["career", "fullstack", "employment"],
        type: { type: "career" }
    },
    {
        title: "E-commerce Platform",
        date: new Date("2024-06-15"),
        description: "Led development of microservices-based e-commerce platform with React and Node.js",
        tags: ["ecommerce", "microservices", "react", "nodejs"],
        type: {
            type: "project_major",
            projectId: 2,
            imgUrl: "https://picsum.photos/400/300?random=104",
            link: "https://github.com/username/ecommerce-platform"
        }
    },
    {
        title: "Docker & Kubernetes Certification",
        date: new Date("2024-08-12"),
        description: "Earned container orchestration certification covering DevOps best practices",
        tags: ["docker", "kubernetes", "devops", "certification"],
        type: {
            type: "career",
            imgUrl: "https://picsum.photos/400/300?random=105",
            link: "https://kubernetes.io/training/"
        }
    },
    {
        title: "Open Source Contribution",
        date: new Date("2024-09-01"),
        description: "Major contribution to popular React component library with 10k+ GitHub stars",
        tags: ["opensource", "react", "community", "github"],
        type: { type: "career" }
    }
];

export class MockMilestoneAPI implements MilestoneAPI {
    private milestones: Milestone[] = [...mockMilestones];

    async getMilestones(): Promise<Milestone[]> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        return [...this.milestones];
    }

    async addMilestone(milestone: Milestone): Promise<Milestone> {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.milestones.push(milestone);
        return milestone;
    }

    async updateMilestone(index: number, milestone: Partial<Milestone>): Promise<Milestone | null> {
        await new Promise(resolve => setTimeout(resolve, 100));

        if (index < 0 || index >= this.milestones.length) {
            return null;
        }

        this.milestones[index] = { ...this.milestones[index], ...milestone };
        return this.milestones[index];
    }

    async deleteMilestone(index: number): Promise<boolean> {
        await new Promise(resolve => setTimeout(resolve, 100));

        if (index < 0 || index >= this.milestones.length) {
            return false;
        }

        this.milestones.splice(index, 1);
        return true;
    }
}

export const milestoneAPI = new MockMilestoneAPI();