export type ProfileTabId = "my" | "liked" | "collections";

export const profileLabels = {
  editProfile: "Edit Profile",
  shareProfile: "Share Profile",
  tabsAriaLabel: "Profile builds",
  emptyLiked: "No liked builds yet",
  emptyCollections: "No saved collections yet",
  tabs: [
    { id: "my" as const, label: "My Builds" },
    { id: "liked" as const, label: "Liked Builds" },
    { id: "collections" as const, label: "Saved Collections" },
  ],
};
