"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import ProfileContent from "@/components/profile-content/profile-content";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import MilestoneTimeline from "@/components/milestone-timeline/milestone-timeline";
import { staticMilestoneAPI } from "@/lib/api/milestones/staticMilestones";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Lock in viewport height at page mount to prevent mobile jumping
  useEffect(() => {
    if (isMobile) {
      const setLockedVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--locked-vh', `${vh}px`);
      };

      setLockedVH();
      // Only set it once on mount for mobile
    }
  }, [isMobile]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Grid container columnSpacing={8} sx={{
          height: {
            xs: "calc(var(--locked-vh, 1vh) * 100)",
            sm: "100vh"
          }
        }}>
          <Grid size={{ xs: 12, md: "auto" }} sx={{ height: "100%" }}>
            <ProfileSidebar>
              <ProfileContent />
            </ProfileSidebar>
          </Grid>
          <Grid size={{ xs: 12, md: "grow" }} sx={{ height: "100%", overflowY: { xs: "visible", sm: "scroll" } }}>
            <MilestoneTimeline milestoneAPI={staticMilestoneAPI} theme={theme} />
          </Grid>
        </Grid>
      </main>
    </div >
  );
}

