"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
    Collapse,
    IconButton,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Milestone } from "@/lib/types/milestone";
import MarkdownRenderer from "../markdown-renderer/markdown-renderer";

type MilestoneCardProps = Pick<
    Milestone,
    "title" | "description" | "tags" | "type" | "body"
>;

export default function MilestoneCard({
    title,
    description,
    tags,
    type,
    body,
}: MilestoneCardProps) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Card
            sx={{
                flex: 1,
                borderRadius: 2,
                transition: "height 0.3s ease-in-out",
                overflow: "hidden",
                width: "100%",
                color: "text.primary",
            }}
            elevation={5}
        >
            <Stack
                direction={"row"}
                sx={{
                    alignItems: "stretch",
                    display: "flex",
                    width: "100%",
                }}
            >
                {"imgUrl" in type && type.imgUrl != null && type.imgUrl.trim() !== "" && (
                    <CardMedia
                        component="img"
                        image={type.imgUrl}
                        alt={description}
                        sx={{
                            width: 140,
                            height: 140,
                            objectFit: "cover",
                            borderRadius: 2,
                            m: 2,
                        }}
                    />
                )}
                <CardContent
                    sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        minWidth: 0, // Allows flex item to shrink below content size
                    }}
                >
                    <Stack spacing={1} sx={{ flex: 1 }}>
                        <Typography variant="h6">{title}</Typography>
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
                                        backgroundColor: "primary.light",
                                        color: "text.secondary",
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

                    {body && body !== "" && (
                        <IconButton
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            sx={{
                                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s",
                            }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    )}
                </CardContent>
            </Stack>

            {body && body !== "" && (
                <Collapse
                    in={expanded}
                    timeout={400}
                    sx={{
                        width: "100%",
                    }}
                >
                    <div style={{
                        padding: "0 16px 16px 16px",
                        overflow: "hidden",
                        wordBreak: "break-word"
                    }}>
                        <MarkdownRenderer url={body} />
                    </div>
                </Collapse>
            )}
        </Card>
    );
}
