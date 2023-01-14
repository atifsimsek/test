import styles from '../styles/modules/filter.module.scss'
import {BiSearch} from "react-icons/bi"
const Filter = () => {
  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Job List</h2>

      <div className={styles["filter-container"]}>
        <div className={styles["input-box"]}>
          <BiSearch size={20} className={styles.icon}/>
          <input type="text" />
          <label>Search Job</label>
        </div>

        <select>
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="regular">Regular</option>
          <option value="trivial">Trivial</option>
        </select>

        <span>3/3</span>

      </div>

    </section>
  )
}

export default Filter