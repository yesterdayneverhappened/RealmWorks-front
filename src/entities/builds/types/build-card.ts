import type { User } from "@/entities/users/types/user";

export type BuildPreviewTone =
  | "emerald"
  | "amber"
  | "ocean"
  | "violet"
  | "sakura"
  | "stone";

export interface BuildListItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  author: User;
  previewTone: BuildPreviewTone;
  imageUrl?: string | null;
  likes: number;
  comments: number;
  downloads: number;
  isLiked: boolean;
  footprint: number;
  blocks: number;
  versions: string[];
  bedrockReady: boolean;
  hasRedstone: boolean;
  survivalFriendly: boolean;
  hasSchematic: boolean;
  publishedAt: string;
}
