import * as React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
} from "@mui/material";

import { Milestone } from "@/lib/types/milestone";

type MilestoneCardProps = Pick<Milestone, 'title' | 'description' | 'tags' | 'type'>;

export default function MilestoneCard({ title, description, tags, type }: MilestoneCardProps) {
    return (
        <Card
            sx={{
                flex: 1,
                borderRadius: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                maxWidth: 650,
            }}
            elevation={5}
        >
            {(type.type == "project" || type.type == "certificate") && <CardMedia
                component="img"
                image={type.imgUrl}
                alt={description}
                sx={{
                    width: 140,
                    height: 140,
                    objectFit: "cover",
                    borderRadius: 2,
                    m: 1,
                }}
            />}
            <CardContent sx={{ flex: 1, display: "flex", alignItems: "center", width: 400 }}>
                <Stack spacing={1}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {description}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={0.25}
                        flexWrap="wrap"
                        sx={{ gap: 0.5 }}
                    >
                        {tags.map((tag, index) => (
                            <Typography
                                key={index}
                                variant="caption"
                                sx={{
                                    backgroundColor: "#e0e0e0",
                                    borderRadius: 1,
                                    padding: "2px 6px",
                                    fontSize: "0.75rem",
                                }}
                            >
                                {tag}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
