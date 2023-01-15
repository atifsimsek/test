import styles from '../styles/modules/actions.module.scss'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { toggleCompleted, removeJob } from '../redux/Slice/jobsSlice'
import { useState } from 'react'

const Actions = ({ id,showDeleteConfirm }) => {
    const [modal2Open, setModal2Open] = useState(false);

    const dispatch = useDispatch();

    const edit = () => {
        setModal2Open(!modal2Open)
    }


    return (
        <td className={styles["btn-box"]}>
            <button onClick={showDeleteConfirm} className={styles.btn}><BiEdit className={styles.icon} size={16} /></button>
            <button
                onClick={() => { dispatch(removeJob(id)) }}
                className={styles.btn}>
                <AiOutlineDelete className={styles.icon} size={16} />
            </button>
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
            checked={!completed}
            onChange={handleToggle}
            type="checkbox"
        />
    )
}

