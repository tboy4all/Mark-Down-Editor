import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  showSideBar: boolean
}

const initialState: InitialState = {
  showSideBar: false,
}

const sideBarSlice = createSlice({
  name: 'openSide',
  initialState,
  reducers: {},
})

export default sideBarSlice.reducer
// export const { showSideBar } = sideBarSlice.actions
