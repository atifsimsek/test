import styles from '.././styles/modules/list.module.scss'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { selectJobs } from '../redux/Slice/jobsSlice'
import Actions, { Completed } from './Actions'

const List = () => {
    const jobs = useSelector(selectJobs)


    return (
        <section className={styles.list}>
            <div className={styles.sticky}>
                <table>
                    <thead >
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Priority</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            jobs.map((job, index) => (
                                <tr
                                    key={job.id}
                                    className={job.completed ? "" : `${styles.completed}`}
                                >
                                    <td>{index + 1}</td>
                                    <td className={styles.name}>{job.name}</td>
                                    <td>{job.priority}</td>
                                    <td>
                                        <Completed id={job.id} completed={job.completed} />
                                    </td>
                                    <Actions />
                                </tr>
                            ))
                        }
                    </tbody>


                    {/* <tr>
                        <td>1</td>
                        <td className={styles.name}>Isim</td>
                        <td>Öncelik</td>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className={styles["btn-box"]}>
                            <button className={styles.btn}><BiEdit className={styles.icon} size={16} /></button>
                            <button className={styles.btn}><AiOutlineDelete className={styles.icon} size={16} /></button>
                        </td>
                    </tr> */}

                </table>
            </div>
        </section>
    )
}

export default List