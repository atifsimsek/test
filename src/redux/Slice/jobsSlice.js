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
            completed: true,


        },
        {
            id: "3",
            name: "job 3",
            priority: "Regular",
            completed: true,

        }
    ]

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
                        completed: false,
                    }
                }
            }
        },
        toggleCompleted: (state, action) => {
            const { id, completed } = action.payload
            const index = state.jobs.findIndex(item => item.id === id)

            state.jobs[index].completed = completed

        }

    }
});

export const { addJob, toggleCompleted } = jobsSlice.actions

export const selectJobs = (state) => state.jobs.jobs


export default jobsSlice.reducer