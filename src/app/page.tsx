"use client";

import styles from "./page.module.css";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import ProfileContent from "@/components/profile-content/profile-content";
import { Box, Grid, useTheme } from "@mui/material";
import MilestoneTimeline from "@/components/milestone-timeline/milestone-timeline";
import { staticMilestoneAPI } from "@/lib/api/milestones/staticMilestones";

export default function Home() {
  const theme = useTheme();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: "auto" }}>
            <ProfileSidebar>
              <ProfileContent />
            </ProfileSidebar>
          </Grid>
          <Grid size={{ xs: 12, md: "grow" }} sx={{ overflowY: { xs: "hidden", sm: "scroll" }, height: { xs: "auto", sm: "100vh" } }}>
            <MilestoneTimeline milestoneAPI={staticMilestoneAPI} theme={theme} />
          </Grid>
        </Grid>
      </main>
    </div >
  );
}

