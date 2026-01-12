"use client";

import { MilestoneAPI, Milestone } from "@/lib/types/milestone";
import { Typography, Chip, Box, Theme, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import MilestoneCard from "../milestone-card/milestone-card";

import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

interface MilestoneTimelineProps {
    theme: Theme;
    milestoneAPI: MilestoneAPI;
}

export default function MilestoneTimeline({ theme, milestoneAPI }: MilestoneTimelineProps) {
    const [milestones, setMilestones] = useState<Milestone[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMilestones = async () => {
            try {
                setLoading(true);
                const fetchedMilestones = await milestoneAPI.getMilestones();
                setMilestones(fetchedMilestones);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch milestones');
            } finally {
                setLoading(false);
            }
        };

        fetchMilestones();
    }, [milestoneAPI]);

    // Sort milestones by date (most recent first)
    const sortedMilestones = [...milestones].sort((a, b) =>
        b.date.getTime() - a.date.getTime()
    );

    // Format date for display
    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: undefined,
            timeZone: 'UTC'
        });
    };

    const getMilestoneIcon = (milestone: Milestone) => {
        switch (milestone.type.type) {
            case "education":
                return <SchoolIcon color={"primary"} />;
            case "project_major":
            case "project_minor":
                return <TerminalIcon color={"primary"} />;
            case "career":
                return <BusinessCenterIcon color={"primary"} />;
            default:
                return "🎯";
        }
    };

    // Handle loading state
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    // Handle error state
    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <Typography variant="body1" color="error">
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    // Handle empty state
    if (sortedMilestones.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <Typography variant="body1" color="text.secondary">
                    No milestones found.
                </Typography>
            </Box>
        );
    }

    return (
        <Timeline
            position="right"
            sx={{
                flexGrow: 0,
                width: "100%",
                "& .MuiTimelineItem-root": {
                    minHeight: "auto",
                    "&::before": { display: "none" },
                    width: "100%",
                },
            }}
        >
            {sortedMilestones.map((milestone: Milestone, index: number) => (
                <TimelineItem key={`${milestone.title}-${index}`}>
                    <TimelineOppositeContent
                        sx={{
                            alignItems: "center",
                            justifyContent: "right",
                            display: "flex",
                            [theme.breakpoints.down('sm')]: {
                                display: "none",
                            },
                            flex: "0 0 auto",
                            p: 0,
                            mr: 2,
                            width: { xs: 80, sm: 100 },
                            overflow: "visible"
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "visible",
                                textOverflow: "ellipsis",
                                display: "block"
                            }}
                        >
                            {formatDate(milestone.date)}
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
                                bgcolor: "secondary.main",
                            }}
                        />
                        <TimelineDot variant={"outlined"} color={"secondary"} sx={{ fontSize: "1.2rem", p: 1 }}>
                            {getMilestoneIcon(milestone)}
                        </TimelineDot>
                        <TimelineConnector
                            sx={{
                                flex: 1,
                                bgcolor: "secondary.main",
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
