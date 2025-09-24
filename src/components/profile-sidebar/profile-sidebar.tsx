"use client";

import { useState, useEffect } from "react";
import {
    Drawer,
    Box,
    Typography,
    styled,
    CSSObject,
    Theme,
    IconButton,
    Tooltip,
    Stack,
    Paper,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const collapsedWidth = 56;

const StyledSidebar = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
    width: open ? "max(30vw, 300px)" : `${collapsedWidth}px`,
    overflow: "hidden",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down('sm')]: {
        width: "100%",
        overflow: "visible",
    },
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    border: "none",
    borderRadius: 0
}));


export default function ProfileSidebar({ children }: { children?: React.ReactNode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(true);
    const [transitionComplete, setTransitionComplete] = useState(true);

    const email = "Nicholas.Henley@proton.me";
    const [copied, setCopied] = useState(false);

    // Always keep sidebar open on mobile
    useEffect(() => {
        if (isMobile) {
            setOpen(true);
        }
    }, [isMobile]);

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
        <StyledSidebar open={open}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: open ? "flex-end" : "center", p: 1 }}>
                <IconButton sx={{ color: "text.secondary" }} onClick={handleToggle}>
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            <Box sx={{
                display: "flex",
                p: 2,
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                width: { xs: "100%", sm: "max(30vw, 300px)" },
                minWidth: { xs: "100%", sm: "300px" },
                height: "100%",
                opacity: open ? 1 : 0,
                transition: (theme) => theme.transitions.create("opacity", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.standard,
                })
            }}>
                {children}
            </Box>
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
        </StyledSidebar>
    );
}
