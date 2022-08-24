import React, { useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme } from '../Header/headerSlice'
import { createNewDoc } from './sideBarSlice'
import './SideBar.scss'

const SideBar = () => {
  const [showNewDocInput, setShowNewDocInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const showSideBar = useAppSelector((state) => state.header.showSideBar)
  const theme = useAppSelector((state) => state.header.darkMode)

  // type DataType = InitialStateType
  type CreateNewDocType = {
    key: string
    data: { markup: string[]; markdown: string[] }
  }
  const createNewDocVar: CreateNewDocType = {
    key: inputValue,
    data: { markup: [], markdown: [] },
  }
  return (
    <div className={`sidebar  ${!showSideBar ? 'show' : ''}`}>
      <div>
        <p className='sidebar-title'>MY DOCUMENTS</p>
        <button className='open-new' onClick={() => setShowNewDocInput(true)}>
          +New Document
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(createNewDoc(createNewDocVar))
            setShowNewDocInput(false)
          }}
        >
          <input
            className={`sidebar-input ${showNewDocInput ? '' : 'hidden'}`}
            type='text'
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>

      <div className='theme'>
        <span className={`theme-icon ${theme ? 'white' : ''}`}>
          <FaRegMoon />
        </span>
        <span
          onClick={() => dispatch(toggleTheme())}
          className={`theme-toggler`}
        >
          <span className={`switch ${!theme ? '' : 'dark-mode'}`}></span>
        </span>
        <span className={`theme-icon ${theme ? '' : 'white'}`}>
          <FiSun />
        </span>
      </div>
    </div>
  )
}

export default SideBar
