import type { UserAvatarTone } from "../../types/user";
import UserAvatar from "../UserAvatar/UserAvatar";
import styles from "./UserInline.module.scss";

interface UserInlineProps {
  name: string;
  avatarUrl?: string | null;
  tone?: UserAvatarTone;
  meta?: string;
  size?: "sm" | "md";
}

const UserInline = ({
  name,
  avatarUrl,
  tone,
  meta,
  size = "sm",
}: UserInlineProps) => {
  return (
    <span
      className={`${styles.user} ${size === "md" ? styles.userMd : styles.userSm}`}
    >
      <UserAvatar
        name={name}
        avatarUrl={avatarUrl}
        tone={tone}
        size={size === "md" ? "md" : "xs"}
        alt=""
      />

      <span className={styles.text}>
        <span className={styles.name}>{name}</span>
        {meta ? <span className={styles.meta}>{meta}</span> : null}
      </span>
    </span>
  );
};

export default UserInline;
