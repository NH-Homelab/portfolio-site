import styles from "./page.module.css";
import ProjectTimeline from "@/components/project-timeline/project-timeline";

export default function Home() {  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProjectTimeline />
      </main>
    </div>
  );
}

