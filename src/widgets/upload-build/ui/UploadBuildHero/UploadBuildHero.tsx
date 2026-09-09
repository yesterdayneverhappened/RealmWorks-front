import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import styles from "../UploadBuild/UploadBuild.module.scss";

const UploadBuildHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>{uploadBuildLabels.eyebrow}</span>
        <h1 className={styles.title}>{uploadBuildLabels.title}</h1>
        <p className={styles.description}>{uploadBuildLabels.description}</p>
      </div>
      <span className={styles.status}>{uploadBuildLabels.draftStatus}</span>
    </section>
  );
};

export default UploadBuildHero;
