import type { ReactNode } from "react";
import type { UserProfile } from "../../types/user";
import UserAvatar from "../UserAvatar/UserAvatar";
import styles from "./UserProfileHeader.module.scss";

interface UserProfileHeaderProps {
  user: UserProfile;
  actions?: ReactNode;
}

const UserProfileHeader = ({ user, actions }: UserProfileHeaderProps) => {
  return (
    <section className={styles.hero} aria-label={user.name}>
      <UserAvatar
        name={user.name}
        avatarUrl={user.avatarUrl}
        tone={user.avatarTone}
        size="xl"
        border="accent"
      />

      <div className={styles.info}>
        <div className={styles.topRow}>
          <div className={styles.identity}>
            <h1 className={styles.name}>{user.name}</h1>
            <span className={styles.handle}>{user.handle}</span>
          </div>

          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>

        <p className={styles.bio}>{user.bio}</p>

        <div className={styles.stats}>
          {user.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserProfileHeader;
