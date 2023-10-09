'use client'

import { useState } from 'react'
import styles from '../css/tablinks.module.css'
import TabItem from './TabItem'

export default function TabLinks({ categories, fetchPosts }) {
    const [activeChild, setActiveChild] = useState('All')

    return (
        <div className={styles.tabLinks}>
            <TabItem key={0} fetchPosts={fetchPosts} setActive={setActiveChild} name='All' active={activeChild === 'All'} />
            {categories.map((category) => (
                <TabItem key={category.id} fetchPosts={fetchPosts} setActive={setActiveChild} name={category.name} active={activeChild === category.name} />
            ))}
        </div>
    )
}
