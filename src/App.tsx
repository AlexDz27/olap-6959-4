import Header from './components/Header.tsx'
import TasksGrid from './components/TasksGrid.tsx'
import type { Task as TaskType} from './components/Task.tsx'

const tasks: TaskType[] = [
  {
    id: 1,
    title: 'smth task 1 ts (prop)',
    status: 'pending',
  },
  {
    id: 2,
    title: 'smth task 2 ts (prop)',
    status: 'inProgress',
  },
  {
    id: 3,
    title: 'smth task 3 ts (done) (prop)',
    status: 'done',
  },
]

function App() {
  return (
    <div className="cont">
      <Header />
      <TasksGrid tasks={tasks} />
    </div>
  )
}

export default App
