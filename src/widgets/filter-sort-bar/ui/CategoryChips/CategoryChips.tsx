"use client";

import { useState } from "react";
import styles from "../FilterSortBar/FilterSortBar.module.scss";

interface CategoryChipsProps {
  categories: string[];
}

const CategoryChips = ({ categories }: CategoryChipsProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  return (
    <div className={styles.categoryChips}>
      {categories.map((category, index) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            className={`${styles.categoryChip} ${styles[`categoryChip${index}`]} ${
              isActive ? styles.categoryChipActive : ""
            }`}
            aria-pressed={isActive}
            onClick={() =>
              setActiveCategory((current) =>
                current === category ? "" : category,
              )
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;
