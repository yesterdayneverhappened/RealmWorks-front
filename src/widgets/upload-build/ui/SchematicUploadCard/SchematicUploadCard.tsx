import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import FileIcon from "../icons/FileIcon";
import styles from "../UploadBuild/UploadBuild.module.scss";

const SchematicUploadCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>
          {uploadBuildLabels.schematicTitle}
        </h2>
        <p className={styles.sectionDescription}>
          {uploadBuildLabels.schematicDescription}
        </p>
      </div>

      <label className={`${styles.dropzone} ${styles.schematicDropzone}`}>
        <FileIcon />
        <span className={styles.dropzoneTitle}>
          {uploadBuildLabels.uploadSchematic}
        </span>
        <span className={styles.dropzoneHint}>
          {uploadBuildLabels.schematicHint}
        </span>
        <input className={styles.fileInput} type="file" />
      </label>
    </section>
  );
};

export default SchematicUploadCard;
