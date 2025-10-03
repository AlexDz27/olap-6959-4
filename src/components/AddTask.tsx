import { useState } from 'react'
import '../assets/icons/enter-icon.svg'

function AddTask() {
  const [text, setText] = useState('')

  return (
    <div className="add-task-cont">
      <input
        onKeyDown={handleAddingTask}
        onChange={(evt) => setText(evt.target.value)}
        
        value={text}
        placeholder="What needs to be done?"
        className="add-task-input"
      />

      {text.length >= 1 && <span className="add-task__enter-icon">k</span>}
    </div>
  )

  function handleAddingTask(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      console.log('enter pressed. todo: handle adding task')
    }
  }
}

export default AddTask
