import styles from '../css/announcementmodal.module.css'
import ButtonLink from './ButtonLink'
import LinkItem from './LinkItem'

export default function AnnouncementModal({ post, close }) {
  return (
    <div className={styles.Wrapper}>
        <div className={styles.cardModal}>
            <div className={styles.header}>
                <div className={styles.details}>
                    <div className={styles.type}>{post.categoryName}</div>
                    <div className={styles.title}>{post.title}</div>
                </div>

                <div className={styles.close} onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
            </div>

            <div className={styles.content}>
                {post.paragraph1 || post.header1 ?
                    <section className={styles.contentSection}>
                        {post.header1 ? <p className={styles.sectionHeader}>{post.header1}</p> : null}
                        {post.paragraph1 ? <p className={styles.sectionParagraph}>{post.paragraph1}</p> : null}
                    </section>
                : null}

                {post.paragraph2 || post.header2 ?
                    <section className={styles.contentSection}>
                        {post.header2 ? <p className={styles.sectionHeader}>{post.header2}</p> : null}
                        {post.paragraph2 ? <p className={styles.sectionParagraph}>{post.paragraph2}</p> : null}
                    </section>
                : null}
            </div>

            <div className={styles.links}>
                {post.button1title && post.button1link ? <ButtonLink name={post.button1title} link={post.button1link} filled={true} /> : null}
                {post.button2title && post.button2link ? <ButtonLink name={post.button2title} link={post.button2link} filled={true} /> : null}
                {post.link1title && post.link1link ? <LinkItem link={post.link1} name={post.link1title} /> : null}
                {post.link2title && post.link2link ? <LinkItem link={post.link2} name={post.link2title} /> : null}
            </div>
        </div>

        <div className={styles.modalOverlay} onClick={close}></div>
    </div>
  )
}
