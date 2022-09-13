import { createSlice } from '@reduxjs/toolkit'

export type Data = {
  dateCreated: Date
  markup: string[]
  preview: string[]
}

export type InitialStateType = Record<string, Data>

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
    updateDocMarkup: (state, action) => {
      state[action.payload.key] = action.payload.data
    },
    updateDocPreview: (state, action) => {
      state[action.payload.key] = action.payload.data
    },
    deleteDoc: (docState, action) => {
      delete docState[action.payload.key]
    },
  },
})

export default sideBarSlice.reducer
export const { createNewDoc, updateDocMarkup, updateDocPreview, deleteDoc } =
  sideBarSlice.actions
