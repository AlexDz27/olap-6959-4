function AddTask() {
  return (
    <input
      onKeyDown={handleAddingTask}
      placeholder="What needs to be done?"
      className="add-task-input"
    />
  )

  function handleAddingTask(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      console.log('enter pressed. todo: handle adding task')
    }
  }
}

export default AddTask
