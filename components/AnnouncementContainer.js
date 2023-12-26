'use client'

import { useEffect, useState } from 'react'
import styles from '../css/announcementcontainer.module.css'
import TabContent from './TabContent'
import TabLinks from './TabLinks'

export default function AnnouncementContainer( { posts, categories } ) {
  const [contents, setContents] = useState(posts)

  const fetchPosts = async (title) => {
    if (title === 'All') {
      setContents(posts)
    }
  
    else {
      const temp = []
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].categoryName === title) {
          temp.push(posts[i]) 
        }
      }
      setContents(temp)
    }
  }

  useEffect(() => {
    fetchPosts('All')
  }, [])

  return (
    <>
      <div className={styles.container}>
          <TabLinks categories={categories} fetchPosts={fetchPosts} />
          <TabContent contents={contents}/>
      </div>
    </>
  )
}
