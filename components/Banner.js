'use client'

import { useState, useEffect } from 'react'

import styles from '../css/banner.module.css'
import LinkItem from './LinkItem'

export default function Banner() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const display = () => {
        if(window.innerWidth < 480) {
            setShow(false)
        }

        else {
            setShow(true)
        }
    }

    window.onload = display()
    window.addEventListener('resize', display)
  },[])

  return (
    <>
      { show ? <div className={styles.Banner}><LinkItem name='JOIN US' link='/connect/sundays-with-us' />&nbsp;THIS SUNDAY FROM 12:30PM - 2:00PM IN PERSON!</div> : null }
    </>
  )
}
