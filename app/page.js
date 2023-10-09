import styles from '../css/home.module.css'
import hero from '../css/hero.module.css'
import mission from '../css/mission.module.css'

import ButtonLink from '@/components/ButtonLink'
import AnnouncementCard from '@/components/AnnouncementCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Mission />
    </main>
  )
}

function Hero() {
  return (
    <div className={hero.Hero}>
      <div className={hero.bgImage}>
        <div className={`${hero.gradient} ${hero.top}`}></div>
        {/* <Image
          src='https://loveworldnews.org/upload/post/image/2020/03/D7pi765281_large.jpg'
          width={0}
          height={0}
          sizes="100vw"
          // layout='fill'
          objectFit='contain'
          alt='Hero Image'
          style={{ width: '100%', height: 'auto' }}
        /> */}
        <div className={`${hero.gradient} ${hero.bottom}`}></div>
      </div>

      <div className={hero.heroContent}>
        <div className={hero.heroTop}>
          <span className={hero.churchName}>Christ Embassy Wallington</span>
          <div className={hero.heroText}>
            Taking God’s <br/> Divine Presence <br/> to Every Nation 
            <div className={hero.cta}>
              <div className={hero.ctaButtons}>
                <ButtonLink name='I’m New' link='/connect' filled={true} />
                <ButtonLink name='Resources' link='/resources' filled={false} />
              </div>
            </div>  
          </div>
        </div>

        <div className={hero.heroBottom}>
          <div className={hero.announcementWrapper}>
            <AnnouncementCard />
          </div>
          <span className={hero.joinUs}>Join us this Sunday from 12:30PM - 2:00PM! <br/> If it’s your first time, <br/> let us know you’re coming!</span>
        </div>
      </div>
    </div>
  )
}

function Mission() {
  return (
    <div className={mission.mission}>
      <span>The mission of Christ Embassy is to raise generations of men and women who will come into their inheritance as we teach the word of God so that they will fulfil God’s dream.</span>
    </div>
  )
}
