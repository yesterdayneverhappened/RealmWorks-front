export type CategoryTone =
  | "violet"
  | "emerald"
  | "amber"
  | "ocean"
  | "sakura"
  | "stone";

interface CategoryCardContent {
  name: string;
  description: string;
  tone: CategoryTone;
}

export const categoriesExploreLabels = {
  eyebrow: "Explore",
  title: "Browse builds by category",
  description:
    "Every category collects builds with the same vibe: schematics, block palettes and interiors included. Pick a lane or jump straight into advanced search.",
  advancedSearch: "Open advanced search",
  stats: [
    { id: "builds", label: "Builds" },
    { id: "creators", label: "Creators" },
    { id: "downloads", label: "Downloads" },
  ],
  categoriesTitle: "All categories",
  categoriesAriaLabel: "Build categories",
  buildsSuffix: "builds",
  viewLabel: "View builds",
  trendingTitle: "Trending tags",
  creatorsTitle: "Featured creators",
  followLabel: "+ Follow",
  categories: [
    {
      name: "Castles",
      description:
        "Keeps, fortresses and floating palaces with fully detailed interiors.",
      tone: "violet",
    },
    {
      name: "Redstone",
      description:
        "Farms, contraptions and automation you can copy block by block.",
      tone: "amber",
    },
    {
      name: "Survival",
      description:
        "Starter bases and storage halls built without a single creative block.",
      tone: "emerald",
    },
    {
      name: "Sci-Fi",
      description: "Neon districts, research labs and orbital stations.",
      tone: "ocean",
    },
    {
      name: "Organic",
      description:
        "Terrain, gardens and tree-heavy builds that follow the landscape.",
      tone: "sakura",
    },
    {
      name: "Pixel Art",
      description: "Mosaics, portraits and sprite walls with tuned palettes.",
      tone: "violet",
    },
    {
      name: "Medieval",
      description: "Villages, keeps and barracks in classic oak and stone.",
      tone: "stone",
    },
    {
      name: "Modern",
      description: "Glass villas, minimal interiors and clean geometry.",
      tone: "ocean",
    },
  ] satisfies CategoryCardContent[],
};
