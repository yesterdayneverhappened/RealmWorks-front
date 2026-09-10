import type { Creator } from "../../types/user";
import UserAvatar from "../UserAvatar/UserAvatar";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  creator: Creator;
  variant?: "default" | "compact";
  actionLabel?: string;
}

const UserCard = ({
  creator,
  variant = "default",
  actionLabel,
}: UserCardProps) => {
  const isCompact = variant === "compact";

  return (
    <article
      className={`${styles.card} ${isCompact ? styles.cardCompact : ""}`}
    >
      <UserAvatar
        name={creator.name}
        avatarUrl={creator.avatarUrl}
        tone={creator.avatarTone}
        size={isCompact ? "sm" : "lg"}
        border="soft"
      />

      <div className={styles.info}>
        <span className={styles.name}>{creator.name}</span>
        <span className={styles.handle}>{creator.handle}</span>

        {isCompact ? null : (
          <span className={styles.specialty}>{creator.specialty}</span>
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.stat}>
          <span className={styles.statValue}>{creator.builds}</span>
          builds
        </span>
        <span className={styles.stat}>
          <span className={styles.statValue}>{creator.likes}</span>
          likes
        </span>
      </div>

      {actionLabel ? (
        <button className={styles.action} type="button">
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
};

export default UserCard;
