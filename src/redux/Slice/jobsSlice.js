import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from "@reduxjs/toolkit"

const initialState = {
    jobs: [
        {
            id: "1",
            name: "job 1",
            priority: "Trivial",
            completed: true,
        },
        {
            id: "2",
            name: "job 2",
            priority: "Urgent",
            completed: false,


        },
        {
            id: "3",
            name: "job 3",
            priority: "Regular",
            completed: true,

        }
    ],
    selectedJob: {

    }

}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        addJob: {
            reducer: (state, action) => {
                state.jobs.push(action.payload)
            },
            prepare: ({ name, priority }) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        priority,
                        completed: true,
                    }
                }
            }
        },
        toggleCompleted: (state, action) => {
            const { id, completed } = action.payload
            const index = state.jobs.findIndex(job => job.id === id)

            state.jobs[index].completed = completed

        },
        removeJob: (state, action) => {
            const filterJobs = state.jobs.filter(job => job.id !== action.payload)
            state.jobs = filterJobs
        },

        addSelectedJob: (state, action) => {
            state.selectedJob = action.payload
        },
        editJob: (state, action) => {
            const { id, priority } = action.payload
            const index = state.jobs.findIndex(job => job.id === id)
            const str = priority;
            const str2 = str.charAt(0).toUpperCase() + str.slice(1);
            state.jobs[index].priority = str2
        },



    }
});

export const { addJob, toggleCompleted, removeJob, changeEdit, editJob, addSelectedJob } = jobsSlice.actions

export const selectJobs = (state) => state.jobs.jobs
export const selectSelectedJob = (state) => state.jobs.selectedJob


export default jobsSlice.reducer