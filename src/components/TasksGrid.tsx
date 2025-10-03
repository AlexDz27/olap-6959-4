import Task from './Task.tsx'
import type { Task as TaskType } from './Task.tsx'
import AddTask from './AddTask.tsx'

interface TasksGridProps {
  tasks: TaskType[];
}

function TasksGrid({ tasks }: TasksGridProps) {
  return (
    <main className="tasks-grid main">
      <section className="tasks-grid__col tasks-grid__col--pending">
        <p className="tasks-grid__col__title">Pending</p>
        <AddTask />
        <ul className="tasks-list">
          <Task id={tasks[0].id} title={tasks[0].title} status={tasks[0].status} />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--in-progress">
        <p className="tasks-grid__col__title">In progress</p>
        <ul className="tasks-list">
          <Task id={tasks[1].id} title={tasks[1].title} status={tasks[1].status} />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--done">
        <p className="tasks-grid__col__title">Done</p>
        <ul className="tasks-list">
          <Task id={tasks[2].id} title={tasks[2].title} status={tasks[2].status} />
        </ul>
      </section>
    </main>
  )
}

export default TasksGrid
