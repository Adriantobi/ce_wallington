import Image from 'next/image'
import LinkItem from '@/components/LinkItem'
import nested from '../../../css/nested.module.css'
import sundays from '../../../css/sundays.module.css'

export default function Sundays() {
  return (
    <main  className={nested.main}>
        <div className={nested.bodyHeader}>
            <h1 className={nested.pageTitle}>Sundays With Us</h1>
            <ul className={nested.navList}>
                <li className={nested.navListItem}><LinkItem link='/' name='Home' /></li>
                <li className={nested.navListItem}><LinkItem link='/connect' name='Let’s Connect' /></li>
                <li className={`${nested.navListItem} ${nested.current}`}>What We Believe</li>
            </ul>
        </div>

        <div className={nested.pageCallOut}>
            <div className={nested.cardIntro}>
                <p>Sunday mornings are a time for our local church to gather together and celebrate all that God has done and is doing in our midst. Come and join us!</p>
            </div>
            
            <div className={nested.callOutImageWrapper}>
                <div className={`${sundays.callOutImage} ${nested.callOutImage}`}></div>
            </div>
        </div>
    </main>
  )
}
