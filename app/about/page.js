import Image from 'next/image'

import general from '../../css/general.module.css'
import ListItem from '@/components/ListItem'

export default function About() {
  return (
    <main className={general.main}>
      <div className={general.titleContainer}>
        <h1 className={general.pageTitle}>Who We Are</h1>
        <h2 className={general.pageIntro}>Our mission is to proclaim and display the reconciling work of Christ.</h2>
      </div>
      <div className={general.bodyContainer}>
        <span className={general.imageWrapper}>
          <div className={general.pageImage}>
            <Image 
              src='https://uploads-ssl.webflow.com/64cacd2631caa034b8470fef/64cacd2631caa034b8471045_CottageGrove_webbanners-30.webp'
              width={500 * 2206/1231}
              height={500}
              alt='Image'
            />
          </div>
        </span>
        <div className={general.pageLinks}>
            <div className={general.pageLinksWrapper}>
              <ListItem featured={false} title='What We Believe' subtitle='Our Doctrine' link='/about/what-we-believe' />
              <ListItem featured={false} title='Mission and Values' subtitle='Spreading the gospel' link='/about/missions-values' />
              <ListItem featured={false} title='Our Team' subtitle='Pastors and staff' link='/news' />
            </div>
        </div>
      </div>
    </main>
  )
}