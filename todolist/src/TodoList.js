export function TodoList({ list, onToggle, onDelete }) {
    return (
        <>
            <div className='rotate'></div>
            <div className='rotate rotate1'></div>

            <div className='todo__list'>
                <div className='todo__list--container'>
                    <ul className='todo__list--order'>
                        {!list.length && <span className="empty">No new Task</span>}
                        {list.map(task => <li className='todo__list--element' key={task.id}>
                            <label>
                                <input type='checkbox' onChange={() => onToggle(task.id)} />
                                <span className='task' style={task.complete ? { color: 'grey', textDecoration: 'line-through' } : {}}>{task.task}</span>
                                <button className='btn btn-delete' onClick={() => onDelete(task.id)}>Delete</button>
                            </label>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}
