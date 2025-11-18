"use client";

import { useState } from "react";
import { Typography, Box, Avatar, Paper, IconButton, Tooltip } from "@mui/material";

export default function ProfileContent() {

    return (
        <>
            <Box sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                gap: 4,
                color: "text.secondary",
            }}>
                <Paper
                    elevation={10}
                    sx={{
                        borderRadius: "50%",
                    }}
                >
                    <Avatar
                        alt="Your Name"
                        src="/headshot.jpg"
                        sx={{
                            width: { xs: 125, sm: 150, xl: 200 },
                            height: { xs: 125, sm: 150, xl: 200 },
                            "& img": {
                                objectFit: "cover",
                                objectPosition: "50% 10%", // shift upward
                            },
                        }}
                    />
                </Paper>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, width: "100%" }}>
                    <Typography variant="h3" component="h1">
                        Nick Henley
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
                        Software Engineer | Arvada, CO
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{ fontStyle: "bold", px: 2, lineHeight: 1.5 }}>
                    I'm looking for work! Feel free to reach out on Linkedin or by email. I recently graduated from the University of Colorado Boulder and love building things—from full-stack apps to running my own homelab with containers and VMs. I've been learning Kubernetes and GitHub workflows for automatic deployment, and I'm interested in cybersecurity, AI, and embedded systems. In college, I helped create apps and websites for nonprofits through Blueprint Boulder. Outside of tech, I enjoy hiking, reading, and gaming.
                </Typography>
            </Box>
        </>
    );
}
