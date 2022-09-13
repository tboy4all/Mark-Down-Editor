import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import parser from '../../Utils/parser'

// markdownText:action.payload,
// processedText:parser(action.payload),

type InitialState = {
  showSideBar: boolean
  darkMode: boolean
  markdownText: string
  processedText: string
  currentDocName: string
}

const initialState: InitialState = {
  showSideBar: false,
  darkMode: true,
  markdownText: '',
  processedText: '',
  currentDocName: '',
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
    markdownInput: (state, action: PayloadAction<string>) => {
      state.markdownText = action.payload
      state.processedText = parser(action.payload)
    },
    updateTab: (state, action) => {
      state.currentDocName = action.payload
    },
  },
})

export default headerSlice.reducer
export const { toggleSideBar, toggleTheme, markdownInput, updateTab } =
  headerSlice.actions
