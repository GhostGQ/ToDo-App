import React from 'react'
import dayjs from 'dayjs'

const AddTask = ({ toDo, open, newTask, newDesc, newDateEnd, newDate, setToDo, setOpen, setNewTask, setNewDesc, setNewDate, setNewDateEnd, createTask}) => {
  let currentDate = dayjs().format('YYYY-MM-DD')


  return (
    <div className={`modal ${open ? 'visible' : ''}`}>
      <h3>Add New Task</h3>
      <form onSubmit={createTask}>
        <div className="title">
          <input
            type="text"
            required
            placeholder="Title"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="desc">
          <span htmlFor="description">Description</span>
          <textarea
            cols="15"
            rows="5"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="date">
          <div className="start-date">
            <span>Start Date</span>
            <input
              type="date"
              min={'2022/01/01'}
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className="end-date">
            <span>End Date</span>
            <input
              type="date"
              min={currentDate}
              value={newDateEnd}
              onChange={(e) => setNewDateEnd(e.target.value)}
            />
          </div>
        </div>
        <button className="confirm-task" onClick={createTask}>Create ToDo</button>
      </form>
    </div>
  )
}

export default AddTask
