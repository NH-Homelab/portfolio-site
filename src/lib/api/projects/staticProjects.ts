import { Project, ProjectAPI, ProjectSection } from "@/lib/types/projects";

// TODO: Replace this placeholder data with your actual projects
const staticProjects: Project[] = [
    {
        id: 1,
        title: "Your First Project",
        description: "Replace this with your actual project description. This should be a brief overview of what the project does and its main purpose.",
        date: "2024-01-01",
        imageUrl: "path/to/your/project/image.jpg", // Replace with actual image path
        tags: ["example", "placeholder", "replace-me"],
        sections: [
            {
                type: "note",
                date: "2024-01-01",
                title: "Project Inception",
                content: "Replace this with your actual project notes. Describe how the project started, what inspired it, or initial planning details."
            },
            {
                type: "feature",
                date: "2024-01-05",
                title: "Key Feature Implementation",
                description: "Replace this with a description of a key feature you implemented. What problem did it solve?"
            },
            {
                type: "milestone",
                date: "2024-01-15",
                title: "First Milestone",
                description: "Replace this with your actual milestone description"
            }
            // Add more sections as needed...
        ]
    },
    {
        id: 2,
        title: "Your Second Project",
        description: "Another project description placeholder. Replace with your actual project details.",
        date: "2024-02-01",
        imageUrl: "path/to/your/second/project/image.jpg",
        tags: ["another", "example", "replace-me"],
        sections: [
            {
                type: "note",
                date: "2024-02-01",
                title: "Project Start",
                content: "Replace with your actual project content..."
            }
        ]
    }
    // Add more projects here...
];

let nextId = staticProjects.length + 1;

export class StaticProjectAPI implements ProjectAPI {
    private projects: Project[] = [...staticProjects];

    // Projects
    async getProjects(): Promise<Project[]> {
        // Return a copy to prevent external modification
        return [...this.projects];
    }

    async getProject(id: number): Promise<Project | null> {
        const project = this.projects.find(p => p.id === id);
        return project ? { ...project } : null;
    }

    async createProject(project: Omit<Project, "id">): Promise<Project> {
        const newProject: Project = {
            ...project,
            id: nextId++,
        };
        this.projects.push(newProject);
        return { ...newProject };
    }

    async updateProject(id: number, project: Partial<Omit<Project, "id">>): Promise<Project | null> {
        const index = this.projects.findIndex(p => p.id === id);
        if (index === -1) return null;

        this.projects[index] = { ...this.projects[index], ...project };
        return { ...this.projects[index] };
    }

    async deleteProject(id: number): Promise<boolean> {
        const index = this.projects.findIndex(p => p.id === id);
        if (index === -1) return false;

        this.projects.splice(index, 1);
        return true;
    }

    // Project Sections
    async addSection(projectId: number, section: ProjectSection): Promise<ProjectSection> {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) throw new Error(`Project with id ${projectId} not found`);

        project.sections.push(section);
        return { ...section };
    }

    async updateSection(projectId: number, sectionIndex: number, section: Partial<ProjectSection>): Promise<ProjectSection | null> {
        const project = this.projects.find(p => p.id === projectId);
        if (!project || sectionIndex < 0 || sectionIndex >= project.sections.length) {
            return null;
        }

        project.sections[sectionIndex] = { ...project.sections[sectionIndex], ...section } as ProjectSection;
        return { ...project.sections[sectionIndex] };
    }

    async deleteSection(projectId: number, sectionIndex: number): Promise<boolean> {
        const project = this.projects.find(p => p.id === projectId);
        if (!project || sectionIndex < 0 || sectionIndex >= project.sections.length) {
            return false;
        }

        project.sections.splice(sectionIndex, 1);
        return true;
    }
}

// Export a singleton instance for easy use
export const staticProjectAPI = new StaticProjectAPI();