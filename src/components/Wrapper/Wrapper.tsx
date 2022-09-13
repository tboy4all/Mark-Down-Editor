import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
// import {} from '../Header/headerSlice'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { markdownInput } from '../Header/headerSlice'
import './Wrapper.scss'
import parser from 'html-react-parser'

const Wrapper = () => {
  const showSideBar = useAppSelector((state) => state.header.showSideBar)
  const themebar = useAppSelector((state) => state.header.darkMode)
  const dispatch = useAppDispatch()
  const [preview, setPreview] = React.useState<boolean>(false)
  const markdown = useAppSelector((state) => state.header.processedText)
  const markdownTextContainer = React.useRef<HTMLDivElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(markdownInput(e.target.value))
  }

  return (
    <div className={`grid wrapper ${showSideBar ? 'col-double' : 'col-one'}`}>
      <Header />
      <SideBar />
      <div className={`main`}>
        <div
          className={`markdown-container ${themebar ? 'dark' : ''} ${
            preview === true ? 'hide' : ''
          }`}
        >
          <div className={`main-heading ${themebar ? 'dark-heading' : ''}`}>
            <span>MARKDOWN</span>
            <span onClick={() => setPreview(true)} className='preview-icon'>
              <FiEye />
            </span>
          </div>
          <textarea
            className={`${themebar ? 'dark' : ''}`}
            onChange={onChangeHandler}
          />
        </div>
        <div className='preview'>
          <div className={`main-heading ${themebar ? 'dark-heading' : ''}`}>
            <span>PREVIEW</span>
            {preview ? (
              <span onClick={() => setPreview(false)}>
                <FiEyeOff />
              </span>
            ) : (
              <span onClick={() => setPreview(true)}>
                <FiEye />
              </span>
            )}
          </div>
          <div
            ref={markdownTextContainer}
            className={`preview-content ${themebar ? 'dark-heading' : ''}`}
          >
            {parser(markdown)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
