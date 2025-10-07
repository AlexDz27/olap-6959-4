import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import TasksGrid from './components/Tasks/TasksGrid.tsx'

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
        // Leave console.logging intentionally for the reviewer of the app to be able to look into response
        console.log('Downloaded tasks:', response)
        setTasks(response)
      })
      .catch(err => {
        setLoadingError(true)
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="cont loading-message">Loading tasks...</div>
  if (loadingError) return <div className="cont loading-message">Oops, sorry! Unexpected error occrured when trying to load your tasks.</div>

  return (
    <div className="cont">
      <Header />
      <TasksGrid tasks={tasks} />
    </div>
  )
}

export default App
