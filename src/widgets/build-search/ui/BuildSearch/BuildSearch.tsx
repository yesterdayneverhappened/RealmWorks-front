"use client";

import { useState } from "react";
import { mockBuilds } from "@/entities/builds/constants/mockBuilds";
import type { BuildListItem } from "@/entities/builds/types/build-card";
import BuildCard from "@/entities/builds/ui/BuildCard/BuildCard";
import { mockCreators } from "@/entities/users/constants/mockUsers";
import UserCard from "@/entities/users/ui/UserCard/UserCard";
import { SearchInput } from "@/shared/ui/SearchInput";
import {
  buildSearchLabels,
  type SizeId,
  type SortId,
  type ToggleId,
  type VersionId,
} from "../../constants/buildSearchLabels";
import SearchFilters, {
  type CategoryOption,
} from "../SearchFilters/SearchFilters";
import styles from "./BuildSearch.module.scss";

interface ActiveFilter {
  id: string;
  label: string;
  remove: () => void;
}

const categoryOptions: CategoryOption[] = [
  ...new Set(mockBuilds.map((build) => build.category)),
]
  .sort((first, second) => first.localeCompare(second))
  .map((name) => ({
    name,
    count: mockBuilds.filter((build) => build.category === name).length,
  }));

const tagOptions = [...new Set(mockBuilds.flatMap((build) => build.tags))].sort(
  (first, second) => first.localeCompare(second),
);

const emptyToggles: Record<ToggleId, boolean> = {
  survivalFriendly: false,
  noRedstone: false,
  hasSchematic: false,
};

const matchesFootprint = (footprint: number, size: SizeId) => {
  if (size === "small") {
    return footprint <= 16;
  }

  if (size === "medium") {
    return footprint > 16 && footprint <= 32;
  }

  if (size === "large") {
    return footprint > 32;
  }

  return true;
};

const matchesVersion = (build: BuildListItem, version: VersionId) => {
  if (version === "any") {
    return true;
  }

  if (version === "bedrock") {
    return build.bedrockReady;
  }

  return build.versions.includes(version);
};

const sortBuilds = (builds: BuildListItem[], sort: SortId) => {
  const sorted = [...builds];

  if (sort === "likes") {
    return sorted.sort((first, second) => second.likes - first.likes);
  }

  if (sort === "downloads") {
    return sorted.sort((first, second) => second.downloads - first.downloads);
  }

  return sorted.sort((first, second) =>
    second.publishedAt.localeCompare(first.publishedAt),
  );
};

interface BuildSearchProps {
  initialCategory?: string;
  initialTag?: string;
}

const BuildSearch = ({ initialCategory, initialTag }: BuildSearchProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory &&
      categoryOptions.some((option) => option.name === initialCategory)
      ? [initialCategory]
      : [],
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialTag && tagOptions.includes(initialTag) ? [initialTag] : [],
  );
  const [size, setSize] = useState<SizeId>("any");
  const [version, setVersion] = useState<VersionId>("any");
  const [toggles, setToggles] =
    useState<Record<ToggleId, boolean>>(emptyToggles);
  const [sort, setSort] = useState<SortId>("newest");

  const toggleCategory = (category: string) =>
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );

  const toggleTag = (tag: string) =>
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag],
    );

  const toggleOption = (option: ToggleId) =>
    setToggles((current) => ({ ...current, [option]: !current[option] }));

  const resetFilters = () => {
    setQuery("");
    setSelectedCategories([]);
    setSelectedTags([]);
    setSize("any");
    setVersion("any");
    setToggles(emptyToggles);
  };

  const normalizedQuery = query.trim().toLowerCase();

  const results = sortBuilds(
    mockBuilds.filter((build) => {
      if (normalizedQuery) {
        const haystack = [
          build.title,
          build.author.name,
          build.category,
          ...build.tags,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(normalizedQuery)) {
          return false;
        }
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(build.category)
      ) {
        return false;
      }

      if (
        selectedTags.length > 0 &&
        !selectedTags.some((tag) => build.tags.includes(tag))
      ) {
        return false;
      }

      if (!matchesFootprint(build.footprint, size)) {
        return false;
      }

      if (!matchesVersion(build, version)) {
        return false;
      }

      if (toggles.survivalFriendly && !build.survivalFriendly) {
        return false;
      }

      if (toggles.noRedstone && build.hasRedstone) {
        return false;
      }

      if (toggles.hasSchematic && !build.hasSchematic) {
        return false;
      }

      return true;
    }),
    sort,
  );

  const activeFilters: ActiveFilter[] = [
    ...selectedCategories.map((category) => ({
      id: `category-${category}`,
      label: category,
      remove: () => toggleCategory(category),
    })),
    ...selectedTags.map((tag) => ({
      id: `tag-${tag}`,
      label: `#${tag}`,
      remove: () => toggleTag(tag),
    })),
    ...buildSearchLabels.toggleOptions
      .filter((option) => toggles[option.id])
      .map((option) => ({
        id: `option-${option.id}`,
        label: option.label,
        remove: () => toggleOption(option.id),
      })),
  ];

  if (size !== "any") {
    const option = buildSearchLabels.sizeOptions.find(
      (item) => item.id === size,
    );

    activeFilters.push({
      id: "size",
      label: option?.label ?? size,
      remove: () => setSize("any"),
    });
  }

  if (version !== "any") {
    const option = buildSearchLabels.versionOptions.find(
      (item) => item.id === version,
    );

    activeFilters.push({
      id: "version",
      label: option?.label ?? version,
      remove: () => setVersion("any"),
    });
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{buildSearchLabels.eyebrow}</span>
        <h1 className={styles.title}>{buildSearchLabels.title}</h1>
        <p className={styles.description}>{buildSearchLabels.description}</p>

        <SearchInput
          className={styles.search}
          value={query}
          placeholder={buildSearchLabels.searchPlaceholder}
          aria-label={buildSearchLabels.searchAriaLabel}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <SearchFilters
            categories={categoryOptions}
            tags={tagOptions}
            selectedCategories={selectedCategories}
            selectedTags={selectedTags}
            size={size}
            version={version}
            toggles={toggles}
            onToggleCategory={toggleCategory}
            onToggleTag={toggleTag}
            onSizeChange={setSize}
            onVersionChange={setVersion}
            onToggleOption={toggleOption}
            onReset={resetFilters}
          />

          <section className={styles.creatorsCard}>
            <h2 className={styles.creatorsTitle}>
              {buildSearchLabels.creatorsTitle}
            </h2>

            <div className={styles.creatorsList}>
              {mockCreators.slice(0, 3).map((creator) => (
                <UserCard
                  key={creator.id}
                  creator={creator}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        </aside>

        <section
          className={styles.results}
          aria-label={buildSearchLabels.resultsAriaLabel}
        >
          <div className={styles.resultsHeader}>
            <span className={styles.resultsCount}>
              <strong>{results.length}</strong>{" "}
              {buildSearchLabels.resultsSuffix}
            </span>

            <div className={styles.sort}>
              <span className={styles.sortLabel}>
                {buildSearchLabels.sortLabel}
              </span>

              {buildSearchLabels.sortOptions.map((option) => {
                const isActive = sort === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    className={`${styles.sortPill} ${isActive ? styles.sortPillActive : ""}`}
                    onClick={() => setSort(option.id)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {activeFilters.length > 0 ? (
            <div className={styles.activeFilters}>
              {activeFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={styles.activeFilter}
                  onClick={filter.remove}
                >
                  {filter.label}
                  <span aria-hidden="true">×</span>
                  <span className={styles.visuallyHidden}>
                    {buildSearchLabels.removeFilterHint}
                  </span>
                </button>
              ))}

              <button
                className={styles.resetInline}
                type="button"
                onClick={resetFilters}
              >
                {buildSearchLabels.resetFilters}
              </button>
            </div>
          ) : null}

          {results.length > 0 ? (
            <div className={styles.grid}>
              {results.map((build) => (
                <BuildCard key={build.id} build={build} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>
                {buildSearchLabels.emptyTitle}
              </p>
              <p className={styles.emptyDescription}>
                {buildSearchLabels.emptyDescription}
              </p>
              <button
                className={styles.resetButton}
                type="button"
                onClick={resetFilters}
              >
                {buildSearchLabels.resetFilters}
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default BuildSearch;
