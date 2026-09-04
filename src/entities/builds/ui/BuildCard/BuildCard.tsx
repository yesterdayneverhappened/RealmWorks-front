import Image from "next/image";
import styles from "./BuildCars.module.scss";

interface BuildCardProps {
  title: string;
  author: string;
  imageUrl: string;
  categories: string;
  avatarUrl: string;
  tags: string[];
  likes: number;
  countComments: number;
  countDownloads: number;
  isLiked: boolean;
}

const BuildCard = ({
  title,
  imageUrl,
  author,
  categories,
  avatarUrl,
  tags,
  likes,
  countComments,
  countDownloads,
  isLiked
}: BuildCardProps) => {
  return (
    <article className={styles.buildCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>{categories}</div>
          <div>{likes}</div>
        </div>
        <div className={styles.infoblock}>
          <div>{title}</div>
          <div>{author}</div>
          <div>{tags.join(", ")}</div>
        </div>
        <div className={styles.footer}>
          <div>{countComments}</div>
          <div>{countDownloads}</div>
        </div>
      </div>
    </article>
  );
}

export default BuildCard;
