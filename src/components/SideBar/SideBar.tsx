import React, { useState, useRef } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { AiOutlineFile } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme, updateTab } from '../Header/headerSlice'
import { createNewDoc, updateDocPreview } from './sideBarSlice'
import './SideBar.scss'

const SideBar = () => {
  const [showNewDocInput, setShowNewDocInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const showSideBar = useAppSelector((state) => state.header.showSideBar)
  const theme = useAppSelector((state) => state.header.darkMode)
  const documents = useAppSelector((state) => state.sidebar)

  // type DataType = InitialStateType
  type CreateNewDocType = {
    key: string
    data: {
      dateCreated: Date
      // markup: string[]
      // preview: string[]
    }
  }
  const createNewDocVar: CreateNewDocType = {
    key: inputValue,
    data: {
      dateCreated: new Date(),
      // markup: [],
      // preview: [],
    },
  }

  const handleCreateNewDoc = () => {
    setShowNewDocInput(true)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    inputValue && dispatch(createNewDoc(createNewDocVar))
    setShowNewDocInput(false)
    setInputValue('')
  }

  const addToTabBar = (listItem: string) => {
    dispatch(updateTab(listItem))
    // dispatch(updateDocPreview(documents[listItem].preview))
  }

  // const updateRenderedMarkup = (docName: string, savedDocMarkup: string[]) => {
  //   addToTabBar(docName)
  //   dispatch(updateDocPreview(savedDocMarkup))
  // }

  const currentDocName = useAppSelector((state) => state.header.currentDocName)
  const docList = Array.from(Object.keys(documents))
    .reverse()
    .map((item) => {
      const date = documents[item].dateCreated.toString().slice(0, 10)
      return (
        <li
          key={item}
          className='doc'
          onClick={() => dispatch(updateTab(currentDocName))}
        >
          <div className='icon-centered dark-box'>{<AiOutlineFile />}</div>
          <div className='doc-details'>
            <p className='name-title'>{date}</p>
            <p className='doc-name'>{item}.md</p>
          </div>
        </li>
      )
    })
  const textInputRef = useRef<HTMLInputElement>(null)
  return (
    <div className={`sidebar  ${!showSideBar ? 'show' : ''}`}>
      <div>
        <p className='sidebar-title'>MY DOCUMENTS</p>
        <button className='open-new' onClick={handleCreateNewDoc}>
          +New Document
        </button>
        <form onSubmit={handleSubmit}>
          <input
            ref={textInputRef}
            className={`sidebar-input new-name ${
              showNewDocInput ? '' : 'hidden'
            }`}
            type='text'
            value={inputValue}
            placeholder='Type name here and press Enter'
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div className='documents'>
          <ul onClick={() => setShowNewDocInput(false)} className=''>
            {docList.map((listItem) => listItem)}
          </ul>
        </div>
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
