import styles from '../styles/modules/filter.module.scss'
import { BiSearch } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { filteredWorksSelect, filterWork, searchWork } from '../redux/Slice/filterSlice'
import { selectWorks } from '../redux/Slice/worksSlice'

const Filter = () => {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const works = useSelector(selectWorks)
  const filteredWorks = useSelector(filteredWorksSelect)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchWork({ works, search }))
  }, [search, works, dispatch])

  useEffect(() => {
    dispatch(filterWork({ works, filter }))
  }, [works, filter, dispatch])



  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Work List</h2>

      <div className={styles["filter-container"]}>
        <div className={styles["input-box"]}>
          <BiSearch size={20} className={styles.icon} />
          <input required value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" />
          <label>Search Work</label>
        </div>
        <div className={styles["select-box"]}>
          <label htmlFor="select">
            Priority
          </label>
          <select value={filter} onChange={(e) => { setFilter(e.target.value) }}>
            <option value="all">All</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
            <option value="t-o">Trivial to Urgent</option>
          </select>
        </div>

        <span>{filteredWorks.length}/{works.length}</span>

      </div>

    </section>
  )
}

export default Filter