import styles from '../css/announcementcontainer.module.css'
import prisma from '@/lib/client'
import TabContent from './TabContent'
import TabLinks from './TabLinks'

let contents = await prisma.posts.findMany()

export default async function AnnouncementContainer() {
  const categories = await prisma.category.findMany()
  const posts = await prisma.posts.findMany()

  const fetchPosts = async (title) => {
    'use server'

    if (title === 'All') {
      contents = posts
    }
  
    else {
      const temp = []
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].categoryName === title) {
          temp.push(posts[i]) 
        }
      }
      contents = temp
    }
  }

  return (
    <>
      {fetchPosts('All')}
      <div className={styles.container}>
          <TabLinks categories={categories} fetchPosts={fetchPosts} />
          <TabContent contents={contents}/>
      </div>
    </>
  )
}
