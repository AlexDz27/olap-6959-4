function AddTask() {
  return (
    <input
      onKeyDown={handleAddingTask}
      onChange={handleShowingEnterIcon}
      
      placeholder="What needs to be done?"
      className="add-task-input"
    />
  )

  function handleAddingTask(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      console.log('enter pressed. todo: handle adding task')
    }
  }

  function handleShowingEnterIcon(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target.value.length >= 1) {
      console.log('more than one!!! should show enter icon')
    }
  }
}

export default AddTask
