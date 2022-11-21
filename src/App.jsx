import React from 'react'
import dayjs from 'dayjs'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'

import AddTask from './Components/Add/AddTask.jsx'
import PlusButton from './Components/PlusButton/PlusButton.jsx'
import { db } from './firebase'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { TfiPencil } from 'react-icons/tfi'
import { GoTrashcan } from 'react-icons/go'

function App() {
  const [toDos, setToDos] = React.useState([])

  // Read data from firebase
  React.useEffect(() => {
    const q = query(collection(db, 'toDos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setToDos(todosArr)
    })
    return () => unsubscribe
  }, [])

  // Temp State
  const [newTask, setNewTask] = React.useState('')
  const [newDesc, setNewDesc] = React.useState('')
  const [newDate, setNewDate] = React.useState(dayjs().format('YYYY-MM-DD'))
  const [newDateEnd, setNewDateEnd] = React.useState(
    dayjs().format('YYYY-MM-DD')
  )

  // Create task \\
  const createTask = async (e) => {
    e.preventDefault(e)
    setOpen(false)
    await addDoc(collection(db, 'toDos'), {
      title: newTask,
      status: false,
    })
    setNewTask('')
    setNewDesc('')
    setNewDate()
  }

  // Change Status \\
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'toDos', todo.id), {
      status: !todo.status,
    })
  }

  // Delete Task \\
  const deleteTask = async(id) => {
    await deleteDoc(doc(db, 'toDos', id))
  }

  // Open Add Box \\
  const [open, setOpen] = React.useState(false)

  return (
    <div className="main">
      <div className="container">
        <h1>ToDo List</h1>
      </div>

      <div className="tasks-count">{toDos.length ? '' : 'No Tasks...'}</div>

      <ul>
        {toDos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <div className={`row ${todo.status ? 'done' : 'active'}`}>
              <span>{todo.title}</span>

              <div className="icons">
                <span onClick={() => toggleComplete(todo)}>
                  <AiOutlineCheckCircle />
                </span>
                <span>
                  <TfiPencil />
                </span>
                <span onClick={() => deleteTask(todo.id)}>
                  <GoTrashcan />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <PlusButton setOpen={setOpen} />
      <AddTask
        toDo={toDos}
        open={open}
        newTask={newTask}
        newDesc={newDesc}
        newDateEnd={newDateEnd}
        newDate={newDate}
        setToDo={setToDos}
        setOpen={setOpen}
        setNewTask={setNewTask}
        setNewDesc={setNewDesc}
        setNewDate={setNewDate}
        setNewDateEnd={setNewDateEnd}
        createTask={createTask}
      />
    </div>
  )
}

export default App
