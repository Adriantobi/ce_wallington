'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from '../css/navmenu.module.css'
import { useState, useEffect } from 'react'
import NavItem from './NavItem'

export default function NavMenu() {
  const [size, setSize] = useState(50)
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const menuMobile = () => {
        if(window.innerWidth < 992) {
          if (window.innerWidth < 480) {
            setSize(40)
          }
            
          setMobile(true)
        }

        else {
            setMobile(false)
            setSize(50)
        }
    }

    window.onload = menuMobile()
    window.addEventListener('resize', menuMobile)
  },[])

  return (
    <div className={styles.Nav}>
        <div className={styles.Logo}>
          <Link href='/'>
              <Image 
                  src="/LW Logo.png"
                  width={size}
                  height={size/(480/414)}
                  alt="Loveworld Logo"
                  quality={100}
              />
          </Link>
        </div>

        { !mobile || open ? 
          <div className={styles.navMenu}>
            <ul>
              <NavItem name='Who We Are' dropdown={false} link='/about' close={setOpen} />
              <NavItem name='Let’s Connect' dropdown={false} link='/connect' close={setOpen} />
              <NavItem name='Resources' dropdown={false} link='/resources' close={setOpen} />
              <NavItem name='What’s New' dropdown={false} link='/news' close={setOpen} />
            </ul>
          </div>
        : null }

        <div className={styles.menuOptions}>
          <div className={styles.search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>

          { mobile && !open ? 
            <div className={styles.mobileMenu} onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          : null }

          { mobile && open ?
            <div className={styles.closeMenu} onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          : null }
        </div>
    </div>
  )
}
