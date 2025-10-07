import type { TaskI } from './Task.tsx'
import Task from './Task.tsx'
import AddTask from './AddTask.tsx'

interface TasksColumnProps {
  status: TaskI['status'];
  tasks: TaskI[];
}

function TasksColumn({ status, tasks }: TasksColumnProps) {
  let endingClassName
  if (status === 'pending') {
    endingClassName = 'tasks-grid__col--pending'
  } else if (status === 'inProgress') {
    endingClassName = 'tasks-grid__col--in-progress'
  } else if (status === 'done') {
    endingClassName = 'tasks-grid__col--done'
  }

  return (
    <section className={`tasks-grid__col ${endingClassName}`}>
      <p className="tasks-grid__col__title">{status}</p>
      {status === 'pending' && <AddTask />}
      <ul className="tasks-list">
        {tasks.length === 0 && <li className="no-tasks-yet">No {assembleWords(status, ' ')} tasks yet</li>}
        {tasks.map(t => <Task task={t} key={t.id} />)}
      </ul>
    </section>
  )
}

/**
 * Function for converting words (e.g., statuses) from camelCased strings into strings delimited using delimiter.
 * E.g., we can make kebab-case for CSS classes via hyphen or human readable text via space.
 */
function assembleWords(camelCaseStr: string, delimiter: string): string {
  // Check if the string contains uppercase chars at all. If not, bail and return the string
  let continueFlag = false
  for (const char of camelCaseStr) {
    if (isUppercase(char)) continueFlag = true
  }

  if (!continueFlag) return camelCaseStr

  if (continueFlag) {
    const pieces = []

    let piece = []
    for (const char of camelCaseStr) {
      piece.push(char)
      if (isUppercase(char)) {
        pieces.push(piece.join(''))
        piece = []
      }
    }
    console.log(pieces)

    return '123'
  }


  function isUppercase(char: string) {
    return /^[A-Z]$/.test(char)
  }
}

export default TasksColumn
