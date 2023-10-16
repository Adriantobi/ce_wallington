import LinkItem from '@/components/LinkItem'
import nested from '../../../css/nested.module.css'
import mission from '../../../css/mission.module.css'

export default function Mission() {
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
                <p>The mission of Cottage Grove Church has everything to do with the desire to see the Gospel spread by word and deed throughout the city of Des Moines. In our local church context, we will be committed to this mission until Christ returns.</p>
            </div>

            <div className={nested.callOutImageWrapper}>
                <div className={`${mission.callOutImage} ${nested.callOutImage}`}></div>
            </div>
        </div>
    </main>
  )
}
