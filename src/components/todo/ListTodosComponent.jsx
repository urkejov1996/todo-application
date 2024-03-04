


export default function ListTodosComponennt() {

    const today = new Date()

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())


    const todos = [
        { id: 1, decription: 'Learn AWS', done: false, targetDate: targetDate },
        { id: 2, decription: 'Learn Full Stack Development', done: false, targetDate: targetDate },
        { id: 3, decription: 'Learn Docker', done: false, targetDate: targetDate }
    ]
    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className="table">

                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.decription}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}
