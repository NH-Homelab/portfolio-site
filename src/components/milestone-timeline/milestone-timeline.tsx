import { MilestoneAPI, Milestone } from "@/lib/types/milestone";
import { Typography, Chip, Box } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import MilestoneCard from "../milestone-card/milestone-card";

interface MilestoneTimelineProps {
    milestoneAPI: MilestoneAPI;
}

export default async function MilestoneTimeline({ milestoneAPI }: MilestoneTimelineProps) {
    const milestones = await milestoneAPI.getMilestones();

    // Sort milestones by date (most recent first)
    const sortedMilestones = [...milestones].sort((a, b) =>
        b.date.getTime() - a.date.getTime()
    );

    // Format date for display
    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getMilestoneIcon = (milestone: Milestone) => {
        switch (milestone.type.type) {
            case "certificate":
                return "🎓";
            case "project":
                return "💼";
            case "milestone":
            default:
                return "🎯";
        }
    };

    return (
        <Timeline
            position="right"
            sx={{
                flexGrow: 0,
                "& .MuiTimelineItem-root": {
                    minHeight: "auto",
                    "&::before": { display: "none" },
                    width: "fit-content",
                },
            }}
        >
            {sortedMilestones.map((milestone: Milestone, index: number) => (
                <TimelineItem key={`${milestone.title}-${index}`}>
                    <TimelineOppositeContent
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flex: "0 0 auto",
                            p: 0,
                            mr: 2,
                            width: { xs: 80, sm: 100 },
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            {formatDate(milestone.date)}@
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                        sx={{
                            alignSelf: "stretch",
                            justifyContent: "center",
                        }}
                    >
                        <TimelineConnector
                            sx={{
                                flex: 1,
                                visibility: index === 0 ? "hidden" : "visible",
                            }}
                        />
                        <TimelineDot sx={{ fontSize: "1.2rem" }}>
                            {getMilestoneIcon(milestone)}
                        </TimelineDot>
                        <TimelineConnector
                            sx={{
                                flex: 1,
                                visibility:
                                    index === sortedMilestones.length - 1 ? "hidden" : "visible",
                            }}
                        />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{
                            py: 4,
                            display: "flex",
                            justifyContent: "flex-start",
                            flex: 1,
                        }}
                    >
                        <MilestoneCard {...milestone} />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
