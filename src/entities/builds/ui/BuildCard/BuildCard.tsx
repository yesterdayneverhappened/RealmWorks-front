import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "@/entities/categories/ui/CategoryBadge/CategoryBadge";
import TagsList from "@/entities/tags/ui/TagsList/TagsList";
import UserInline from "@/entities/users/ui/UserInline/UserInline";
import type { BuildListItem, BuildPreviewTone } from "../../types/build-card";
import styles from "./BuildCards.module.scss";

interface BuildCardProps {
  build: BuildListItem;
}

const previewToneClass: Record<BuildPreviewTone, string> = {
  emerald: styles.previewEmerald,
  amber: styles.previewAmber,
  ocean: styles.previewOcean,
  violet: styles.previewViolet,
  sakura: styles.previewSakura,
  stone: styles.previewStone,
};

const BuildCard = ({ build }: BuildCardProps) => {
  return (
    <Link href={`/builds/${build.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div
          className={`${styles.preview} ${previewToneClass[build.previewTone]}`}
        >
          {build.imageUrl ? (
            <Image
              src={build.imageUrl}
              alt={build.title}
              fill
              sizes="100%"
              className={styles.previewImage}
            />
          ) : (
            <span className={styles.previewLabel}>{build.category}</span>
          )}
        </div>

        <div className={styles.details}>
          <div className={styles.meta}>
            <CategoryBadge label={build.category} />

            <div className={styles.likes}>
              <Image
                src="/icons/heart.svg"
                alt="like"
                width={14}
                height={14}
                className={styles.likeIcon}
              />
              {build.likes}
            </div>
          </div>

          <div className={styles.info}>
            <h2 className={styles.title}>{build.title}</h2>

            <UserInline
              name={build.author.name}
              avatarUrl={build.author.avatarUrl}
              tone={build.author.avatarTone}
            />

            <TagsList tags={build.tags} />
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Image
                src="/icons/download.svg"
                alt="download"
                width={14}
                height={14}
                className={styles.likeIcon}
              />
              {build.downloads}
            </div>

            <div className={styles.stat}>
              <Image
                src="/icons/message-circle.svg"
                alt="comment"
                width={14}
                height={14}
                className={styles.likeIcon}
              />
              {build.comments}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BuildCard;
