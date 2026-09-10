"use client";

import { type KeyboardEvent, useState } from "react";
import { mockBuilds } from "@/entities/builds/constants/mockBuilds";
import type { BuildListItem } from "@/entities/builds/types/build-card";
import BuildCard from "@/entities/builds/ui/BuildCard/BuildCard";
import { mockUserProfile } from "@/entities/users/constants/mockUsers";
import UserProfileHeader from "@/entities/users/ui/UserProfileHeader/UserProfileHeader";
import {
  type ProfileTabId,
  profileLabels,
} from "../../constants/profileLabels";
import styles from "./Profile.module.scss";

const buildsByTab: Record<ProfileTabId, BuildListItem[]> = {
  my: mockBuilds.filter((build) => build.author.id === mockUserProfile.id),
  liked: mockBuilds.filter((build) => build.isLiked),
  collections: [],
};

const emptyByTab: Record<ProfileTabId, string | null> = {
  my: null,
  liked: profileLabels.emptyLiked,
  collections: profileLabels.emptyCollections,
};

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
      <UserProfileHeader
        user={mockUserProfile}
        actions={
          <>
            <button className={styles.editButton} type="button">
              {profileLabels.editProfile}
            </button>
            <button className={styles.shareButton} type="button">
              {profileLabels.shareProfile}
            </button>
          </>
        }
      />

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
              <BuildCard key={build.id} build={build} />
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
