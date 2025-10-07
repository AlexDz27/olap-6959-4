import type { TaskI } from './Task.tsx'
import { assembleWords } from '../../functions.ts';
import Task from './Task.tsx'
import AddTask from './AddTask.tsx'

interface TasksColumnProps {
  status: TaskI['status'];
  tasks: TaskI[];
}

function TasksColumn({ status, tasks }: TasksColumnProps) {
  const aw = assembleWords

  let modifierClassName = 'tasks-grid__col--' + aw(status, '-')

  return (
    <section className={`tasks-grid__col ${modifierClassName}`}>
      <p className="tasks-grid__col__title">{aw(status, ' ')}</p>
      {status === 'pending' && <AddTask />}
      <ul className="tasks-list">
        {tasks.length === 0 && <li className="no-tasks-yet">No {aw(status, ' ')} tasks yet</li>}
        {tasks.map(t => <Task task={t} key={t.id} />)}
      </ul>
    </section>
  )
}

export default TasksColumn
