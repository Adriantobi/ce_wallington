import Image from 'next/image'

import styles from '../../css/resources.module.css'
import general from '../../css/general.module.css'
import ListItem from '@/components/ListItem'

export default function Resources() {
  return (
    <main className={general.main}>
      <div className={general.titleContainer}>
        <h1 className={general.pageTitle}>Our Resources</h1>
        <h2 className={general.pageIntro}>Capturing, casting and remembering our mission to make disciples of Christ.</h2>
      </div>
      <div className={general.bodyContainer}>
        <span className={general.imageWrapper}>
          <div className={general.pageImage}>
            <Image 
              src='https://uploads-ssl.webflow.com/64cacd2631caa034b8470fef/64cacd2631caa034b84710f5_7.png'
              width={500 * 2206/1231}
              height={500}
              alt='Image'
            />
          </div>
        </span>
        <div className={general.pageLinks}>
            <div className={general.pageLinksWrapper}>
              <ListItem featured={false} title='Sermons' subtitle='Video, audio and transcripts' link='/about' />
              <ListItem featured={false} title='Live Events' subtitle='Watch live worship, sermons and prayer' link='/connect' />
              <ListItem featured={false} title='Download App' subtitle='Watch live worship, sermons and prayer' link='/news' />
            </div>
        </div>
      </div>
    </main>
  )
}
