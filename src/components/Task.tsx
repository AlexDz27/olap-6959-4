interface TaskProps {
  text: string;
}

function Task({ text }: TaskProps) {
  return (
    <li className="tasks-list__task" contentEditable>{text}</li>
  )
}

export default Task
