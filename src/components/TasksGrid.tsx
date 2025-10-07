import Task from './Task.tsx'
import type { TaskI } from './Task.tsx'
import AddTask from './AddTask.tsx'

interface TasksGridProps {
  tasks: TaskI[];
}

function TasksGrid({ tasks }: TasksGridProps) {
  const tasksSorted = sortTasks(tasks)

  return (
    <main className="tasks-grid main">
      <section className="tasks-grid__col tasks-grid__col--pending">
        <p className="tasks-grid__col__title">Pending</p>
        <AddTask />
        <ul className="tasks-list">
          {tasksSorted.pending.length === 0 && <li className="no-tasks-yet">No pending tasks yet</li>}
          {tasksSorted.pending.map(t => <Task task={t} key={t.id} />)}
        </ul>
      </section>

      <section className="tasks-grid__col tasks-grid__col--in-progress">
        <p className="tasks-grid__col__title">In progress</p>
        <ul className="tasks-list">
          {tasksSorted.inProgress.length === 0 && <li className="no-tasks-yet">No in progress tasks yet</li>}
          {tasksSorted.inProgress.map(t => <Task task={t} key={t.id} />)}
        </ul>
      </section>
      
      <section className="tasks-grid__col tasks-grid__col--done">
        <p className="tasks-grid__col__title">Done</p>
        <ul className="tasks-list">
          {tasksSorted.done.length === 0 && <li className="no-tasks-yet">No done tasks yet</li>}
          {tasksSorted.done.map(t => <Task task={t} key={t.id} />)}
        </ul>
      </section>
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
