export type ProjectSection = 
    | {type: "note"; date: string; title: string; content: string}
    | {type: "media"; date: string; mediaType: "image" | "video"; url: string; caption?: string}
    | {type: "feature"; date: string; title: string; description: string}
    | {type: "milestone"; date: string; title: string; description?: string};

export type Project = {
    id: number;
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    tags: string[];
    sections: ProjectSection[];
}

export interface ProjectAPI {
    // Projects
    getProjects(): Promise<Project[]>;
    getProject(id: number): Promise<Project | null>;
    createProject(project: Omit<Project, "id">): Promise<Project>;
    updateProject(id: number, project: Partial<Omit<Project, "id">>): Promise<Project | null>;
    deleteProject(id: number): Promise<boolean>;
    // Project Sections
    addSection(projectId: number, section: ProjectSection): Promise<ProjectSection>;
    updateSection(projectId: number, sectionIndex: number, section: Partial<ProjectSection>): Promise<ProjectSection | null>;
    deleteSection(projectId: number, sectionIndex: number): Promise<boolean>;
}