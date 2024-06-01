import { useEffect, useState } from 'react';
import { Title } from './Title';
import { TodoList } from './TodoList';
import { Footer } from './Footer';

export default function App() {

  const [newTask, setNewTask] = useState('');

  const [newList, setNewList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (!localValue) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(newList))
  }, [newList])

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
    
    <div>
      <Title onSubmit={handleSubmit} onTask={newTask} onNewTask={setNewTask} />
      <TodoList newTask={newTask} onDelete={handleDelete} onToggle={handleToggle} list={newList} />
      <Footer list={newList} />

    </div>
  );
}


