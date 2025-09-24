import styles from "./page.module.css";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import ProfileContent from "@/components/profile-content/profile-content";
import { Box } from "@mui/material";
import MilestoneTimeline from "@/components/milestone-timeline/milestone-timeline";
import { staticMilestoneAPI } from "@/lib/api/milestones/staticMilestones";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileSidebar>
          <ProfileContent />
        </ProfileSidebar>
        <Box sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "left",
          overflowY: "auto",
          height: "100vh",
          maxHeight: "100vh",
          mx: 6,
        }}>
          <MilestoneTimeline milestoneAPI={staticMilestoneAPI} />
        </Box>
      </main>
    </div >
  );
}

