import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredWorks: [

    ],

}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchWork: (state, action) => {
            let tempWorks = []
            const { works, search } = action.payload
            
            tempWorks = works.filter((work) => work.name.toLowerCase().includes(search.toLowerCase()) ||
                work.priority.toLowerCase().includes(search.toLowerCase()))
            state.filteredWorks = tempWorks



        },
        filterWork: (state, action) => {

            const { works, filter } = action.payload
            let tempWorks = []
            if (filter === "all") {
                tempWorks = works.slice().sort((a, b) => a.priorityNumber - b.priorityNumber)
            }
            else if (filter === "t-o") {
                tempWorks = works.slice().sort((a, b) => b.priorityNumber - a.priorityNumber)


            }
            else {
                tempWorks = works.filter((work => work.priority.toLowerCase() === filter))

            }

            state.filteredWorks = tempWorks


        }
    }
});



export const { searchWork, filterWork } = filterSlice.actions
export const filteredWorksSelect = state => state.filter.filteredWorks


export default filterSlice.reducer