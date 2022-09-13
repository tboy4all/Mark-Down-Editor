import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteDoc } from '../SideBar/sideBarSlice'
import './DeleteModal.scss'

type ResetModalComponentType = {
  setDeleteOpen: Function
  // isOpen: boolean
}

const DeleteModal: FC<ResetModalComponentType> = ({ setDeleteOpen }) => {
  const currentDocName = useAppSelector((state) => state.header.currentDocName)
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className='modal-wrapper'>
        <div className='modal'>
          <h4 className='modal-header'> Delete this document?</h4>
          <p className='modal-text'>
            Are you sure you want to delete the '{currentDocName}.md' document
            and its contents? This action cannot be reversed.
          </p>
          <button
            className='modal-btn'
            onClick={() =>
              setDeleteOpen(dispatch(deleteDoc({ key: currentDocName })))
            }
          >
            Confirm & Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
