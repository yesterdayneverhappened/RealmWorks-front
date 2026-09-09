import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import UploadIcon from "../icons/UploadIcon";
import styles from "../UploadBuild/UploadBuild.module.scss";

const PhotosUploadCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>{uploadBuildLabels.mediaTitle}</h2>
        <p className={styles.sectionDescription}>
          {uploadBuildLabels.mediaDescription}
        </p>
      </div>

      <label className={styles.dropzone}>
        <UploadIcon />
        <span className={styles.dropzoneTitle}>
          {uploadBuildLabels.uploadPhotos}
        </span>
        <span className={styles.dropzoneHint}>
          {uploadBuildLabels.coverHint}
        </span>
        <input className={styles.fileInput} type="file" multiple />
      </label>
    </section>
  );
};

export default PhotosUploadCard;
