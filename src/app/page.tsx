import styles from "./page.module.css";
import ProjectTimeline from "@/components/project-timeline/project-timeline";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import ProfileContent from "@/components/profile-content/profile-content";
import { mockProjectAPI } from "@/lib/api/projects/mockProjects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileSidebar>
          <ProfileContent />
        </ProfileSidebar>
        <ProjectTimeline projectAPI={mockProjectAPI} />
      </main>
    </div >
  );
}

