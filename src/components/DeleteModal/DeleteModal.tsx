import React, { FC } from 'react'
import './DeleteModal.scss'

type ResetModalComponentType = {
  setDeleteOpen: Function
  // isOpen: boolean
}

const DeleteModal: FC<ResetModalComponentType> = ({ setDeleteOpen }) => {
  return (
    <div>
      <div className='modal-wrapper'>
        <div className='modal'>
          <h4 className='modal-header'> Delete this document?</h4>
          <p className='modal-text'>
            Are you sure you want to delete the &apos; &apos; document and its
            contents? This action cannot be reversed.
          </p>
          <button className='modal-btn' onClick={() => setDeleteOpen(false)}>
            Confirm & Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
