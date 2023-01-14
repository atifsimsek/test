import styles from '../styles/modules/actions.module.scss'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { toggleCompleted } from '../redux/Slice/jobsSlice'

const Actions = () => {
    return (
        <td className={styles["btn-box"]}>
            <button className={styles.btn}><BiEdit className={styles.icon} size={16} /></button>
            <button className={styles.btn}><AiOutlineDelete className={styles.icon} size={16} /></button>
        </td>
    )
}

export default Actions


export const Completed = ({ id, completed }) => {

    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleCompleted({ id, completed: !completed }))
    }




    return (
        <input
            onChange={handleToggle}
            type="checkbox"
        />
    )
}

