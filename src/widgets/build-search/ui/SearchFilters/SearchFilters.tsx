import {
  buildSearchLabels,
  type SizeId,
  type ToggleId,
  type VersionId,
} from "../../constants/buildSearchLabels";
import styles from "../BuildSearch/BuildSearch.module.scss";

export interface CategoryOption {
  name: string;
  count: number;
}

interface SearchFiltersProps {
  categories: CategoryOption[];
  tags: string[];
  selectedCategories: string[];
  selectedTags: string[];
  size: SizeId;
  version: VersionId;
  toggles: Record<ToggleId, boolean>;
  onToggleCategory: (category: string) => void;
  onToggleTag: (tag: string) => void;
  onSizeChange: (size: SizeId) => void;
  onVersionChange: (version: VersionId) => void;
  onToggleOption: (option: ToggleId) => void;
  onReset: () => void;
}

const SearchFilters = ({
  categories,
  tags,
  selectedCategories,
  selectedTags,
  size,
  version,
  toggles,
  onToggleCategory,
  onToggleTag,
  onSizeChange,
  onVersionChange,
  onToggleOption,
  onReset,
}: SearchFiltersProps) => {
  return (
    <section
      className={styles.filtersCard}
      aria-label={buildSearchLabels.filtersAriaLabel}
    >
      <div className={styles.filtersHeader}>
        <h2 className={styles.filtersTitle}>
          {buildSearchLabels.filtersTitle}
        </h2>
        <button className={styles.resetButton} type="button" onClick={onReset}>
          {buildSearchLabels.resetFilters}
        </button>
      </div>

      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>
          {buildSearchLabels.categoriesTitle}
        </legend>

        <div className={styles.checkList}>
          {categories.map((category) => (
            <label key={category.name} className={styles.check}>
              <input
                type="checkbox"
                className={styles.checkInput}
                checked={selectedCategories.includes(category.name)}
                onChange={() => onToggleCategory(category.name)}
              />
              <span className={styles.checkLabel}>{category.name}</span>
              <span className={styles.checkCount}>{category.count}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>
          {buildSearchLabels.tagsTitle}
        </legend>

        <div className={styles.tagChips}>
          {tags.map((tag) => {
            const isActive = selectedTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                className={`${styles.tagChip} ${isActive ? styles.tagChipActive : ""}`}
                onClick={() => onToggleTag(tag)}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>
          {buildSearchLabels.sizeTitle}
        </legend>

        <div className={styles.checkList}>
          {buildSearchLabels.sizeOptions.map((option) => (
            <label key={option.id} className={styles.check}>
              <input
                type="radio"
                name="footprint"
                className={styles.checkInput}
                checked={size === option.id}
                onChange={() => onSizeChange(option.id)}
              />
              <span className={styles.checkLabel}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>
          {buildSearchLabels.versionTitle}
        </legend>

        <div className={styles.checkList}>
          {buildSearchLabels.versionOptions.map((option) => (
            <label key={option.id} className={styles.check}>
              <input
                type="radio"
                name="version"
                className={styles.checkInput}
                checked={version === option.id}
                onChange={() => onVersionChange(option.id)}
              />
              <span className={styles.checkLabel}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.groupTitle}>
          {buildSearchLabels.optionsTitle}
        </legend>

        <div className={styles.checkList}>
          {buildSearchLabels.toggleOptions.map((option) => (
            <label key={option.id} className={styles.check}>
              <input
                type="checkbox"
                className={styles.checkInput}
                checked={toggles[option.id]}
                onChange={() => onToggleOption(option.id)}
              />
              <span className={styles.checkLabel}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </section>
  );
};

export default SearchFilters;
