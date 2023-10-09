import styles from '../css/navitem.module.css'

import Link from 'next/link'

export default function NavItem( props ) {
  return (
    <Link href={props.link} onClick={() => {props.close(false)}}>
      <li className={styles.NavItem}>
          <div>{props.name} {props.dropdown ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg> : null}</div>

          <span className={`${styles.colour} ${styles.below}`}></span>

          {/* {props.dropdown ?
              <ul>
                  {props.content?.map((index) => (
                      <li key={index}><Link href={index[1]}>{index[0]}</Link></li>
                  ))}
              </ul>
          : null } */}
      </li>
    </Link>
  )
}
