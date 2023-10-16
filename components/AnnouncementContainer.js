import styles from '../css/announcementcontainer.module.css'
import prisma from '@/lib/client'
import { revalidatePath } from 'next/cache'
import TabContent from './TabContent'
import TabLinks from './TabLinks'

let contents = await prisma.posts.findMany()

export default async function AnnouncementContainer() {
  const categories = await prisma.category.findMany()

  const fetchPosts = async (title) => {
    'use server'

    if (title === 'All') {
      const posts = await prisma.posts.findMany()
      contents = posts
    }
  
    else {
      const posts = await prisma.posts.findMany({
        where: {
          categoryName: title,
        }
      })
      contents = posts
    }

    revalidatePath('/news')
  }

  return (
    <>
      {/* {fetchPosts('All')} */}
      <div className={styles.container}>
          <TabLinks categories={categories} fetchPosts={fetchPosts} />
          <TabContent contents={contents}/>
      </div>
    </>
  )
}
