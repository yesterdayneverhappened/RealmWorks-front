import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import styles from "../UploadBuild/UploadBuild.module.scss";

const UploadFormActions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.saveButton} type="button">
        {uploadBuildLabels.saveDraft}
      </button>
      <button className={styles.publishButton} type="submit">
        {uploadBuildLabels.publish}
      </button>
    </div>
  );
};

export default UploadFormActions;
