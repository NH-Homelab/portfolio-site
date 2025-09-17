import ProjectCard from "@/components/project-card/project-card";
import { mockProjectAPI } from "@/lib/api/projects/mockProjects";

import { Typography } from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from "@mui/lab";

export default async function ProjectTimeline() {
    const projects = await mockProjectAPI.getProjects();

    return (
        <Timeline position="right" sx={{ '& .MuiTimelineItem-root': { minHeight: 'auto', '&::before': { display: 'none' } }}}>
        {projects.map((project, index) => (
            <TimelineItem key={project.id}>
                <TimelineOppositeContent sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Typography variant="body2" color="text.secondary" >{project.date}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator sx={{
                    alignSelf: 'stretch', 
                    justifyContent: 'center'
                }}>
                    <TimelineConnector
                        sx={{
                            flex: 1,
                            visibility: index === 0 ? 'hidden' : 'visible',
                        }}
                    />
                    <TimelineDot />
                    <TimelineConnector 
                        sx={{
                            flex: 1,
                            visibility: index === projects.length - 1 ? 'hidden' : 'visible',
                        }}
                    />
                </TimelineSeparator>
                <TimelineContent sx={{ py: 4, display: 'flex', justifyContent: 'flex-start', width: { xs: '100%', sm: 500 }, flex: 0 }}>
                    <ProjectCard 
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                </TimelineContent>
            </TimelineItem>
        ))}
        </Timeline>
    )
}