import Image from 'next/image'
import LinkItem from '@/components/LinkItem'
import nested from '../../../css/nested.module.css'
import sundays from '../../../css/sundays.module.css'

export default function Serve() {
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
                <p>As a part of the church family, we encourage everyone to join in meeting the needs of others by serving the church. There are tons of areas to serve, from serving people, to physical service, to volunteering with arts or tech.</p>
            </div>
            
            <div className={nested.callOutImageWrapper}>
                <div className={`${sundays.callOutImage} ${nested.callOutImage}`}></div>
            </div>
        </div>
    </main>
  )
}
