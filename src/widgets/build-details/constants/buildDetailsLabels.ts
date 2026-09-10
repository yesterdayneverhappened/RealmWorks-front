import type { UserAvatarTone } from "@/entities/users/types/user";

interface BuildComment {
  author: string;
  createdAt: string;
  text: string;
  avatarTone: UserAvatarTone;
}

export const buildDetailsLabels = {
  category: "Castles",
  title: "Zephyr Cloud Castle & Gardens",
  author: "BuilderBlock",
  publishedAt: "Published March 12, 2026",
  followCreator: "+ Follow Creator",
  galleryAriaLabel: "Build gallery",
  visualizerTitle: "3D Visualization",
  visualizerPlaceholder: "3D preview placeholder",
  aboutTitle: "About this Build",
  description:
    "An astronomical palace floating gracefully above the cloud line. Features fully detailed interior banquet halls, a master bedroom in the central spire, auto-harvesting wheat and melon crops in the hanging gardens, and three custom-designed waterfalls cascading into the void. Completely built in Survival over the course of 3 months. Perfect as a base or spawn hub!",
  tags: ["Fantasy", "Sky", "MegaBuild", "SurvivalFriendly", "Waterfalls"],
  commentsTitle: "Comments (42)",
  commentInputPlaceholder: "Share your thoughts or ask a question...",
  commentComposerAriaLabel: "Write a comment",
  commentSubmitAriaLabel: "Send comment",
  comments: [
    {
      author: "MineCraftGuy99",
      createdAt: "2 hours ago",
      text: "Incredible attention to detail! The way the waterfalls carry over the edges looks so realistic with shaders on.",
      avatarTone: "creeper",
    },
    {
      author: "Voxel_Explorer",
      createdAt: "1 day ago",
      text: "Is this schematic compatible with Litematica? Can't wait to build this on my SMP server!",
      avatarTone: "steve",
    },
    {
      author: "SakuraLover",
      createdAt: "3 days ago",
      text: "The cherry blossom trees at the base of the palace fit the theme so perfectly. Subscribed for more of your content!",
      avatarTone: "sakura",
    },
  ] satisfies BuildComment[],
  getBuildTitle: "Get this Build",
  likesLabel: "Likes",
  likesValue: "1,240",
  downloadsLabel: "Downloads",
  downloadsValue: "4,821",
  downloadSchematic: "Download Schematic",
  addToFavorites: "Add to Favorites",
  relatedTitle: "Related Builds",
};
