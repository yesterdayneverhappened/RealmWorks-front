import { mainBlockLabels } from "../../constants/mainBlockLabels";
import styles from "./MainBlock.module.scss";

const MainBlock = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>{mainBlockLabels.eyebrow}</span>
        <h1 className={styles.title}>{mainBlockLabels.title}</h1>
        <p className={styles.description}>{mainBlockLabels.description}</p>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.block} />
        <span className={styles.block} />
        <span className={styles.block} />
      </div>
    </section>
  );
};

export default MainBlock;
