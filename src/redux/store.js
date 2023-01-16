import { configureStore, combineReducers } from "@reduxjs/toolkit"
import worksReducer from "./Slice/worksSlice"
import filterReducer from "./Slice/filterSlice"
const rootReducer = combineReducers({
    works: worksReducer,
    filter: filterReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store