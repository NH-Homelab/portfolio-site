import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

import { Project } from "@/lib/types/projects";

type ProjectCardProps = Pick<Project, 'title' | 'description' | 'imageUrl'>;

export default function ProjectCard({title, description, imageUrl}: ProjectCardProps) {
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
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Random test image"
        sx={{
          width: 140,
          height: 140,
          objectFit: "cover",
          borderRadius: 2,
          m: 1,
        }}
      />
      <CardContent sx={{ flex: 1, display: "flex", alignItems: "center", width: 400}}>
        <Stack spacing={1}>
          <Typography variant="h6" noWrap>
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
        </Stack>
      </CardContent>
    </Card>
  );
}
