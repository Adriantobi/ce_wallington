import Link from 'next/link'

import styles from '../css/buttonlink.module.css'

export default function ButtonLink( props ) {
  return (
    <Link href={props.link} className={styles.link}>
        <div className={`${styles.wrapper} ${ props.filled ? `${styles.filled}` : `${styles.empty}` }`}>
            {props.filled ? <div className={`${styles.colour} ${styles.above}`}></div> : null}
            <span>{props.name}</span>
            {!props.filled ? <div className={`${styles.colour} ${styles.below}`}></div> : null}
        </div>
    </Link>
  )
}
