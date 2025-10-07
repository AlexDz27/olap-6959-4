import type { TaskI } from './Task.tsx'
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


/**
 * Function for converting words (e.g., statuses) from camelCased strings into strings delimited using delimiter.
 * E.g., we can make kebab-case for CSS classes via hyphen or human readable text via space.
 */
function assembleWords(str: string, delimiter: string): string {
  // Check if the string contains uppercase chars at all. If not, bail and return the string
  let isStringCamelCased = false
  for (const char of str) {
    if (isUppercase(char)) isStringCamelCased = true
  }
  if (!isStringCamelCased) return str

  const pieces = []
  let piece: string[] = []
  for (const char of str) {
    if (isUppercase(char)) {
      pieces.push(piece.join(''))
      piece = [char.toLowerCase()]
    } else {
      piece.push(char)
    }
  }
  pieces.push(piece.join(''))
  
  return pieces.join(delimiter)


  function isUppercase(char: string) {
    return /^[A-Z]$/.test(char)
  }
}
