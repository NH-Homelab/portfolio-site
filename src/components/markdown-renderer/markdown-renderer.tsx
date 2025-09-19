"use client";

import { Typography } from "@mui/material";
import { MuiMarkdown, defaultOverrides } from "mui-markdown";
import { useState, useEffect } from "react";

type MarkdownRendererProps = {
    url: string;
};

export default function MarkdownRenderer({ url }: MarkdownRendererProps) {
    const [md, setMd] = useState("");

    useEffect(() => {
        if (url && url != "") {
            fetch(url)
                .then((r) => r.text())
                .then((text) => setMd(text))
                .catch((err) => console.error("failed to load md:", err));
        }
    }, [url]);


    return (
        <MuiMarkdown
            overrides={{
                ...defaultOverrides,
                h1: {
                    component: Typography,
                    props: { variant: "h4", gutterBottom: true },
                },
                h2: {
                    component: Typography,
                    props: { variant: "h5", gutterBottom: true },
                },
                h3: {
                    component: Typography,
                    props: { variant: "h6", gutterBottom: true },
                },
                p: {
                    component: Typography,
                    props: { variant: "body1", paragraph: true },
                },
                ul: {
                    component: "ul",
                    props: { style: { paddingLeft: "1.5rem", marginTop: 0, marginBottom: "0.5rem", listStyleType: "disc" } },
                },
                ol: {
                    component: "ol",
                    props: { style: { paddingLeft: "1.5rem", marginTop: 0, marginBottom: "0.5rem", listStyleType: "decimal" } },
                },
                li: {
                    component: Typography,
                    props: {
                        variant: "body2",
                        component: "li",
                        sx: { mb: 0.5 }  // just spacing, no listStyleType here
                    },
                },
                strong: {
                    component: Typography,
                    props: { component: "strong", fontWeight: "bold" },
                },
            }}
        >
            {md}
        </MuiMarkdown>
    )
}
