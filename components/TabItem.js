"use client"

import { useRouter } from "next/navigation"
import styles from "../css/tabitem.module.css"

export default function TabItem(props) {
  const router = useRouter()

  const handleClick = () => {
    props.fetchPosts(props.name)
    props.setActive(props.name)
    router.refresh()
  }

  return (
    <div className={`${styles.tabItem} ${props.active ? `${styles.currentItem}` : " "}`} key={props.key} onClick={() => handleClick()}>
      {props.name}
    </div>
  );
}
