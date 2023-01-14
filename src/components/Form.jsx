import styles from '../styles/modules/form.module.scss'
import { HiOutlinePlus } from "react-icons/hi"
import { useState } from 'react'

import { addJob, selectJobs } from '../redux/Slice/jobsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
  const [job, setJob] = useState("")
  const [priority, setPriority] = useState("regular")
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob({
      name: job,
      priority: priority,
    }))
  }


  return (
    <section className={styles.form}>

      <form onSubmit={handleSubmit}>
        <div className={styles["form-container"]}>
          <div className={styles["input-box"]}>
            <input value={job} onChange={(e) => { setJob(e.target.value) }} type="text" />
            <label>Job Name</label>
          </div>

          <select onChange={(e) => { setPriority(e.target.value) }} value={priority}>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </select>


          <button
            type='submit'
            className={styles.btn}>
            <HiOutlinePlus className={styles.icon} size={20} />
          </button>
        </div>
      </form>



    </section>
  )
}

export default Form