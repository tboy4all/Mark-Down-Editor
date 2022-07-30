import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './Wrapper.scss'
// import HeaderSlice from '../Header/headerSlice'
// import parser from 'html-react-parser'

const Wrapper = () => {
  const showSideBar = useAppSelector((state) => state.header.showSideBar)
  return (
    <div
      className={`grid wrapper ${showSideBar ? 'col-tripple' : 'col-double'}`}
    >
      <SideBar />
      <Header />
      <div className={`main`}>
        <div className={`markdown-container `}>
          <div className={`main-heading`}>
            <span>MARKDOWN</span>
            <span className='preview-icon'>
              <FiEye />
            </span>
          </div>
          <textarea />
        </div>
        <div className='preview'>
          <div className={`main-heading`}>
            <span>PREVIEW</span>

            <span>
              <FiEyeOff />
            </span>

            <span>
              <FiEye />
            </span>
          </div>
          <div className={`preview-content`}></div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
