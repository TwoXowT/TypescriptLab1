import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from "../reducers/taskListReducer";
import tagSlice from "../reducers/tagsReducer";


export const store = configureStore({
    reducer: {
        taskListReducer: taskListReducer,
        tagSlice: tagSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch