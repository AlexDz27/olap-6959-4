import Task from './Task.tsx'
import type { TaskI } from './Task.tsx'
import AddTask from './AddTask.tsx'

interface TasksGridProps {
  tasks: TaskI[];
}

function TasksGrid({ tasks }: TasksGridProps) {
  return (
    <main className="tasks-grid main">
      <section className="tasks-grid__col tasks-grid__col--pending">
        <p className="tasks-grid__col__title">Pending</p>
        <AddTask />
        <ul className="tasks-list">
          <Task task={tasks[0]} />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--in-progress">
        <p className="tasks-grid__col__title">In progress</p>
        <ul className="tasks-list">
          <Task task={tasks[1]} />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--done">
        <p className="tasks-grid__col__title">Done</p>
        <ul className="tasks-list">
          <Task task={tasks[2]} />
        </ul>
      </section>
    </main>
  )
}

export default TasksGrid
