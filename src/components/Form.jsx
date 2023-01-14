import styles from '../styles/modules/form.module.scss'
import { HiOutlinePlus } from "react-icons/hi"

const Form = () => {
  return (
    <section className={styles.form}>

      <form>
        <div className={styles["form-container"]}>
          <div className={styles["input-box"]}>
            <input type="text" />
            <label>Job Name</label>
          </div>

          <select>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </select>


          <button
            type='submit'
            className={styles.btn}>
            <HiOutlinePlus className={styles.icon} size={20} />
          </button>
        </div>
      </form>



    </section>
  )
}

export default Form