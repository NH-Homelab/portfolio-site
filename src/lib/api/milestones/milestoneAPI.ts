import type { Milestone, MilestoneAPI as MilestoneApiInterface } from '@/lib/types/milestone';
import { ApiMilestonesArraySchema, type ApiMilestone } from '@/lib/types/milestone.schema';

export class MilestoneAPI implements MilestoneApiInterface {
    private transformApiMilestone(apiMilestone: ApiMilestone): Milestone {
        // Map milestone_type to the complex type structure
        let type: Milestone['type'];

        switch (apiMilestone.milestone_type) {
            case 'project_major':
                type = {
                    type: 'project_major',
                    projectId: apiMilestone.project_id,
                    imgUrl: apiMilestone.image_url || undefined,
                    link: apiMilestone.github_url || undefined
                };
                break;
            case 'project_minor':
                type = {
                    type: 'project_minor',
                    projectId: apiMilestone.project_id,
                    imgUrl: apiMilestone.image_url || undefined,
                    link: apiMilestone.github_url || undefined
                };
                break;
            case 'career':
                type = {
                    type: 'career',
                    imgUrl: apiMilestone.image_url || undefined,
                    link: apiMilestone.github_url || undefined
                };
                break;
            case 'education':
                type = {
                    type: 'education',
                    imgUrl: apiMilestone.image_url || undefined,
                    link: apiMilestone.github_url || undefined
                };
                break;
            default:
                // ApiMilestoneSchema restricts milestone_type to known values,
                // so this branch should be unreachable. Provide a safe fallback.
                type = { type: 'career', imgUrl: apiMilestone.image_url || undefined };
        }

        return {
            title: apiMilestone.title,
            date: new Date(apiMilestone.milestone_date),
            description: apiMilestone.description || undefined,
            tags: apiMilestone.Tags,
            type,
            body: apiMilestone.body_url || undefined
        };
    }

    async getMilestones(): Promise<Milestone[]> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PORTFOLIO_API_URL}/api/milestones`)

        if (!response.ok) {
            throw new Error('Failed to fetch milestones');
        }

        const data = await response.json();

        // Validate API response
        const apiMilestones = ApiMilestonesArraySchema.parse(data);

        // Transform to internal format
        return apiMilestones.map(m => this.transformApiMilestone(m));
    }

    async addMilestone(milestone: Milestone): Promise<Milestone> {
        throw new Error('Method not implemented.');
    }

    async updateMilestone(index: number, milestone: Partial<Milestone>): Promise<Milestone | null> {
        throw new Error('Method not implemented.');
    }

    async deleteMilestone(index: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}

export const milestoneAPI = new MilestoneAPI();