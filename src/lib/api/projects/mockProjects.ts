import { Project, ProjectAPI, ProjectSection } from "@/lib/types/projects";

// Mock data storage
let mockProjects: Project[] = [
  {
    id: 1,
    title: "Smart Home Dashboard",
    description: "A comprehensive IoT dashboard for monitoring and controlling home automation devices with real-time data visualization.",
    date: "2024-01-15",
    imageUrl: "https://picsum.photos/400/300?random=1",
    tags: ["React", "TypeScript", "IoT", "Dashboard"],
    sections: [
      {
        type: "note",
        date: "2024-01-15",
        title: "Project Inception",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      },
      {
        type: "media",
        date: "2024-01-20",
        mediaType: "image",
        url: "https://picsum.photos/600/400?random=2",
        caption: "Initial wireframe design for the dashboard interface"
      },
      {
        type: "feature",
        date: "2024-02-01",
        title: "Real-time Data Streaming",
        description: "Implemented WebSocket connection for live sensor data updates. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      },
      {
        type: "milestone",
        date: "2024-02-15",
        title: "MVP Release",
        description: "First working version deployed with basic monitoring capabilities"
      },
      {
        type: "media",
        date: "2024-02-20",
        mediaType: "video",
        url: "https://picsum.photos/800/600?random=3",
        caption: "Demo video showing the dashboard in action"
      }
    ]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Cross-platform mobile application for online shopping with advanced filtering and recommendation engine.",
    date: "2024-03-01",
    imageUrl: "https://picsum.photos/400/300?random=4",
    tags: ["React Native", "Node.js", "MongoDB", "Mobile"],
    sections: [
      {
        type: "note",
        date: "2024-03-01",
        title: "Market Research",
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
      },
      {
        type: "feature",
        date: "2024-03-10",
        title: "User Authentication",
        description: "Implemented secure login system with biometric authentication support. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
      },
      {
        type: "media",
        date: "2024-03-15",
        mediaType: "image",
        url: "https://picsum.photos/600/400?random=5",
        caption: "Mobile app UI mockups and user flow diagrams"
      },
      {
        type: "milestone",
        date: "2024-04-01",
        title: "Beta Testing Launch"
      }
    ]
  },
  {
    id: 3,
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for data preprocessing, model training, and deployment with monitoring capabilities.",
    date: "2024-04-15",
    imageUrl: "https://picsum.photos/400/300?random=6",
    tags: ["Python", "TensorFlow", "Docker", "AWS"],
    sections: [
      {
        type: "note",
        date: "2024-04-15",
        title: "Data Analysis",
        content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
      },
      {
        type: "media",
        date: "2024-04-20",
        mediaType: "image",
        url: "https://picsum.photos/600/400?random=7",
        caption: "Data visualization showing model performance metrics"
      },
      {
        type: "feature",
        date: "2024-05-01",
        title: "Automated Training Pipeline",
        description: "Built CI/CD pipeline for automatic model retraining. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non."
      }
    ]
  }
];

let nextId = 4;

export class MockProjectAPI implements ProjectAPI {
  // Projects
  async getProjects(): Promise<Project[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...mockProjects];
  }

  async getProject(id: number): Promise<Project | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    const project = mockProjects.find(p => p.id === id);
    return project ? { ...project } : null;
  }

  async createProject(project: Omit<Project, "id">): Promise<Project> {
    await new Promise(resolve => setTimeout(resolve, 150));
    const newProject: Project = {
      ...project,
      id: nextId++,
      imageUrl: project.imageUrl || `https://picsum.photos/400/300?random=${nextId}`
    };
    mockProjects.push(newProject);
    return { ...newProject };
  }

  async updateProject(id: number, project: Partial<Omit<Project, "id">>): Promise<Project | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const index = mockProjects.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    mockProjects[index] = { ...mockProjects[index], ...project };
    return { ...mockProjects[index] };
  }

  async deleteProject(id: number): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const index = mockProjects.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    mockProjects.splice(index, 1);
    return true;
  }

  // Project Sections
  async addSection(projectId: number, section: ProjectSection): Promise<ProjectSection> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const project = mockProjects.find(p => p.id === projectId);
    if (!project) throw new Error(`Project with id ${projectId} not found`);
    
    project.sections.push(section);
    return { ...section };
  }

  async updateSection(projectId: number, sectionIndex: number, section: Partial<ProjectSection>): Promise<ProjectSection | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const project = mockProjects.find(p => p.id === projectId);
    if (!project || sectionIndex < 0 || sectionIndex >= project.sections.length) {
      return null;
    }
    
    project.sections[sectionIndex] = { ...project.sections[sectionIndex], ...section } as ProjectSection;
    return { ...project.sections[sectionIndex] };
  }

  async deleteSection(projectId: number, sectionIndex: number): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const project = mockProjects.find(p => p.id === projectId);
    if (!project || sectionIndex < 0 || sectionIndex >= project.sections.length) {
      return false;
    }
    
    project.sections.splice(sectionIndex, 1);
    return true;
  }
}

// Export a singleton instance for easy use
export const mockProjectAPI = new MockProjectAPI();

// Helper function to generate random lorem ipsum
export function generateLoremIpsum(sentences: number = 3): string {
  const loremSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
  ];
  
  return loremSentences
    .sort(() => Math.random() - 0.5)
    .slice(0, sentences)
    .join(" ");
}

// Helper function to generate random project data
export function generateRandomProject(title: string): Omit<Project, "id"> {
  const randomTags = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "MongoDB", "GraphQL", "NextJS", "TailwindCSS"];
  const selectedTags = randomTags.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 4) + 2);
  
  return {
    title,
    description: generateLoremIpsum(2),
    date: new Date().toISOString().split('T')[0],
    imageUrl: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
    tags: selectedTags,
    sections: [
      {
        type: "note",
        date: new Date().toISOString().split('T')[0],
        title: "Project Overview",
        content: generateLoremIpsum(4)
      }
    ]
  };
}
