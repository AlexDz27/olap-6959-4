export interface TaskI {
  id: number;
  title: string;
  status: 'pending' | 'inProgress' | 'done'
}

interface TaskProps {
  task: TaskI
}

function Task({ task }: TaskProps) {
  const { title, status } = task

  return (
    <li className={`task ${status === 'done' ? 'task--done' : ''}`} contentEditable>{title}</li>
  )
}

export default Task
