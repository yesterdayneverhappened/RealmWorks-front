export type UserAvatarTone =
  | "neutral"
  | "gold"
  | "emerald"
  | "creeper"
  | "steve"
  | "sakura"
  | "ocean";

export interface User {
  id: string;
  name: string;
  avatarUrl?: string | null;
  avatarTone?: UserAvatarTone;
}

export interface UserStat {
  value: string;
  label: string;
}

export interface UserProfile extends User {
  handle: string;
  bio: string;
  stats: UserStat[];
}

export interface Creator extends User {
  handle: string;
  specialty: string;
  builds: number;
  likes: string;
}
