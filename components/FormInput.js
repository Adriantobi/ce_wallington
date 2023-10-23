import styles from '../css/forminput.module.css'

export default function FormInput({title, placeholder, required, textbox, type}) {
  return (
    <div className={styles.FormInput}>
        <label for={title} className={styles.label}>{title} {required ? "*" : ""}</label>
        {textbox ? 
            <textarea className={styles.textarea} name={title} placeholder={placeholder} maxLength='5000' id={title} {...(required ? required : "")} /> : 
            <input className={styles.input} id={title} name={title} type={type ? type : 'text'} maxLength='256' placeholder={placeholder} {...(required ? required : "")} />
        }
    </div>
  )
}
