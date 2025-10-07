import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import TasksGrid from './components/TasksGrid.tsx'
// TODO: r)
import type { TaskI } from './components/Task.tsx'

const ERR_MSG_TEXT = 'Oops, sorry! Unexpected error occrured when trying to load your tasks.'

// TODO: r
// const tasks: TaskI[] = [
//   {
//     id: 1,
//     title: 'smth task 1 ts (prop)',
//     status: 'pending',
//   },
//   {
//     id: 2,
//     title: 'smth task 2 ts (prop)',
//     status: 'inProgress',
//   },
//   {
//     id: 3,
//     title: 'smth task 3 ts (done) (prop)',
//     status: 'done',
//   },
// ]

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8088')
      .then(response => {
        if (!response.ok) throw new Error('Received bad code response from server')
        return response.json()
      })
      .then(response => {
        console.log(response)  // Leave console.logging intentionally for the reviewer of the app to be able to look into response
        setTasks(response)
      })
      .catch(err => {
        setLoadingError(true)
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="cont loading-message">Loading tasks...</div>
  if (loadingError) return <div className="cont loading-message">{ERR_MSG_TEXT}</div>

  return (
    <div className="cont">
      <Header />
      <TasksGrid tasks={tasks} />
    </div>
  )
}

export default App
