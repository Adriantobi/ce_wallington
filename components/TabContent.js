'use client'

import ListItem from './ListItem'
import styles from '../css/tabcontent.module.css'
import { useEffect } from 'react'

export default function TabContent({ contents }) {
    useEffect(() => {
        // Re-render the component whenever the props change.
    }, [contents]);

    if (contents.length !== 0) {    
        return (
            <div className={styles.tabContent}>
                {contents.map((post) => (
                    <ListItem key={post.id} featured={false} title={post.title} category={post.categoryName} news={true} post={post} />
                ))}
            </div>
        )
    }

    else {
        return (
            <div className={styles.empty}>
                <div>Looks like we are fresh out of news for this category.</div>
            </div>
        )
    }
}
