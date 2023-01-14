import styles from '../styles/modules/actions.module.scss'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"

const Actions = () => {
    return (
        <div className={styles["btn-box"]}>
            <button className={styles.btn}><BiEdit className={styles.icon} size={16} /></button>
            <button className={styles.btn}><AiOutlineDelete className={styles.icon} size={16} /></button>
        </div>
    )
}

export default Actions


export const Completed = () => {
    return (
        <input type="checkbox" name="" id="" />
    )
}

