import Link from "next/link";
import { mockBuilds } from "@/entities/builds/constants/mockBuilds";
import { mockCreators } from "@/entities/users/constants/mockUsers";
import UserCard from "@/entities/users/ui/UserCard/UserCard";
import {
  type CategoryTone,
  categoriesExploreLabels,
} from "../../constants/categoriesExploreLabels";
import styles from "./CategoriesExplore.module.scss";

const toneClass: Record<CategoryTone, string> = {
  violet: styles.tileViolet,
  emerald: styles.tileEmerald,
  amber: styles.tileAmber,
  ocean: styles.tileOcean,
  sakura: styles.tileSakura,
  stone: styles.tileStone,
};

const categories = categoriesExploreLabels.categories.map((category) => {
  const builds = mockBuilds.filter((build) => build.category === category.name);

  return {
    ...category,
    count: builds.length,
    tags: [...new Set(builds.flatMap((build) => build.tags))].slice(0, 3),
  };
});

const tagCounts = new Map<string, number>();

for (const build of mockBuilds) {
  for (const tag of build.tags) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
}

const trendingTags = [...tagCounts.entries()]
  .sort(
    ([firstTag, firstCount], [secondTag, secondCount]) =>
      secondCount - firstCount || firstTag.localeCompare(secondTag),
  )
  .slice(0, 10);

const statValues: Record<string, string> = {
  builds: String(mockBuilds.length),
  creators: String(mockCreators.length),
  downloads: mockBuilds
    .reduce((total, build) => total + build.downloads, 0)
    .toLocaleString("en-US"),
};

const CategoriesExplore = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>
          {categoriesExploreLabels.eyebrow}
        </span>
        <h1 className={styles.title}>{categoriesExploreLabels.title}</h1>
        <p className={styles.description}>
          {categoriesExploreLabels.description}
        </p>

        <Link href="/search" className={styles.heroAction}>
          {categoriesExploreLabels.advancedSearch}
        </Link>

        <div className={styles.stats}>
          {categoriesExploreLabels.stats.map((stat) => (
            <div key={stat.id} className={styles.stat}>
              <span className={styles.statValue}>{statValues[stat.id]}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.section}
        aria-label={categoriesExploreLabels.categoriesAriaLabel}
      >
        <h2 className={styles.sectionTitle}>
          {categoriesExploreLabels.categoriesTitle}
        </h2>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/search?category=${encodeURIComponent(category.name)}`}
              className={styles.categoryCard}
            >
              <span className={`${styles.tile} ${toneClass[category.tone]}`}>
                <span className={styles.tileCount}>
                  {category.count} {categoriesExploreLabels.buildsSuffix}
                </span>
              </span>

              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.categoryDescription}>
                {category.description}
              </span>

              {category.tags.length > 0 ? (
                <span className={styles.categoryTags}>
                  {category.tags.map((tag) => (
                    <span key={tag} className={styles.categoryTag}>
                      #{tag}
                    </span>
                  ))}
                </span>
              ) : null}

              <span className={styles.categoryAction}>
                {categoriesExploreLabels.viewLabel} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          {categoriesExploreLabels.trendingTitle}
        </h2>

        <div className={styles.trendingTags}>
          {trendingTags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/search?tag=${encodeURIComponent(tag)}`}
              className={styles.trendingTag}
            >
              #{tag}
              <span className={styles.trendingCount}>{count}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          {categoriesExploreLabels.creatorsTitle}
        </h2>

        <div className={styles.creatorsGrid}>
          {mockCreators.slice(0, 4).map((creator) => (
            <UserCard
              key={creator.id}
              creator={creator}
              actionLabel={categoriesExploreLabels.followLabel}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoriesExplore;
