import Image from 'next/image'

import general from '../../css/general.module.css'
import ListItem from '@/components/ListItem'

export default function Connect() {
  return (
    <main className={general.main}>
      <div className={general.titleContainer}>
        <h1 className={general.pageTitle}>Let’s Connect</h1>
        <h2 className={general.pageIntro}>God created all of us with a need for community.</h2>
      </div>
      <div className={general.bodyContainer}>
        <span className={general.imageWrapper}>
          <div className={general.pageImage}>
            <Image 
              src='https://uploads-ssl.webflow.com/64cacd2631caa034b8470fef/64cacd2631caa034b8471080_UnitedRevival19-116.webp'
              width={500 * 2206/1231}
              height={500}
              alt='Image'
            />
          </div>
        </span>
        <div className={general.pageLinks}>
            <div className={general.pageLinksWrapper}>
              <ListItem featured={false} title='Start Here' subtitle='What to expect, services and location' link='/connect/sundays-with-us' />
              <ListItem featured={false} title='Ways to Serve' subtitle='Serving opportunities, expectations, contacts' link='/connect/ways-to-serve' />
              <ListItem featured={false} title='Prayer Requests' subtitle='We would love to pray for you' link='/about' />
              <ListItem featured={false} title='Contact us' subtitle='Let us chat' link='/contact' />
            </div>
        </div>
      </div>
    </main>
  )
}
