"use client";

import { type KeyboardEvent, useState } from "react";
import BuildCard from "@/entities/builds/ui/BuildCard/BuildCard";
import {
  type ProfileTabId,
  profileLabels,
} from "../../constants/profileLabels";
import styles from "./Profile.module.scss";

const buildsByTab = {
  my: profileLabels.myBuilds,
  liked: profileLabels.likedBuilds,
  collections: profileLabels.collections,
} as const;

const emptyByTab = {
  my: null,
  liked: profileLabels.emptyLiked,
  collections: profileLabels.emptyCollections,
} as const;

const tabIds = profileLabels.tabs.map((tab) => tab.id);

const Profile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabId>("my");
  const builds = buildsByTab[activeTab];
  const emptyMessage = emptyByTab[activeTab];

  const handleTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabIds.indexOf(activeTab);
    const lastIndex = tabIds.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabIds[nextIndex];

    if (!nextTab) {
      return;
    }

    setActiveTab(nextTab);
    document.getElementById(`profile-tab-${nextTab}`)?.focus();
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label={profileLabels.name}>
        <div
          className={styles.avatar}
          role="img"
          aria-label={profileLabels.avatarAriaLabel}
        />

        <div className={styles.info}>
          <div className={styles.topRow}>
            <div className={styles.identity}>
              <h1 className={styles.name}>{profileLabels.name}</h1>
              <span className={styles.handle}>{profileLabels.handle}</span>
            </div>

            <div className={styles.actions}>
              <button className={styles.editButton} type="button">
                {profileLabels.editProfile}
              </button>
              <button className={styles.shareButton} type="button">
                {profileLabels.shareProfile}
              </button>
            </div>
          </div>

          <p className={styles.bio}>{profileLabels.bio}</p>

          <div className={styles.stats}>
            {profileLabels.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label={profileLabels.tabsAriaLabel}
        onKeyDown={handleTabsKeyDown}
      >
        {profileLabels.tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`profile-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`profile-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <section
        className={styles.panel}
        role="tabpanel"
        id={`profile-panel-${activeTab}`}
        aria-labelledby={`profile-tab-${activeTab}`}
      >
        {builds.length > 0 ? (
          <div className={styles.buildsGrid}>
            {builds.map((build) => (
              <BuildCard
                key={build.id}
                id={build.id}
                title={build.title}
                author={build.author}
                imageUrl={build.imageUrl}
                avatarUrl={build.avatarUrl}
                category={build.category}
                tags={build.tags}
                likes={build.likes}
                countComments={build.countComments}
                countDownloads={build.countDownloads}
                isLiked={build.isLiked}
              />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>{emptyMessage}</p>
        )}
      </section>
    </main>
  );
};

export default Profile;
