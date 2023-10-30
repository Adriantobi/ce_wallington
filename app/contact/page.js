import LinkItem from '@/components/LinkItem'
import nested from '../../css/nested.module.css'
import contact from '../../css/contact.module.css'
import FormInput from '@/components/FormInput'
import ButtonLink from '@/components/ButtonLink'

export default function Contact() {
  return (
    <main className={`${nested.main} ${contact.main}`}>
        <div className={nested.bodyHeader}>
            <h1 className={nested.pageTitle}>Contact Us</h1>
            <ul className={nested.navList}>
                <li className={nested.navListItem}><LinkItem link='/' name='Home' /></li>
                <li className={nested.navListItem}><LinkItem link='/connect' name='Let’s Connect' /></li>
                <li className={`${nested.navListItem} ${nested.current}`}>Contact</li>
            </ul>
        </div>

        <div className={contact.content}>
            <div className={contact.colLeft}>
                <div className={contact.contactInfoWrapper}>
                    <p>
                        We desire to connect with our community and congregation, so please feel free to reach out to us with any questions, thoughts, needs, or prayer requests. A staff member will reach back as soon as possible to connect.
                    </p>

                    <div className={contact.contactInfo}>
                        <h2>Give us a call directly</h2>
                        <a href='#'>075-8522-8412</a>
                    </div>
                </div>
            </div>
            <div className={contact.colRight}>
                <form className={contact.contactForm}>
                    <FormInput title="First Name" placeholder="First Name" required={true} />
                    <FormInput title="Last Name" placeholder="Last Name" required={true} />
                    <FormInput title="Email Address" placeholder="Email" required={true} type='email' />
                    <FormInput title="Phone Number" placeholder="000-000-0000" type='tel' />
                    <FormInput title="Message" placeholder="Question, Thought, Feedback etc." required={true} textbox={true} />
                    
                    <ButtonLink name='Submit' link='/connect' filled={true} />
                </form>
            </div>
        </div>
    </main>
  )
}
