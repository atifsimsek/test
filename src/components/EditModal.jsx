import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editJob, selectSelectedJob } from '../redux/Slice/jobsSlice';
import styles from "../styles/modules/modal.module.scss"

const EditModal = ({ open, setOpen }) => {

  const [changedPriority, setChangedPriority] = useState("")
  const { id, name } = useSelector(selectSelectedJob)
  const dispatch = useDispatch()


  const handleOk = () => {
    dispatch(editJob({ id, priority: changedPriority }))
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <>
      <Modal
        title="Edit Job"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Edit"

      >
        <div className={styles["inputs-container"]}>
          <div className={styles["input-box"]}>
            <input value={name} disabled type="text" />
          </div>
          <select value={changedPriority} onChange={(e) => { setChangedPriority(e.target.value) }} >
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </select>
        </div>

      </Modal>
    </>
  );
};
export default EditModal;












{/* <section className={styles.modal}>
<form action="">
  <input disabled={true} type="text" />
  <select onChange={() => { }} >
    <option value="urgent">Urgent</option>
    <option value="regular">Regular</option>
    <option value="trivial">Trivial</option>
  </select>
  <button>Cancel</button>
  <button>Edit</button>
</form>

</section> */}