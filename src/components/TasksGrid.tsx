import Task from './Task.tsx'

function TasksGrid() {
  return (
    <main className="tasks-grid main">
      <section className="tasks-grid__col tasks-grid__col--pending">
        <p className="tasks-grid__col__title">Pending</p>
        <ul className="tasks-list">
          <Task text="smth task 1 ts" />
          <li className="tasks-list__task">Smth task 2</li>
          <li className="tasks-list__task">Smth task 3</li>
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--in-progress">
        <p className="tasks-grid__col__title">In progress</p>
        <ul className="tasks-list">
          <li className="tasks-list__task">Smth task 1</li>
        </ul>
      </section>
      <section className="tasks-grid__col tasks-grid__col--done">
        <p className="tasks-grid__col__title">Done</p>
        <ul className="tasks-list">
          <li className="tasks-list__task tasks-list__task--done">Smth task 1</li>
        </ul>
      </section>
    </main>
  )
}

export default TasksGrid
