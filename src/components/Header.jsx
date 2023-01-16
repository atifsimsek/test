import styles from "../styles/modules/header.module.scss"
import BrandIcon from '../assets/Icon'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <BrandIcon size={32} />
        <h2 className={styles.title}>Work Follow App</h2>
      </div>
      <hr />
    </header>
  )
}

export default Header