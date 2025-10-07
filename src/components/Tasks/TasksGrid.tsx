import type { TaskI } from './Task'
import { sortTasks } from '../../functions';
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

export default TasksGrid
