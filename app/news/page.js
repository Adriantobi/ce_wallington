import LinkItem from '@/components/LinkItem'
import nested from '../../css/nested.module.css'
import news from '../../css/news.module.css'
import AnnouncementContainer from '@/components/AnnouncementContainer'

export default function News() {
  return (
    <main className={`${nested.main} ${news.main}`}>
        <div className={nested.bodyHeader}>
            <h1 className={nested.pageTitle}>News</h1>
            <ul className={nested.navList}>
                <li className={nested.navListItem}><LinkItem link='/' name='Home' /></li>
                <li className={`${nested.navListItem} ${nested.current}`}>News</li>
            </ul>
        </div>

        <div className={news.containerCentered}>
          <p>Our goal is to always keep our congregation and community informed of upcoming events, important announcements and ways that we can serve to impact the Kingdom. Check back often to see what is going on in the church and stay informed!</p>
        </div>

        <AnnouncementContainer />
    </main>
  )
}
