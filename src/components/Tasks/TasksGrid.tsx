import type { TaskI } from './Task'
import TasksColumn from './TasksColumn'

interface TasksGridProps {
  tasks: TaskI[];
}

function TasksGrid({ tasks }: TasksGridProps) {
  const tasksSorted = sortTasks(tasks)

  return (
    <main className="tasks-grid main">
      <TasksColumn status="pending" tasks={tasksSorted.pending} />
      <TasksColumn status="inProgress" tasks={tasksSorted.inProgress} />
      <TasksColumn status="done" tasks={tasksSorted.done} />
    </main>
  )
}

function sortTasks(tasks: TaskI[]) {
  const tasksSorted = {
    pending: tasks.filter(t => t.status === 'pending'),
    inProgress: tasks.filter(t => t.status === 'inProgress'),
    done: tasks.filter(t => t.status === 'done')
  }

  return tasksSorted
}

export default TasksGrid
