import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../components/Header/headerSlice'
import sidebarReducer from '../components/SideBar/sideBarSlice'

const store = configureStore({
  reducer: {
    header: headerReducer,
    sidebar: sidebarReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
