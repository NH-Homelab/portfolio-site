"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#233950"
    },
    secondary: {
      main: "#7E91A5",
      light: "#B4C1CF",
      dark: "#49617A"
    },
    text: {
      primary: "#121212",
      secondary: "#fff",
    }
  },
  typography: {
    body1: {
      fontSize: "1rem",
      "@media (max-width:480px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "0.875rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "0.95rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "1.1rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:480px)": {
        fontSize: "0.7rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "0.75rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "0.875rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "0.95rem",
      },
    },
    h1: {
      fontSize: "2.5rem",
      "@media (max-width:480px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "2rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "2.2rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "2rem",
      "@media (max-width:480px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "1.65rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      "@media (max-width:480px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "1.55rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "2rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
      "@media (max-width:480px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:481px) and (max-width:768px)": {
        fontSize: "0.85rem",
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:1025px) and (max-width:1440px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1441px)": {
        fontSize: "1.1rem",
      },
    }
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nick Henley</title>
        <meta
          name="description"
          content="Nick Henley - Software Dev in Broomfield Colorado"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
