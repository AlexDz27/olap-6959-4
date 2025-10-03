export interface Task {
  title: string;
  status: 'pending' | 'inProgress' | 'done'
}

function Task({ title, status = 'pending' }: Task) {
  return (
    <li className={`task ${status === 'done' ? 'task--done' : ''}`} contentEditable>{title}</li>
  )
}

export default Task
