import styles from '../styles/modules/form.module.scss'
import { HiOutlinePlus } from "react-icons/hi"
import { useState } from 'react'
import { addWork } from '../redux/Slice/worksSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'



const Form = () => {
  const [work, setWork] = useState("")
  const [priority, setPriority] = useState("choose")
  const dispatch = useDispatch();

  //Control the Input
  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z0-9\s]*$/.test(value) && value.length <= 255;
    if (isValid) {
      setWork(value);
    } else {
      toast.error("Value must contain alphanumeric characters and have a length of 255 characters or less.")
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (work === "") {
      toast.error("Please write a valid value")
    }
    else if (priority === "choose") {
      toast.error("Please select priority")
    }
    else {
      e.preventDefault();
      dispatch(addWork({
        name: work,
        priority: priority,
      }))
      
      setWork("")
      setPriority("choose")
      toast.success("Work added")

    }
  }



  return (
    <>
      <section className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-container"]}>
            <div className={styles["input-box"]}>
              <input required value={work} onChange={(e) => { handleInputChange(e) }} type="text" />
              <label>Work Name</label>
            </div>
            <div className={styles["select-box"]}>
              <label htmlFor="select">
                Priority
              </label>
              <select onChange={(e) => { setPriority(e.target.value) }} value={priority}>
                <option value="choose">Choose</option>
                <option value="urgent">Urgent</option>
                <option value="regular">Regular</option>
                <option value="trivial">Trivial</option>
              </select>
            </div>


            <button
              type='submit'
              className={styles.btn}>
              <HiOutlinePlus className={styles.icon} size={20} />
            </button>
          </div>
        </form>



      </section>
    </>
  )
}

export default Form