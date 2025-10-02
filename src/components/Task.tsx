interface TaskProps {
  text: string;
  status: 'pending' | 'inProgress' | 'done'
}

function Task({ text, status = 'pending' }: TaskProps) {
  return (
    <li className={`task ${status === 'done' ? 'task--done' : ''}`} contentEditable>{text}</li>
  )
}

export default Task
