import { useState } from "react"
import "./TodoApp.css"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />} ></Route>
                    <Route path="/login" element={<LoginComponent />} ></Route>
                    <Route path="/welcome" element={<WelcomeComponent />} ></Route>
                </Routes>
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
            navigate("/welcome")
        } else {
            console.log("Failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    return (
        <div className="Login">
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
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}