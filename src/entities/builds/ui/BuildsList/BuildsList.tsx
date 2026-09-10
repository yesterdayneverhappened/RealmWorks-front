import { mockBuilds } from "../../constants/mockBuilds";
import BuildCard from "../BuildCard/BuildCard";
import styles from "./BuildList.module.scss";

export default function BuildsList() {
  return (
    <section>
      <div className={styles.buildList}>
        {mockBuilds.slice(0, 8).map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </section>
  );
}
