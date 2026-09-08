import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "@/entities/categories/ui/CategoryBadge/CategoryBadge";
import TagsList from "@/entities/tags/ui/TagsList/TagsList";
import styles from "./BuildCards.module.scss";

interface BuildCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  category: string;
  avatarUrl: string;
  tags: string[];
  likes: number;
  countComments: number;
  countDownloads: number;
  isLiked: boolean;
}

const BuildCard = ({
  id,
  title,
  imageUrl,
  author,
  category,
  avatarUrl,
  tags,
  likes,
  countComments,
  countDownloads,
}: BuildCardProps) => {
  return (
    <Link href={`/builds/${id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.preview}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="100%"
            className={styles.previewImage}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.meta}>
            <CategoryBadge label={category} />

            <div className={styles.likes}>
              <Image
                src="/icons/heart.svg"
                alt="like"
                width={14}
                height={14}
                className={styles.likeIcon}
              />
              {likes}
            </div>
          </div>

          <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.creator}>
              <Image
                src={avatarUrl}
                alt={author}
                width={24}
                height={24}
                className={styles.avatar}
              />

              <span className={styles.author}>{author}</span>
            </div>

            <TagsList tags={tags} />
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
              {countDownloads}
            </div>

            <div className={styles.stat}>
              <Image
                src="/icons/message-circle.svg"
                alt="comment"
                width={14}
                height={14}
                className={styles.likeIcon}
              />
              {countComments}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BuildCard;
