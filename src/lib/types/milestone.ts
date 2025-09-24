export type Milestone = {
    title: string;
    date: Date;
    description?: string;
    tags: string[];
    type: MilestoneType;
    body?: string;
}

export type MilestoneType =
    | { type: "milestone"; }
    | { type: "certificate"; imgUrl?: string; link?: string }
    | { type: "project"; projectId: number; imgUrl?: string; link?: string }
    | { type: "work"; imgUrl?: string; };

export type MilestoneAPI = {
    getMilestones(): Promise<Milestone[]>;
    addMilestone(milestone: Milestone): Promise<Milestone>;
    updateMilestone(index: number, milestone: Partial<Milestone>): Promise<Milestone | null>;
    deleteMilestone(index: number): Promise<boolean>;
}