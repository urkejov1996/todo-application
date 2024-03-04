import { useState } from "react"
import "./TodoApp.css"
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom"

export default function TodoApp() {
    return (
        <div className="TodoApp">

            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponent />} ></Route>
                    <Route path="/login" element={<LoginComponent />} ></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />} ></Route>
                    <Route path="/todos" element={<ListTodosComponennt />} ></Route>
                    <Route path="/logout" element={<LogoutComponent />} ></Route>
                    <Route path="*" element={<ErrorComponent />} ></Route>

                </Routes>
                <FooterComponent />
            </BrowserRouter>

        </div>
    )

}

function LoginComponent() {

    const [username, setUsername] = useState("urke_jov")
    const [password, setPassword] = useState("")

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();



    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }


    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === "urke_jov" && password === "dummy") {
            console.log("Success")
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log("Failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    return (
        <div className="Login">
            <h1>Time to Login!</h1>

            {showSuccessMessage && <div className="SuccessMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="ErrorMessage">Authentication Failed.
                Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label >Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} ></input>
                </div>
                <div>
                    <label >Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}




function WelcomeComponent() {

    const { username } = useParams()

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
        </div>

    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working hard</h1>
            <div>
                Apologies for the 404
            </div>
        </div>
    )
}

function ListTodosComponennt() {

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

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/urkejov1996">Portfolio</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}
function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                Footer
            </div>
        </footer>

    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>Your are logged out!</h1>
            <div>
                See you again!
            </div>
        </div>
    )
}
