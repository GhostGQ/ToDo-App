import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const PlusButton = ({setOpen}) => {
  const visible = () => {
    setOpen(true)
  }
  
  return (
    <button className="add-task" title="Add ToDo" onClick={visible}>
        <AiOutlinePlus />
    </button>
  )
}

export default PlusButton