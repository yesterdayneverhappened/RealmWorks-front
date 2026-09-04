import React from 'react';
import BuildCard from '@/entities/builds/ui/BuildCard/BuildCard';

const Page = () => {
  return (
    <div>
      <BuildCard
        title="Build 1"
        author="Author 1"
        imageUrl="/image.jpg"
        categories="Category 1"
        avatarUrl="/image.jpg"
        tags={["Tag 1", "Tag 2"]}
        likes={10}
        countComments={10}
        countDownloads={10}
        isLiked={true}
      />
      <BuildCard
        title="Build 2"
        author="Author 2"
        imageUrl="/image.jpg"
        categories="Category 2"
        avatarUrl="/image.jpg"
        tags={["Tag 3", "Tag 4"]}
        likes={20}
        countComments={20}
        countDownloads={20}
        isLiked={false}
      />
    </div>
  );
}

export default Page;
