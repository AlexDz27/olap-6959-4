function AddTask() {
  return (
    <input
      className="add-task-input"
      placeholder="What needs to be done?"
      onKeyDown={handleAddingTask}
    />
  )

  function handleAddingTask(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      console.log('enter pressed')
    }
  }
}

export default AddTask
