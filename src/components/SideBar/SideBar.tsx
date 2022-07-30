import React from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// import { showSideBar } from './sideBarSlice'
import './SideBar.scss'

const SideBar = () => {
  // const toggleSideBar = useAppSelector((state) => state.openSide.showSideBar)
  const dispatch = useAppDispatch()
  const showSideBar = useAppSelector((state) => state.header.showSideBar)
  // if (showSideBar) return null
  return (
    <div className={`sidebar  ${showSideBar ? 'show' : 'hide'}`}>
      <div>
        <p className='sidebar-title'>MY DOCUMENTS</p>
        <button className='open-new'>+New Document</button>
      </div>

      <div className='theme'>
        <span className={`theme-icon`}>
          <FaRegMoon />
        </span>
        <span className={`theme-toggler`}>
          <span></span>
        </span>
        <span className={`theme-icon`}>
          <FiSun />
        </span>
      </div>
    </div>
  )
}

export default SideBar
