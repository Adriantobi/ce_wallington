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
                <p>The mission of Christ Embassy is to raise generations of men and women who will come into their inheritance to fulfill God&apos;s dream.</p>
            </div>

            <div className={nested.callOutImageWrapper}>
                <div className={`${mission.callOutImage} ${nested.callOutImage}`}></div>
            </div>
        </div>
    </main>
  )
}
