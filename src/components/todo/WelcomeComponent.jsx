import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { retrieveHelloWorldBean } from "./api/HelloWorldApiService"

export default function WelcomeComponent() {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorld() {
        // use axios to call REST API
        axios.get('http://localhost:8080/hello-world').
            then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function callHelloWorldBean() {
        retrieveHelloWorldBean()
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanUp for hello-world-bean'))
    }

    function successfullResponse(response) {
        console.log(response)
        setMessage(JSON.stringify(response.data))
        // setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorld}>Call Hello World REST API</button>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldBean}>Call Hello World Bean REST API</button>
            </div>
            <div>
                <div className="text-info">{message}</div>
            </div>
        </div>

    )
}
