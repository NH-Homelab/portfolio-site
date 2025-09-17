"use client";

import { useState } from "react";
import {
    Drawer,
    IconButton,
    Box,
    Typography,
    styled,
    CSSObject,
    Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const collapsedWidth = 56;

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
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
    },
}));


export default function ProfileSidebar() {
    const [open, setOpen] = useState(true);

    return (
        <StyledDrawer variant="permanent" open={open}>
            <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            {open && (
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">Your Bio</Typography>
                    <Typography variant="body2">
                        A short description about you. Background, skills, or friendly intro.
                    </Typography>
                </Box>
            )}
        </StyledDrawer>
    );
}
