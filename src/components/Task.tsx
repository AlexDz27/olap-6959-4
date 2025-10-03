export interface TaskI {
  id: number;
  title: string;
  status: 'pending' | 'inProgress' | 'done'
}

interface TaskProps {
  task: TaskI
}

function Task({ task }: TaskProps) {
  return (
    <li className={`task ${task.status === 'done' ? 'task--done' : ''}`} contentEditable>{task.title}</li>
  )
}

export default Task
