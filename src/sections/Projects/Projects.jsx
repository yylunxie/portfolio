import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://shorturl.at/4FRcs"
          name="Automatically Chicken Monitor System"
          info=""
        />
        <ProjectCard
          src={freshBurger}
          link="https://shorturl.at/GzFkS"
          name="Vacuum Robot"
          info=""
        />
        <ProjectCard
          src={freshBurger}
          link="https://shorturl.at/bMAzO"
          name="Pineapple Growth Stage Identification"
          info=""
        />
      </div>
    </section>
  );
}

export default Projects;
