import styles from '.././styles/modules/list.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedWork, removeWork, toggleCompleted, clearWorks } from '../redux/Slice/worksSlice'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import EditModal from './EditModal';
import { useState } from 'react';
import { filteredWorksSelect } from '../redux/Slice/filterSlice';
import { toast } from 'react-toastify';


const { confirm } = Modal;


const List = () => {
    const works = useSelector(filteredWorksSelect)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()




    const handleToggle = (id, completed) => {
        dispatch(toggleCompleted({ id, completed: !completed }))
    }

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this work?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(removeWork(id))
                toast.success("work deleted")

            },
            onCancel() {

            },
        });
    };

    const showEditConfirm = (id, name) => {
        setOpen(true)
        dispatch(addSelectedWork({ id, name }))

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
                                works.map((work, index) => (
                                    <tr
                                        key={work.id}
                                        className={work.completed ? "" : `${styles.completed}`}
                                    >
                                        <td>{index + 1}</td>
                                        <td className={styles.name}>{work.name}</td>
                                        <td className={styles.box}  >
                                            <span
                                                style={
                                                    work.priority.toLowerCase() === "urgent"
                                                        ? { backgroundColor: "var(--urgent)" }
                                                        : work.priority.toLowerCase() === "regular" ? { backgroundColor: "var(--regular)" }
                                                            : { backgroundColor: "var(--trivial)" }
                                                }
                                                className={styles.priority}>
                                                {work.priority.toUpperCase()}
                                            </span>
                                        </td>
                                        <td>
                                            <input
                                                checked={!work.completed}
                                                onChange={() => { handleToggle(work.id, work.completed) }}
                                                type="checkbox"
                                            />
                                        </td>
                                        <td className={styles["btn-box"]}>
                                            <button
                                                onClick={() => { showEditConfirm(work.id, work.name) }}
                                                className={styles.btn}>
                                                <BiEdit className={styles.icon} size={16} />
                                            </button>
                                            <button
                                                onClick={() => { showDeleteConfirm(work.id) }}
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
                <button onClick={()=>{dispatch(clearWorks())}} className={styles.clear}>Clear All</button>
            </section>
        </>
    )
}

export default List