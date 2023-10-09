import Link from 'next/link'

import styles from '../css/linkitem.module.css'

export default function LinkItem( props ) {
  return (
    <Link href={props.link} className={styles.linkWrapper}>
        <div className={`${styles.LinkItem} ${props.footer ? `${styles.blank}` : ' ' } ${props.underlined ? `${styles.underlined}` : ' ' }`}>{props.name}</div>
    </Link>
  )
}
