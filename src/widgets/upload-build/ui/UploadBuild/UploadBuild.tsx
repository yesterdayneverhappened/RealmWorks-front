"use client";

import { useState } from "react";
import { uploadBuildLabels } from "../../constants/uploadBuildLabels";
import BuildDetailsCard from "../BuildDetailsCard/BuildDetailsCard";
import BuildPreviewCard from "../BuildPreviewCard/BuildPreviewCard";
import PhotosUploadCard from "../PhotosUploadCard/PhotosUploadCard";
import PublishChecklist from "../PublishChecklist/PublishChecklist";
import SchematicUploadCard from "../SchematicUploadCard/SchematicUploadCard";
import UploadBuildHero from "../UploadBuildHero/UploadBuildHero";
import UploadFormActions from "../UploadFormActions/UploadFormActions";
import styles from "./UploadBuild.module.scss";

const UploadBuild = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    uploadBuildLabels.selectedCategory,
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    uploadBuildLabels.suggestedTags.slice(0, 2),
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((currentTag) => currentTag !== tag)
        : [...current, tag],
    );
  };

  return (
    <main className={styles.page}>
      <UploadBuildHero />

      <div className={styles.layout}>
        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <BuildDetailsCard
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            onCategoryChange={setSelectedCategory}
            onTagToggle={toggleTag}
          />
          <PhotosUploadCard />
          <SchematicUploadCard />
          <UploadFormActions />
        </form>

        <aside className={styles.sidebar}>
          <BuildPreviewCard selectedCategory={selectedCategory} />
          <PublishChecklist />
        </aside>
      </div>
    </main>
  );
};

export default UploadBuild;
