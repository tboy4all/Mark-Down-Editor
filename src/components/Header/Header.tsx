import React from 'react'
import './Header.scss'
import { FaRegFile } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='header'>
      <div className='side'>
        <div className='side-btn'>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
      <div className='header-nav'>
        <div className='header-nav-content'>
          <span className='header-nav__heading'>Markdown</span>
          <span>
            <FaRegFile />
          </span>
          <div className='header-nav__document'>
            <label className='doc-name'>Document Name</label>
            <input
              className='input-doc'
              placeholder={'Untitled Document.md'}
              type='text'
            />
          </div>
        </div>
        <div className='header-save'>
          <span className='delete'>
            <RiDeleteBinLine />
          </span>
          <div className='save-changes'>
            <FiSave />
            <span>Save Changes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
