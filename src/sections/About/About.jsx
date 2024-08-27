import styles from "./AboutStyles.module.css";
import allenPhoto from "../../assets/allen-photo.png";
import content from "./AboutContent.json";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.aboutMeTitle}>About me</h1>
      <div className={styles.about}>
        <img src={allenPhoto} alt="allen's photo" className={styles.photo} />
        <p>{content.aboutText}</p>
      </div>
    </section>
  );
}

export default About;
