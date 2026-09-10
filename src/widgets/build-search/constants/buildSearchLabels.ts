export type SortId = "newest" | "likes" | "downloads";
export type SizeId = "any" | "small" | "medium" | "large";
export type VersionId = "any" | "1.21" | "1.20" | "1.16" | "bedrock";
export type ToggleId = "survivalFriendly" | "noRedstone" | "hasSchematic";

interface FilterOption<T extends string> {
  id: T;
  label: string;
}

export const buildSearchLabels = {
  eyebrow: "Search",
  title: "Find your next build",
  description:
    "Filter by category, tags, footprint and version compatibility. Everything below runs on mock data for now.",
  searchPlaceholder: "Search builds, creators, or tags...",
  searchAriaLabel: "Search builds",
  filtersTitle: "Filters",
  filtersAriaLabel: "Build filters",
  resetFilters: "Reset all",
  removeFilterHint: "Remove",
  categoriesTitle: "Categories",
  tagsTitle: "Tags",
  sizeTitle: "Footprint",
  versionTitle: "Version",
  optionsTitle: "Options",
  sortLabel: "Sort by:",
  resultsSuffix: "builds found",
  resultsAriaLabel: "Search results",
  emptyTitle: "Nothing matches these filters",
  emptyDescription:
    "Remove a filter or clear the search query to see more builds.",
  creatorsTitle: "Top creators",
  sortOptions: [
    { id: "newest", label: "Newest" },
    { id: "likes", label: "Most Liked" },
    { id: "downloads", label: "Most Downloaded" },
  ] satisfies FilterOption<SortId>[],
  sizeOptions: [
    { id: "any", label: "Any footprint" },
    { id: "small", label: "Up to 16×16" },
    { id: "medium", label: "17×17 – 32×32" },
    { id: "large", label: "Bigger than 32×32" },
  ] satisfies FilterOption<SizeId>[],
  versionOptions: [
    { id: "any", label: "Any version" },
    { id: "1.21", label: "1.21.x" },
    { id: "1.20", label: "1.20.x" },
    { id: "1.16", label: "1.16.5" },
    { id: "bedrock", label: "Bedrock ready" },
  ] satisfies FilterOption<VersionId>[],
  toggleOptions: [
    { id: "survivalFriendly", label: "Survival-friendly blocks only" },
    { id: "noRedstone", label: "No redstone" },
    { id: "hasSchematic", label: "Schematic file attached" },
  ] satisfies FilterOption<ToggleId>[],
};
