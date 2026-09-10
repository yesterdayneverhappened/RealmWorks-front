import styles from "./CategoryBadge.module.scss";

interface CategoryBadgeProps {
  label: string;
}

const CategoryBadge = ({ label }: CategoryBadgeProps) => {
  return <span className={styles.badge}>{label}</span>;
};

export default CategoryBadge;
