import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import styles from "../UploadBuild/UploadBuild.module.scss";

const PublishChecklist = () => {
  return (
    <section className={styles.checklistCard}>
      <h2 className={styles.sectionTitle}>
        {uploadBuildLabels.publishChecklistTitle}
      </h2>
      <ul className={styles.checklist}>
        {uploadBuildLabels.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default PublishChecklist;
