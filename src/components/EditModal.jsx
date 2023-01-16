import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editWork, selectSelectedWork } from '../redux/Slice/worksSlice';
import styles from "../styles/modules/modal.module.scss"

const EditModal = ({ open, setOpen }) => {

  const [changedPriority, setChangedPriority] = useState("choose")
  const { id, name } = useSelector(selectSelectedWork)
  const dispatch = useDispatch()


  const handleOk = () => {
    if (changedPriority === "choose") {
      toast.error("Please select priortiy")
    }
    else {
      dispatch(editWork({ id, priority: changedPriority }))
      toast.success("Work edited")
      setOpen(false);
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <>
      <Modal
        title="Edit Work"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Edit"

      >
        <div className={styles["inputs-container"]}>
          <div className={styles["input-box"]}>
            <label htmlFor="">Work Name</label>
            <input value={name} disabled type="text" />
          </div>

          <div className={styles["select-box"]}>
            <label htmlFor="select">
              Priority
            </label>
            <select value={changedPriority} onChange={(e) => { setChangedPriority(e.target.value) }} >
              <option value="choose">Choose</option>
              <option value="urgent">Urgent</option>
              <option value="regular">Regular</option>
              <option value="trivial">Trivial</option>
            </select>
          </div>
        </div>

      </Modal>
    </>
  );
};
export default EditModal;

