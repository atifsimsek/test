import { configureStore, combineReducers } from "@reduxjs/toolkit"
import jobsReducer from "./Slice/jobsSlice"
const rootReducer = combineReducers({
    jobs: jobsReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store