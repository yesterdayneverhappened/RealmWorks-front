import { mockBuilds } from "@/entities/builds/constants/mockBuilds";
import BuildCard from "@/entities/builds/ui/BuildCard/BuildCard";
import { currentUser } from "@/entities/users/constants/mockUsers";
import UserAvatar from "@/entities/users/ui/UserAvatar/UserAvatar";
import UserInline from "@/entities/users/ui/UserInline/UserInline";
import { buildDetailsLabels } from "../../constants/buildDetailsLabels";
import styles from "./BuildDetails.module.scss";

const relatedBuilds = mockBuilds.slice(0, 4);

const HeartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.084 4.256C1.664 4.867 1.439 5.591 1.439 6.333C1.439 7.866 2.439 8.999 3.439 9.999L7.111 13.553C7.237 13.694 7.392 13.807 7.565 13.884C7.738 13.961 7.925 14 8.114 13.999C8.303 13.998 8.49 13.957 8.662 13.878C8.834 13.799 8.987 13.684 9.111 13.541L12.772 9.999C13.772 8.999 14.772 7.859 14.772 6.333C14.776 5.59 14.553 4.863 14.133 4.25C13.713 3.636 13.116 3.165 12.421 2.899C11.727 2.633 10.968 2.584 10.245 2.76C9.523 2.936 8.871 3.328 8.376 3.883C8.342 3.92 8.3 3.95 8.253 3.97C8.206 3.991 8.156 4.001 8.105 4.001C8.054 4.001 8.003 3.991 7.957 3.97C7.91 3.95 7.868 3.92 7.833 3.883C7.337 3.331 6.685 2.942 5.964 2.768C5.243 2.594 4.486 2.644 3.793 2.909C3.1 3.175 2.504 3.645 2.084 4.256Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 2V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.667 6.667L8 10L11.333 6.667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.667 12.667H13.333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseCircleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 6.75L6.75 11.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 6.75L11.25 11.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4.333 8H11.667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.667 5L11.667 8L8.667 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildDetails = () => {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section
          className={styles.gallery}
          aria-label={buildDetailsLabels.galleryAriaLabel}
        >
          <div className={`${styles.photo} ${styles.mainPhoto}`} />
          <div className={`${styles.photo} ${styles.sidePhoto}`} />
          <div className={`${styles.photo} ${styles.sidePhoto}`} />
        </section>

        <aside className={styles.getBuildCard}>
          <h2 className={styles.getBuildTitle}>
            {buildDetailsLabels.getBuildTitle}
          </h2>

          <div className={styles.statsCard}>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>
                <span className={`${styles.statIcon} ${styles.likesIcon}`}>
                  <HeartIcon />
                </span>
                {buildDetailsLabels.likesLabel}
              </span>
              <span className={styles.statValue}>
                {buildDetailsLabels.likesValue}
              </span>
            </div>

            <div className={styles.statRow}>
              <span className={styles.statLabel}>
                <span className={`${styles.statIcon} ${styles.downloadsIcon}`}>
                  <DownloadIcon />
                </span>
                {buildDetailsLabels.downloadsLabel}
              </span>
              <span className={styles.statValue}>
                {buildDetailsLabels.downloadsValue}
              </span>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.downloadButton} type="button">
              <CloseCircleIcon />
              {buildDetailsLabels.downloadSchematic}
            </button>
            <button className={styles.favoriteButton} type="button">
              <HeartIcon />
              {buildDetailsLabels.addToFavorites}
            </button>
          </div>
        </aside>

        <div className={styles.contentBlocks}>
          <section className={styles.authorCard}>
            <span className={styles.category}>
              {buildDetailsLabels.category}
            </span>
            <h1 className={styles.title}>{buildDetailsLabels.title}</h1>

            <div className={styles.authorRow}>
              <UserInline
                name={buildDetailsLabels.author}
                meta={buildDetailsLabels.publishedAt}
                tone="gold"
                size="md"
              />

              <button className={styles.followButton} type="button">
                {buildDetailsLabels.followCreator}
              </button>
            </div>
          </section>

          <section className={styles.visualizerCard}>
            <h2 className={styles.sectionTitle}>
              {buildDetailsLabels.visualizerTitle}
            </h2>
            <div className={styles.visualizerPlaceholder}>
              {buildDetailsLabels.visualizerPlaceholder}
            </div>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.sectionTitle}>
              {buildDetailsLabels.aboutTitle}
            </h2>
            <p className={styles.description}>
              {buildDetailsLabels.description}
            </p>
            <div className={styles.tags}>
              {buildDetailsLabels.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <section className={styles.commentsCard}>
            <h2 className={styles.sectionTitle}>
              {buildDetailsLabels.commentsTitle}
            </h2>

            <div className={styles.commentComposer}>
              <UserAvatar
                name={currentUser.name}
                avatarUrl={currentUser.avatarUrl}
                tone={currentUser.avatarTone}
                alt=""
              />
              <div className={styles.commentInput}>
                <input
                  className={styles.commentField}
                  type="text"
                  placeholder={buildDetailsLabels.commentInputPlaceholder}
                  aria-label={buildDetailsLabels.commentComposerAriaLabel}
                />
                <button
                  className={styles.commentSendButton}
                  type="button"
                  aria-label={buildDetailsLabels.commentSubmitAriaLabel}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            <div className={styles.commentsList}>
              {buildDetailsLabels.comments.map((comment) => (
                <article key={comment.author} className={styles.comment}>
                  <UserAvatar
                    name={comment.author}
                    tone={comment.avatarTone}
                    alt=""
                  />
                  <div className={styles.commentContent}>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentAuthor}>
                        {comment.author}
                      </span>
                      <span className={styles.commentDate}>
                        {comment.createdAt}
                      </span>
                    </div>
                    <p className={styles.commentText}>{comment.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>
            {buildDetailsLabels.relatedTitle}
          </h2>
          <div className={styles.relatedGrid}>
            {relatedBuilds.map((build) => (
              <BuildCard key={build.id} build={build} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BuildDetails;
