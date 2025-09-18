import styles from "./page.module.css";
import ProjectTimeline from "@/components/project-timeline/project-timeline";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import ProfileContent from "@/components/profile-content/profile-content";
import { mockProjectAPI } from "@/lib/api/projects/mockProjects";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileSidebar>
          <ProfileContent />
        </ProfileSidebar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <ProjectTimeline projectAPI={mockProjectAPI} />
        </Box>
      </main>
    </div >
  );
}

