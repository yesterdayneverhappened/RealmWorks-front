import BuildCard from '../BuildCard/BuildCard';

const mockBuilds = [
  {
    id: '1',
    title: 'Medieval Castle',
    author: 'Steve',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    avatarUrl: 'https://i.pravatar.cc/100?img=1',
    category: 'Medieval',
    tags: ['Castle', 'Fantasy'],
    likes: 124,
    countComments: 18,
    countDownloads: 56,
    isLiked: false,
  },
  {
    id: '2',
    title: 'Japanese Temple',
    author: 'Alex',
    imageUrl: 'https://picsum.photos/600/500?random=2',
    avatarUrl: 'https://i.pravatar.cc/100?img=2',
    category: 'Japanese',
    tags: ['Temple', 'Japan'],
    likes: 248,
    countComments: 32,
    countDownloads: 143,
    isLiked: true,
  },
  {
    id: '3',
    title: 'Cyberpunk City',
    author: 'Builder',
    imageUrl: 'https://picsum.photos/600/350?random=3',
    avatarUrl: 'https://i.pravatar.cc/100?img=3',
    category: 'Sci-Fi',
    tags: ['City', 'Cyberpunk'],
    likes: 89,
    countComments: 12,
    countDownloads: 74,
    isLiked: false,
  },
  {
    id: '4',
    title: 'Cozy Cottage',
    author: 'Notch',
    imageUrl: 'https://picsum.photos/500/600?random=4',
    avatarUrl: 'https://i.pravatar.cc/100?img=4',
    category: 'Nature',
    tags: ['House', 'Cozy'],
    likes: 315,
    countComments: 41,
    countDownloads: 201,
    isLiked: false,
  },
];

export default function BuildsList() {
  return (
    <section>
      <div>
        {mockBuilds.map((build) => (
          <BuildCard
            key={build.id}
            title={build.title}
            author={build.author}
            imageUrl={build.imageUrl}
            avatarUrl={build.avatarUrl}
            categories={build.category}
            tags={build.tags}
            likes={build.likes}
            countComments={build.countComments}
            countDownloads={build.countDownloads}
            isLiked={build.isLiked}
          />
        ))}
      </div>
    </section>
  );
}