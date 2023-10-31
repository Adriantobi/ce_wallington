'use client'

import styles from '../css/footer.module.css'

import Image from 'next/image'
import { useState } from 'react'
import LinkItem from './LinkItem'

export default function Footer() {
  const [size, setSize] = useState(50)

  return (
    <div className={styles.FooterWrapper}>
      <span className={styles.footerCardWrapper}>
        <div className={styles.footerCtaCard}>
          <h2 className={styles.header}>Christ Embassy Wallington</h2>
          <div className={styles.footerCtaLinks}>
            <LinkItem link='/about' name='Who We Are' />
            <LinkItem link='/connect' name='Let’s Connect' />
            <LinkItem link='/news' name='What’s New' />
          </div>
        </div>
      </span>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <div className={styles.Logo}>
              <Image 
                  src="/LW Logo White.png"
                  width={size}
                  height={size/(480/414)}
                  alt="Loveworld Logo"
                  quality={100}
              />
          </div>
          <div className={styles.footerLinks}>
            <ul className={styles.footerLinksStack}>
              <li>Phoenix Leisure Centre,</li>
              <li>Community Hall,</li> 
              <li>Mollison Drive,</li>
              <li>Wallington SM6 9NZ</li>
              <br />
              <li>075-8522-8412</li>
              <li><LinkItem link='/contact' name='Contact Us' footer={true} underlined={true} /></li>
            </ul>
            <br />
            <ul className={styles.footerLinksStack}>
              <li><LinkItem link='/about/what-we-believe' name='What We Believe' footer={true} /></li>
              <li><LinkItem link='/missions-values' name='Missions & Values' footer={true} /></li>
            </ul>
            <ul className={styles.footerLinksStack}>
              <li><LinkItem link='/connect/sundays-with-us' name='Start Here' footer={true} /></li>
              <li><LinkItem link='/connect/ways-to-serve' name='Ways to Serve' footer={true} /></li>
              <li><LinkItem link='/news' name='Kids' footer={true} /></li>
              <li><LinkItem link='/news' name='Youth' footer={true} /></li> 
              <li><LinkItem link='/news' name='Connection Groups' footer={true} /></li>
              <li><LinkItem link='/news' name='The Salt Company' footer={true} /></li>
            </ul>
            <ul className={styles.footerLinksStack}>
              <li><LinkItem link='https://pcdl.co/welcome' name='Sermons' footer={true} /></li>
              <li><LinkItem link='/news' name='News' footer={true} /></li>
            </ul>
          </div>
          <div className={styles.footerSocials}></div>
        </div>
      </footer>
    </div>
  )
}
