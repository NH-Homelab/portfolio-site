import { z } from 'zod';

// Schema matching the actual API response
const ApiMilestoneSchema = z.object({
    id: z.number(),
    title: z.string(),
    milestone_date: z.string(),
    description: z.string(),
    body_url: z.string(),
    github_url: z.string(),
    image_url: z.string(),
    milestone_type: z.enum(['project_major', 'project_minor', 'education', 'career']),
    status: z.string(),
    project_id: z.number(),
    Tags: z.array(z.string())
});

// Transform API response to internal Milestone format
// Align frontend milestone types with backend labels
const MilestoneTypeSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('education'),
        imgUrl: z.string().optional(),
        link: z.string().optional()
    }),
    z.object({
        type: z.literal('project_major'),
        projectId: z.number(),
        imgUrl: z.string().optional(),
        link: z.string().optional()
    }),
    z.object({
        type: z.literal('project_minor'),
        projectId: z.number(),
        imgUrl: z.string().optional(),
        link: z.string().optional()
    }),
    z.object({
        type: z.literal('career'),
        imgUrl: z.string().optional(),
        link: z.string().optional()
    })
]);

// Internal Milestone schema (after transformation)
export const MilestoneSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    type: MilestoneTypeSchema,
    body: z.string().optional()
});

// Export API schema for validation
export const ApiMilestonesArraySchema = z.array(ApiMilestoneSchema);

// Schema for array of transformed milestones
export const MilestonesArraySchema = z.array(MilestoneSchema);

// Infer TypeScript types from schemas
export type Milestone = z.infer<typeof MilestoneSchema>;
export type MilestoneType = z.infer<typeof MilestoneTypeSchema>;
export type ApiMilestone = z.infer<typeof ApiMilestoneSchema>;
