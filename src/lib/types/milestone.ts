// Re-export types from schema (single source of truth)
export type { Milestone, MilestoneType } from './milestone.schema';

// Import for use in MilestoneAPI interface
import type { Milestone } from './milestone.schema';

// MilestoneAPI interface (not validated at runtime, so kept here)
export type MilestoneAPI = {
    getMilestones(): Promise<Milestone[]>;
    addMilestone(milestone: Milestone): Promise<Milestone>;
    updateMilestone(index: number, milestone: Partial<Milestone>): Promise<Milestone | null>;
    deleteMilestone(index: number): Promise<boolean>;
}