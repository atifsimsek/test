import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from "@reduxjs/toolkit"
import exampleData from "../../data/data"


const getWorks = () => {

    //Control ls
    const localWorks = localStorage.getItem("worksList");
    if (localWorks) {
        return JSON.parse(localWorks)
    }
    else {

        //Get example data
        localStorage.setItem("worksList", JSON.stringify(exampleData))
        return [...exampleData,]
    }
}

const initialState = {
    works: getWorks(),

    selectedWork: {

    }

}

const worksSlice = createSlice({
    name: "works",
    initialState,
    reducers: {
        addWork: {
            reducer: (state, action) => {
                state.works.push(action.payload)

                // Add work in ls
                const worksList = localStorage.getItem("worksList")
                if (worksList) {
                    const worksListArr = JSON.parse(worksList)
                    worksListArr.push({
                        ...action.payload
                    })
                    localStorage.setItem("worksList", JSON.stringify(worksListArr))
                } else {
                    localStorage.setItem("worksList", JSON.stringify([{ ...action.payload }]))
                }

            },
            prepare: ({ name, priority }) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        priority,
                        completed: true,
                        priorityNumber: priority === "urgent" ? 1 : priority === "regular" ? 2 : 3
                    }
                }
            }
        },
        toggleCompleted: (state, action) => {
            const { id, completed } = action.payload
            const index = state.works.findIndex(work => work.id === id)
            state.works[index].completed = completed

            //Change  Completed in ls
            const worksList = localStorage.getItem("worksList")
            if (worksList) {
                const worksListArr = JSON.parse(worksList)
                const index = worksListArr.findIndex(work => work.id === id)
                worksListArr[index].completed = completed
                localStorage.setItem("worksList", JSON.stringify(worksListArr))
            }

        },
        removework: (state, action) => {
            const filterWorks = state.works.filter(work => work.id !== action.payload)
            state.works = filterWorks

            //Remove  work in ls
            const worksList = localStorage.getItem("worksList")
            if (worksList) {
                const worksListArr = JSON.parse(worksList)
                const filterWorks = worksListArr.filter(work => work.id !== action.payload)
                localStorage.setItem("worksList", JSON.stringify(filterWorks))
            }

        },

        addSelectedWork: (state, action) => {
            state.selectedWork = action.payload
        },
        editWork: (state, action) => {
            const { id, priority } = action.payload
            const index = state.works.findIndex(work => work.id === id)
            const priorityNumber = priority === "urgent" ? 1 : priority === "regular" ? 2 : 3
            state.works[index].priority = priority
            state.works[index].priorityNumber = priorityNumber

            //Remove  work in ls
            const worksList = localStorage.getItem("worksList")
            if (worksList) {
                const worksListArr = JSON.parse(worksList)
                const index = worksListArr.findIndex(work => work.id === id)
                const priorityNumber = priority === "urgent" ? 1 : priority === "regular" ? 2 : 3
                worksListArr[index].priority = priority
                worksListArr[index].priorityNumber = priorityNumber
                localStorage.setItem("worksList", JSON.stringify(worksListArr))
            }
        },
        clearWorks: (state) => {
            state.works = [];
            //Clear  works in ls
            localStorage.setItem("worksList", JSON.stringify([]))

        }

    }
});

export const { addWork, toggleCompleted, removeWork, changeEdit, editWork, addSelectedWork, clearWorks } = worksSlice.actions
export const selectSelectedWork = (state) => state.works.selectedWork
export const selectWorks = (state) => state.works.works


export default worksSlice.reducer