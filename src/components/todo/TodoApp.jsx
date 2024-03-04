import { useState } from "react"
import "./TodoApp.css"

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent></LoginComponent>
        </div>
    )

}

function LoginComponent() {

    const [username, setUsername] = useState("urke_jov")
    const [password, setPassword] = useState("")

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)


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
        } else {
            console.log("Failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    function SuccessMessageComponent() {
        if (showSuccessMessage) {
            return (
                <div className="SuccessMessage">
                    Authenticated Successfullty
                </div>
            )
        }
        else return null;
    }
    
    function ErrorMessageComponent() {
        if (showErrorMessage) {
            return (
                <div className="ErrorMessage">
                    Authenticated Failed. Please check your credentials.
                </div>
            )
        } else return null;
    }

    return (
        <div className="Login">
            <SuccessMessageComponent></SuccessMessageComponent>
            <ErrorMessageComponent></ErrorMessageComponent>
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