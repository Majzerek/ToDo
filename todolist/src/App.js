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

  function handleToggle(id) {
    setNewList(currTask => currTask.map(task => task.id === id ? { ...task, complete: !task.complete } : task))
  }

  function handleDelete(id) {
    setNewList(currTask => currTask.filter(task => task.id !== id)
    )
  }
  return (
    <>
      <Title onSubmit={handleSubmit} onTask={newTask} onNewTask={setNewTask} />

      <div className='todo__list'>
        <div className='todo__list--container'>
          <ul className='todo__list--order'>
            {!newList.length && "No new Task"}
            {newList.map(task =>
              <li className='todo__list--element' key={task.id}>
                <label>
                  <input type='checkbox' onChange={() => handleToggle(task.id)} />
                  <span className='task' style={task.complete ? { color: 'grey', textDecoration: 'line-through' } : {}}>{task.task}</span>
                  <button className='btn btn-delete'onClick={() => handleDelete(task.id)}>Delete</button>
                </label>
              </li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

function Title({ onSubmit, onNewTask, onTask }) {
  return (
    <div className="todo">
      <h1>To Do App for you😄</h1>
      <form className='todo__form' onSubmit={onSubmit}>
        <label>
          <input type='text' value={onTask} onChange={(e) => onNewTask(e.target.value)} />
        </label>
        <button className='btn btn-submit'type='submit'>Add</button>
      </form>
    </div>)
}
