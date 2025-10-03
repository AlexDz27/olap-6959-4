import Task from './Task.tsx'
import AddTask from './AddTask.tsx'

// interface TasksGridProps {
//   tasks: ;
// }

function TasksGrid() {
  return (
    <main className="tasks-grid main">
      <section className="tasks-grid__col tasks-grid__col--pending">
        <p className="tasks-grid__col__title">Pending</p>
        <AddTask />
        <ul className="tasks-list">
          <Task title="smth task 1 ts" />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--in-progress">
        <p className="tasks-grid__col__title">In progress</p>
        <ul className="tasks-list">
          <Task title="smth task 2 ts" />
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--done">
        <p className="tasks-grid__col__title">Done</p>
        <ul className="tasks-list">
          <Task title="smth task 3 ts (done)" status="done" />
        </ul>
      </section>
    </main>
  )
}

export default TasksGrid
