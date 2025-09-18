import ProjectCard from "@/components/project-card/project-card";
import { ProjectAPI, Project } from "@/lib/types/projects";

import { Typography } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

interface ProjectTimelineProps {
    projectAPI: ProjectAPI;
}

export default async function ProjectTimeline({ projectAPI }: ProjectTimelineProps) {
    const projects = await projectAPI.getProjects();

    return (
        <Timeline
            position="right"
            sx={{
                alignSelf: "center",
                flexGrow: 0,
                "& .MuiTimelineItem-root": {
                    minHeight: "auto",
                    "&::before": { display: "none" },
                    width: "fit-content",
                },
            }}
        >
            {projects.map((project: Project, index: number) => (
                <TimelineItem key={project.id}>
                    <TimelineOppositeContent
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flex: "0 0 auto",
                            p: 0,
                            mr: 2,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            {project.date}
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
                        <TimelineDot />
                        <TimelineConnector
                            sx={{
                                flex: 1,
                                visibility:
                                    index === projects.length - 1 ? "hidden" : "visible",
                            }}
                        />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{
                            py: 4,
                            display: "flex",
                            justifyContent: "flex-start",
                            width: { xs: "100%", sm: 500 },
                            flex: 0,
                        }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                        />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
