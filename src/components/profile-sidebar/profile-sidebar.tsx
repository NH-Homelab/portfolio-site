"use client";

import { useState } from "react";
import {
    Drawer,
    Box,
    Typography,
    styled,
    CSSObject,
    Theme,
    IconButton,
    Tooltip,
    Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const collapsedWidth = 56;

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
    position: "relative",
    flexShrink: 0,
    flexBasis: "40%",
    maxWidth: open ? "40%" : `${collapsedWidth}px`,
    transition: theme.transitions.create("max-width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
    }),
    "& .MuiDrawer-paper": {
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: theme.palette.secondary.dark,
        display: "flex",
        flexDirection: "column",
    },
}));


export default function ProfileSidebar({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(true);
    const [transitionComplete, setTransitionComplete] = useState(true);

    const email = "Nicholas.Henley@proton.me";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset tooltip after 1.5s
    };

    const handleToggle = () => {
        setTransitionComplete(false);
        setOpen(!open);
        // Wait for transition to complete (standard duration is typically 300ms)
        setTimeout(() => setTransitionComplete(true), 300);
    };

    return (
        <StyledDrawer variant="permanent" open={open}>
            <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
                <IconButton sx={{ color: "text.secondary" }} onClick={handleToggle}>
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            {open && (
                <Box sx={{ display: "flex", p: 2, flexDirection: "column", gap: 2, alignItems: "center", widht: "100%", height: "100%" }}>
                    {children}
                </Box>
            )}
            <Box sx={{ marginTop: "auto", p: 2 }}>
                <Stack direction={open ? "row" : "column"} sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
                    <Tooltip title="GitHub" placement="right" arrow open={!open && transitionComplete}>
                        <IconButton
                            component="a"
                            href="https://github.com/nh602"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon sx={{
                                fontSize: 32,
                                color: "text.secondary"
                            }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement="right" arrow open={!open && transitionComplete}>
                        <IconButton
                            component="a"
                            href="https://linkedin.com/in/nhenley"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon sx={{
                                fontSize: 32,
                                color: "text.secondary"
                            }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title={copied ? "Copied!" : (open ? email : "Email")}
                        placement="right"
                        arrow
                        open={(!open && transitionComplete) || (open && copied)}
                    >
                        <span>
                            <IconButton onClick={handleCopy}>
                                <EmailIcon sx={{
                                    fontSize: 32,
                                    color: "text.secondary"
                                }} />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Stack>
            </Box>
        </StyledDrawer>
    );
}
