import LinkItem from '@/components/LinkItem'
import Image from 'next/image'
import nested from '../../../css/nested.module.css'
import belief from '../../../css/belief.module.css'

export default function Beliefs() {
  return (
    <main className={nested.main}>
        <div className={nested.bodyHeader}>
            <h1 className={nested.pageTitle}>What We Believe</h1>
            <ul className={nested.navList}>
                <li className={nested.navListItem}><LinkItem link='/' name='Home' /></li>
                <li className={nested.navListItem}><LinkItem link='/about' name='Who We Are' /></li>
                <li className={`${nested.navListItem} ${nested.current}`}>What We Believe</li>
            </ul>
        </div>

        <div className={nested.pageCallOut}>
            <div className={nested.cardIntro}>
                <p>Our beliefs are the foundation of our faith, the bedrock of our church, and the scripture based teachings we desire to pass along to our congregation, community and the next generation.</p>
            </div>

            <div className={nested.callOutImageWrapper}>
                <div className={`${belief.callOutImage} ${nested.callOutImage}`}></div>
            </div>
        </div>
    </main>
  )
}
