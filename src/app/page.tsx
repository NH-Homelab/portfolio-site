import styles from "./page.module.css";
import ProjectTimeline from "@/components/project-timeline/project-timeline";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileSidebar />
        <ProjectTimeline />
      </main>
    </div>
  );
}

