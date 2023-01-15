import styles from '.././styles/modules/list.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedJob, changeEdit, editJob, removeJob, selectEdit, selectJobs, toggleCompleted } from '../redux/Slice/jobsSlice'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import EditModal from './EditModal';
import { useState } from 'react';

const { confirm } = Modal;


const List = () => {
    const jobs = useSelector(selectJobs)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleToggle = (id, completed) => {
        dispatch(toggleCompleted({ id, completed: !completed }))
    }

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this job?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(removeJob(id))

            },
            onCancel() {

            },
        });
    };

    const showEditConfirm = (id, name) => {
        setOpen(true)
        dispatch(addSelectedJob({ id, name }))

    }

    return (
        <>
            {<EditModal open={open} setOpen={setOpen} />}
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
                                            <input
                                                checked={!job.completed}
                                                onChange={() => { handleToggle(job.id, job.completed) }}
                                                type="checkbox"
                                            />
                                        </td>
                                        <td className={styles["btn-box"]}>
                                            <button
                                                onClick={() => { showEditConfirm(job.id, job.name) }}
                                                className={styles.btn}>
                                                <BiEdit className={styles.icon} size={16} />
                                            </button>
                                            <button
                                                onClick={() => { showDeleteConfirm(job.id) }}
                                                className={styles.btn}>
                                                <AiOutlineDelete className={styles.icon} size={16} />
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default List