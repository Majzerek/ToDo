export function Title({ onSubmit, onNewTask, onTask }) {
    return (
        <div className="todo">
            <h1>To Do App for you😄</h1>
            <form className='todo__form' onSubmit={onSubmit}>
                <label>
                    <input type='text' value={onTask} onChange={(e) => onNewTask(e.target.value)} />
                </label>
                <button className='btn btn-submit' type='submit'>Add</button>
            </form>
        </div>);
}
