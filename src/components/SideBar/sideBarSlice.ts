import { createSlice } from '@reduxjs/toolkit'

export type InitialStateType = Record<string, data>
export type data = { markup: string[]; markdown: string[] }
const initialState: InitialStateType = {}

// const initialState: InitialState = {
//   darkMode: false,
// }

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    createNewDoc: (state, action) => {
      state[action.payload.key] = action.payload.data
    },
  },
})

export default sideBarSlice.reducer
export const { createNewDoc } = sideBarSlice.actions
