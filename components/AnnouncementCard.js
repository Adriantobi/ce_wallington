import styles from '../css/announcementcard.module.css'

import prisma from '@/lib/client'
import ListItem from './ListItem'
import LinkItem from './LinkItem'

export default async function AnnouncementCard() {
  const posts = await prisma.posts.findMany({
    where: {
      featured: false,
    },

    orderBy: {
      id: 'desc',
    },

    take: 3,
  })

  const featuredPosts = await prisma.posts.findMany({
    where: {
      featured: true,
    },
    
    orderBy: {
      id: 'desc',
    },

    take: 1,
  })
  return (
    <div className={styles.announcements}>
        <div className={styles.header}>
            <h3>What’s New</h3>
            <LinkItem link='/news' name='VIEW ALL' />
        </div>

        <div className={styles.newsListWrapper}>
          <ListItem featured={featuredPosts[0].featured} title={featuredPosts[0].title} category={featuredPosts[0].categoryName} news={true} post={featuredPosts[0]} />

          {posts.map((post) => (
            <ListItem key={post.id} featured={post.featured} title={post.title} category={post.categoryName} news={true} post={post} />
          ))}
        </div>
    </div>
  )
}
