"use client"

import styles from "../css/tabitem.module.css"

export default function TabItem(props) {
  const handleClick = () => {
    props.fetchPosts(props.name)
    props.setActive(props.name)
  }

  return (
    <div className={`${styles.tabItem} ${props.active ? `${styles.currentItem}` : " "}`} key={props.key} onClick={() => handleClick()}>
      {props.name}
    </div>
  );
}
