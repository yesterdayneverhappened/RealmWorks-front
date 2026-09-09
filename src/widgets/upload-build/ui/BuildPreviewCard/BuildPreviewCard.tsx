import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import styles from "../UploadBuild/UploadBuild.module.scss";

interface BuildPreviewCardProps {
  selectedCategory: string;
}

const BuildPreviewCard = ({ selectedCategory }: BuildPreviewCardProps) => {
  return (
    <section className={styles.previewCard}>
      <div className={styles.previewHeader}>
        <h2 className={styles.previewTitle}>
          {uploadBuildLabels.previewTitle}
        </h2>
        <span>{uploadBuildLabels.draftStatus}</span>
      </div>
      <div className={styles.previewImage}>
        <span>{selectedCategory}</span>
      </div>
      <div className={styles.previewBody}>
        <span className={styles.previewCategory}>{selectedCategory}</span>
        <h2 className={styles.previewName}>
          {uploadBuildLabels.preview.title}
        </h2>
        <div className={styles.previewAuthor}>
          <span className={styles.previewAvatar} />
          {uploadBuildLabels.preview.author}
        </div>
        <div className={styles.previewStats}>
          <span>{uploadBuildLabels.preview.downloads} downloads</span>
          <span>{uploadBuildLabels.preview.comments} comments</span>
          <span>{uploadBuildLabels.preview.likes} likes</span>
        </div>
      </div>
    </section>
  );
};

export default BuildPreviewCard;
