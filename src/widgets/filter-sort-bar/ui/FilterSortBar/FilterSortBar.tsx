import { SearchInput } from "@/shared/ui/SearchInput";
import { filterSortBarLabels } from "../../constants/filterSortBarLabels";
import CategoryChips from "../CategoryChips/CategoryChips";
import styles from "./FilterSortBar.module.scss";

const FilterSortBar = () => {
  return (
    <section className={styles.bar} aria-label={filterSortBarLabels.ariaLabel}>
      <div className={styles.topRow}>
        <SearchInput
          className={styles.searchBox}
          aria-label={filterSortBarLabels.searchAriaLabel}
          placeholder={filterSortBarLabels.searchPlaceholder}
        />

        <div className={styles.sortGroup}>
          <span className={styles.sortLabel}>{filterSortBarLabels.sortBy}</span>
          {filterSortBarLabels.sortOptions.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`${styles.sortPill} ${
                index === 0 ? styles.sortPillActive : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <CategoryChips categories={filterSortBarLabels.categories} />
    </section>
  );
};

export default FilterSortBar;
