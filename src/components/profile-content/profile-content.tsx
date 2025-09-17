"use client";

import { useState } from "react";
import { Typography, Box, Avatar, Paper, IconButton, Tooltip, Divider } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";


export default function ProfileContent() {
    const email = "Nicholas.Henley@proton.me";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset tooltip after 1.5s
    };

    return (
        <>
            <Box sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                gap: 6,
            }}>
                <Paper
                    elevation={7}
                    sx={{
                        borderRadius: "50%",
                    }}
                >
                    <Avatar
                        alt="Your Name"
                        src="/headshot.jpg"
                        sx={{
                            width: 200,
                            height: 200,
                            "& img": {
                                objectFit: "cover",
                                objectPosition: "50% 10%", // shift upward
                            },
                        }}
                    />
                </Paper>
                <Typography variant="h4" component="h1">
                    Nick Henley
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, width: "100%" }}>
                    <Divider sx={{ width: "60%" }} />
                    <Typography variant="body1">
                        Software Engineer | Broomfield, CO
                    </Typography>
                    <Divider sx={{ width: "60%" }} />
                </Box>

                <Typography variant="body2" sx={{ fontStyle: "italic", px: 4, lineHeight: 1.5 }}>
                    I recently graduated from the University of Colorado Boulder and love building things—from full-stack apps to running my own homelab with containers and VMs. I've been learning Kubernetes and GitHub workflows for automatic deployment, and I'm interested in cybersecurity, AI, and embedded systems. In college, I helped create apps and websites for nonprofits through Blueprint Boulder. Outside of tech, I enjoy hiking, reading, gaming, and watching TV.
                </Typography>
            </Box>
            <Box component="footer" sx={{ display: "flex", gap: 2 }}>
                <IconButton
                    component="a"
                    href="https://github.com/nh602"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon sx={{
                        fontSize: 32,
                    }} />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://linkedin.com/in/nhenley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon sx={{
                        fontSize: 32,
                    }} />
                </IconButton>
                <Tooltip title={copied ? "Copied!" : email} arrow>
                    <span>
                        <IconButton onClick={handleCopy}>
                            <EmailIcon sx={{
                                fontSize: 32,
                            }} />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </>
    );
}
