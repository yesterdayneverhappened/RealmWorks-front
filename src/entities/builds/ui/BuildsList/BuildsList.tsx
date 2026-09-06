import BuildCard from '../BuildCard/BuildCard';
import styles from './BuildList.module.scss'

const mockBuilds = [
  {
    id: '1',
    title: 'Medieval Castle',
    author: 'Steve',
    imageUrl: '/image.jpg',
    avatarUrl: '/image.jpg',
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
    imageUrl: '/image.jpg',
    avatarUrl: '/image.jpg',
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
    imageUrl: '/image.jpg',
    avatarUrl: '/image.jpg',
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
    imageUrl: '/image.jpg',
    avatarUrl: '/image.jpg',
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
      <div className={styles.buildList}>
        {...mockBuilds.map((build) => (
          <BuildCard
            key={build.id}
            title={build.title}
            author={build.author}
            imageUrl={build.imageUrl}
            avatarUrl={build.avatarUrl}
            category={build.category}
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