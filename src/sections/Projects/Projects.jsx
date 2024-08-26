import styles from "./ProjectsStyles.module.css";
import chickenMonitor from "../../assets/chicken-monitor.png";
import robotVacuum from "../../assets/robot-vacuum.png";
import pineapple from "../../assets/pineapple-identification.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chickenMonitor}
          link="https://shorturl.at/4FRcs"
          name="Automatically Chicken Monitor System"
          info=""
        />
        <ProjectCard
          src={robotVacuum}
          link="https://shorturl.at/GzFkS"
          name="Vacuum Robot"
          info=""
        />
        <ProjectCard
          src={pineapple}
          link="https://shorturl.at/bMAzO"
          name="Pineapple Growth Stage Identification"
          info=""
        />
      </div>
    </section>
  );
}

export default Projects;
