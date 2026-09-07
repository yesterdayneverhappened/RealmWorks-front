import Tag from '../Tag/Tag';
import styles from './TagsList.module.scss';

interface TagsListProps {
  tags: string[];
}

const TagsList = ({ tags }: TagsListProps) => {
  if (!tags.length) {
    return null;
  }

  return (
    <div className={styles.list}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
};

export default TagsList;
