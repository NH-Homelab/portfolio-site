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


export default function ProfileSidebar({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(true);

    return (
        <StyledDrawer variant="permanent" open={open}>
            <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            {open && (
                <Box sx={{ display: "flex", p: 2, flexDirection: "column", gap: 2, alignItems: "center", widht: "100%", height: "100%" }}>
                    {children}
                </Box>
            )}
        </StyledDrawer>
    );
}
