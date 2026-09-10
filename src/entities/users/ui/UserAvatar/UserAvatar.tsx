import Image from "next/image";
import type { UserAvatarTone } from "../../types/user";
import styles from "./UserAvatar.module.scss";

export type UserAvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type UserAvatarBorder = "none" | "soft" | "accent";

interface UserAvatarProps {
  name: string;
  avatarUrl?: string | null;
  tone?: UserAvatarTone;
  size?: UserAvatarSize;
  border?: UserAvatarBorder;
  alt?: string;
  className?: string;
}

const sizeInPx: Record<UserAvatarSize, number> = {
  xs: 24,
  sm: 36,
  md: 40,
  lg: 44,
  xl: 120,
};

const sizeClass: Record<UserAvatarSize, string> = {
  xs: styles.sizeXs,
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  xl: styles.sizeXl,
};

const toneClass: Record<UserAvatarTone, string> = {
  neutral: styles.toneNeutral,
  gold: styles.toneGold,
  emerald: styles.toneEmerald,
  creeper: styles.toneCreeper,
  steve: styles.toneSteve,
  sakura: styles.toneSakura,
  ocean: styles.toneOcean,
};

const borderClass: Record<UserAvatarBorder, string> = {
  none: "",
  soft: styles.borderSoft,
  accent: styles.borderAccent,
};

const UserAvatar = ({
  name,
  avatarUrl,
  tone = "neutral",
  size = "sm",
  border = "none",
  alt = name,
  className = "",
}: UserAvatarProps) => {
  return (
    <span
      className={`${styles.avatar} ${sizeClass[size]} ${toneClass[tone]} ${borderClass[border]} ${className}`}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={alt}
          width={sizeInPx[size]}
          height={sizeInPx[size]}
          className={styles.image}
        />
      ) : null}
    </span>
  );
};

export default UserAvatar;
