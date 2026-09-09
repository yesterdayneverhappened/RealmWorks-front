import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import styles from "../UploadBuild/UploadBuild.module.scss";

interface BuildDetailsCardProps {
  selectedCategory: string;
  selectedTags: string[];
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
}

const BuildDetailsCard = ({
  selectedCategory,
  selectedTags,
  onCategoryChange,
  onTagToggle,
}: BuildDetailsCardProps) => {
  return (
    <section className={styles.card}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>{uploadBuildLabels.formTitle}</h2>
        <p className={styles.sectionDescription}>
          {uploadBuildLabels.formDescription}
        </p>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>{uploadBuildLabels.fields.title}</span>
        <input
          className={styles.input}
          type="text"
          placeholder={uploadBuildLabels.fields.titlePlaceholder}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          {uploadBuildLabels.fields.description}
        </span>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder={uploadBuildLabels.fields.descriptionPlaceholder}
        />
      </label>

      <div className={styles.field}>
        <span className={styles.label}>
          {uploadBuildLabels.fields.category}
        </span>
        <div className={styles.categoryGrid}>
          {uploadBuildLabels.categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                className={`${styles.categoryChip} ${
                  isActive ? styles.categoryChipActive : ""
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="build-tags">
          {uploadBuildLabels.fields.tags}
        </label>
        <input
          id="build-tags"
          className={styles.input}
          type="text"
          placeholder={uploadBuildLabels.fields.tagsPlaceholder}
        />
        <div className={styles.tagSuggestions}>
          {uploadBuildLabels.suggestedTags.map((tag) => {
            const isActive = selectedTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                className={`${styles.tagChip} ${
                  isActive ? styles.tagChipActive : ""
                }`}
                onClick={() => onTagToggle(tag)}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildDetailsCard;
