import { useState } from 'react';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [newList, setNewList] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();

    if (!newTask) return;

    setNewTask(e.target.value)

    setNewList(currTask => {
      return [...currTask, { id: crypto.randomUUID(), task: newTask, complete: false }]

    })

    setNewTask('')
  }

  function handleDelete(id) {
    setNewList(currTask => currTask.filter(task => task.id !== id)
    )
  }
  return (
    <>
      <div className="ToDo">
        <h1>To Do App for you😄</h1>
        <form className='todo__form' onSubmit={handleSubmit}>
          <label>
            <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
      <div className='todo__list'>
        <div className='todo__list--container'>
          <ul>
            {!newList.length && "No new Task"}
            {newList.map(task =>
              <li key={task.id}>
                <label>
                  <input type='checkbox' />
                  <span className='task'>{task.task}</span>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </label>
              </li>)}
          </ul>
        </div>
      </div>
    </>
  );
}


