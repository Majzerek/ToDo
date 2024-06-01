export function Footer({ list }) {
    return (
        <>
            <footer className='todo'>{!list.length && "Waiting for task's"}</footer>{list.length &&
                <footer className='todo'>Currently you have {list.length} task's to do.</footer>}
        </>
    );
}
