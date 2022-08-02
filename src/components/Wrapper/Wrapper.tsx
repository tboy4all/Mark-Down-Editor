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
  const theme = useAppSelector((state) => state.header.darkMode)
  const dispatch = useAppDispatch()
  const [preview, setPreview] = React.useState<boolean>(false)
  let markdown = useAppSelector((state) => state.header.processedText)
  const markdownTextContainer = React.useRef<HTMLDivElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // dispatch({
    //     type:'CHANGE INPUT',
    //     payload:e.target.value
    // })

    dispatch(markdownInput(e.target.value))
  }

  return (
    <div className={`grid wrapper ${showSideBar ? 'col-double' : 'col-one'}`}>
      <Header />
      <SideBar />
      <div className={`main`}>
        <div
          className={`markdown-container ${theme ? 'dark' : ''} ${
            preview === true ? 'hide' : ''
          }`}
        >
          <div className={`main-heading ${theme ? 'dark-heading' : ''}`}>
            <span>MARKDOWN</span>
            <span onClick={() => setPreview(true)} className='preview-icon'>
              <FiEye />
            </span>
          </div>
          <textarea
            className={`${theme ? 'dark' : ''}`}
            onChange={onChangeHandler}
          />
        </div>
        <div className='preview'>
          <div className={`main-heading ${theme ? 'dark-heading' : ''}`}>
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
            className={`preview-content ${theme ? 'dark-heading' : ''}`}
          >
            {parser(markdown)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
