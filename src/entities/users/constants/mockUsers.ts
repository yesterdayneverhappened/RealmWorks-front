import type { Creator, User, UserProfile } from "../types/user";

export const mockCreators: Creator[] = [
  {
    id: "user-1",
    name: "BuilderBlock",
    handle: "@builder_block",
    specialty: "Fantasy megabuilds",
    builds: 32,
    likes: "48.2k",
    avatarTone: "gold",
  },
  {
    id: "user-2",
    name: "RedstoneWizard",
    handle: "@redstone_wizard",
    specialty: "Farms & contraptions",
    builds: 61,
    likes: "37.9k",
    avatarTone: "creeper",
  },
  {
    id: "user-3",
    name: "SakuraLover",
    handle: "@sakura_lover",
    specialty: "Japanese architecture",
    builds: 24,
    likes: "21.4k",
    avatarTone: "sakura",
  },
  {
    id: "user-4",
    name: "Voxel_Explorer",
    handle: "@voxel_explorer",
    specialty: "Terrain & organics",
    builds: 18,
    likes: "15.7k",
    avatarTone: "ocean",
  },
  {
    id: "user-5",
    name: "MineCraftGuy99",
    handle: "@minecraft_guy99",
    specialty: "Survival starter bases",
    builds: 45,
    likes: "12.3k",
    avatarTone: "steve",
  },
  {
    id: "user-6",
    name: "PixelPainter",
    handle: "@pixel_painter",
    specialty: "Pixel art & mosaics",
    builds: 73,
    likes: "9.8k",
    avatarTone: "emerald",
  },
];

const [builderBlock] = mockCreators;

export const currentUser: User = builderBlock;

export const mockUserProfile: UserProfile = {
  ...builderBlock,
  bio: "Passionate Minecraft architectural artist specializing in massive fantasy floating structures, castles, and mechanical steampunk installations. Survival-only builder. Shaders used: Complementary Reimagined.",
  stats: [
    { value: "32", label: "Builds" },
    { value: "48.2k", label: "Total Likes" },
    { value: "189k", label: "Total Downloads" },
  ],
};
