import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../components/Header/headerSlice'

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
