import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  showSideBar: boolean
  darkMode: boolean
  markdownText: string
  processedText: string
}

const initialState: InitialState = {
  showSideBar: false,
  darkMode: true,
  markdownText: '',
  processedText: '',
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar
    },
  },
})

export default headerSlice.reducer
export const { toggleSideBar } = headerSlice.actions
