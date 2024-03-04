import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function LoginComponent() {

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