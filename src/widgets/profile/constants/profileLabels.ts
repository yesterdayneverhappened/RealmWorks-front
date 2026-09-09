export type ProfileTabId = "my" | "liked" | "collections";

export interface ProfileBuildCard {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  avatarUrl: string;
  category: string;
  tags: string[];
  likes: number;
  countComments: number;
  countDownloads: number;
  isLiked: boolean;
}

export const profileLabels = {
  name: "BuilderBlock",
  handle: "@builder_block",
  bio: "Passionate Minecraft architectural artist specializing in massive fantasy floating structures, castles, and mechanical steampunk installations. Survival-only builder. Shaders used: Complementary Reimagined.",
  editProfile: "Edit Profile",
  shareProfile: "Share Profile",
  avatarAriaLabel: "BuilderBlock avatar",
  tabsAriaLabel: "Profile builds",
  emptyLiked: "No liked builds yet",
  emptyCollections: "No saved collections yet",
  stats: [
    { value: "32", label: "Builds" },
    { value: "48.2k", label: "Total Likes" },
    { value: "189k", label: "Total Downloads" },
  ],
  tabs: [
    { id: "my" as const, label: "My Builds" },
    { id: "liked" as const, label: "Liked Builds" },
    { id: "collections" as const, label: "Saved Collections" },
  ],
  myBuilds: [
    {
      id: "profile-1",
      title: "Zephyr Cloud Castle & Gardens",
      author: "BuilderBlock",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Castles",
      tags: ["Fantasy", "Sky", "MegaBuild"],
      likes: 1240,
      countComments: 42,
      countDownloads: 4821,
      isLiked: false,
    },
    {
      id: "profile-2",
      title: "Emerald Sky Fortress",
      author: "BuilderBlock",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Castles",
      tags: ["Fantasy", "Sky"],
      likes: 312,
      countComments: 24,
      countDownloads: 118,
      isLiked: false,
    },
    {
      id: "profile-3",
      title: "Steampunk Airship Dock",
      author: "BuilderBlock",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Sci-Fi",
      tags: ["Steampunk", "Mechanical"],
      likes: 487,
      countComments: 31,
      countDownloads: 256,
      isLiked: false,
    },
    {
      id: "profile-4",
      title: "Floating Village Hub",
      author: "BuilderBlock",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Fantasy",
      tags: ["Village", "Sky"],
      likes: 267,
      countComments: 19,
      countDownloads: 104,
      isLiked: false,
    },
  ] satisfies ProfileBuildCard[],
  likedBuilds: [
    {
      id: "liked-1",
      title: "Medieval Castle",
      author: "Steve",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Medieval",
      tags: ["Castle", "Fantasy"],
      likes: 124,
      countComments: 18,
      countDownloads: 56,
      isLiked: true,
    },
    {
      id: "liked-2",
      title: "Japanese Temple",
      author: "Alex",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Japanese",
      tags: ["Temple", "Japan"],
      likes: 248,
      countComments: 32,
      countDownloads: 143,
      isLiked: true,
    },
    {
      id: "liked-3",
      title: "Cozy Cottage",
      author: "Notch",
      imageUrl: "/icons/logo-cube.svg",
      avatarUrl: "/icons/logo-cube.svg",
      category: "Nature",
      tags: ["House", "Cozy"],
      likes: 315,
      countComments: 41,
      countDownloads: 201,
      isLiked: true,
    },
  ] satisfies ProfileBuildCard[],
  collections: [] satisfies ProfileBuildCard[],
};
