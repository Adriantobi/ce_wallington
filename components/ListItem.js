'use client'

import styles from '../css/listitem.module.css'

import Link from 'next/link'
import AnnouncementModal from './AnnouncementModal'
import { useState } from 'react'

export default function ListItem( props ) {
  const [open, setOpen] = useState(false)

  if (props.link) {
    return (
      <>
        <div className={`${styles.ListItem} ${ props.featured ? `${styles.featuredItem}` : ' ' } ${ props.news ? `${styles.news}` : ' ' }`} key={props.key} onClick={() => setOpen(true)}>
          <Link href={props.link} className={styles.wrapperLink}>
            <div className={styles.itemWrapper}>
                <div className={styles.content}>
                    {props.news ? <div className={`${styles.type} ${ props.featured ? `${styles.featuredType}` : ' ' }`}>{props.featured ? `Featured ${props.category}` : `${props.category}`}</div> : null }
                    <h3 className={styles.title}>{props.title}</h3>
                    {!props.news ? <div className={`${styles.type} ${ props.featured ? `${styles.featuredType}` : ' ' }`}>{props.subtitle}</div> : null }
                </div>

                <span className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
            </div>

            <span className={`${styles.colour} ${ props.featured ? `${styles.featuredColour}` : ' ' } ${ !props.news ? `${styles.darkColour}` : ' ' }`}></span>
          </Link>
        </div>

        { open && props.news ? <AnnouncementModal post={props.post} close={() => setOpen(false)} /> : null }
      </>
    )
  }

  else {
    return (
      <>
        <div className={`${styles.ListItem} ${ props.featured ? `${styles.featuredItem}` : ' ' } ${ props.news ? `${styles.news}` : ' ' }`} key={props.key} onClick={() => setOpen(true)}>
          <div className={styles.itemWrapper}>
              <div className={styles.content}>
                  {props.news ? <div className={`${styles.type} ${ props.featured ? `${styles.featuredType}` : ' ' }`}>{props.featured ? `Featured ${props.category}` : `${props.category}`}</div> : null }
                  <h3 className={styles.title}>{props.title}</h3>
                  {!props.news ? <div className={`${styles.type} ${ props.featured ? `${styles.featuredType}` : ' ' }`}>{props.subtitle}</div> : null }
              </div>

              <span className={styles.arrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
          </div>

          <span className={`${styles.colour} ${ props.featured ? `${styles.featuredColour}` : ' ' } ${ !props.news ? `${styles.darkColour}` : ' ' }`}></span>
        </div>

        { open && props.news ? <AnnouncementModal post={props.post} close={() => setOpen(false)} /> : null }
      </>
    )
  }
}
