import styles from '.././styles/modules/list.module.scss'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"

const List = () => {
    return (
        <section className={styles.list}>
            <table>
                <tr className={styles.sticky}>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Completed</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Isim</td>
                    <td>Öncelik</td>
                    <td>
                        <input type="checkbox" name="" id="" />
                    </td>
                    <div className={styles["btn-box"]}>
                        <button className={styles.btn}><BiEdit className={styles.icon} size={16} /></button>
                        <button className={styles.btn}><AiOutlineDelete className={styles.icon} size={16} /></button>
                    </div>
                </tr>
             
     


            </table>
        </section>
    )
}

export default List